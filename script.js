// =========================================
// SUNSHINE WELLNESS — script.js
// =========================================

// --- 헤더: 스크롤 시 투명 → 흰색 ---
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// =========================================
// 다국어 번역 시스템
// =========================================
let currentLang = 'ko';

const translations = {
  ko: {
    // 네비게이션
    'nav.about': '웰니스 소개',
    'nav.programs': '프로그램 소개',
    'nav.contact': '견적의뢰 및 문의',
    'nav.wheretonext': 'Where to Next?',
    'nav.contactus': 'Contact Us',
    'auth.login': '로그인',
    'auth.signup': '회원가입',

    // 슬라이드 1
    'slide1.title': '가치있는 당신의 인생<br /><strong>\'제 3막\'</strong>',
    'slide1.desc': '신중년을 위한 맞춤형 인사이트 탐방 및 웰니스 여행',
    'slide1.tagline': 'Journey with Purpose, Wellness All Around',

    // 슬라이드 2
    'slide2.title': '골목마다 담긴<br /><strong>부산의 이야기</strong>',
    'slide2.desc': '감천문화마을, 전문 해설사와 함께하는 깊은 탐방',
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // 슬라이드 3
    'slide3.title': '고요함 속에서<br /><strong>마음을 내려놓다</strong>',
    'slide3.desc': '범어사, 해동용궁사 — 부산 사찰에서의 명상 투어',
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // 슬라이드 4
    'slide4.title': '지갑이 얇아도<br /><strong>괜찮아!</strong>',
    'slide4.desc': '국제시장, 부평깡통시장, 자갈치시장 — 부산 3대 시장 워킹 투어',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // 슬라이드 5
    'slide5.title': '아픔을 기억하고<br /><strong>평화를 배우다</strong>',
    'slide5.desc': '수탈·피란·재건·평화 — 부산 다크 투어리즘',
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // 슬라이드 6
    'slide6.title': '예술로 물드는<br /><strong>부산의 하루</strong>',
    'slide6.desc': '부산현대미술관, 부산비엔날레 — 부산의 예술 공간을 깊이 탐방',
    'slide6.tagline': 'Art Flows Through Every Street',

    // 소개 섹션
    'about.label': 'About Us',
    'about.title': '부산의 아름다움을<br /><strong>온몸으로 느끼세요</strong>',
    'about.desc': '선샤인 웰니스는 부산의 자연, 문화, 예술, 역사를 깊고 느리게 경험하는 맞춤형 웰니스 여행을 제공합니다. 걷고, 보고, 쉬며 — 당신만의 부산을 만나보세요.',
    'stat1.label': '전문 프로그램',
    'stat2.label': '맞춤형 투어',
    'stat3.label': '로컬 전문 여행사',

    // 프로그램 섹션
    'programs.label': 'Our Programs',
    'programs.title': '웰니스 여행<br /><strong>프로그램</strong>',
    'programs.desc': '몸과 마음이 함께 쉬어가는<br />부산의 특별한 여정',

    // 카드 1 - 투어
    'card1.tag': '투어',
    'card1.title': '부산 근교 투어',
    'card1.desc': '기장, 해운대, 영도 등 부산 근교의 숨겨진 보석 같은 장소를 탐방합니다.',

    // 카드 2 - 컬처
    'card2.tag': '문화',
    'card2.title': '감천문화마을 해설',
    'card2.desc': '전문 해설사와 함께 감천문화마을의 역사와 예술, 골목 이야기를 들어보세요.',

    // 카드 3 - 사찰
    'card3.tag': '명상',
    'card3.title': '사찰 투어',
    'card3.desc': '범어사, 해동용궁사 등 부산의 고즈넉한 사찰에서 명상과 사찰 문화를 경험합니다.',

    // 카드 4 - 예술
    'card4.tag': '예술',
    'card4.title': '부산 예술 여행',
    'card4.desc': '깡깡이예술마을, F1963, 부산현대미술관 등 부산의 예술 공간을 깊이 탐방합니다.',

    // 카드 5 - 시장
    'card5.tag': '미식',
    'card5.title': '시장 & 떡볶이 미식 투어',
    'card5.desc': '부전시장 → 이가네 → 다리집 → 도날드 — 부산 시장·해변·골목을 따라 지역별 떡볶이의 맛과 이야기를 탐방합니다.',

    // 카드 6 - 역사
    'card6.tag': '역사',
    'card6.title': '부산 다크 투어리즘',
    'card6.desc': '수탈·피란·재건·평화 — 부산이 견디고 회복해 온 근현대사를 현장에서 걷고 배웁니다.',

    // 카드 공통
    'card.info': '여행 정보',
    'card.contact': '문의하기 →',

    // 연락처 섹션
    'contact.label': 'Contact',
    'contact.title': '여행을<br /><strong>시작해보세요</strong>',
    'contact.desc': '원하는 프로그램을 알려주시면 맞춤 일정을 안내해 드립니다.',
    'contact.address': '서면 쥬디스태화 백화점 앞',

    // 폼
    'form.name': '이름',
    'form.namePlaceholder': '홍길동',
    'form.phone': '연락처',
    'form.phonePlaceholder': '010-0000-0000',
    'form.program': '관심 프로그램',
    'form.programDefault': '선택해주세요',
    'prog.tour': '부산 근교 투어',
    'prog.culture': '감천문화마을 해설',
    'prog.art': '부산 예술 여행',
    'prog.temple': '사찰 투어',
    'prog.market': '시장 워킹 투어',
    'form.message': '문의 내용',
    'form.messagePlaceholder': '희망 날짜, 인원, 요청 사항을 적어주세요.',
    'form.submit': '문의 보내기',
    'form.sending': '전송 중...',
    'form.success': '감사합니다! 곧 연락드리겠습니다.',
    'form.error': '오류가 발생했습니다. 다시 시도해주세요.',

    // 푸터
    'footer.tagline': '부산에서 시작되는 특별한 웰니스 여행',
    'footer.about': '소개',
    'footer.programs': '프로그램',
    'footer.contact': '문의',
    'footer.copyright': '© 2026 선샤인 웰니스. All rights reserved.',
  },

  en: {
    // Navigation
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.contact': 'Inquire',
    'nav.wheretonext': 'Where to Next?',
    'nav.contactus': 'Contact Us',
    'auth.login': 'Log In',
    'auth.signup': 'Sign Up',

    // Slide 1
    'slide1.title': 'Your Valuable Life\'s<br /><strong>"Third Act"</strong>',
    'slide1.desc': 'Tailored insight tours & wellness travel for the new middle generation',
    'slide1.tagline': 'Journey with Purpose, Wellness All Around',

    // Slide 2
    'slide2.title': 'Busan\'s Story<br /><strong>in Every Alley</strong>',
    'slide2.desc': 'Gamcheon Culture Village — a deep exploration with expert guides',
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // Slide 3
    'slide3.title': 'In Stillness,<br /><strong>Let It All Go</strong>',
    'slide3.desc': 'Beomeosa & Haedong Yonggungsa — meditation tours at Busan\'s temples',
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // Slide 4
    'slide4.title': 'No Big Budget?<br /><strong>No Problem!</strong>',
    'slide4.desc': 'Gukje Market, Bupyeong Market, Jagalchi Market — Busan\'s top 3 markets walking tour',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // Slide 5
    'slide5.title': 'Remember the Pain,<br /><strong>Learn Peace</strong>',
    'slide5.desc': 'Exploitation · Refuge · Reconstruction · Peace — Busan Dark Tourism',
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // Slide 6
    'slide6.title': 'A Day in Busan<br /><strong>Painted by Art</strong>',
    'slide6.desc': 'Busan Museum of Contemporary Art, Busan Biennale — deep dive into Busan\'s art spaces',
    'slide6.tagline': 'Art Flows Through Every Street',

    // About section
    'about.label': 'About Us',
    'about.title': 'Feel the Beauty of Busan<br /><strong>with Every Sense</strong>',
    'about.desc': 'Sunshine Wellness offers tailor-made wellness travel that explores Busan\'s nature, culture, art, and history slowly and deeply. Walk, see, rest — discover your own Busan.',
    'stat1.label': 'Expert Programs',
    'stat2.label': 'Custom Tours',
    'stat3.label': 'Local Travel Agency',

    // Programs section
    'programs.label': 'Our Programs',
    'programs.title': 'Wellness Travel<br /><strong>Programs</strong>',
    'programs.desc': 'A special journey in Busan<br />where body and mind rest together',

    // Card 1 - Tour
    'card1.tag': 'Tour',
    'card1.title': 'Busan Suburb Tour',
    'card1.desc': 'Explore hidden gems around Busan — Gijang, Haeundae, Yeongdo, and more.',

    // Card 2 - Culture
    'card2.tag': 'Culture',
    'card2.title': 'Gamcheon Village Tour',
    'card2.desc': 'Listen to the history, art, and alley stories of Gamcheon Culture Village with an expert guide.',

    // Card 3 - Temple
    'card3.tag': 'Meditation',
    'card3.title': 'Temple Tour',
    'card3.desc': 'Experience meditation and temple culture at Busan\'s serene temples — Beomeosa and Haedong Yonggungsa.',

    // Card 4 - Art
    'card4.tag': 'Art',
    'card4.title': 'Busan Art Journey',
    'card4.desc': 'A deep dive into Busan\'s art spaces — Kkangkkangyi Arts Village, F1963, and Busan Museum of Contemporary Art.',

    // Card 5 - Market
    'card5.tag': 'Food',
    'card5.title': 'Market & Tteokbokki Food Tour',
    'card5.desc': 'Bujeon Market → Igane → Darijip → Donald — follow Busan\'s markets, beaches & alleys to taste and discover regional tteokbokki stories.',

    // Card 6 - History
    'card6.tag': 'History',
    'card6.title': 'Busan Dark Tourism',
    'card6.desc': 'Exploitation · Refuge · Reconstruction · Peace — walk and learn Busan\'s modern history on-site.',

    // Card common
    'card.info': 'Travel Info',
    'card.contact': 'Inquire →',

    // Contact section
    'contact.label': 'Contact',
    'contact.title': 'Start Your<br /><strong>Journey</strong>',
    'contact.desc': 'Tell us your preferred program and we\'ll create a custom itinerary for you.',
    'contact.address': 'In front of Judith Taewhwa Dept. Store, Seomyeon',

    // Form
    'form.name': 'Name',
    'form.namePlaceholder': 'John Doe',
    'form.phone': 'Phone',
    'form.phonePlaceholder': '+82-10-0000-0000',
    'form.program': 'Program of Interest',
    'form.programDefault': 'Please select',
    'prog.tour': 'Busan Suburb Tour',
    'prog.culture': 'Gamcheon Village Tour',
    'prog.art': 'Busan Art Journey',
    'prog.temple': 'Temple Tour',
    'prog.market': 'Market Walking Tour',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Please include preferred dates, group size, and any requests.',
    'form.submit': 'Send Inquiry',
    'form.sending': 'Sending...',
    'form.success': 'Thank you! We\'ll be in touch soon.',
    'form.error': 'An error occurred. Please try again.',

    // Footer
    'footer.tagline': 'A special wellness journey starting in Busan',
    'footer.about': 'About',
    'footer.programs': 'Programs',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 Sunshine Wellness. All rights reserved.',
  },
};

