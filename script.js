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

  // 크로스페이드 — active 클래스로 opacity 전환
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
    title: '감천문화마을 해설',
    desc: '6·25 피란민의 삶이 담긴 감천문화마을을 전문 해설사와 함께 걸으며 부산의 역사와 예술을 만납니다.',
    items: [
      '마을 역사 — 피란민촌에서 예술 마을로의 변화',
      '골목 곳곳의 설치미술 & 벽화 스폿 해설',
      '주민 작가 공방 방문 (선택)',
      '소요 시간: 약 2시간 30분',
      '정원: 최대 10명 소규모',
    ],
    tip: '가파른 골목이 많습니다. 굽 없는 편한 신발을 권장합니다.',
    links: [
      { label: '감천문화마을 공식', url: 'http://www.gamcheon.or.kr/' },
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
    desc: '산사의 고요함, 바다와 맞닿은 해안 사찰, 계곡을 품은 천년 고찰까지 — 부산·양산 권역의 대표 사찰을 느리고 깊게 걸으며 일상의 피로를 내려놓는 웰니스 여정입니다.',
    items: [
      '정원: 6–10명 소규모 그룹',
      '전문 해설사 동행, 이동 차량 제공',
      '당일 코스 / 1박 2일 확장 코스 중 선택 가능',
    ],
    courses: [
      {
        title: '당일 코스 — 부산 3대 사찰',
        theme: '산사 · 해안 · 계곡, 세 가지 사찰 분위기를 하루에',
        steps: [
          '범어사 (금정구) — 오전 09:00',
          '해동용궁사 (기장군) — 오후 13:00',
          '장안사 (기장군) — 오후 15:30',
        ],
      },
      {
        title: '1박 2일 코스 — 부산 + 양산 확장',
        theme: '부산 대표 사찰 + 영남 불교문화의 큰 축',
        steps: [
          '1일차 범어사 → 해동용궁사 → 장안사',
          '2일차 통도사 (양산) → 내원사·내원사계곡 (양산)',
        ],
      },
    ],
    spots: [
      {
        num: '01',
        name: '범어사',
        sub: '금정구 — 금정산 자락의 천년 고찰',
        addr: '부산 금정구 범어사로 250',
        desc: '해인사·통도사와 함께 영남권 3대 사찰로 꼽히는 산사. 새벽 예불 체험(선택), 다도 체험 가능. 금정산 숲길 산책과 함께 구성하면 좋습니다.',
        mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250',
      },
      {
        num: '02',
        name: '해동용궁사',
        sub: '기장군 — 바다와 맞닿은 해안 사찰',
        addr: '부산 기장군 기장읍 용궁길 86',
        desc: '파도 소리와 함께하는 부산의 대표 해안 사찰. 108배 명상, 일출 명상 가능. 운영 04:30–19:20 (입장 마감 18:50). 방문객이 많으니 오전 일찍 방문 권장.',
        mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086',
      },
      {
        num: '03',
        name: '장안사',
        sub: '기장군 — 불광산 계곡을 품은 조용한 사찰',
        addr: '부산 기장군 장안읍 장안로 482',
        desc: '해동용궁사와 같은 기장권으로 동선이 편합니다. 계곡 산책로와 함께 구성 가능. 관광객이 적어 조용히 사찰 분위기를 즐길 수 있는 곳입니다.',
        mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482',
      },
      {
        num: '04',
        name: '통도사',
        sub: '양산 — 부처님 진신사리를 모신 불보사찰',
        addr: '경남 양산시 하북면 통도사로 108',
        desc: '대웅전에 불상이 없는 독특한 구조로 유명. 부산 근교 1박 2일 코스 2일차에 추천. 범어사와 비교하며 영남 불교문화의 두 축을 이해할 수 있습니다.',
        mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108',
      },
      {
        num: '05',
        name: '내원사 · 내원사계곡',
        sub: '양산 — 천성산 자락, 소금강이라 불리는 계곡',
        addr: '경남 양산시 하북면 내원사로 207',
        desc: '통도사 방문 후 연계하기 좋은 곳. 계곡 트레킹과 사찰 답사를 함께 즐길 수 있습니다. 여름철 피서지로도 인기 높습니다.',
        mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%EB%82%B4%EC%9B%90%EC%82%AC%EB%A1%9C%20207',
      },
    ],
    tip: '새벽 예불 참여 시 전날 저녁 9시 전 취침 권장. 사찰 내 긴 소매 옷 필수. 해동용궁사는 입장 마감 18:50이므로 일정 여유 있게 잡으세요.',
    links: [
      { label: '범어사 공식', url: 'https://www.beomeosa.co.kr/' },
      { label: '해동용궁사 공식', url: 'https://www.yongkungsa.or.kr/' },
      { label: '통도사 공식', url: 'https://www.tongdosa.or.kr/' },
      { label: '부산 사찰 투어 (Visit Busan)', url: 'https://www.visitbusan.net/' },
    ],
  },
  market: {
    tag: 'Market',
    title: '부산 시장 & 떡볶이 미식 투어',
    desc: '부전시장에서 시작해 부평깡통시장·남천동·영도까지 — 부산의 시장, 해변, 골목을 따라 지역마다 다른 떡볶이의 맛과 이야기를 경험하는 부산형 로컬 미식 탐방입니다.',
    items: [
      '프로그램 유형: 부산 로컬 음식 탐방',
      '대상: 외국인 관광객, 가족·친구·연인, 음식문화 관심자',
      '반일형 A코스: 4–5시간 (부전시장 → 이가네 → 다리집)',
      '1일형 B코스: 8–9시간 (부전시장 → 이가네 → 다리집 → 도날드)',
      '이동: 대중교통 + 도보 또는 전용 차량 / 운영 언어: 한국어·영어',
    ],
    spots: [
      {
        num: '01',
        name: '부전시장',
        sub: 'Busan Local Market — First Stop',
        addr: '부산광역시 부산진구 중앙대로783번길 23',
        desc: '부산 대표 전통시장. 농수산물·건어물·반찬·인삼시장 등 로컬 식재료와 생활시장 분위기를 체험합니다. 본격적인 떡볶이 투어 전, 부산의 시장문화를 이해하는 도입 코스입니다.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=부전시장+부산광역시+부산진구+중앙대로783번길+23',
      },
      {
        num: '02',
        name: '이가네떡볶이',
        sub: 'Hot, Refreshing & Savory',
        addr: '부산광역시 중구 부평1길 48 (부평깡통시장)',
        desc: '물을 넣지 않고 얇게 썬 무에서 나온 수분으로 조리하는 부산 대표 시장 떡볶이. 매콤하면서도 시원한 맛, 어묵 꼬치와 함께.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=이가네떡볶이+부산광역시+중구+부평1길+48',
      },
      {
        num: '03',
        name: '다리집 본점',
        sub: 'Thick Rice Cakes & Deep-Fried Squid',
        addr: '부산광역시 수영구 남천바다로10번길 70 101호',
        desc: '굵은 가래떡과 매콤달콤한 고추장 양념, 길고 통통한 오징어튀김의 조합이 대표 메뉴. 광안리 해변 근처.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=다리집+본점+부산광역시+수영구+남천바다로10번길+70+101호',
      },
      {
        num: '04',
        name: '도날드즉석떡볶이',
        sub: 'Local Tabletop Tteokbokki',
        addr: '부산광역시 영도구 꿈나무길 267',
        desc: '30년 전통 영도식 즉석떡볶이. 떡·어묵·라면·쫄면·삶은 달걀이 어우러지며 끓일수록 깊어지는 양념 맛.',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=도날드+떡볶이+부산광역시+영도구+꿈나무길+267',
      },
    ],
    schedules: [
      {
        type: '반일형 A코스 (4–5시간)',
        rows: [
          { time: '09:30', place: '부전시장 집결', desc: '오리엔테이션, 부산 전통시장 문화 소개' },
          { time: '09:40', place: '부전시장 탐방', desc: '농수산물·건어물·반찬·인삼시장 등 로컬 식재료 체험' },
          { time: '10:40', place: '부평깡통시장 이동', desc: '부산 원도심 시장권 이동' },
          { time: '11:20', place: '이가네떡볶이', desc: '시장형 무 떡볶이와 어묵 국물 체험' },
          { time: '12:20', place: '남천동 이동', desc: '광안리 해변권 이동' },
          { time: '13:00', place: '다리집 본점', desc: '굵은 떡볶이와 오징어튀김 체험' },
          { time: '14:00', place: '광안리 해변 산책', desc: '사진 촬영 및 마무리' },
          { time: '14:30', place: '종료', desc: '개별 해산' },
        ],
      },
      {
        type: '1일형 B코스 (8–9시간)',
        rows: [
          { time: '09:30', place: '부전시장 집결', desc: '오리엔테이션, 부산 전통시장 문화 소개' },
          { time: '09:40', place: '부전시장 탐방', desc: '농수산물·건어물·반찬·인삼시장 등 로컬 식재료 체험' },
          { time: '10:40', place: '부평깡통시장 이동', desc: '부산 원도심 시장권 이동' },
          { time: '11:20', place: '이가네떡볶이', desc: '무 떡볶이와 어묵 국물 체험' },
          { time: '12:10', place: '국제시장·부평깡통시장 산책', desc: '원도심 시장문화 탐방' },
          { time: '13:30', place: '남천동 이동', desc: '광안리 해변권 미식권 소개' },
          { time: '14:00', place: '다리집 본점', desc: '굵은 가래떡 떡볶이와 오징어튀김 체험' },
          { time: '15:00', place: '광안리 해변 산책', desc: '미식 후 바다 경관 감상' },
          { time: '16:20', place: '영도 이동', desc: '영도 골목문화 소개' },
          { time: '16:50', place: '도날드즉석떡볶이', desc: '30년 전통 즉석떡볶이 체험' },
          { time: '18:00', place: '마무리 토크', desc: '오늘의 맛 비교, 사진 공유' },
          { time: '18:30', place: '종료', desc: '개별 해산' },
        ],
      },
    ],
    tip: '반일형은 A코스(부전시장→이가네→다리집), 1일형은 B코스(부전시장→이가네→다리집→도날드) 선택 가능. 현금 지참 권장.',
    links: [
      { label: '부산은 맛있다 — 떡볶이 특별편 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000202003001000&uc_seq=1032' },
      { label: '이가네떡볶이 공식 정보 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201002001000&uc_seq=1527' },
      { label: '다리집 본점 공식 정보 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000201002001000&uc_seq=942' },
      { label: '도날드즉석떡볶이 공식 정보 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000202002001000&uc_seq=2178' },
      { label: '오이소! 보이소! 사이소! 자갈치시장 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201003001000&uc_seq=412' },
      { label: '자갈치시장 공식 홈페이지', url: 'https://www.bisco.or.kr/jagalchimarket/' },
    ],
  },
  history: {
    tag: 'History',
    title: '부산 다크 투어리즘',
    desc: '수탈·피란·재건·평화의 기억을 통해 부산이 어떻게 견디고 회복했는지를 배우는 역사문화 여행입니다. 비짓부산 공식 다크투어리즘 코스를 기반으로 구성되었습니다.',
    items: [
      '코스 구성: 도심형 1일 코스 + 기장 강제동원 코스',
      '주제 흐름: 일제강점기 수탈 → 한국전쟁 피란 → 재건 → 평화·추모',
      '소요 시간: 도심 코스 1일 / 기장 코스 반나절',
      '정원: 8–12명 소규모 그룹',
      '전문 해설사 동행, 이동 차량 제공',
    ],
    courses: [
      {
        title: 'A코스 — 도심형 1일 코스',
        theme: '수탈의 공간에서 평화의 공간으로',
        steps: [
          '부산시민공원 역사관 (부산진구)',
          '부산근현대역사관 별관 (중구)',
          '부산항 제1부두 (중구)',
          '유엔평화기념관 (남구)',
          '유엔기념공원 (남구)',
        ],
      },
      {
        title: 'B코스 — 기장 강제동원 코스',
        theme: '자원 수탈과 강제동원의 흔적을 따라',
        steps: [
          '일광 광산마을 (기장군)',
          '적산가옥 & 광산 생활 흔적',
          '마을 생활 공간',
        ],
      },
    ],
    spots: [
      {
        num: '01',
        name: '부산시민공원 역사관',
        sub: '부산진구 — 군사기지에서 시민공원으로',
        addr: '부산 부산진구 시민공원로 73',
        desc: '지금의 부산시민공원은 일제강점기 서면경마장, 일본군 부대, 이후 미군기지 캠프 하야리아의 기억을 품고 있습니다. 군사적 목적의 공간이 시민의 공공 공간으로 바뀐 과정을 볼 수 있는 곳입니다.',
      },
      {
        num: '02',
        name: '부산근현대역사관 별관',
        sub: '중구 — 동양척식주식회사 · 식민지 수탈',
        addr: '부산 중구 대청로 104',
        desc: '1929년 동양척식주식회사 부산지점으로 지어진 건물입니다. 이후 미군 숙소·미국문화원·부산근대역사관·복합문화공간으로 변화하며, 수탈의 기억이 시민의 기억 공간으로 전환된 사례입니다.',
      },
      {
        num: '03',
        name: '부산항 제1부두',
        sub: '중구 — 개항 · 피란 · 재건의 항구',
        addr: '부산 중구 중앙동',
        desc: '일제강점기 대륙 침략과 군수 물자 수송의 거점이었고, 한국전쟁기에는 피란민·유엔군·원조 물자가 드나드는 생명의 통로였습니다. 수탈·피란·재건 세 장면이 겹쳐 있는 항구입니다.',
      },
      {
        num: '04',
        name: '유엔평화기념관',
        sub: '남구 — 한국전쟁 · 유엔군 참전',
        addr: '부산 남구 유엔평화로 97',
        desc: '한국전쟁의 전개 과정과 유엔군 참전, 피란수도 부산의 역할을 이해할 수 있는 교육 공간입니다. 국제사회와 부산이 어떻게 연결되었는지, 전쟁의 기억이 왜 평화 교육으로 이어져야 하는지 함께 이야기합니다.',
      },
      {
        num: '05',
        name: '유엔기념공원',
        sub: '남구 — 전몰장병 추모 · 평화 교육',
        addr: '부산 남구 유엔평화로 93',
        desc: '세계 유일의 유엔군 묘지이자 평화를 생각하게 하는 추모 공간입니다. 전몰장병의 이름과 묘역 앞에서 전쟁이 남긴 희생과, 오늘의 평화가 결코 당연하지 않다는 사실을 이해하게 됩니다.',
      },
      {
        num: '06',
        name: '일광 광산마을 (B코스)',
        sub: '기장군 — 강제동원 · 자원 수탈',
        addr: '부산 기장군 일광읍',
        desc: '1930년대 일본 스미토모 광업이 개발한 닛코 광산으로, 1944년부터 조선인들이 강제동원되어 구리 채광 작업을 했던 장소입니다. 광산 주변의 적산가옥·빨래터·우물·공동화장실은 당시 노동자들의 삶을 보여줍니다.',
      },
    ],
    tip: '도심 A코스와 기장 B코스는 이동 거리를 고려해 별도 일정으로 나누어 운영합니다. 편한 운동화 필수.',
    links: [
      { label: '부산 다크투어리즘 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000202002001000&uc_seq=2178&lang_cd=ko' },
      { label: '유엔기념공원 공식', url: 'https://www.unmck.or.kr/' },
      { label: '부산근현대역사관', url: 'https://museum.busan.go.kr/modern' },
      { label: '유엔평화기념관 공식', url: 'https://www.unpfk.or.kr/' },
    ],
    source: '비짓부산, 「부산, 기억의 파편을 따라 걷는 다크투어리즘」, 2026.5.24. 검색.',
  },
};


