const fs = require('fs');
let s = fs.readFileSync('C:/Users/PC/sunshine-wellness/script.js', 'utf8');
s = s.replace(/\r\n/g, '\n');

// ── 새 About 페이지 섹션들 ────────────────────────────────────────────────
const newSections = `
  // 1. Hero
  const sec1 = \`
    <section class="ab-section" style="background:#fff;padding:72px 40px 64px;text-align:center;">
      <div style="max-width:640px;margin:0 auto;">
        <p class="ab-eyebrow" style="color:#3B6259;">Sunshine Wellness</p>
        <h1 class="ab-h1">가치있는 당신의 인생<br/>제 3막을 함께합니다</h1>
        <p class="ab-body" style="color:#777;max-width:460px;margin:0 auto;">신중년의 배움과 성장,<br/>몸과 마음의 균형을 지원하는<br/>맞춤형 웰니스 여행 전문 여행사입니다.</p>
        <div class="ab-stats" style="margin-top:52px;display:flex;justify-content:center;align-items:center;">
          <div class="ab-stats-item" style="text-align:center;padding:0 36px;">
            <span style="display:block;font-size:30px;font-weight:800;color:#1a2e2a;line-height:1;">9</span>
            <span class="ab-eyebrow" style="color:#999;margin-top:8px;margin-bottom:0;">전문 프로그램</span>
          </div>
          <div class="ab-stats-sep" style="width:1px;height:32px;background:#e0e0e0;"></div>
          <div class="ab-stats-item" style="text-align:center;padding:0 36px;">
            <span style="display:block;font-size:30px;font-weight:800;color:#1a2e2a;line-height:1;">100%</span>
            <span class="ab-eyebrow" style="color:#999;margin-top:8px;margin-bottom:0;">맞춤형 투어</span>
          </div>
          <div class="ab-stats-sep" style="width:1px;height:32px;background:#e0e0e0;"></div>
          <div class="ab-stats-item" style="text-align:center;padding:0 36px;">
            <span style="display:block;font-size:30px;font-weight:800;color:#1a2e2a;line-height:1;">부산</span>
            <span class="ab-eyebrow" style="color:#999;margin-top:8px;margin-bottom:0;">로컬 전문</span>
          </div>
        </div>
      </div>
    </section>\`

  // 2. Who We Are
  const sec2 = \`
    <section class="ab-section" style="background:#fff;padding:80px 40px;">
      <div class="ab-who-grid" style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;">
        <div>
          <p class="ab-eyebrow" style="color:#3B6259;">Who We Are</p>
          <h2 class="ab-h2">단순한 여행을 넘어,<br/>인생의<br/>동반자가 되겠습니다</h2>
        </div>
        <div>
          <p class="ab-body" style="margin-bottom:18px;">선샤인 웰니스는 여행이 단순한 휴식이 아니라 인생의 의미를 찾고 성장하는 시간이 될 수 있다고 믿습니다.</p>
          <p class="ab-body">부산의 자연·문화·역사와 깊이 만나는 경험이 삶에 새로운 활력을 불어넣어 줍니다. 웰니스와 문화 체험을 결합한 독창적인 프로그램으로 몸과 마음의 균형을 되찾도록 돕겠습니다.</p>
          <blockquote style="margin-top:28px;padding:18px 22px;background:#f5f5f3;border-left:3px solid #1a2e2a;border-radius:0 8px 8px 0;">
            <p class="ab-caption" style="font-weight:600;color:#1a2e2a;font-style:italic;">"여행의 모든 순간이 의미 있고 가치 있게 완성되도록, 선샤인 웰니스는 진심 어린 동반자가 되겠습니다."</p>
          </blockquote>
        </div>
      </div>
    </section>\`;

  // 3. For You
  const forYouCards = [
    ['지속적인 성장', '은퇴 후에도 배움을 멈추지 않고, 새로운 경험으로 지적·정서적 성장을 이어가고 싶은 분께 맞춤 여정을 제안합니다.'],
    ['삶의 균형 회복', '오랜 시간 타인을 위해 살아온 분들이 자신을 위한 시간을 되찾고, 몸과 마음의 균형을 회복하는 여행입니다.'],
    ['의미의 재발견', '인생 3막을 어떻게 살아갈지 고민하는 분들과 부산의 깊은 이야기 속에서 새로운 방향을 찾아갑니다.'],
    ['의미 있는 인연', '같은 가치를 공유하는 동반자들과 함께 걷고 이야기하며, 서로의 경험을 나누는 소규모 그룹 여행입니다.'],
  ].map(([t, d], i) => \`
    <div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:24px 20px;">
      <span class="ab-eyebrow" style="color:rgba(255,255,255,0.35);margin-bottom:12px;display:block;">0\${i + 1}</span>
      <h3 style="font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;line-height:1.4;">\${t}</h3>
      <p class="ab-caption" style="color:rgba(255,255,255,0.6);">\${d}</p>
    </div>\`).join('');

  const sec3 = \`
    <section class="ab-section" style="background:url('images/beach-landscape-sea-coast-horizon-boardwalk-796287-pxhere.com.jpg') center/cover no-repeat;padding:80px 40px;position:relative;">
      <div style="position:absolute;inset:0;background:rgba(10,30,40,0.54);"></div>
      <div style="max-width:900px;margin:0 auto;position:relative;">
        <p class="ab-eyebrow" style="color:rgba(255,255,255,0.55);">For You</p>
        <h2 class="ab-h2" style="color:#fff;margin-bottom:10px;">40~60대 신중년을 위해<br/>설계된 여행</h2>
        <p class="ab-body" style="color:rgba(255,255,255,0.72);margin-bottom:44px;">시간과 여유가 생긴 지금, 진정한 나를 찾는 여정을 시작해보세요.</p>
        <div class="ab-for-you-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">\${forYouCards}</div>
      </div>
    </section>\`;

  // 4. Our Promise
  const promiseCards = [
    ['01', '즐길거리', '배움과 여가가 함께하는 여행', '역사·문화·예술·자연을 깊이 탐방하는 웰니스 여행. 단순 관광이 아닌 진정한 체험으로 설계합니다.'],
    ['02', '먹거리', '건강한 부산의 맛', '여행 중 건강을 지키는 로컬 음식과 건강 간식으로 몸이 활기차게 여정을 이어갈 수 있도록 돕습니다.'],
    ['03', '일거리', '교육 및 일자리 연계', '여행 이후에도 삶이 이어지도록, 교육과 일자리 연계 서비스로 사회와 연결된 삶을 지원합니다.'],
  ].map(([n, t, tag, d]) => \`
    <div style="background:#fff;border-radius:14px;padding:28px 22px;border-top:3px solid #1a2e2a;box-shadow:0 2px 14px rgba(0,0,0,0.06);">
      <span style="display:block;font-size:28px;font-weight:800;color:#ececea;line-height:1;margin-bottom:16px;">\${n}</span>
      <h3 style="font-size:16px;font-weight:700;color:#1a2e2a;margin-bottom:4px;">\${t}</h3>
      <span class="ab-eyebrow" style="color:#3B6259;margin-bottom:12px;display:block;">\${tag}</span>
      <p class="ab-caption" style="color:#666;">\${d}</p>
    </div>\`).join('');

  const sec4 = \`
    <section class="ab-section" style="background:#f5f5f3;padding:80px 40px;">
      <div style="max-width:900px;margin:0 auto;">
        <p class="ab-eyebrow" style="color:#3B6259;">Our Promise</p>
        <h2 class="ab-h2">선샤인 웰니스의<br/>세 가지 약속</h2>
        <div class="ab-promise-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px;">\${promiseCards}</div>
      </div>
    </section>\`;

  // 5. CTA
  const sec5 = \`
    <section class="ab-section" style="background:url('images/haeundae-sand-festival-in-busan-south-korea-518632 (2).jpg') center/cover no-repeat;padding:80px 40px;text-align:center;position:relative;">
      <div style="position:absolute;inset:0;background:rgba(10,25,35,0.56);"></div>
      <div style="max-width:520px;margin:0 auto;position:relative;">
        <p class="ab-eyebrow" style="color:rgba(255,255,255,0.55);">Get Started</p>
        <h2 class="ab-h2" style="color:#fff;margin-bottom:14px;">지금, 당신의 여정을<br/>시작하세요</h2>
        <p class="ab-body" style="color:rgba(255,255,255,0.78);margin-bottom:36px;">선샤인 웰니스가 당신만의 맞춤 웰니스 여행을 함께 설계합니다.</p>
        <button onclick="openContactPage()" style="display:inline-block;background:#fff;color:#1a2e2a;font-size:14px;font-weight:700;padding:14px 40px;border-radius:30px;border:none;cursor:pointer;letter-spacing:.04em;font-family:'Noto Sans KR',sans-serif;">문의하기 →</button>
      </div>
    </section>\`;`;

// 구 섹션 블록 찾아서 교체
const oldStart = `  // 1. Hero — 다크그린 + 숫자 스탯\n  const sec1 =`;
const oldEnd   = `  const sec5 = \`\n    <section class="ab-section" style="background:url('images/haeundae-sand-festival-in-busan-south-korea-518632 (2).jpg')`;

const si = s.indexOf(oldStart);
const ei = s.indexOf(oldEnd, si);
if (si === -1) { console.error('sec1 start not found'); process.exit(1); }
if (ei === -1) { console.error('sec5 start not found'); process.exit(1); }

// sec5 끝 찾기
const sec5End = s.indexOf('\n    </section>\`;', ei) + '\n    </section>\`;'.length;

s = s.slice(0, si) + newSections + '\n' + s.slice(sec5End);

fs.writeFileSync('C:/Users/PC/sunshine-wellness/script.js', s, 'utf8');
console.log('done');
