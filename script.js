// =========================================
// SUNSHINE WELLNESS — script.js
// =========================================

// --- 헤더: 스크롤 시 투명 → 흰색 ---
const header = document.getElementById('header');
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

  zh: {
    // 导航
    'nav.about': '关于我们',
    'nav.programs': '项目介绍',
    'nav.contact': '咨询预约',
    'nav.wheretonext': '下一站去哪？',
    'nav.contactus': '联系我们',
    'auth.login': '登录',
    'auth.signup': '注册',

    // 幻灯片 1
    'slide1.title': '您宝贵人生的<br /><strong>"第三幕"</strong>',
    'slide1.desc': '为新中年量身定制的洞察之旅与健康旅游',
    'slide1.tagline': 'Journey with Purpose, Wellness All Around',

    // 幻灯片 2
    'slide2.title': '藏在巷弄里的<br /><strong>釜山故事</strong>',
    'slide2.desc': '甘川文化村——与专业解说员共同深度探访',
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // 幻灯片 3
    'slide3.title': '在静谧中<br /><strong>放下心灵</strong>',
    'slide3.desc': '梵鱼寺、海东龙宫寺——釜山寺院禅修之旅',
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // 幻灯片 4
    'slide4.title': '预算有限<br /><strong>也没关系！</strong>',
    'slide4.desc': '国际市场、富平罐头市场、札嘎其市场——釜山三大市场徒步游',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // 幻灯片 5
    'slide5.title': '铭记伤痛<br /><strong>学习和平</strong>',
    'slide5.desc': '掠夺·避难·重建·和平——釜山黑色旅游',
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // 幻灯片 6
    'slide6.title': '艺术染色的<br /><strong>釜山一日</strong>',
    'slide6.desc': '釜山当代美术馆、釜山双年展——深度探访釜山艺术空间',
    'slide6.tagline': 'Art Flows Through Every Street',

    // 关于我们
    'about.label': 'About Us',
    'about.title': '用全身心感受<br /><strong>釜山之美</strong>',
    'about.desc': '阳光健康旅游提供定制化健康旅行，让您深入缓慢地体验釜山的自然、文化、艺术与历史。漫步、观赏、休憩——遇见属于您的釜山。',
    'stat1.label': '专业项目',
    'stat2.label': '定制旅游',
    'stat3.label': '本地专业旅行社',

    // 项目介绍
    'programs.label': 'Our Programs',
    'programs.title': '健康旅游<br /><strong>项目</strong>',
    'programs.desc': '身心共同休憩的<br />釜山特别旅程',

    // 卡片 1
    'card1.tag': '旅游',
    'card1.title': '釜山近郊游',
    'card1.desc': '探访机张、海云台、影岛等釜山近郊隐藏的宝藏之地。',

    // 卡片 2
    'card2.tag': '文化',
    'card2.title': '甘川文化村解说',
    'card2.desc': '与专业解说员一同聆听甘川文化村的历史、艺术与巷弄故事。',

    // 卡片 3
    'card3.tag': '禅修',
    'card3.title': '寺院之旅',
    'card3.desc': '在梵鱼寺、海东龙宫寺等釜山古刹体验禅修与寺院文化。',

    // 卡片 4
    'card4.tag': '艺术',
    'card4.title': '釜山艺术之旅',
    'card4.desc': '深度探访釜山艺术空间——叮叮艺术村、F1963、釜山当代美术馆。',

    // 卡片 5
    'card5.tag': '美食',
    'card5.title': '市场&炒年糕美食游',
    'card5.desc': '富田市场→利家→桥家→唐纳德——沿釜山市场、海岸与小巷，品味各地炒年糕的故事。',

    // 卡片 6
    'card6.tag': '历史',
    'card6.title': '釜山黑色旅游',
    'card6.desc': '掠夺·避难·重建·和平——实地走访，学习釜山近现代历史。',

    // 卡片 공통
    'card.info': '旅游详情',
    'card.contact': '咨询 →',

    // 联系我们
    'contact.label': 'Contact',
    'contact.title': '开启您的<br /><strong>旅程</strong>',
    'contact.desc': '告诉我们您感兴趣的项目，我们将为您量身定制行程。',
    'contact.address': '釜山西面朱迪斯泰和百货前',

    // 表单
    'form.name': '姓名',
    'form.namePlaceholder': '张三',
    'form.phone': '联系电话',
    'form.phonePlaceholder': '+82-10-0000-0000',
    'form.program': '感兴趣的项目',
    'form.programDefault': '请选择',
    'prog.tour': '釜山近郊游',
    'prog.culture': '甘川文化村解说',
    'prog.art': '釜山艺术之旅',
    'prog.temple': '寺院之旅',
    'prog.market': '市场徒步游',
    'form.message': '咨询内容',
    'form.messagePlaceholder': '请填写希望的日期、人数及特别要求。',
    'form.submit': '发送咨询',
    'form.sending': '发送中...',
    'form.success': '感谢您！我们将尽快与您联系。',
    'form.error': '发生错误，请重试。',

    // 页脚
    'footer.tagline': '从釜山出发的特别健康之旅',
    'footer.about': '关于',
    'footer.programs': '项目',
    'footer.contact': '联系',
    'footer.copyright': '© 2026 阳光健康旅游. All rights reserved.',
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
  zh: {
    programInfo: '项目信息',
    spots: '游览地点',
    courses: '推荐路线',
    tip: '旅行小贴士',
    links: '相关链接',
    source: '资料来源',
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

// 도트 네비게이션 (HTML의 .pdot 버튼에 이벤트 연결)
const pdots = document.querySelectorAll('.pdot');
pdots.forEach(dot => {
  dot.addEventListener('click', () => {
    stopAutoPlay();
    goToSlide(parseInt(dot.dataset.index, 10));
    startAutoPlay();
  });
});

function updateDots() {
  pdots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// 화살표 버튼
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
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
// 서브 페이지 공통 헤더 (홈 헤더와 동일 구조)
// =========================================
function makeSubPageHeader(BASE, activeKey) {
  const NL = '\n';
  const base = `font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;`;
  const act  = `font-size:0.95rem;font-weight:700;letter-spacing:0.04em;color:#1a2e2a;text-decoration:none;border-bottom:2px solid #e8a04a;padding-bottom:2px;`;

  const navItems = [
    { key: 'about',       label: '웰니스 소개',    href: BASE + '/#about' },
    { key: 'programs',    label: '프로그램 소개',   href: BASE + '/#programs' },
    { key: 'contact',     label: '견적의뢰 및 문의', href: BASE + '/#contact' },
    { key: 'wheretonext', label: 'Where to Next?', href: BASE + '/#' },
    { key: 'contactus',   label: 'Contact Us',     href: BASE + '/#contact' },
  ];

  const navHtml = navItems.map(n =>
    `<a href="${n.href}" target="_parent" style="${n.key === activeKey ? act : base}">${n.label}</a>`
  ).join(NL + '          ');

  return `
    <header style="position:fixed;top:0;left:0;width:100%;height:80px;background:#ffffff;box-shadow:0 1px 16px rgba(0,0,0,0.06);z-index:1000;font-family:'Noto Sans KR',sans-serif;">
      <div style="height:80px;max-width:1200px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:space-between;">
        <a href="${BASE}" target="_parent" style="text-decoration:none;display:flex;flex-direction:column;gap:1px;">
          <span style="font-size:1.05rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#111111;">Sunshine Wellness</span>
          <span style="font-size:0.6rem;letter-spacing:0.14em;color:#888888;">선샤인 웰니스</span>
        </a>
        <nav style="display:flex;gap:32px;align-items:center;">
          ${navHtml}
        </nav>
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:#888888;">
            <a href="#" style="color:#888888;text-decoration:none;">로그인</a>
            <span style="opacity:.5;">·</span>
            <a href="#" style="color:#888888;text-decoration:none;">회원가입</a>
          </div>
          <div style="display:flex;gap:4px;">
            <a href="${BASE}" target="_parent" style="width:34px;height:34px;border-radius:50%;border:1px solid #222222;background:#222222;color:#ffffff;font-size:0.75rem;font-weight:600;letter-spacing:0.04em;display:flex;align-items:center;justify-content:center;text-decoration:none;">홈</a>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;font-family:'Noto Sans KR',sans-serif;">KOR</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;font-family:'Noto Sans KR',sans-serif;">ENG</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;font-family:'Noto Sans KR',sans-serif;">CH</button>
          </div>
        </div>
      </div>
    </header>`;
}

// =========================================
// Where to Next? 게시판 새 창
// =========================================
function openWhereToNextPage() {
  const BASE = 'https://www.sunshinewellness.co.kr';

  const samplePosts = [
    { id: 8, title: '제주도 웰니스 여행 후기 — 사찰 스테이가 최고였어요', date: '05-22' },
    { id: 7, title: '60대에 혼자 부산 여행, 선샤인 웰니스 덕분에 잊지 못할 경험', date: '05-20' },
    { id: 6, title: '다음 행선지 고민 중 — 교토 vs 부산, 어디가 좋을까요?', date: '05-18' },
    { id: 5, title: '감천문화마을 투어 다녀왔습니다! 해설사 선생님이 너무 좋았어요', date: '05-15' },
    { id: 4, title: '부산 시장 투어 후기 — 자갈치에서 활어회 먹은 게 아직도 생각나요', date: '05-12' },
    { id: 3, title: '해동용궁사 새벽 예불 체험, 삶이 바뀌는 느낌이었습니다', date: '05-08' },
    { id: 2, title: '신중년 여행 동행 구합니다 — 6월 부산 근교 투어 같이 가실 분?', date: '05-03' },
    { id: 1, title: '선샤인 웰니스 첫 번째 후기 — 기대 이상이었습니다 :)', date: '04-28' },
  ];

  const header = `
    <header style="position:fixed;top:0;left:0;width:100%;height:80px;background:#ffffff;box-shadow:0 1px 16px rgba(0,0,0,0.06);z-index:1000;font-family:'Noto Sans KR',sans-serif;">
      <div style="height:80px;max-width:1200px;margin:0 auto;padding:0 40px;display:flex;align-items:center;justify-content:space-between;">
        <a href="${BASE}" target="_parent" style="text-decoration:none;display:flex;flex-direction:column;gap:1px;">
          <span style="font-size:1.05rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#111111;">Sunshine Wellness</span>
          <span style="font-size:0.6rem;letter-spacing:0.14em;color:#888888;">선샤인 웰니스</span>
        </a>
        <nav style="display:flex;gap:28px;align-items:center;">
          <a href="${BASE}/#about"    target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">웰니스 소개</a>
          <a href="${BASE}/#programs" target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">프로그램 소개</a>
          <a href="${BASE}/#contact"  target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">견적의뢰 및 문의</a>
          <a href="#" style="font-size:0.95rem;font-weight:700;color:#1a2e2a;text-decoration:none;border-bottom:2px solid #e8a04a;padding-bottom:2px;">Where to Next?</a>
          <a href="${BASE}/#contact"  target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">Contact Us</a>
        </nav>
        <div style="display:flex;align-items:center;gap:16px;">
          <div style="display:flex;gap:6px;font-size:0.88rem;color:#888;">
            <a href="#" style="color:#888;text-decoration:none;">로그인</a>
            <span style="opacity:.4;">·</span>
            <a href="#" style="color:#888;text-decoration:none;">회원가입</a>
          </div>
          <a href="${BASE}" target="_parent" style="width:34px;height:34px;border-radius:50%;border:1px solid #222;background:#222;color:#fff;font-size:0.75rem;font-weight:600;display:flex;align-items:center;justify-content:center;text-decoration:none;">홈</a>
        </div>
      </div>
    </header>`;

  const postsJson = JSON.stringify(samplePosts);

  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Where to Next? — 선샤인 웰니스</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" rel="stylesheet"/>
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Noto Sans KR',sans-serif;background:#f5f5f3;color:#222;}
    a{text-decoration:none;color:inherit;}
    .page-wrap{max-width:860px;margin:0 auto;padding:40px 24px 80px;}
    /* 페이지 타이틀 */
    .board-hero{background:#1a2e2a;color:#fff;padding:48px 0 36px;}
    .board-hero-inner{max-width:860px;margin:0 auto;padding:0 24px;}
    .board-hero p{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8a04a;margin-bottom:10px;}
    .board-hero h1{font-size:clamp(22px,4vw,32px);font-weight:800;line-height:1.3;}
    .board-hero span{font-weight:300;opacity:.7;}
    /* 툴바 */
    .board-toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding:16px 0 10px;}
    .board-count{font-size:13px;color:#666;}
    .board-count strong{color:#1a2e2a;}
    .btn-write{background:#1a2e2a;color:#fff;border:none;padding:9px 20px;font-size:13px;font-weight:600;border-radius:6px;cursor:pointer;font-family:'Noto Sans KR',sans-serif;}
    .btn-write:hover{background:#243d38;}
    /* 테이블 */
    .board-table{width:100%;border-collapse:collapse;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 1px 8px rgba(0,0,0,0.06);}
    .board-table thead tr{background:#f0eeea;border-bottom:2px solid #e0ddd8;}
    .board-table th{padding:13px 16px;font-size:13px;font-weight:700;color:#555;text-align:center;}
    .board-table th.col-title{text-align:left;}
    .board-table td{padding:14px 16px;font-size:14px;border-bottom:1px solid #f0eeea;vertical-align:middle;}
    .board-table td.col-no{text-align:center;color:#aaa;font-size:13px;width:60px;}
    .board-table td.col-title a{color:#1a2e2a;font-weight:500;line-height:1.5;}
    .board-table td.col-title a:hover{color:#e8a04a;}
    .board-table td.col-date{text-align:center;color:#999;font-size:13px;width:90px;}
    .board-table tbody tr:last-child td{border-bottom:none;}
    .board-table tbody tr:hover td{background:#faf9f7;}
    .board-empty{text-align:center;padding:60px 0;color:#aaa;font-size:14px;}
    /* 페이지네이션 */
    .board-paging{display:flex;justify-content:center;align-items:center;gap:6px;margin-top:28px;}
    .board-paging a,.board-paging span{width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:6px;font-size:13px;color:#555;border:1px solid #e0ddd8;background:#fff;}
    .board-paging span.active{background:#1a2e2a;color:#fff;border-color:#1a2e2a;font-weight:700;}
    .board-paging a:hover{background:#f5f5f3;}
    /* 검색 */
    .board-search{display:flex;justify-content:center;margin-top:32px;}
    .board-search select{padding:9px 12px;font-size:13px;border:1px solid #ddd;border-right:none;border-radius:6px 0 0 6px;background:#fff;font-family:'Noto Sans KR',sans-serif;color:#555;}
    .board-search input{padding:9px 14px;font-size:13px;border:1px solid #ddd;width:240px;font-family:'Noto Sans KR',sans-serif;outline:none;}
    .board-search button{padding:9px 18px;font-size:13px;background:#1a2e2a;color:#fff;border:none;border-radius:0 6px 6px 0;cursor:pointer;font-family:'Noto Sans KR',sans-serif;font-weight:600;}
    .board-search button:hover{background:#243d38;}
    /* 글쓰기 폼 오버레이 */
    .write-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:2000;align-items:center;justify-content:center;}
    .write-overlay.open{display:flex;}
    .write-box{background:#fff;border-radius:14px;padding:36px 32px;width:100%;max-width:520px;margin:16px;}
    .write-box h2{font-size:18px;font-weight:700;color:#1a2e2a;margin-bottom:24px;}
    .write-field{margin-bottom:16px;}
    .write-field label{display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;}
    .write-field input,.write-field textarea{width:100%;padding:10px 14px;font-size:14px;border:1px solid #ddd;border-radius:8px;font-family:'Noto Sans KR',sans-serif;outline:none;}
    .write-field input:focus,.write-field textarea:focus{border-color:#1a2e2a;}
    .write-field textarea{height:120px;resize:vertical;}
    .write-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:8px;}
    .btn-cancel{padding:10px 22px;font-size:13px;font-weight:600;color:#666;background:#f5f5f3;border:1px solid #ddd;border-radius:8px;cursor:pointer;font-family:'Noto Sans KR',sans-serif;}
    .btn-submit{padding:10px 22px;font-size:13px;font-weight:600;color:#fff;background:#1a2e2a;border:none;border-radius:8px;cursor:pointer;font-family:'Noto Sans KR',sans-serif;}
    .btn-submit:hover{background:#243d38;}
  </style>
</head>
<body>
  ${header}

  <div style="padding-top:80px;">
    <div class="board-hero">
      <div class="board-hero-inner">
        <p>Community</p>
        <h1>Where to Next? <span>— 다음 여행지</span></h1>
      </div>
    </div>

    <div class="page-wrap">
      <div class="board-toolbar">
        <p class="board-count">총 <strong id="totalCount">0</strong>건</p>
        <button class="btn-write" onclick="openWriteForm()">글쓰기</button>
      </div>

      <table class="board-table">
        <thead>
          <tr>
            <th style="width:60px;">NO.</th>
            <th class="col-title">제목</th>
            <th style="width:90px;">날짜</th>
          </tr>
        </thead>
        <tbody id="postList"></tbody>
      </table>

      <div class="board-paging" id="paging"></div>

      <div class="board-search">
        <select id="searchType">
          <option value="title">제목내용</option>
          <option value="author">글쓴이</option>
        </select>
        <input type="text" id="searchInput" placeholder="검색어를 입력하세요" onkeydown="if(event.key==='Enter')doSearch()"/>
        <button onclick="doSearch()">검색</button>
      </div>
    </div>
  </div>

  <!-- 글쓰기 오버레이 -->
  <div class="write-overlay" id="writeOverlay">
    <div class="write-box">
      <h2>글쓰기</h2>
      <div class="write-field">
        <label>작성자</label>
        <input type="text" id="wAuthor" placeholder="닉네임"/>
      </div>
      <div class="write-field">
        <label>제목</label>
        <input type="text" id="wTitle" placeholder="제목을 입력하세요"/>
      </div>
      <div class="write-field">
        <label>내용</label>
        <textarea id="wContent" placeholder="내용을 입력하세요"></textarea>
      </div>
      <div class="write-actions">
        <button class="btn-cancel" onclick="closeWriteForm()">취소</button>
        <button class="btn-submit" onclick="submitPost()">등록</button>
      </div>
    </div>
  </div>

  <script>
    const POSTS_PER_PAGE = 15;
    let allPosts = ${postsJson};
    let filtered = [...allPosts];
    let currentPage = 1;

    function formatDate(d){ return d instanceof Date ? (d.getMonth()+1).toString().padStart(2,'0')+'-'+d.getDate().toString().padStart(2,'0') : d; }

    function renderBoard(){
      const list = document.getElementById('postList');
      const total = document.getElementById('totalCount');
      total.textContent = filtered.length;

      const start = (currentPage-1)*POSTS_PER_PAGE;
      const page  = filtered.slice(start, start+POSTS_PER_PAGE);

      if(!page.length){
        list.innerHTML = '<tr><td colspan="3" class="board-empty">게시글이 없습니다.</td></tr>';
      } else {
        list.innerHTML = page.map((p,i) =>
          '<tr>' +
          '<td class="col-no">'+(filtered.length - start - i)+'</td>' +
          '<td class="col-title"><a href="#">'+p.title+'</a></td>' +
          '<td class="col-date">'+formatDate(p.date)+'</td>' +
          '</tr>'
        ).join('');
      }
      renderPaging();
    }

    function renderPaging(){
      const totalPages = Math.max(1, Math.ceil(filtered.length/POSTS_PER_PAGE));
      const pg = document.getElementById('paging');
      let html = '';
      if(currentPage>1) html += '<a href="#" onclick="goPage('+(currentPage-1)+');return false;">&#8249;</a>';
      for(let i=1;i<=totalPages;i++){
        if(i===currentPage) html += '<span class="active">'+i+'</span>';
        else html += '<a href="#" onclick="goPage('+i+');return false;">'+i+'</a>';
      }
      if(currentPage<totalPages) html += '<a href="#" onclick="goPage('+(currentPage+1)+');return false;">&#8250;</a>';
      pg.innerHTML = html;
    }

    function goPage(p){ currentPage=p; renderBoard(); window.scrollTo(0,0); }

    function doSearch(){
      const q = document.getElementById('searchInput').value.trim().toLowerCase();
      filtered = q ? allPosts.filter(p=>p.title.toLowerCase().includes(q)) : [...allPosts];
      currentPage=1;
      renderBoard();
    }

    function openWriteForm(){ document.getElementById('writeOverlay').classList.add('open'); }
    function closeWriteForm(){ document.getElementById('writeOverlay').classList.remove('open'); }

    function submitPost(){
      const title  = document.getElementById('wTitle').value.trim();
      const author = document.getElementById('wAuthor').value.trim();
      if(!title){ alert('제목을 입력해주세요.'); return; }
      const today = new Date();
      const newPost = {
        id: allPosts.length + 1,
        title: title,
        author: author || '익명',
        date: formatDate(today),
      };
      allPosts.unshift(newPost);
      filtered = [...allPosts];
      currentPage = 1;
      renderBoard();
      closeWriteForm();
      document.getElementById('wTitle').value='';
      document.getElementById('wAuthor').value='';
      document.getElementById('wContent').value='';
    }

    document.getElementById('writeOverlay').addEventListener('click', function(e){
      if(e.target===this) closeWriteForm();
    });

    renderBoard();
  </script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'noopener,noreferrer');
  if (win) win.addEventListener('unload', () => URL.revokeObjectURL(url), { once: true });
}

// =========================================
// Contact Us 새 창
// =========================================
function openContactPage() {
  const BASE = 'https://www.sunshinewellness.co.kr';

  const navHtml = `
    <header style="position:fixed;top:0;left:0;width:100%;height:80px;background:#fff;box-shadow:0 1px 16px rgba(0,0,0,0.06);z-index:1000;">
      <div style="height:80px;width:100%;padding:0 64px;display:flex;align-items:center;justify-content:space-between;">
        <a href="${BASE}" target="_parent" style="text-decoration:none;display:flex;flex-direction:column;gap:1px;">
          <span style="font-size:1.05rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#111;">Sunshine Wellness</span>
          <span style="font-size:0.6rem;letter-spacing:0.14em;color:#888;">선샤인 웰니스</span>
        </a>
        <nav style="display:flex;gap:32px;align-items:center;">
          <a href="${BASE}/#about"    target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">웰니스 소개</a>
          <a href="${BASE}/#programs" target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">프로그램 소개</a>
          <a href="${BASE}/#contact"  target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">견적의뢰 및 문의</a>
          <a href="${BASE}"           target="_parent" style="font-size:0.95rem;font-weight:500;color:#222;text-decoration:none;">Where to Next?</a>
          <a href="#" style="font-size:0.95rem;font-weight:700;color:#1a2e2a;text-decoration:none;border-bottom:2px solid #e8a04a;padding-bottom:2px;">Contact Us</a>
        </nav>
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:#888;">
            <a href="#" style="color:#888;text-decoration:none;">로그인</a><span style="opacity:.5;">·</span>
            <a href="#" style="color:#888;text-decoration:none;">회원가입</a>
          </div>
          <div style="display:flex;gap:4px;">
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">KOR</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">ENG</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">CH</button>
          </div>
        </div>
      </div>
    </header>`;

  const body = `${navHtml}
  <div style="padding-top:80px;min-height:100vh;background:#f5f5f3;">

    <!-- 히어로 -->
    <div style="background:#1a2e2a;padding:56px 64px 48px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8a04a;margin-bottom:10px;">Contact Us</p>
      <h1 style="font-size:clamp(24px,4vw,38px);font-weight:800;color:#fff;line-height:1.3;margin-bottom:12px;">여행을 <span style="font-weight:300;">시작해보세요</span></h1>
      <p style="font-size:15px;color:rgba(255,255,255,.65);max-width:560px;line-height:1.8;">원하는 프로그램을 알려주시면 맞춤 일정을 안내해 드립니다.<br/>선샤인 웰니스가 당신만의 부산 여행을 함께 설계합니다.</p>
    </div>

    <!-- 본문 2열 -->
    <div style="max-width:1100px;margin:0 auto;padding:60px 40px 80px;display:grid;grid-template-columns:1fr 1.4fr;gap:48px;align-items:start;">

      <!-- 왼쪽: 회사 정보 -->
      <div>
        <h2 style="font-size:20px;font-weight:700;color:#1a2e2a;margin-bottom:28px;">선샤인 웰니스</h2>

        <div style="display:flex;flex-direction:column;gap:18px;margin-bottom:36px;">
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:20px;line-height:1;margin-top:2px;">📍</span>
            <div>
              <p style="font-size:12px;font-weight:700;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">주소</p>
              <p style="font-size:14px;color:#333;line-height:1.6;">부산광역시 부산진구<br/>서면 쥬디스태화 백화점 앞</p>
            </div>
          </div>
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:20px;line-height:1;margin-top:2px;">📞</span>
            <div>
              <p style="font-size:12px;font-weight:700;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">전화</p>
              <p style="font-size:14px;color:#333;">010-XXXX-XXXX</p>
            </div>
          </div>
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:20px;line-height:1;margin-top:2px;">✉️</span>
            <div>
              <p style="font-size:12px;font-weight:700;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">이메일</p>
              <p style="font-size:14px;color:#333;">healthylee7@gmail.com</p>
            </div>
          </div>
          <div style="display:flex;gap:14px;align-items:flex-start;">
            <span style="font-size:20px;line-height:1;margin-top:2px;">🕐</span>
            <div>
              <p style="font-size:12px;font-weight:700;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px;">운영시간</p>
              <p style="font-size:14px;color:#333;line-height:1.7;">평일 09:00 – 18:00<br/><span style="font-size:13px;color:#aaa;">점심 12:00 – 13:00 제외</span></p>
            </div>
          </div>
        </div>

        <div style="border-top:1px solid #e0e0e0;padding-top:24px;">
          <p style="font-size:12px;font-weight:700;color:#888;letter-spacing:.06em;text-transform:uppercase;margin-bottom:14px;">SNS</p>
          <div style="display:flex;gap:10px;">
            <a href="https://instagram.com" target="_blank" style="display:flex;align-items:center;gap:7px;padding:8px 16px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;font-size:13px;font-weight:600;color:#333;text-decoration:none;">📷 Instagram</a>
            <a href="https://blog.naver.com" target="_blank" style="display:flex;align-items:center;gap:7px;padding:8px 16px;background:#fff;border:1px solid #e0e0e0;border-radius:8px;font-size:13px;font-weight:600;color:#333;text-decoration:none;">📝 Blog</a>
          </div>
        </div>
      </div>

      <!-- 오른쪽: 문의 폼 -->
      <div style="background:#fff;border-radius:18px;padding:40px 36px;box-shadow:0 2px 24px rgba(0,0,0,0.07);">
        <h3 style="font-size:18px;font-weight:700;color:#1a2e2a;margin-bottom:6px;">견적 의뢰 / 문의하기</h3>
        <p style="font-size:13px;color:#888;margin-bottom:28px;">아래 양식을 작성해 주시면 빠르게 답변드리겠습니다.</p>
        <form action="https://formspree.io/f/healthylee7@gmail.com" method="POST" style="display:flex;flex-direction:column;gap:18px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">이름 *</label>
              <input name="name" type="text" placeholder="홍길동" required style="width:100%;padding:11px 14px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:'Noto Sans KR',sans-serif;outline:none;" onfocus="this.style.borderColor='#1a2e2a'" onblur="this.style.borderColor='#e0e0e0'"/>
            </div>
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">연락처 *</label>
              <input name="phone" type="tel" placeholder="010-0000-0000" required style="width:100%;padding:11px 14px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:'Noto Sans KR',sans-serif;outline:none;" onfocus="this.style.borderColor='#1a2e2a'" onblur="this.style.borderColor='#e0e0e0'"/>
            </div>
          </div>
          <div>
            <label style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">관심 프로그램</label>
            <select name="program" style="width:100%;padding:11px 14px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:'Noto Sans KR',sans-serif;outline:none;background:#fff;" onfocus="this.style.borderColor='#1a2e2a'" onblur="this.style.borderColor='#e0e0e0'">
              <option value="">선택해주세요</option>
              <option>부산 근교 투어</option>
              <option>감천문화마을 해설</option>
              <option>사찰 투어</option>
              <option>부산 예술 여행</option>
              <option>시장 &amp; 떡볶이 미식 투어</option>
              <option>부산 다크 투어리즘</option>
              <option>기타 문의</option>
            </select>
          </div>
          <div>
            <label style="display:block;font-size:13px;font-weight:600;color:#444;margin-bottom:6px;">문의 내용</label>
            <textarea name="message" placeholder="희망 날짜, 인원, 요청 사항을 적어주세요." rows="5" style="width:100%;padding:11px 14px;border:1px solid #e0e0e0;border-radius:8px;font-size:14px;font-family:'Noto Sans KR',sans-serif;resize:vertical;outline:none;" onfocus="this.style.borderColor='#1a2e2a'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
          </div>
          <button type="submit" style="width:100%;padding:14px;background:#1a2e2a;color:#fff;font-size:15px;font-weight:700;font-family:'Noto Sans KR',sans-serif;border:none;border-radius:10px;cursor:pointer;letter-spacing:.04em;transition:background .2s;" onmouseover="this.style.background='#e8a04a'" onmouseout="this.style.background='#1a2e2a'">문의 보내기</button>
        </form>
      </div>

    </div>
  </div>`;

  const css = `
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Noto Sans KR',sans-serif;color:#222;background:#f5f5f3;}
    a{text-decoration:none;color:inherit;}
    @media(max-width:780px){
      div[style*="grid-template-columns:1fr 1.4fr"]{grid-template-columns:1fr!important;}
      header div[style*="padding:0 64px"]{padding:0 20px!important;}
      nav{display:none!important;}
      div[style*="padding:56px 64px"]{padding:40px 24px 36px!important;}
    }
  `;

  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Contact Us — 선샤인 웰니스</title><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/><style>${css}</style></head><body>${body}</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'noopener,noreferrer');
  if (win) win.addEventListener('unload', () => URL.revokeObjectURL(url), { once: true });
}

// =========================================
// 프로그램 소개 새 창
// =========================================
function openProgramsPage() {
  const BASE = 'https://www.sunshinewellness.co.kr';
  const lang = currentLang || 'ko';
  const t = translations[lang] || translations.ko;

  const IMGS = {
    tour:    `${BASE}/images/gwangan-bridge-haeundae-busan-korea.jpg`,
    culture: `${BASE}/images/51315836390_c2d8b2c7e2_o.jpg`,
    temple:  `${BASE}/images/haedong-yonggungsa-temple-haeundae-sea-busan-buddhist-temple-busan-south-korea.jpg`,
    art:     `${BASE}/images/(BB2024)부산현대미술관_외부.jpg`,
    market:  `${BASE}/images/Inside_Jagalchi_Fish_Market,_Busan.jpg`,
    history: `${BASE}/images/sulee-busan-tower-825463.jpg`,
  };

  const cards = [
    { key:'tour',    tag:t['card1.tag'], title:t['card1.title'], desc:t['card1.desc'] },
    { key:'culture', tag:t['card2.tag'], title:t['card2.title'], desc:t['card2.desc'] },
    { key:'temple',  tag:t['card3.tag'], title:t['card3.title'], desc:t['card3.desc'] },
    { key:'art',     tag:t['card4.tag'], title:t['card4.title'], desc:t['card4.desc'] },
    { key:'market',  tag:t['card5.tag'], title:t['card5.title'], desc:t['card5.desc'] },
    { key:'history', tag:t['card6.tag'], title:t['card6.title'], desc:t['card6.desc'] },
  ].map(c => {
    const pd = (programData[c.key] && programData[c.key][lang]) || (programData[c.key] && programData[c.key].ko) || {};
    return { ...c, duration: pd.duration || '당일~1박2일', people: pd.maxPeople || '소규모' };
  });

  const cardHtml = cards.map(c => `
    <div class="prog-card">
      <div class="prog-img" style="background-image:url('${IMGS[c.key]}');">
        <span class="prog-tag">${c.tag}</span>
      </div>
      <div class="prog-body">
        <h3 class="prog-title">${c.title}</h3>
        <p class="prog-desc">${c.desc}</p>
        <div class="prog-meta">
          <span>⏱ ${c.duration}</span>
          <span>👥 ${c.people}</span>
        </div>
        <div class="prog-btns">
          <a href="${BASE}/#programs" target="_parent" class="btn-outline">여행 정보</a>
          <a href="${BASE}/#contact"  target="_parent" class="btn-solid">문의하기 →</a>
        </div>
      </div>
    </div>`).join('');

  const navLink = s => `font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222;text-decoration:none;`;
  const header = `
    <header style="position:fixed;top:0;left:0;width:100%;height:80px;background:#fff;box-shadow:0 1px 16px rgba(0,0,0,0.06);z-index:1000;">
      <div style="height:80px;width:100%;padding:0 64px;display:flex;align-items:center;justify-content:space-between;">
        <a href="${BASE}" target="_parent" style="text-decoration:none;display:flex;flex-direction:column;gap:1px;">
          <span style="font-size:1.05rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#111;">Sunshine Wellness</span>
          <span style="font-size:0.6rem;letter-spacing:0.14em;color:#888;">선샤인 웰니스</span>
        </a>
        <nav style="display:flex;gap:32px;align-items:center;">
          <a href="${BASE}/#about"    target="_parent" style="${navLink()}">웰니스 소개</a>
          <a href="${BASE}/#programs" target="_parent" style="${navLink()}font-weight:700;border-bottom:2px solid #1a2e2a;padding-bottom:2px;">프로그램 소개</a>
          <a href="${BASE}/#contact"  target="_parent" style="${navLink()}">견적의뢰 및 문의</a>
          <a href="${BASE}"           target="_parent" style="${navLink()}">Where to Next?</a>
          <a href="${BASE}/#contact"  target="_parent" style="${navLink()}">Contact Us</a>
        </nav>
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:#888;">
            <a href="#" style="color:#888;text-decoration:none;">로그인</a><span style="opacity:.5;">·</span>
            <a href="#" style="color:#888;text-decoration:none;">회원가입</a>
          </div>
          <div style="display:flex;gap:4px;">
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">KOR</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">ENG</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888;font-size:0.7rem;font-weight:600;cursor:pointer;">CH</button>
          </div>
        </div>
      </div>
    </header>`;

  const body = `${header}
    <div style="padding-top:80px;background:#f5f5f3;min-height:100vh;">
      <div style="max-width:1160px;margin:0 auto;padding:64px 40px 80px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8a04a;margin-bottom:12px;">Our Programs</p>
        <h2 style="font-size:clamp(28px,4vw,42px);font-weight:800;color:#1a2e2a;line-height:1.25;margin-bottom:10px;">웰니스 여행 <span style="font-weight:300;">프로그램</span></h2>
        <p style="font-size:15px;color:#666;margin-bottom:52px;line-height:1.8;">몸과 마음이 함께 쉬어가는 부산의 특별한 여정.<br/>신중년의 배움과 성장을 위한 맞춤형 웰니스 투어입니다.</p>
        <div class="grid">${cardHtml}</div>
      </div>
    </div>`;

  const css = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans KR', sans-serif; color: #222; background: #f5f5f3; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .prog-card { background: #fff; border-radius: 18px; overflow: hidden; box-shadow: 0 2px 16px rgba(0,0,0,0.07); display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
    .prog-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.12); }
    .prog-img { height: 200px; background-size: cover; background-position: center; position: relative; }
    .prog-img::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom, rgba(0,0,0,.15) 0%, rgba(0,0,0,.35) 100%); }
    .prog-tag { position: absolute; top: 16px; left: 16px; z-index:1; background: #e8a04a; color: #fff; font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; }
    .prog-body { padding: 24px 22px 22px; display: flex; flex-direction: column; flex: 1; gap: 12px; }
    .prog-title { font-size: 17px; font-weight: 700; color: #1a2e2a; line-height: 1.4; }
    .prog-desc { font-size: 13.5px; color: #555; line-height: 1.85; flex: 1; }
    .prog-meta { display: flex; gap: 12px; font-size: 12.5px; color: #888; }
    .prog-btns { display: flex; gap: 10px; margin-top: 4px; }
    .btn-outline { flex:1; text-align:center; padding:9px 0; font-size:13px; font-weight:600; color:#1a2e2a; border:1.5px solid #1a2e2a; border-radius:8px; text-decoration:none; transition: background .2s, color .2s; }
    .btn-outline:hover { background:#1a2e2a; color:#fff; }
    .btn-solid { flex:1; text-align:center; padding:9px 0; font-size:13px; font-weight:600; color:#fff; background:#1a2e2a; border-radius:8px; text-decoration:none; transition: background .2s; }
    .btn-solid:hover { background:#e8a04a; }
    @media (max-width: 900px) { .grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 580px) { .grid { grid-template-columns: 1fr; } header div[style*="padding:0 64px"] { padding: 0 20px !important; } nav { display: none !important; } }
  `;

  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>프로그램 소개 — 선샤인 웰니스</title><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" rel="stylesheet"/><style>${css}</style></head><body>${body}</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'noopener,noreferrer');
  if (win) win.addEventListener('unload', () => URL.revokeObjectURL(url), { once: true });
}

// =========================================
// 웰니스 소개 새 창
// =========================================
function openAboutPage() {
  const BASE = 'https://www.sunshinewellness.co.kr';

  const header = `
    <header style="position:fixed;top:0;left:0;width:100%;height:80px;background:#ffffff;box-shadow:0 1px 16px rgba(0,0,0,0.06);z-index:1000;font-family:'Noto Sans KR',sans-serif;">
      <div style="height:80px;width:100%;padding:0 64px;display:flex;align-items:center;justify-content:space-between;">
        <a href="${BASE}" target="_parent" style="text-decoration:none;display:flex;flex-direction:column;gap:1px;">
          <span style="font-size:1.05rem;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;color:#111111;">Sunshine Wellness</span>
          <span style="font-size:0.6rem;letter-spacing:0.14em;color:#888888;">선샤인 웰니스</span>
        </a>
        <nav style="display:flex;gap:32px;align-items:center;">
          <a href="${BASE}/#about"    target="_parent" style="font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;">웰니스 소개</a>
          <a href="${BASE}/#programs" target="_parent" style="font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;">프로그램 소개</a>
          <a href="${BASE}/#contact"  target="_parent" style="font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;">견적의뢰 및 문의</a>
          <a href="${BASE}"           target="_parent" style="font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;">Where to Next?</a>
          <a href="${BASE}/#contact"  target="_parent" style="font-size:0.95rem;font-weight:500;letter-spacing:0.04em;color:#222222;text-decoration:none;">Contact Us</a>
        </nav>
        <div style="display:flex;align-items:center;gap:20px;">
          <div style="display:flex;align-items:center;gap:8px;font-size:0.88rem;color:#888888;">
            <a href="#" target="_parent" style="color:#888888;text-decoration:none;">로그인</a>
            <span style="opacity:.5;">·</span>
            <a href="#" target="_parent" style="color:#888888;text-decoration:none;">회원가입</a>
          </div>
          <div style="display:flex;gap:4px;">
            <a href="${BASE}" target="_parent" style="width:34px;height:34px;border-radius:50%;border:1px solid #222222;background:#222222;color:#ffffff;font-size:0.75rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;display:flex;align-items:center;justify-content:center;text-decoration:none;">홈</a>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;">KOR</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;">ENG</button>
            <button style="width:34px;height:34px;border-radius:50%;border:1px solid #e0e0e0;background:transparent;color:#888888;font-size:0.7rem;font-weight:600;letter-spacing:0.04em;cursor:pointer;">CH</button>
          </div>
        </div>
      </div>
    </header>`;

  // 1. Hero — 다크그린 + 숫자 스탯
  const sec1 = `
    <section style="background:#1a2e2a;padding:100px 40px 80px;text-align:center;">
      <div style="max-width:680px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,0.38);margin-bottom:28px;">Sunshine Wellness</p>
        <h1 style="font-size:clamp(28px,5vw,46px);font-weight:800;line-height:1.25;color:#fff;margin-bottom:28px;">가치있는 당신의 인생<br/>제 3막을 함께합니다</h1>
        <p style="font-size:16px;color:rgba(255,255,255,0.6);line-height:1.9;max-width:480px;margin:0 auto;">신중년의 배움과 성장, 몸과 마음의 균형을 지원하는<br/>맞춤형 웰니스 여행 전문 여행사입니다.</p>
        <div style="margin-top:56px;display:flex;justify-content:center;align-items:center;">
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">6</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">전문 프로그램</span>
          </div>
          <div style="width:1px;height:36px;background:rgba(255,255,255,0.15);"></div>
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">100%</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">맞춤형 투어</span>
          </div>
          <div style="width:1px;height:36px;background:rgba(255,255,255,0.15);"></div>
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">부산</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">로컬 전문</span>
          </div>
        </div>
      </div>
    </section>`;

  // 2. Who We Are — 2단 레이아웃 + 인용구
  const sec2 = `
    <section style="background:#fff;padding:88px 40px;">
      <div style="max-width:920px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;">
        <div>
          <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3B6259;margin-bottom:18px;">Who We Are</p>
          <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#1a2e2a;line-height:1.35;">단순한 여행을 넘어,<br/>인생의<br/>동반자가 되겠습니다</h2>
        </div>
        <div>
          <p style="font-size:15px;color:#555;line-height:1.95;margin-bottom:20px;">선샤인 웰니스는 여행이 단순한 휴식이 아니라 인생의 의미를 찾고 성장하는 시간이 될 수 있다고 믿습니다.</p>
          <p style="font-size:15px;color:#555;line-height:1.95;">부산의 자연·문화·역사와 깊이 만나는 경험이 삶에 새로운 활력을 불어넣어 줍니다. 웰니스와 문화 체험을 결합한 독창적인 프로그램으로 몸과 마음의 균형을 되찾도록 돕겠습니다.</p>
          <blockquote style="margin-top:32px;padding:20px 24px;background:#f5f5f3;border-left:3px solid #1a2e2a;border-radius:0 8px 8px 0;">
            <p style="font-size:14px;font-weight:600;color:#1a2e2a;line-height:1.75;font-style:italic;">"여행의 모든 순간이 의미 있고 가치 있게 완성되도록,<br/>선샤인 웰니스는 진심 어린 동반자가 되겠습니다."</p>
          </blockquote>
        </div>
      </div>
    </section>`;

  // 3. For You — 번호형 카드 4개
  const forYouCards = [
    ['지속적인 성장', '은퇴 후에도 배움을 멈추지 않고, 새로운 경험으로 지적·정서적 성장을 이어가고 싶은 분께 맞춤 여정을 제안합니다.'],
    ['삶의 균형 회복', '오랜 시간 타인을 위해 살아온 분들이 자신을 위한 시간을 되찾고, 몸과 마음의 균형을 회복하는 여행입니다.'],
    ['의미의 재발견', '인생 3막을 어떻게 살아갈지 고민하는 분들과 부산의 깊은 이야기 속에서 새로운 방향을 찾아갑니다.'],
    ['의미 있는 인연', '같은 가치를 공유하는 동반자들과 함께 걷고 이야기하며, 서로의 경험을 나누는 소규모 그룹 여행입니다.'],
  ].map(([t, d], i) => `
    <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px 24px;">
      <span style="display:block;font-size:11px;font-weight:700;color:rgba(255,255,255,0.28);letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px;">0${i + 1}</span>
      <h3 style="font-size:16px;font-weight:700;color:#fff;margin-bottom:10px;line-height:1.4;">${t}</h3>
      <p style="font-size:13px;color:rgba(255,255,255,0.58);line-height:1.85;">${d}</p>
    </div>`).join('');

  const sec3 = `
    <section style="background:#1a2e2a;padding:88px 40px;">
      <div style="max-width:920px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,0.36);margin-bottom:18px;">For You</p>
        <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#fff;margin-bottom:12px;">40~60대 신중년을 위해<br/>설계된 여행</h2>
        <p style="font-size:15px;color:rgba(255,255,255,0.56);margin-bottom:48px;line-height:1.8;">시간과 여유가 생긴 지금, 진정한 나를 찾는 여정을 시작해보세요.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">${forYouCards}</div>
      </div>
    </section>`;

  // 4. Our Promise — 번호 카드 3개, 그린 상단선
  const promiseCards = [
    ['01', '즐길거리', '배움과 여가가 함께하는 여행', '역사·문화·예술·자연을 깊이 탐방하는 웰니스 여행. 단순 관광이 아닌 진정한 체험으로 설계합니다.'],
    ['02', '먹거리', '건강한 부산의 맛', '여행 중 건강을 지키는 로컬 음식과 건강 간식으로 몸이 활기차게 여정을 이어갈 수 있도록 돕습니다.'],
    ['03', '일거리', '교육 및 일자리 연계', '여행 이후에도 삶이 이어지도록, 교육과 일자리 연계 서비스로 사회와 연결된 삶을 지원합니다.'],
  ].map(([n, t, tag, d]) => `
    <div style="background:#fff;border-radius:16px;padding:32px 24px;border-top:3px solid #1a2e2a;box-shadow:0 2px 16px rgba(0,0,0,0.06);">
      <span style="display:block;font-size:36px;font-weight:800;color:#e8e8e4;line-height:1;margin-bottom:18px;">${n}</span>
      <h3 style="font-size:18px;font-weight:700;color:#1a2e2a;margin-bottom:6px;">${t}</h3>
      <span style="display:block;font-size:10px;font-weight:700;color:#3B6259;letter-spacing:.1em;text-transform:uppercase;margin-bottom:14px;">${tag}</span>
      <p style="font-size:13px;color:#666;line-height:1.85;">${d}</p>
    </div>`).join('');

  const sec4 = `
    <section style="background:#f5f5f3;padding:88px 40px;">
      <div style="max-width:920px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3B6259;margin-bottom:18px;">Our Promise</p>
        <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#1a2e2a;margin-bottom:48px;">선샤인 웰니스의<br/>세 가지 약속</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">${promiseCards}</div>
      </div>
    </section>`;

  // 5. CTA — 다크그린
  const sec5 = `
    <section style="background:#1a2e2a;padding:88px 40px;text-align:center;">
      <div style="max-width:560px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,0.36);margin-bottom:22px;">Get Started</p>
        <h2 style="font-size:clamp(24px,3vw,34px);font-weight:800;color:#fff;margin-bottom:16px;line-height:1.3;">지금, 당신의 여정을<br/>시작하세요</h2>
        <p style="font-size:15px;color:rgba(255,255,255,0.6);margin-bottom:40px;line-height:1.8;">선샤인 웰니스가 당신만의 맞춤 웰니스 여행을 함께 설계합니다.</p>
        <a href="${BASE}/#contact" target="_parent" style="display:inline-block;background:#fff;color:#1a2e2a;font-size:14px;font-weight:700;padding:15px 44px;border-radius:30px;text-decoration:none;letter-spacing:.04em;">문의하기 →</a>
      </div>
    </section>`;

  const body = header + sec1 + sec2 + sec3 + sec4 + sec5;

  const css = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Noto Sans KR', sans-serif; padding-top: 80px; }
    @media (max-width: 760px) {
      div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns: 1fr !important; }
      div[style*="grid-template-columns:repeat(3"] { grid-template-columns: 1fr !important; }
      section > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
      header div[style*="padding:0 64px"] { padding: 0 20px !important; }
      nav { display: none !important; }
    }
  `;

  const html = `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>웰니스 소개 — 선샤인 웰니스</title><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;800&display=swap" rel="stylesheet"/><style>${css}</style></head><body>${body}</body></html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const win  = window.open(url, '_blank', 'noopener,noreferrer');
  if (win) win.addEventListener('unload', () => URL.revokeObjectURL(url), { once: true });
}

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
    zh: {
      title: '釜山疗愈之旅',
      duration: '1晚2天',
      price: '请咨询',
      maxPeople: '最多10人',
      description: '以海云台、广安里、太宗台为中心，探访釜山代表性的疗愈胜地。在海洋与自然交融的旅途中，洗去日常疲惫。',
      spots: ['海云台海水浴场', '广安大桥夜景', '太宗台自然公园', '冬柏岛'],
      courses: ['上午：海云台漫步与游泳', '午餐：海云台市场海鲜', '下午：广安里咖啡店探访', '傍晚：广安大桥夜景', '第二天：太宗台徒步'],
      tip: '周末和旺季海云台非常拥挤，建议平日前往。',
      links: [{ label: '海云台旅游信息', url: 'https://www.haeundae.go.kr' }],
      source: '釜山旅游公社',
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
    zh: {
      title: '甘川文化村解说游',
      duration: '当日往返',
      price: '请咨询',
      maxPeople: '最多15人',
      description: '与专业解说员一同，深度体验釜山传统文化与当代艺术的特别文化之旅。包含与当地艺术家的交流及传统工艺体验。',
      spots: ['釜山市立美术馆', '釜山文化会馆', '民主公园', '宝水洞书街'],
      courses: ['上午：釜山市立美术馆参观', '午餐：南浦洞街头美食', '下午：宝水洞书街探访', '傍晚：民主公园参观'],
      tip: '釜山市立美术馆每周一休馆，请提前确认。',
      links: [{ label: '釜山市立美术馆', url: 'https://www.busan.go.kr/museum' }],
      source: '釜山文化财团',
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
    zh: {
      title: '甘川艺术之旅',
      duration: '半天',
      price: '请咨询',
      maxPeople: '最多12人',
      description: '在釜山艺术村甘川文化村，与当地艺术家共同体验特别的艺术之旅。漫步五彩斑斓的小巷，欣赏各处艺术作品。',
      spots: ['甘川文化村', '小王子雕塑', '鱼形阶梯壁画', '村庄画廊'],
      courses: ['上午：甘川文化村导览游', '途中：巷弄艺术作品欣赏', '村庄咖啡厅休息', '下午：当地艺术家工作室参观'],
      tip: '甘川文化村地势有坡，请穿着舒适的鞋子。上午参观人较少。',
      links: [{ label: '甘川文化村', url: 'http://www.gamcheon.or.kr' }],
      source: '甘川文化村居民协会',
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
    zh: {
      title: '寺院禅修体验',
      duration: '当日往返',
      price: '请咨询',
      maxPeople: '最多8人',
      description: '在梵鱼寺与海东龙宫寺进行深度禅修与寺院体验项目。在闹市中的静谧寺院，寻找内心的平静。',
      spots: ['梵鱼寺', '海东龙宫寺', '金井山步道', '寺院庭园'],
      courses: ['清晨：梵鱼寺晨钟礼佛', '上午：寺院禅修体验', '午餐：寺院素食', '下午：海东龙宫寺参观', '黄昏：金井山日落'],
      tip: '晨钟礼佛于凌晨4时开始，请着素雅服装。',
      links: [{ label: '梵鱼寺官方网站', url: 'http://www.beomeosa.co.kr' }],
      source: '釜山佛教文化院',
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
    zh: {
      title: '市场美食游',
      duration: '半天',
      price: '请咨询',
      maxPeople: '最多12人',
      description: '探访釜山传统市场与夜市，体验当地饮食文化。从新鲜海鲜到街头小吃，尽享釜山的美味。',
      spots: ['釜山札嘎其市场', '国际市场', '富平罐头市场', '南浦洞美食街'],
      courses: ['上午：札嘎其市场海鲜游', '午餐：国际市场美食探访', '下午：富平罐头市场购物', '傍晚：南浦洞夜市'],
      tip: '清早前往札嘎其市场可以买到最新鲜的海鲜。',
      links: [{ label: '札嘎其市场', url: 'https://www.jagalchi.kr' }],
      source: '釜山广域市旅游振兴科',
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
    zh: {
      title: '釜山黑色旅游',
      duration: '当日往返',
      price: '请咨询',
      maxPeople: '最多15人',
      description: '走访承载韩国战争伤痛的釜山历史遗址，学习和平的珍贵。这是一段理解战时难民生活与历史的特别旅程。',
      spots: ['联合国纪念公园', '临时首都纪念馆', '釜山近现代历史馆', '战争难民定居遗址', '国立日帝强制动员历史馆', '釜山港第一码头'],
      courses: [
        '上午：联合国纪念公园参拜与悼念',
        '上午中段：临时首都纪念馆参观（釜山作为战时临时首都）',
        '午餐：釜山镇区传统餐厅',
        '下午：釜山近现代历史馆（日据时代至现代）',
        '下午中段：国立日帝强制动员历史馆',
        '傍晚：釜山港第一码头历史探访',
      ],
      tip: '联合国纪念公园免费入场，建议着庄重服装。部分展馆周一休馆。',
      links: [
        { label: '联合国纪念公园', url: 'https://www.unmck.or.kr' },
        { label: '国立日帝强制动员历史馆', url: 'https://www.fomo.or.kr' },
      ],
      source: '釜山广域市历史文化科',
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
  const lang = currentLang === 'ko' ? 'ko' : currentLang === 'zh' ? 'zh' : 'en';

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
document.querySelectorAll('a[href^="#"]:not([onclick])').forEach(anchor => {
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