const modalLabels = {
  ko: {
    programInfo: '프로그램 정보',
    spots: '방문 장소',
    courses: '추천 코스',
    tip: '여행 팁',
    links: '관련 링크',
    source: '출처',
  },
  en: {
    programInfo: 'Program Info',
    spots: 'Destinations',
    courses: 'Recommended Courses',
    tip: 'Travel Tips',
    links: 'Useful Links',
    source: 'Source',
  },
};

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = t[el.dataset.i18nPlaceholder];
    if (v !== undefined) el.placeholder = v;
  });

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.lang === lang)
  );

  document.documentElement.lang = lang === 'ko' ? 'ko' : 'en';
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => setLang(btn.dataset.lang))
);

// =========================================
// 히어로 캐러셀 (crossfade)
// =========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  updateDots();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(slideInterval);
}

// 도트 네비게이션
const dotsContainer = document.querySelector('.slide-dots');
if (dotsContainer) {
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(i);
      startAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// 화살표 버튼
const prevBtn = document.querySelector('.slide-prev');
const nextBtn = document.querySelector('.slide-next');
if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); goToSlide(currentSlide - 1); startAutoPlay(); });
if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });

// 첫 슬라이드 즉시 표시 (transition 없이)
slides[0].style.transition = 'none';
slides[0].classList.add('active');
requestAnimationFrame(() => requestAnimationFrame(() => {
  slides[0].style.transition = '';
}));