function openModal(programKey) {
  const d = programData[programKey];
  if (!d) return;

  const linksHtml = d.links && d.links.length ? `
    <div class="info-links">
      <p class="info-links-label">관련 링크</p>
      ${d.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`).join('')}
    </div>` : '';

  const spotsHtml = d.spots && d.spots.length ? `
    <div class="info-spots">
      ${d.spots.map(s => `
        <div class="info-spot">
          <span class="info-spot-num">${s.num}</span>
          <div class="info-spot-body">
            <strong>${s.name}</strong>
            <em>${s.sub}</em>
            <p>${s.desc}</p>
            <div class="info-spot-footer">
              <span class="info-spot-addr">📍 ${s.addr}</span>
              ${s.mapUrl ? `<a class="info-spot-map" href="${s.mapUrl}" target="_blank" rel="noopener noreferrer">🗺 지도 보기</a>` : ''}
            </div>
          </div>
        </div>`).join('')}
    </div>` : '';

  const schedulesHtml = d.schedules && d.schedules.length ? d.schedules.map(sch => `
    <div class="info-schedule">
      <h3 class="info-schedule-title">${sch.type}</h3>
      <table class="schedule-table">
        <thead><tr><th>시간</th><th>장소</th><th>내용</th></tr></thead>
        <tbody>
          ${sch.rows.map(r => `<tr><td class="sch-time">${r.time}</td><td class="sch-place">${r.place}</td><td class="sch-desc">${r.desc}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>`).join('') : '';

  const routeHtml = d.route ? `
    <div class="info-route">
      <h3 class="info-section-title">추천 코스</h3>
      ${d.route.map((r, i) => `
        <div class="route-step">
          <span class="route-num">${String(i + 1).padStart(2, '0')}</span>
          <div class="route-body">
            <strong>${r.name}</strong>
            <span class="route-area">${r.area}</span>
            <p>${r.theme}</p>
            <span class="route-desc">${r.desc}</span>
          </div>
        </div>
        ${i < d.route.length - 1 ? '<div class="route-arrow">↓</div>' : ''}`).join('')}
    </div>` : '';

  const coursesHtml = d.courses ? d.courses.map(c => `
    <div class="info-course">
      <h3 class="info-course-title">${c.title}</h3>
      <p class="info-course-theme">${c.theme}</p>
      <div class="info-course-steps">
        ${c.steps.map((s, i) => `
          <span class="course-step">${s}</span>
          ${i < c.steps.length - 1 ? '<span class="course-arrow">↓</span>' : ''}`).join('')}
      </div>
    </div>`).join('') : '';

  const sourceHtml = d.source ? `<p class="info-source">출처: ${d.source}</p>` : '';

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${d.title} — 선샤인 웰니스</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans KR', sans-serif; background: #f8f7f4; color: #1a1a1a; line-height: 1.7; }
    .page-header {
      background: #1a2e2a;
      color: #fff;
      padding: 40px 32px 32px;
    }
    .page-header .tag {
      display: inline-block;
      background: #e8a04a;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 14px;
    }
    .page-header h1 { font-size: 28px; font-weight: 700; margin-bottom: 12px; }
    .page-header p { font-size: 15px; color: rgba(255,255,255,.75); max-width: 640px; }
    .content { max-width: 720px; margin: 0 auto; padding: 40px 24px 60px; }
    section { margin-bottom: 36px; }
    h2.section-title {
      font-size: 16px;
      font-weight: 700;
      color: #1a2e2a;
      border-left: 3px solid #e8a04a;
      padding-left: 12px;
      margin-bottom: 16px;
    }
    ul { padding-left: 20px; }
    ul li { margin-bottom: 8px; font-size: 15px; color: #333; }
    .tip-box {
      background: #fff8ee;
      border: 1px solid #f0d49a;
      border-radius: 10px;
      padding: 16px 20px;
      font-size: 14px;
      color: #7a5a1e;
    }
    /* 스팟 */
    .info-spots { display: flex; flex-direction: column; gap: 16px; }
    .info-spot {
      display: flex; gap: 16px;
      background: #fff;
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,.06);
    }
    .info-spot-num {
      font-size: 22px; font-weight: 800; color: #e8a04a;
      min-width: 36px; line-height: 1;
    }
    .info-spot-body strong { display: block; font-size: 16px; font-weight: 700; margin-bottom: 2px; }
    .info-spot-body em { display: block; font-size: 12px; color: #888; margin-bottom: 8px; font-style: normal; }
    .info-spot-body p { font-size: 14px; color: #555; margin-bottom: 6px; }
    .info-spot-footer { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; margin-top: 4px; }
    .info-spot-addr { font-size: 13px; color: #888; }
    .info-spot-map {
      font-size: 12px; font-weight: 600;
      color: #1a2e2a; background: #e8f5f0;
      padding: 3px 10px; border-radius: 12px;
      text-decoration: none; white-space: nowrap;
    }
    .info-spot-map:hover { background: #1a2e2a; color: #fff; }
    /* 코스 */
    .info-course { background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,.06); margin-bottom: 16px; }
    .info-course-title { font-size: 16px; font-weight: 700; color: #1a2e2a; margin-bottom: 4px; }
    .info-course-theme { font-size: 13px; color: #e8a04a; font-weight: 500; margin-bottom: 14px; }
    .info-course-steps { display: flex; flex-direction: column; gap: 4px; }
    .course-step {
      display: inline-block;
      background: #f0f5f3;
      color: #1a2e2a;
      font-size: 14px;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: 6px;
      width: fit-content;
    }
    .course-arrow { display: block; color: #aaa; font-size: 16px; padding-left: 14px; line-height: 1.4; }
    /* 루트 */
    .info-route { display: flex; flex-direction: column; gap: 0; }
    .route-step {
      display: flex; gap: 16px;
      background: #fff;
      border-radius: 12px;
      padding: 16px 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,.06);
    }
    .route-num { font-size: 20px; font-weight: 800; color: #e8a04a; min-width: 32px; }
    .route-body strong { font-size: 15px; font-weight: 700; display: block; margin-bottom: 2px; }
    .route-area { font-size: 12px; color: #888; display: block; margin-bottom: 4px; }
    .route-body p { font-size: 14px; color: #555; margin-bottom: 4px; }
    .route-desc { font-size: 13px; color: #888; }
    .route-arrow { text-align: center; color: #aaa; font-size: 18px; padding: 4px 0; }
    /* 링크 */
    .info-links { }
    .info-links-label { font-size: 13px; color: #888; margin-bottom: 8px; font-weight: 500; }
    .info-links a {
      display: inline-block;
      margin: 4px 8px 4px 0;
      padding: 6px 14px;
      background: #1a2e2a;
      color: #fff;
      font-size: 13px;
      border-radius: 20px;
      text-decoration: none;
    }
    .info-links a:hover { background: #e8a04a; }
    /* 일정표 */
    .info-schedule { margin-bottom: 20px; }
    .info-schedule-title { font-size: 15px; font-weight: 700; color: #1a2e2a; margin-bottom: 10px; padding-left: 10px; border-left: 3px solid #e8a04a; }
    .schedule-table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .schedule-table thead tr { background: #1a2e2a; color: #fff; }
    .schedule-table thead th { padding: 8px 10px; text-align: left; font-weight: 600; }
    .schedule-table tbody tr:nth-child(even) { background: #f8f7f4; }
    .schedule-table tbody tr:hover { background: #e8f5f0; }
    .schedule-table td { padding: 8px 10px; vertical-align: top; border-bottom: 1px solid #eee; }
    .sch-time { font-weight: 700; color: #e8a04a; white-space: nowrap; width: 54px; }
    .sch-place { font-weight: 600; color: #1a2e2a; width: 140px; }
    .sch-desc { color: #555; }
    .info-source { font-size: 12px; color: #aaa; margin-top: 32px; }
    /* 섹션 구분선 */
    hr { border: none; border-top: 1px solid #e5e5e5; margin: 28px 0; }
    @media (max-width: 500px) {
      .page-header { padding: 28px 20px; }
      .page-header h1 { font-size: 22px; }
      .content { padding: 28px 16px 48px; }
    }
  </style>
</head>
<body>
  <div class="page-header">
    <span class="tag">${d.tag}</span>
    <h1>${d.title}</h1>
    <p>${d.desc}</p>
  </div>
  <div class="content">
    ${d.items && d.items.length ? `
    <section>
      <h2 class="section-title">프로그램 정보</h2>
      <ul>${d.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </section>` : ''}
    ${spotsHtml ? `<section><h2 class="section-title">방문 장소</h2>${spotsHtml}</section>` : ''}
    ${coursesHtml ? `<section><h2 class="section-title">추천 코스</h2>${coursesHtml}</section>` : ''}
    ${schedulesHtml ? `<section><h2 class="section-title">코스 일정표</h2>${schedulesHtml}</section>` : ''}
    ${routeHtml ? `<section>${routeHtml}</section>` : ''}
    ${d.tip ? `<section><h2 class="section-title">여행 팁</h2><div class="tip-box">💡 ${d.tip}</div></section>` : ''}
    ${linksHtml ? `<section>${linksHtml}</section>` : ''}
    ${sourceHtml}
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'noopener,noreferrer');
  if (win) win.addEventListener('unload', () => URL.revokeObjectURL(url), { once: true });
}

document.querySelectorAll('.card-info-btn').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.dataset.program));
});

// --- 문의 폼 (Formspree 연동) ---
// 사용법: https://formspree.io 에서 새 폼 생성 후 아래 FORM_ID를 교체하세요.
const FORMSPREE_ID = 'YOUR_FORM_ID';

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  const originalText = btn.textContent;
  btn.textContent = '전송 중...';
  btn.disabled = true;

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      body: new FormData(this),
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      btn.textContent = '감사합니다! 곧 연락드리겠습니다.';
      btn.style.background = '#3B6259';
      this.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } else {
      throw new Error('서버 오류');
    }
  } catch {
    btn.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
    btn.style.background = '#c0392b';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  }
});
