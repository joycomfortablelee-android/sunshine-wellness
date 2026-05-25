// =========================================
// SUNSHINE WELLNESS — script.js
// =========================================

// --- 헤더: 스크롤 시 투명 → 흰색 ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});

// --- 모바일 햄버거 ---
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// --- 히어로 캐러셀 ---
const wrapper = document.getElementById('slidesWrapper');
const slides  = document.querySelectorAll('.slide');
const dots    = document.querySelectorAll('#heroDots .pdot');
const total   = slides.length;
let current = 0;
let timer;

function goTo(index) {
  current = (index + total) % total;

  // 슬라이드 이동 — 슬라이드 수에 따라 자동 계산
  wrapper.style.transform = `translateX(-${current * (100 / total)}%)`;

  // Ken Burns — 활성 슬라이드 재시작
  slides.forEach((s, i) => {
    s.classList.remove('active');
    if (i === current) {
      void s.offsetWidth;
      s.classList.add('active');
    }
  });

  // dots 동기화
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

document.getElementById('prevBtn').addEventListener('click', () => { goTo(current - 1); resetTimer(); });
document.getElementById('nextBtn').addEventListener('click', () => { goTo(current + 1); resetTimer(); });

// dots 클릭
dots.forEach(dot => {
  dot.addEventListener('click', () => { goTo(+dot.dataset.index); resetTimer(); });
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => goTo(current + 1), 6000);
}

// 초기 실행
slides[0].classList.add('active');
timer = setInterval(() => goTo(current + 1), 6000);

// --- 여행 정보 모달 ---
const programData = {
  tour: {
    tag: 'Tour',
    title: '부산 근교 투어',
    desc: '기장, 해운대, 영도 등 부산의 대표 근교를 전문 가이드와 함께 느리고 깊게 탐방합니다.',
    items: [
      '기장 죽성리 해안 드라이브 & 죽성드림성당',
      '해운대 달맞이길 — 조용한 숲길 산책',
      '영도 절영해안산책로 & 흰여울문화마을',
      '소요 시간: 1일 (09:00 – 17:00)',
      '정원: 8–12명 소규모 그룹',
    ],
    tip: '편안한 운동화와 선크림을 준비하세요. 이동 차량 제공.',
    links: [
      { label: '흰여울문화마을', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000201001001000&uc_seq=350' },
      { label: '부산 관광 공식 (Visit Busan)', url: 'https://www.visitbusan.net/' },
    ],
  },
  culture: {
    tag: 'Culture',
    title: '감천 문화 마을 해설',
    desc: '6·25 피란민의 삶이 담긴 감천 문화 마을을 전문 해설사와 함께 걸으며 부산의 역사와 예술을 만납니다.',
    items: [
      '마을 역사 — 피란민촌에서 예술 마을로의 변화',
      '골목 곳곳의 설치미술 & 벽화 스폿 해설',
      '주민 작가 공방 방문 (선택)',
      '소요 시간: 약 2시간 30분',
      '정원: 최대 10명 소규모',
    ],
    tip: '가파른 골목이 많습니다. 굽 없는 편한 신발을 권장합니다.',
    links: [
      { label: '감천 문화 마을 공식', url: 'http://www.gamcheon.or.kr/' },
      { label: '부산 관광 공식 (Visit Busan)', url: 'https://www.visitbusan.net/' },
    ],
  },
  art: {
    tag: 'Art',
    title: '부산 예술 여행',
    desc: '깡깡이예술마을부터 F1963, 부산현대미술관까지 — 부산의 살아있는 예술 현장을 하루에 담습니다.',
    items: [
      '깡깡이예술마을 (영도 대평동) — 조선소 마을에서 피어난 공공미술',
      'F1963 (고려제강 수영공장) — 산업유산 복합문화공간',
      '부산현대미술관 (MoCA Busan) — 국제 현대미술 기획전',
      '소요 시간: 1일 (10:00 – 18:00)',
      '정원: 8명 이내',
    ],
    tip: '깡깡이예술마을은 선박 수리 현장과 공존하는 독특한 공간입니다. 주중 방문 시 작업 현장을 볼 수 있습니다.',
    links: [
      { label: '깡깡이예술마을 공식', url: 'http://kangkangee.com/' },
      { label: 'F1963', url: 'https://www.f1963.org/' },
      { label: '부산현대미술관 (MoCA Busan)', url: 'https://www.mocabusan.kr/' },
    ],
  },
  temple: {
    tag: 'Temple',
    title: '사찰 투어',
    desc: '범어사와 해동용궁사에서 명상과 사찰 체험으로 일상의 피로를 내려놓는 웰니스 여정입니다.',
    items: [
      '범어사 — 금정산 자락의 천년 고찰, 새벽 예불 체험 (선택)',
      '해동용궁사 — 바다와 맞닿은 해안 사찰, 108배 명상',
      '다도 체험 & 사찰 음식 간식',
      '소요 시간: 1일 (06:00 – 15:00)',
      '정원: 6–10명',
    ],
    tip: '새벽 예불 참여 시 전날 저녁 9시 전 취침을 권장합니다. 긴 소매 옷을 챙겨오세요.',
    links: [
      { label: '범어사 공식', url: 'https://www.beomeosa.co.kr/' },
      { label: '해동용궁사 공식', url: 'https://www.yongkungsa.or.kr/' },
    ],
  },
  market: {
    tag: 'Market',
    title: '부산 떡볶이 미식 투어',
    desc: '부평깡통시장의 시원한 무 떡볶이, 남천동의 굵은 가래떡, 영도 골목의 30년 전통 즉석떡볶이까지 — 지역마다 다른 맛과 공간을 따라가는 부산 로컬 푸드 투어입니다.',
    items: [
      '프로그램 유형: 부산 로컬 음식 탐방',
      '대상: 외국인 관광객, 가족·친구·연인, 음식문화 관심자',
      '반일형 A코스: 4–5시간 (부평깡통시장 → 남천동)',
      '1일형 B코스: 6–7시간 (부평깡통시장 → 남천동 → 영도)',
      '이동: 대중교통 + 도보 또는 전용 차량',
    ],
    spots: [
      {
        num: '01',
        name: '이가네떡볶이',
        sub: 'Hot, Refreshing & Savory',
        addr: '부산 중구 부평1길 48 (부평깡통시장)',
        desc: '물을 넣지 않고 얇게 썬 무에서 나온 수분으로 조리하는 부산 대표 시장 떡볶이. 매콤하면서도 시원한 맛, 어묵 꼬치와 함께.',
      },
      {
        num: '02',
        name: '다리집 본점',
        sub: 'Thick Rice Cakes & Deep-Fried Squid',
        addr: '부산 수영구 남천바다로10번길 70',
        desc: '굵은 가래떡과 매콤달콤한 고추장 양념, 길고 통통한 오징어튀김의 조합이 대표 메뉴. 광안리 해변 근처.',
      },
      {
        num: '03',
        name: '도날드',
        sub: 'Local Tabletop Tteokbokki',
        addr: '부산 영도구 꿈나무길 267',
        desc: '30년 전통 영도식 즉석떡볶이. 떡·어묵·라면·쫄면·삶은 달걀이 어우러지며 끓일수록 깊어지는 양념 맛.',
      },
    ],
    tip: '반일형은 A코스(이가네→다리집), 1일형은 B코스(이가네→다리집→도날드) 선택 가능. 현금 지참 권장.',
    links: [
      { label: '부산 떡볶이 투어 (Visit Busan)', url: 'https://visitbusan.net/index.do?menuCd=DOM_000000302003001000&uc_seq=1032&lang_cd=en' },
      { label: '자갈치시장 공식', url: 'https://www.jagalchi.co.kr/' },
    ],
  },
  history: {
    tag: 'History',
    title: '역사 도보 투어',
    desc: '용두산공원, 이바구길, 해동용궁사를 잇는 부산의 시간을 걸으며 도시의 켜를 느끼는 투어입니다.',
    items: [
      '용두산공원 & 부산타워 — 구도심 파노라마 전망',
      '이바구길 (산복도로) — 168계단과 피란민 이야기',
      '초량 이바구공작소 & 유치환 우체통',
      '해동용궁사 — 바다 위 사찰로 마무리',
      '소요 시간: 1일 (09:00 – 17:00)',
    ],
    tip: '168계단 모노레일을 이용하면 체력 부담을 줄일 수 있습니다. 편한 신발 필수.',
    links: [
      { label: '이바구길 안내 (Visit Busan)', url: 'https://www.visitbusan.net/' },
      { label: '해동용궁사 공식', url: 'https://www.yongkungsa.or.kr/' },
    ],
  },
};

const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose   = document.getElementById('modalClose');

function openModal(programKey) {
  const d = programData[programKey];
  if (!d) return;
  const linksHtml = d.links && d.links.length ? `
    <div class="modal-links">
      <p class="modal-links-label">관련 링크</p>
      ${d.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
    </div>` : '';
  const spotsHtml = d.spots && d.spots.length ? `
    <div class="modal-spots">
      ${d.spots.map(s => `
        <div class="modal-spot">
          <span class="modal-spot-num">${s.num}</span>
          <div class="modal-spot-body">
            <strong>${s.name}</strong>
            <em>${s.sub}</em>
            <p>${s.desc}</p>
            <span class="modal-spot-addr">📍 ${s.addr}</span>
          </div>
        </div>`).join('')}
    </div>` : '';
  modalContent.innerHTML = `
    <span class="modal-tag">${d.tag}</span>
    <h2>${d.title}</h2>
    <hr class="modal-divider">
    <p>${d.desc}</p>
    <ul>
      ${d.items.map(i => `<li>${i}</li>`).join('')}
    </ul>
    ${spotsHtml}
    <p class="modal-tip">💡 ${d.tip}</p>
    ${linksHtml}
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.card-info-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.program));
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// --- 문의 폼 ---
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  btn.textContent = '감사합니다! 곧 연락드리겠습니다.';
  btn.style.background = '#3B6259';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '문의 보내기';
    btn.style.background = '';
    btn.disabled = false;
    this.reset();
  }, 4000);
});