startAutoPlay();

// =========================================
// 프로그램 데이터 (다국어)
// =========================================
const programData = {
  tour: {
    ko: {
      title: '부산 힐링 투어',
      duration: '1박 2일',
      price: '문의',
      maxPeople: '최대 10명',
      description: '해운대, 광안리, 태종대를 중심으로 한 부산의 대표 힐링 스팟을 탐방합니다. 바다와 자연이 어우러진 힐링 여행으로 일상의 피로를 씻어드립니다.',
      spots: ['해운대 해수욕장', '광안대교 야경', '태종대 자연공원', '동백섬'],
      courses: ['오전: 해운대 산책 및 해수욕', '점심: 해운대 시장 해산물', '오후: 광안리 카페 탐방', '저녁: 광안대교 야경 감상', '이튿날: 태종대 트래킹'],
      tip: '주말과 성수기에는 해운대가 매우 혼잡합니다. 평일 방문을 추천드립니다.',
      links: [{ label: '해운대 관광 정보', url: 'https://www.haeundae.go.kr' }],
      source: '부산관광공사',
    },
    en: {
      title: 'Busan Healing Tour',
      duration: '1 Night 2 Days',
      price: 'Inquire',
      maxPeople: 'Max 10 people',
      description: 'Explore Busan\'s iconic healing spots centered around Haeundae, Gwangalli, and Taejongdae. Wash away daily fatigue with this healing journey where the sea and nature harmonize.',
      spots: ['Haeundae Beach', 'Gwangandaegyo Bridge Night View', 'Taejongdae Natural Park', 'Dongbaekseom Island'],
      courses: ['Morning: Haeundae walk & swimming', 'Lunch: Haeundae Market seafood', 'Afternoon: Gwangalli café tour', 'Evening: Gwangandaegyo night view', 'Day 2: Taejongdae trekking'],
      tip: 'Haeundae can be very crowded on weekends and peak season. Weekday visits are recommended.',
      links: [{ label: 'Haeundae Tourist Info', url: 'https://www.haeundae.go.kr' }],
      source: 'Busan Tourism Organization',
    },
  },

  culture: {
    ko: {
      title: '문화 체험 여행',
      duration: '당일치기',
      price: '문의',
      maxPeople: '최대 15명',
      description: '부산의 전통 문화와 현대 예술을 함께 경험하는 특별한 문화 여행입니다. 지역 예술가들과의 만남과 전통 공예 체험이 포함됩니다.',
      spots: ['부산시립미술관', '부산문화회관', '민주공원', '보수동 책방골목'],
      courses: ['오전: 부산시립미술관 관람', '점심: 남포동 거리 음식', '오후: 보수동 책방골목 탐방', '오후 늦게: 민주공원 방문'],
      tip: '부산시립미술관은 매주 월요일 휴관입니다. 방문 전 확인하세요.',
      links: [{ label: '부산시립미술관', url: 'https://www.busan.go.kr/museum' }],
      source: '부산문화재단',
    },
    en: {
      title: 'Cultural Experience Tour',
      duration: 'Day Trip',
      price: 'Inquire',
      maxPeople: 'Max 15 people',
      description: 'A special cultural journey experiencing both Busan\'s traditional culture and contemporary art. Includes meetings with local artists and traditional craft experiences.',
      spots: ['Busan Museum of Art', 'Busan Cultural Center', 'Democracy Park', 'Bosu-dong Book Street'],
      courses: ['Morning: Busan Museum of Art tour', 'Lunch: Nampo-dong street food', 'Afternoon: Bosu-dong Book Street', 'Late afternoon: Democracy Park visit'],
      tip: 'Busan Museum of Art is closed every Monday. Check before visiting.',
      links: [{ label: 'Busan Museum of Art', url: 'https://www.busan.go.kr/museum' }],
      source: 'Busan Cultural Foundation',
    },
  },

  art: {
    ko: {
      title: '감천 아트 투어',
      duration: '반나절',
      price: '문의',
      maxPeople: '최대 12명',
      description: '부산의 예술 마을 감천문화마을에서 지역 예술가들과 함께하는 특별한 아트 투어입니다. 알록달록한 골목을 걸으며 예술 작품을 감상합니다.',
      spots: ['감천문화마을', '어린왕자 조형물', '물고기 계단 벽화', '마을 갤러리'],
      courses: ['오전: 감천문화마을 안내 투어', '중간: 골목 예술 작품 감상', '마을 카페에서 휴식', '오후: 지역 예술가 작업실 방문'],
      tip: '감천문화마을은 경사가 있어 편한 신발을 착용하세요. 오전 방문이 덜 붐빕니다.',
      links: [{ label: '감천문화마을', url: 'http://www.gamcheon.or.kr' }],
      source: '감천문화마을 주민협의회',
    },
    en: {
      title: 'Gamcheon Art Tour',
      duration: 'Half Day',
      price: 'Inquire',
      maxPeople: 'Max 12 people',
      description: 'A special art tour with local artists in Gamcheon Culture Village, Busan\'s vibrant artistic neighborhood. Stroll through colorful alleys while appreciating artworks.',
      spots: ['Gamcheon Culture Village', 'Little Prince Statue', 'Fish Stairway Mural', 'Village Gallery'],
      courses: ['Morning: Guided Gamcheon tour', 'Mid-tour: Alley artwork viewing', 'Break at village café', 'Afternoon: Local artist studio visit'],
      tip: 'Gamcheon Culture Village has slopes — wear comfortable shoes. Morning visits are less crowded.',
      links: [{ label: 'Gamcheon Culture Village', url: 'http://www.gamcheon.or.kr' }],
      source: 'Gamcheon Culture Village Residents Council',
    },
  },

  temple: {
    ko: {
      title: '사찰 명상 체험',
      duration: '당일치기',
      price: '문의',
      maxPeople: '최대 8명',
      description: '범어사와 해동용궁사에서 진행되는 깊이 있는 명상과 사찰 체험 프로그램입니다. 도심 속 고요한 사찰에서 마음의 평화를 찾아보세요.',
      spots: ['범어사', '해동용궁사', '금정산 산책로', '사찰 정원'],
      courses: ['이른 아침: 범어사 새벽 예불 참관', '오전: 사찰 명상 체험', '점심: 사찰 채식 식사', '오후: 해동용궁사 방문', '해질녘: 금정산 일몰 감상'],
      tip: '새벽 예불은 오전 4시에 시작됩니다. 조용한 복장을 권장합니다.',
      links: [{ label: '범어사 공식 사이트', url: 'http://www.beomeosa.co.kr' }],
      source: '부산불교문화원',
    },
    en: {
      title: 'Temple Meditation Experience',
      duration: 'Day Trip',
      price: 'Inquire',
      maxPeople: 'Max 8 people',
      description: 'A profound meditation and temple stay program at Beomeosa and Haedong Yonggungsa temples. Find inner peace at serene temples nestled in the city.',
      spots: ['Beomeosa Temple', 'Haedong Yonggungsa Temple', 'Geumjeongsan Trail', 'Temple Gardens'],
      courses: ['Early morning: Beomeosa dawn ritual', 'Morning: Temple meditation', 'Lunch: Temple vegetarian meal', 'Afternoon: Haedong Yonggungsa visit', 'Dusk: Geumjeongsan sunset'],
      tip: 'The dawn ritual begins at 4 AM. Quiet, modest clothing is recommended.',
      links: [{ label: 'Beomeosa Official Site', url: 'http://www.beomeosa.co.kr' }],
      source: 'Busan Buddhist Culture Center',
    },
  },

  market: {
    ko: {
      title: '시장 미식 투어',
      duration: '반나절',
      price: '문의',
      maxPeople: '최대 12명',
      description: '부산의 전통 시장과 야시장을 탐방하며 현지 음식 문화를 체험합니다. 신선한 해산물부터 길거리 음식까지 부산의 맛을 만끽하세요.',
      spots: ['부산 자갈치 시장', '국제시장', '부평깡통시장', '남포동 먹자골목'],
      courses: ['오전: 자갈치 시장 해산물 투어', '점심: 국제시장 맛집 탐방', '오후: 부평깡통시장 쇼핑', '저녁: 남포동 야시장'],
      tip: '자갈치 시장은 오전 일찍 방문하면 가장 신선한 해산물을 만날 수 있습니다.',
      links: [{ label: '자갈치 시장', url: 'https://www.jagalchi.kr' }],
      source: '부산광역시 관광진흥과',
    },
    en: {
      title: 'Market Food Tour',
      duration: 'Half Day',
      price: 'Inquire',
      maxPeople: 'Max 12 people',
      description: 'Explore Busan\'s traditional markets and night markets to experience local food culture. Enjoy Busan\'s flavors from fresh seafood to street food.',
      spots: ['Busan Jagalchi Market', 'Gukje Market', 'Bupyeong Kkangtong Market', 'Nampo-dong Food Alley'],
      courses: ['Morning: Jagalchi Market seafood tour', 'Lunch: Gukje Market restaurants', 'Afternoon: Bupyeong Market shopping', 'Evening: Nampo-dong night market'],
      tip: 'Visit Jagalchi Market early in the morning for the freshest seafood.',
      links: [{ label: 'Jagalchi Market', url: 'https://www.jagalchi.kr' }],
      source: 'Busan Tourism Promotion Division',
    },
  },

  history: {
    ko: {
      title: '부산 다크 투어리즘',
      duration: '당일치기',
      price: '문의',
      maxPeople: '최대 15명',
      description: '한국전쟁의 아픔을 간직한 부산의 역사 유적을 탐방하며 평화의 소중함을 배웁니다. 피란민의 삶과 역사를 이해하는 특별한 여행입니다.',
      spots: ['유엔기념공원', '임시수도기념관', '부산근현대역사관', '피란민 정착촌 흔적지', '국립일제강제동원역사관', '부산항 제1부두'],
      courses: [
        '오전: 유엔기념공원 참배 및 추모',
        '오전 중반: 임시수도기념관 관람 (1·4 후퇴 시절의 부산 임시 수도)',
        '점심: 부산진구 전통 식당',
        '오후: 부산근현대역사관 (일제강점기~현대)',
        '오후 중반: 국립일제강제동원역사관',
        '늦은 오후: 부산항 제1부두 역사 탐방',
      ],
      tip: '유엔기념공원은 무료 입장이며 경건한 복장을 권장합니다. 일부 전시관은 월요일 휴관입니다.',
      links: [
        { label: '유엔기념공원', url: 'https://www.unmck.or.kr' },
        { label: '국립일제강제동원역사관', url: 'https://www.fomo.or.kr' },
      ],
      source: '부산광역시 역사문화과',
    },
    en: {
      title: 'Busan Dark Tourism',
      duration: 'Day Trip',
      price: 'Inquire',
      maxPeople: 'Max 15 people',
      description: 'Visit Busan\'s historical sites that hold the pain of the Korean War, and learn the value of peace. A special journey understanding the lives and history of wartime refugees.',
      spots: ['UN Memorial Cemetery', 'Provisional Capital Memorial Museum', 'Busan Modern History Museum', 'Refugee Settlement Sites', 'National Forced Labor History Museum', 'Busan Port Pier 1'],
      courses: [
        'Morning: UN Memorial Cemetery tribute & remembrance',
        'Mid-morning: Provisional Capital Memorial Museum (Busan as wartime capital)',
        'Lunch: Traditional restaurant in Busanjin-gu',
        'Afternoon: Busan Modern History Museum (Japanese colonial era to present)',
        'Mid-afternoon: National Forced Labor History Museum',
        'Late afternoon: Busan Port Pier 1 historical walk',
      ],
      tip: 'UN Memorial Cemetery is free admission; respectful attire recommended. Some museums are closed Mondays.',
      links: [
        { label: 'UN Memorial Cemetery', url: 'https://www.unmck.or.kr' },
        { label: 'National Forced Labor History Museum', url: 'https://www.fomo.or.kr' },
      ],
      source: 'Busan Metropolitan City Historical Culture Division',
    },
  },
};

