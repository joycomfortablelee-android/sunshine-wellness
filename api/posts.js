// =========================================================
// 선샤인 웰니스 — 여행 게시판 API (간단형 / 로그인 없음)
// ---------------------------------------------------------
// 저장소: Upstash Redis (REST). Vercel Marketplace에서
// Redis(KV) 스토어를 프로젝트에 연결하면 아래 환경변수가
// 자동으로 주입됩니다. 별도 패키지 설치 없이 fetch로 호출.
//   - KV_REST_API_URL / KV_REST_API_TOKEN            (Vercel KV)
//   - UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (Upstash 직접)
// 둘 중 어떤 이름으로 들어와도 동작하도록 처리.
// =========================================================

const KEY = 'board:posts';   // 사용자 글을 담는 Redis 리스트 키
const MAX = 1000;            // 최근 글 최대 보관 개수

function getRedisEnv() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token };
}

async function redis(command) {
  const { url, token } = getRedisEnv();
  if (!url || !token) throw new Error('Redis not configured');
  const r = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error('Redis request failed: ' + r.status);
  const data = await r.json();
  return data.result;
}

// 사용자 입력은 신뢰할 수 없으므로 HTML 특수문자를 모두 이스케이프(XSS 방지)
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async (req, res) => {
  try {
    // ---- 목록 조회 ----
    if (req.method === 'GET') {
      let raw = [];
      try {
        raw = (await redis(['LRANGE', KEY, '0', '-1'])) || [];
      } catch (e) {
        // 저장소 미연결 시에도 사이트가 깨지지 않도록 빈 목록 반환
        return res.status(200).json({ posts: [] });
      }
      const posts = raw
        .map((s) => { try { return JSON.parse(s); } catch { return null; } })
        .filter(Boolean);
      return res.status(200).json({ posts });
    }

    // ---- 글 등록 ----
    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
      if (!body || typeof body !== 'object') body = {};

      const title = (body.title || '').toString().trim();
      if (!title) return res.status(400).json({ error: '제목을 입력해주세요.' });

      const author = esc((body.author || '').toString().trim()).slice(0, 40) || '익명';
      const rawContent = (body.content || '').toString().trim();
      // 줄바꿈을 문단/<br>로 변환하여 안전하게 렌더링
      const safeContent =
        '<p>' +
        esc(rawContent).slice(0, 5000).replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>') +
        '</p>';

      const now = new Date();
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');

      const post = {
        id: Date.now(),                 // 타임스탬프 → 샘플글(1~8)과 충돌 없음
        title: esc(title).slice(0, 200),
        author,
        content: safeContent,
        destination: '미정',
        date: `${now.getFullYear()}-${mm}-${dd}`,
        views: 0,
        user: true,
      };

      try {
        await redis(['LPUSH', KEY, JSON.stringify(post)]);
        await redis(['LTRIM', KEY, '0', String(MAX - 1)]);
      } catch (e) {
        return res.status(503).json({ error: '저장소가 아직 연결되지 않았습니다.' });
      }
      return res.status(200).json({ post });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (e) {
    return res.status(500).json({ error: 'Server error' });
  }
};