// =========================================
// 모달 (새 탭)
// =========================================
function openModal(programKey) {
  const prog = programData[programKey];
  if (!prog) return;

  const d = prog[currentLang] || prog.ko;
  const ml = modalLabels[currentLang] || modalLabels.ko;
  const lang = currentLang === 'ko' ? 'ko' : 'en';

  const spotsHTML = d.spots
    .map(s => `<li>${s}</li>`)
    .join('');

  const coursesHTML = d.courses
    .map(c => `<li>${c}</li>`)
    .join('');

  const linksHTML = d.links && d.links.length
    ? `<div class="modal-section">
        <h3>${ml.links}</h3>
        <ul>${d.links.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`).join('')}</ul>
       </div>`
    : '';

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${d.title} — Sunshine Wellness</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans KR', 'Malgun Gothic', sans-serif; background: #f8f9fa; color: #333; padding: 2rem 1rem; }
    .container { max-width: 760px; margin: 0 auto; }
    h1 { font-size: 1.8rem; color: #2c5f2e; margin-bottom: 0.5rem; }
    .meta { display: flex; gap: 1.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: #666; flex-wrap: wrap; }
    .meta span { background: #e8f5e9; padding: 0.25rem 0.75rem; border-radius: 99px; }
    .desc { font-size: 1rem; line-height: 1.7; margin-bottom: 2rem; color: #555; }
    .modal-section { margin-bottom: 1.8rem; }
    .modal-section h3 { font-size: 1.1rem; color: #2c5f2e; border-left: 4px solid #2c5f2e; padding-left: 0.75rem; margin-bottom: 0.8rem; }
    ul { padding-left: 1.2rem; }
    li { margin-bottom: 0.4rem; line-height: 1.6; }
    a { color: #2c5f2e; }
    .tip-box { background: #fff8e1; border-left: 4px solid #ffc107; padding: 0.8rem 1rem; border-radius: 0 8px 8px 0; font-size: 0.95rem; }
    .source { margin-top: 2rem; font-size: 0.8rem; color: #999; border-top: 1px solid #ddd; padding-top: 0.8rem; }
    @media (prefers-color-scheme: dark) {
      body { background: #1a1a1a; color: #e0e0e0; }
      .meta span { background: #2d4a2e; }
      h1, .modal-section h3 { color: #81c784; }
      a { color: #81c784; }
      .tip-box { background: #2d2a1a; }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${d.title}</h1>
    <div class="meta">
      <span>⏱ ${d.duration}</span>
      <span>💰 ${d.price}</span>
      <span>👥 ${d.maxPeople}</span>
    </div>
    <p class="desc">${d.description}</p>

    <div class="modal-section">
      <h3>${ml.spots}</h3>
      <ul>${spotsHTML}</ul>
    </div>

    <div class="modal-section">
      <h3>${ml.courses}</h3>
      <ul>${coursesHTML}</ul>
    </div>

    <div class="modal-section">
      <h3>${ml.tip}</h3>
      <div class="tip-box">${d.tip}</div>
    </div>

    ${linksHTML}

    <p class="source">${ml.source}: ${d.source}</p>
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

// =========================================
// 카드 클릭 이벤트
// =========================================
document.querySelectorAll('.card-info-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openModal(btn.dataset.program);
  });
});

// =========================================
// 상담 신청 폼 (Formspree)
// =========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const t = translations[currentLang] || translations.ko;

    btn.textContent = t['form.sending'];
    btn.disabled = true;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        btn.textContent = t['form.success'];
        contactForm.reset();
      } else {
        btn.textContent = t['form.error'];
        btn.disabled = false;
      }
    } catch {
      btn.textContent = t['form.error'];
      btn.disabled = false;
    }
  });
}

// =========================================
// 스무스 스크롤 (네비 링크)
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================================
// 교차 관찰자 (카드 페이드인)
// =========================================
const observer = new IntersectionObserver(
  entries => entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      observer.unobserve(en.target);
    }
  }),
  { threshold: 0.15 }
);

document.querySelectorAll('.card, .about-content, .stat-item').forEach(el => observer.observe(el));
