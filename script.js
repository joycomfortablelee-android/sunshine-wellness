// =========================================
// SUNSHINE WELLNESS — script.js
// =========================================
console.log('[SCRIPT] 로딩됨 v=20260530b');

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
    'nav.home': '홈',
    'nav.partnerlabel': 'VIP 제휴여행사',
    'nav.about': '웰니스 소개',
    'nav.programs': '프로그램 소개',
    'nav.contact': '견적의뢰 및 문의',
    'nav.wheretonext': 'Where to Next?',
    'nav.contactus': 'Contact Us',
    'nav.artconcierge': '아트 컨시어지',
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
    'programs.more': '여행상품 더보기',

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
    'card5.title': '부산 전통시장 & 떡볶이 미식 투어',
    'card5.desc': '부전시장 로컬 식재료 탐방 → 이가네떡볶이 → 다리집 본점 → 도날드 — 부산 전통시장과 골목·해변을 따라가는 미식 투어입니다.',

    // 카드 6 - 역사
    'card6.tag': '역사',
    'card6.title': '부산 다크 투어리즘',
    'card6.desc': '수탈·피란·재건·평화 — 부산이 견디고 회복해 온 근현대사를 현장에서 걷고 배웁니다.',

    // 카드 7 - 생태
    'card7.tag': '생태',
    'card7.title': '을숙도 생태 투어',
    'card7.desc': '철새 도래지 을숙도와 낙동강 하구 에코센터를 탐방하며 부산의 자연 생태를 오감으로 느끼는 힐링 투어입니다.',

    // 카드 8 - 축제
    'card8.tag': '축제',
    'card8.title': '부산 축제 투어',
    'card8.desc': '송도 불꽃 축제, 부산 국제 영화제, 광안리 불꽃 축제 등 부산의 대표 축제를 현지 전문가와 함께 깊이 즐기는 특별 투어입니다.',

    // 카드 9 - 야간
    'card9.tag': '야간',
    'card9.title': '부산의 밤 — 야경·야식 투어',
    'card9.desc': '황령산 전망대에서 부산 도심 야경을 내려다보고, 서면 포차 골목에서 야식을 즐긴 후 광안대교의 빛나는 야경으로 마무리하는 저녁 투어입니다.',

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
    'nav.home': 'Home',
    'nav.partnerlabel': 'VIP Partner',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.contact': 'Inquire',
    'nav.wheretonext': 'Where to Next?',
    'nav.contactus': 'Contact Us',
    'nav.artconcierge': 'Art Concierge',
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
    'programs.more': 'View All Tours',

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
    'card5.title': 'Delicious Busan Market & Tteokbokki Tour',
    'card5.desc': 'Bujeon Market → Igane → Darijip → Donald — follow Busan\'s markets, beaches & alleys to taste and discover regional tteokbokki stories.',

    // Card 6 - History
    'card6.tag': 'History',
    'card6.title': 'Busan Dark Tourism',
    'card6.desc': 'Exploitation · Refuge · Reconstruction · Peace — walk and learn Busan\'s modern history on-site.',

    // Card 7 - Ecology
    'card7.tag': 'Ecology',
    'card7.title': 'Eulsukdo Eco Tour',
    'card7.desc': 'Explore Eulsukdo migratory bird sanctuary and the Nakdong Estuary Eco Center — a healing nature walk along Busan\'s waterways.',

    // Card 8 - Festival
    'card8.tag': 'Festival',
    'card8.title': 'Busan Festival Tour',
    'card8.desc': 'Experience Busan\'s iconic festivals — Songdo Fire Festival, Busan International Film Festival, and Gwangalli Fireworks — with a local expert guide.',

    // Card 9 - Night
    'card9.tag': 'Night',
    'card9.title': 'Busan After Dark — Night View · Late-Night Bites',
    'card9.desc': 'From Hwangnyeong Mountain panoramic views to Bupyeong night market and Gwangandaegyo Bridge — a full evening tour of Busan by night.',

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
    'nav.home': '首页',
    'nav.partnerlabel': 'VIP 合作旅行社',
    'nav.about': '关于我们',
    'nav.programs': '项目介绍',
    'nav.contact': '咨询预约',
    'nav.wheretonext': '下一站去哪？',
    'nav.contactus': '联系我们',
    'nav.artconcierge': '艺术礼宾',
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
    'programs.more': '查看全部旅游产品',

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

    // 卡片 7
    'card7.tag': '生态',
    'card7.title': '乙淑岛生态游',
    'card7.desc': '探访乙淑岛候鸟栖息地和洛东江河口生态中心，感受釜山大自然的生命力。',

    // 卡片 8
    'card8.tag': '节庆',
    'card8.title': '釜山节日游',
    'card8.desc': '与本地专家一起深度体验松岛烟花节、釜山国际电影节、广安里烟花节等釜山代表性节庆活动。',

    // 卡片 9
    'card9.tag': '夜游',
    'card9.title': '釜山之夜 — 夜景·宵夜二合一游',
    'card9.desc': '从黄岭山夜景到釜平罐头夜市、广安大桥美景——用夜景和宵夜双重体验填满釜山的夜晚。',

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
// 햄버거 메뉴
// =========================================
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
  });

  // 바깥 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!mobileNav.classList.contains('open')) return;
    if (e.target.closest('#mobileNav') || e.target.closest('#hamburger')) return;
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

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
// 서브페이지 오버레이 (홈 헤더 유지)
// =========================================
function showSubPage(html) {
  const el = document.getElementById('subPageOverlay');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollTop = 0;
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function showSubPageFull(html) {
  const el = document.getElementById('subPageOverlay');
  el.innerHTML = html;
  el.classList.add('fullbg');
  el.style.display = 'block';
  el.scrollTop = 0;
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function closeSubPage() {
  const el = document.getElementById('subPageOverlay');
  if (!el) return;
  el.style.display = 'none';
  el.innerHTML = '';
  el.classList.remove('fullbg');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

// =========================================
// 퀵 사이드바 네비게이션 (오버레이 닫고 이동)
// =========================================
function quickNavTo(hash) {
  closeSubPage();
  var el = document.querySelector(hash);
  if (!el) return;
  setTimeout(function () {
    el.scrollIntoView({ behavior: 'smooth' });
  }, 80);
}

// =========================================
// 고객센터 -> Contact Us 리다이렉트
// =========================================
function openHelpCenterPage() { openContactUsPage(); }

function cuShowSection(id) {
  var meta = {
    notice:   { label: 'Notice',         title: '공지사항' },
    faq:      { label: 'FAQ',            title: '자주 묻는 질문' },
    qna:      { label: 'Q&A',            title: '묻고 답하기' },
    voice:    { label: 'Customer Voice', title: '고객의 소리' },
    tomorrow: { label: 'Customer Care',  title: '친절한 햇살씨' },
    delivery: { label: 'Delivery',       title: '우편배송조회' },
    receipt:  { label: 'Receipt',        title: '현금영수증 발급 방법' },
    vip:      { label: 'VIP Benefits',   title: '우수고객 등급혜택 안내' },
    events:   { label: 'Event',          title: '이벤트 당첨자 발표' }
  };
  var m = meta[id] || { label: 'Support', title: '고객센터' };
  showSubPageFull(
    '<div class="co-fullbg-wrap">' +
    '<div class="co-fullbg-banner banner-beach"><div class="co-page-header">' +
    '<p>Support — ' + m.label + '</p>' +
    '<h1>고객센터<span class="co-page-subtitle">— ' + m.title + '</span></h1>' +
    '</div></div>' +
    '<div class="co-wrap">' +
    '<button onclick="openContactUsPage()" class="cu-back-btn">← Contact Us</button>' +
    '<p class="co-section-title">' + m.label + '</p>' +
    '<h2 class="co-heading">' + m.title + '</h2>' +
    _cuSectionBody(id) +
    '</div></div>'
  );
}

function _cuSectionBody(id) {
  var bodies = {
    notice: '<table class="hc-notice-table"><thead><tr><th style="width:54px;">번호</th><th style="width:68px;">구분</th><th style="text-align:left;padding-left:16px;">제목</th><th style="width:96px;">등록일</th></tr></thead><tbody>' +
      '<tr><td style="text-align:center;">8</td><td style="text-align:center;"><span class="hc-notice-badge gold">공지</span></td><td style="padding-left:16px;">2026년 하계 웰니스 투어 상품 안내</td><td style="text-align:center;color:#888;font-size:12px;">2026-05-20</td></tr>' +
      '<tr><td style="text-align:center;">7</td><td style="text-align:center;"><span class="hc-notice-badge gold">이벤트</span></td><td style="padding-left:16px;">5월 가정의 달 특별 할인 이벤트</td><td style="text-align:center;color:#888;font-size:12px;">2026-05-01</td></tr>' +
      '<tr><td style="text-align:center;">6</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">카카오 체널 오픈 안내</td><td style="text-align:center;color:#888;font-size:12px;">2026-04-15</td></tr>' +
      '<tr><td style="text-align:center;">5</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">개인정보처리방침 개정 안내 (2026. 04. 01)</td><td style="text-align:center;color:#888;font-size:12px;">2026-04-01</td></tr>' +
      '<tr><td style="text-align:center;">4</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">2026 봄 시즌 투어 일정 확정 안내</td><td style="text-align:center;color:#888;font-size:12px;">2026-03-10</td></tr>' +
      '<tr><td style="text-align:center;">3</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">설 연휴 고객센터 운영 시간 안내</td><td style="text-align:center;color:#888;font-size:12px;">2026-01-25</td></tr>' +
      '<tr><td style="text-align:center;">2</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">선샵인 웰니스 홈페이지 오픈 안내</td><td style="text-align:center;color:#888;font-size:12px;">2025-12-01</td></tr>' +
      '<tr><td style="text-align:center;">1</td><td style="text-align:center;"><span class="hc-notice-badge">안내</span></td><td style="padding-left:16px;">선샵인 웰니스 서비스 시작 안내</td><td style="text-align:center;color:#888;font-size:12px;">2025-11-15</td></tr>' +
      '</tbody></table>',

    faq: '<table class="sp-table co-faq"><thead><tr><th style="width:60px;">NO.</th><th class="sp-col-title">제목</th><th style="width:60px;">열기</th></tr></thead><tbody>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">01</td><td class="sp-col-title">투어 인원은 몇 명부터 가능한가요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">기본 2인부터 소규모 단체까지 맞춤 운영합니다. 10인 이상 단체는 별도 견적으로 더욱 합리적인 요금을 안내해 드립니다.</td></tr>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">02</td><td class="sp-col-title">여행 일정은 어떻게 정해지나요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">견적 문의 후 담당자가 연락드려 희망 날짜, 관심 프로그램, 인원 등을 확인하고 최적의 일정을 제안해 드립니다.</td></tr>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">03</td><td class="sp-col-title">예약금과 취소 정책이 어떻게 되나요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">투어 확정 시 전체 금액의 30%를 예약금으로 납부하며, 출발 7일 전까지는 전액 환불 가능합니다.</td></tr>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">04</td><td class="sp-col-title">외국어 가이드 서비스도 가능한가요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">영어, 중국어 가이드 동행 서비스를 제공합니다. 사전 요청 시 추가 비용 없이 안내해 드립니다.</td></tr>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">05</td><td class="sp-col-title">숙박 연계 패키지도 있나요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">네, 부산 내 웰니스 특화 숙박시설과 연계한 패키지 상품을 운영합니다.</td></tr>' +
      '<tr class="co-faq-item" onclick="coFaqToggle(this)"><td class="sp-col-no">06</td><td class="sp-col-title">비용 결제는 어떻게 하나요?</td><td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td></tr>' +
      '<tr class="co-faq-answer"><td colspan="3" class="co-faq-a">계좌이체, 신용카드(온라인 결제링크) 방식을 지원합니다.</td></tr>' +
      '</tbody></table>',

    qna: '<table class="sp-table"><thead><tr><th style="width:54px;">번호</th><th class="sp-col-title">제목</th><th style="width:72px;">작성자</th><th style="width:72px;">상태</th><th style="width:80px;">등록일</th></tr></thead><tbody>' +
      '<tr><td style="text-align:center;color:#888;">5</td><td>감천문화마을 투어 시간이 얼마나 걸리나요?</td><td style="text-align:center;color:#888;">이**</td><td style="text-align:center;"><span style="color:var(--accent);font-weight:700;font-size:12px;">답변완료</span></td><td style="text-align:center;color:#888;font-size:12px;">05-20</td></tr>' +
      '<tr><td style="text-align:center;color:#888;">4</td><td>단체 할인은 몇 명부터 적용되나요?</td><td style="text-align:center;color:#888;">박**</td><td style="text-align:center;"><span style="color:var(--accent);font-weight:700;font-size:12px;">답변완료</span></td><td style="text-align:center;color:#888;font-size:12px;">05-15</td></tr>' +
      '<tr><td style="text-align:center;color:#888;">3</td><td>우천시 투어 진행 여부가 궁금합니다</td><td style="text-align:center;color:#888;">김**</td><td style="text-align:center;"><span style="color:#e8a04a;font-weight:700;font-size:12px;">답변대기</span></td><td style="text-align:center;color:#888;font-size:12px;">05-25</td></tr>' +
      '<tr><td style="text-align:center;color:#888;">2</td><td>영어 가이드 예약은 얼마 전에 해야 하나요?</td><td style="text-align:center;color:#888;">최**</td><td style="text-align:center;"><span style="color:var(--accent);font-weight:700;font-size:12px;">답변완료</span></td><td style="text-align:center;color:#888;font-size:12px;">05-10</td></tr>' +
      '<tr><td style="text-align:center;color:#888;">1</td><td>예약 변경은 어떻게 하나요?</td><td style="text-align:center;color:#888;">정**</td><td style="text-align:center;"><span style="color:var(--accent);font-weight:700;font-size:12px;">답변완료</span></td><td style="text-align:center;color:#888;font-size:12px;">04-28</td></tr>' +
      '</tbody></table>' +
      '<div class="hc-qna-form"><h3>질문 등록하기</h3>' +
      '<input type="text" class="hc-qna-input" id="hcQnaName" placeholder="작성자 (예: 홍**)" />' +
      '<input type="text" class="hc-qna-input" id="hcQnaTitle" placeholder="제목을 입력하세요" />' +
      '<textarea class="hc-qna-textarea" id="hcQnaContent" placeholder="문의 내용을 입력해주세요."></textarea>' +
      '<button class="hc-qna-submit" onclick="hcQnaSubmit()">등록하기</button></div>',

    voice: '<div style="display:flex;flex-direction:column;gap:14px;margin-bottom:32px;">' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:22px 24px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><span style="font-weight:700;font-size:14px;">이*경 님</span><span style="color:#888;font-size:12px;">2026-05-22</span></div><div style="color:#e8a04a;font-size:14px;margin-bottom:8px;">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p style="font-size:14px;color:#444;line-height:1.7;">감천문화마을 투어가 정말 좋았습니다.</p></div>' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:22px 24px;"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><span style="font-weight:700;font-size:14px;">박*수 님</span><span style="color:#888;font-size:12px;">2026-05-15</span></div><div style="color:#e8a04a;font-size:14px;margin-bottom:8px;">&#9733;&#9733;&#9733;&#9733;&#9734;</div><p style="font-size:14px;color:#444;line-height:1.7;">신중년 대상 프로그램이라 일정이 여유 있어서 너무 좋았습니다.</p></div>' +
      '</div>' +
      '<div class="hc-voice-form"><h3>후기 작성하기</h3>' +
      '<label style="font-size:13px;font-weight:600;color:#555;display:block;margin-bottom:6px;">별점</label>' +
      '<div class="hc-voice-stars" id="hcVoiceStars" onclick="hcSetStar(event)"><span data-v="1">&#9734;</span><span data-v="2">&#9734;</span><span data-v="3">&#9734;</span><span data-v="4">&#9734;</span><span data-v="5">&#9734;</span></div>' +
      '<input type="text" class="hc-qna-input" id="hcVoiceName" placeholder="이름 (예: 홍*동)" />' +
      '<textarea class="hc-qna-textarea" id="hcVoiceContent" placeholder="소중한 후기를 남겨주세요."></textarea>' +
      '<button class="hc-qna-submit" onclick="hcVoiceSubmit()">후기 등록</button></div>',

    tomorrow: '<div class="hc-tomorrow-box">' +
      '<div class="hc-tomorrow-avatar">&#127774;</div>' +
      '<div class="hc-tomorrow-name">친절한 햇살씨</div>' +
      '<p class="hc-tomorrow-desc">안녕하세요! 선샵인 웰니스 전담 상담사 <strong>내일씨</strong>입니다.<br>여행 계획부터 예약, 취소, 변경까지 — 먴드시든 편하게 물어보세요. &#128522;</p>' +
      '<div class="hc-tomorrow-btns">' +
      '<button class="hc-tomorrow-btn hc-tomorrow-btn-primary" onclick="window.open(\'https://open.kakao.com/o/sl2k01wi\',\'_blank\')">&#128155; 카카오 채팅 상담</button>' +
      '<button class="hc-tomorrow-btn hc-tomorrow-btn-secondary" onclick="cuShowSection(\'qna\')">&#9997;&#65039; 묻고 답하기</button>' +
      '<button class="hc-tomorrow-btn hc-tomorrow-btn-secondary" onclick="openContactPage()">&#128203; 견적의뢰 문의</button>' +
      '</div></div>' +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px;">' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:22px;text-align:center;"><div style="font-size:26px;margin-bottom:8px;">&#9200;</div><div style="font-size:13px;font-weight:700;color:#1a2e2a;margin-bottom:5px;">운영 시간</div><div style="font-size:12px;color:#666;line-height:1.6;">평일 09:00 – 18:00<br>점심 12:00 – 13:00<br>주말·공휴일 휴무</div></div>' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:22px;text-align:center;"><div style="font-size:26px;margin-bottom:8px;">&#128241;</div><div style="font-size:13px;font-weight:700;color:#1a2e2a;margin-bottom:5px;">전화 상담</div><div style="font-size:12px;color:#666;line-height:1.6;">010-5759-5485<br>언제든 남겨주시면<br>빠르게 연락드립니다</div></div>' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:22px;text-align:center;"><div style="font-size:26px;margin-bottom:8px;">&#9993;&#65039;</div><div style="font-size:13px;font-weight:700;color:#1a2e2a;margin-bottom:5px;">이메일</div><div style="font-size:12px;color:#666;line-height:1.6;">healthylee7@gmail.com<br>1영업일 이내<br>답변 드립니다</div></div>' +
      '</div>',

    delivery: '<div style="background:#fff8f0;border:1.5px solid #f5d9a8;border-radius:12px;padding:14px 18px;margin-bottom:28px;font-size:13.5px;color:#7a5000;line-height:1.6;">&#8505;&#65039; 선샵인 웰니스 투어 관련 우편물의 배송 현황을 조회하실 수 있습니다.</div>' +
      '<div style="background:#f8f9fa;border-radius:16px;padding:40px;text-align:center;margin-bottom:24px;">' +
      '<p style="font-size:28px;margin-bottom:12px;">&#128230;</p>' +
      '<p style="font-size:16px;font-weight:700;color:#1a2e2a;margin-bottom:6px;">우편 운송장 번호로 조회하기</p>' +
      '<p style="font-size:13px;color:#888;margin-bottom:22px;">운송장 번호 13자리를 입력하세요</p>' +
      '<div style="display:flex;justify-content:center;max-width:480px;margin:0 auto;">' +
      '<input type="text" id="hcDeliveryNum" placeholder="운송장 번호 입력" style="flex:1;padding:12px 16px;border:1.5px solid var(--border);border-right:none;border-radius:8px 0 0 8px;font-size:14px;font-family:var(--font);" />' +
      '<button onclick="hcDeliverySearch()" style="padding:12px 22px;background:var(--accent);color:#fff;border:none;border-radius:0 8px 8px 0;font-size:14px;font-weight:700;cursor:pointer;font-family:var(--font);">조회</button>' +
      '</div></div>' +
      '<div style="padding:20px 24px;background:#f8f9fa;border-radius:12px;">' +
      '<p style="font-size:13px;font-weight:700;color:#1a2e2a;margin-bottom:12px;">기타 택배사 직접 조회</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px;">' +
      '<a href="https://service.epost.go.kr/" target="_blank" style="padding:8px 18px;background:#fff;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;color:#444;text-decoration:none;">우체국 택배</a>' +
      '<a href="https://www.cjlogistics.com/ko/tool/parcel/tracking" target="_blank" style="padding:8px 18px;background:#fff;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;color:#444;text-decoration:none;">CJ대한통운</a>' +
      '<a href="https://www.lotteglogis.com/home/reservation/tracking/index" target="_blank" style="padding:8px 18px;background:#fff;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;color:#444;text-decoration:none;">롯데택배</a>' +
      '<a href="https://kdexp.com/serviceDelivery.do" target="_blank" style="padding:8px 18px;background:#fff;border:1.5px solid var(--border);border-radius:8px;font-size:13px;font-weight:600;color:#444;text-decoration:none;">경동택배</a>' +
      '</div></div>',

    receipt: '<div style="background:#fff8f0;border:1.5px solid #f5d9a8;border-radius:12px;padding:14px 18px;margin-bottom:28px;font-size:13.5px;color:#7a5000;line-height:1.6;">&#8505;&#65039; 현금 결제 시 현금영수증을 발급해 드립니다. 발급 완료 후 <strong>국세청 홈택스</strong>에서 확인하실 수 있습니다.</div>' +
      '<div class="hc-receipt-steps">' +
      '<div class="hc-receipt-step"><div class="hc-receipt-num">1</div><div class="hc-receipt-body"><h4>결제 완료 확인</h4><p>투어 대금 현금 결제 후 입금 확인이 완료된 상태여야 합니다.</p></div></div>' +
      '<div class="hc-receipt-step"><div class="hc-receipt-num">2</div><div class="hc-receipt-body"><h4>발급 요청</h4><p>이메일(healthylee7@gmail.com) 또는 카카오 체널로 <strong>현금영수증 발급 요청</strong>을 보내주세요.</p></div></div>' +
      '<div class="hc-receipt-step"><div class="hc-receipt-num">3</div><div class="hc-receipt-body"><h4>첫리 완료 통보</h4><p>요청 접수 후 <strong>1영업일 이내</strong>에 발급 처리 후 완료 안내를 드립니다.</p></div></div>' +
      '<div class="hc-receipt-step"><div class="hc-receipt-num">4</div><div class="hc-receipt-body"><h4>국세청 홈택스에서 확인</h4><p>홈택스(hometax.go.kr) → 로그인 → 조회/발급 → 현금영수증 → 사용내역(소비자) 조회</p></div></div>' +
      '</div>' +
      '<div style="margin-top:20px;padding:14px 18px;background:#f0f5f4;border-left:4px solid var(--accent);border-radius:8px;font-size:13px;color:#444;line-height:1.7;">' +
      '<strong>&#128204; 참고사항</strong><br>' +
      '• 현금영수증은 결제일로부터 <strong>3년 이내</strong>에 신청 가능합니다.<br>' +
      '• 사업자는 지출증빙용, 개인은 소득공제용으로 발급받으실 수 있습니다.<br>' +
      '• 문의: 010-5759-5485 또는 healthylee7@gmail.com' +
      '</div>',

    vip: '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:32px;">' +
      '<div style="background:#fff;border:1.5px solid var(--border);border-radius:14px;padding:20px 14px;text-align:center;"><div style="font-size:24px;margin-bottom:8px;">&#128100;</div><div style="font-size:14px;font-weight:800;color:#888;margin-bottom:3px;">일반</div><div style="font-size:11px;color:#aaa;margin-bottom:9px;">첫 이용 고객</div><hr style="border:none;border-top:1px solid var(--border);margin-bottom:9px;"><div style="font-size:12px;color:#555;line-height:1.9;">기본 서비스<br>이메일 상담<br>—<br>—</div></div>' +
      '<div style="background:#fff;border:2px solid var(--accent);border-radius:14px;padding:20px 14px;text-align:center;"><div style="font-size:24px;margin-bottom:8px;">&#11088;</div><div style="font-size:14px;font-weight:800;color:var(--accent);margin-bottom:3px;">우수</div><div style="font-size:11px;color:#aaa;margin-bottom:9px;">2회 이상 이용</div><hr style="border:none;border-top:1px solid var(--border);margin-bottom:9px;"><div style="font-size:12px;color:#555;line-height:1.9;">기본 서비스<br>이메일 상담<br>5% 할인 쿠폰<br>—</div></div>' +
      '<div style="background:#fffde7;border:2px solid #e8a04a;border-radius:14px;padding:20px 14px;text-align:center;"><div style="font-size:24px;margin-bottom:8px;">&#129351;</div><div style="font-size:14px;font-weight:800;color:#c47a00;margin-bottom:3px;">VIP</div><div style="font-size:11px;color:#aaa;margin-bottom:9px;">5회 이상 이용</div><hr style="border:none;border-top:1px solid #f5d9a8;margin-bottom:9px;"><div style="font-size:12px;color:#555;line-height:1.9;">기본 서비스<br>전담 상담사<br>10% 할인 쿠폰<br>우선 예약권</div></div>' +
      '<div style="background:#1a2e2a;border:2px solid #1a2e2a;border-radius:14px;padding:20px 14px;text-align:center;"><div style="font-size:24px;margin-bottom:8px;">&#128081;</div><div style="font-size:14px;font-weight:800;color:#e8a04a;margin-bottom:3px;">VVIP</div><div style="font-size:11px;color:#888;margin-bottom:9px;">10회 이상 이용</div><hr style="border:none;border-top:1px solid #2d4a40;margin-bottom:9px;"><div style="font-size:12px;color:#aaa;line-height:1.9;">기본 서비스<br>전담 상담사<br>15% 할인 쿠폰<br>맞춤 투어 서비스</div></div>' +
      '</div>' +
      '<table class="hc-grade-table"><thead><tr><th>혼택</th><th>일반</th><th style="color:var(--accent);">우수</th><th style="background:#fffde7;color:#c47a00;">VIP</th><th style="background:#1a2e2a;color:#e8a04a;">VVIP</th></tr></thead><tbody>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">이메일 상담</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">카카오 채팅 상담</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td><td>&#10003;</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">전담 상담사 배정</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td>&#10003;</td><td>&#10003;</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">할인 쿠폰</td><td style="color:#ccc;">—</td><td>5%</td><td>10%</td><td>15%</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">우선 예약권</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td>&#10003;</td><td>&#10003;</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">맞춤 투어 제안</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td>&#10003;</td></tr>' +
      '<tr><td style="text-align:left;padding-left:14px;font-weight:600;">기념일 특별 혼택</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td style="color:#ccc;">—</td><td>&#10003;</td></tr>' +
      '</tbody></table>' +
      '<div style="margin-top:14px;padding:12px 16px;background:#f0f5f4;border-left:4px solid var(--accent);border-radius:8px;font-size:13px;color:#444;line-height:1.7;">&#128204; 등급은 최근 1년간 이용 횟수를 기준으로 매월 1일 자동 갱신됩니다. 문의: 010-5759-5485</div>',

    events: '<div style="background:#fff8f0;border:1.5px solid #f5d9a8;border-radius:12px;padding:14px 18px;margin-bottom:28px;font-size:13.5px;color:#7a5000;line-height:1.6;">&#127881; 당첨자는 등록하신 연락처로 개별 통보되며, 개인정보 보호를 위해 이름 일부를 가려서 공개합니다.</div>' +
      '<table class="hc-winner-table"><thead><tr><th style="width:54px;">번호</th><th style="text-align:left;padding-left:16px;">이벤트명</th><th style="width:72px;">당첨자</th><th style="width:90px;">발표일</th><th style="width:110px;">경품</th></tr></thead><tbody>' +
      '<tr><td>5</td><td style="text-align:left;padding-left:16px;">5월 가정의 달 SNS 이벤트</td><td>이**경</td><td>2026-05-25</td><td style="color:var(--accent);font-weight:700;">부산 투어 1인 무료</td></tr>' +
      '<tr><td>4</td><td style="text-align:left;padding-left:16px;">봄 여행 후기 이벤트</td><td>박**호</td><td>2026-04-30</td><td style="color:var(--accent);font-weight:700;">커피 기프티콘</td></tr>' +
      '<tr><td>3</td><td style="text-align:left;padding-left:16px;">회원가입 웰콤 이벤트</td><td>김**미</td><td>2026-04-01</td><td style="color:var(--accent);font-weight:700;">10% 할인 쿠폰</td></tr>' +
      '<tr><td>2</td><td style="text-align:left;padding-left:16px;">설 연휴 특별 이벤트</td><td>최**준</td><td>2026-02-10</td><td style="color:var(--accent);font-weight:700;">쿄핑백 &amp; 굿즈</td></tr>' +
      '<tr><td>1</td><td style="text-align:left;padding-left:16px;">오픈 기념 선착순 이벤트</td><td>정**(외 4명)</td><td>2025-12-15</td><td style="color:var(--accent);font-weight:700;">투어 20% 할인권</td></tr>' +
      '</tbody></table>' +
      '<div style="margin-top:24px;text-align:center;padding:40px 24px;background:#f8f9fa;border-radius:16px;">' +
      '<p style="font-size:24px;margin-bottom:10px;">&#127873;</p>' +
      '<p style="font-size:15px;font-weight:700;color:#1a2e2a;margin-bottom:5px;">다음 이벤트를 기대해 주세요!</p>' +
      '<p style="font-size:13px;color:#888;">선샵인 웰니스 SNS를 팔로우하시면 이벤트 정보를 가장 먼저 받으실 수 있습니다.</p>' +
      '</div>'
  };
  return bodies[id] || '';
}

function hcShowSection(id) { cuShowSection(id); }

function hcQnaSubmit() {
  var title = (document.getElementById('hcQnaTitle').value || '').trim();
  var name  = (document.getElementById('hcQnaName').value  || '').trim();
  if (!title || !name) { alert('작성자와 제목을 입력해주세요.'); return; }
  alert('질문이 등록되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
  document.getElementById('hcQnaTitle').value   = '';
  document.getElementById('hcQnaName').value    = '';
  document.getElementById('hcQnaContent').value = '';
}

function hcSetStar(e) {
  var v = parseInt(e.target.getAttribute('data-v'));
  if (!v) return;
  document.querySelectorAll('#hcVoiceStars span').forEach(function(s, i) {
    s.textContent = i < v ? '★' : '☆';
    s.style.color = i < v ? '#e8a04a' : '#ccc';
  });
}

function hcVoiceSubmit() {
  var content = (document.getElementById('hcVoiceContent').value || '').trim();
  var name    = (document.getElementById('hcVoiceName').value    || '').trim();
  if (!content || !name) { alert('이름과 후기 내용을 입력해주세요.'); return; }
  alert('소중한 후기를 남겨주셔서 감사합니다!');
  document.getElementById('hcVoiceName').value    = '';
  document.getElementById('hcVoiceContent').value = '';
  document.querySelectorAll('#hcVoiceStars span').forEach(function(s) { s.textContent = '☆'; s.style.color = ''; });
}

function hcDeliverySearch() {
  var num = (document.getElementById('hcDeliveryNum').value || '').trim();
  if (!num) { alert('운송장 번호를 입력해주세요.'); return; }
  window.open('https://service.epost.go.kr/trace.RetrieveRegiTraceList.comm?sid1=' + encodeURIComponent(num), '_blank');
}

// =========================================
// Where to Next? 게시판 (오버레이)
// =========================================
const _boardInitPosts = [
  { id: 8, title: '제주도 웰니스 여행 후기 — 사찰 스테이가 최고였어요', date: '05-22' },
  { id: 7, title: '60대에 혼자 부산 여행, 선샤인 웰니스 덕분에 잊지 못할 경험', date: '05-20' },
  { id: 6, title: '다음 행선지 고민 중 — 교토 vs 부산, 어디가 좋을까요?', date: '05-18' },
  { id: 5, title: '감천문화마을 투어 다녀왔습니다! 해설사 선생님이 너무 좋았어요', date: '05-15' },
  { id: 4, title: '부산 시장 투어 후기 — 자갈치에서 활어회 먹은 게 아직도 생각나요', date: '05-12' },
  { id: 3, title: '해동용궁사 새벽 예불 체험, 삶이 바뀌는 느낌이었습니다', date: '05-08' },
  { id: 2, title: '신중년 여행 동행 구합니다 — 6월 부산 근교 투어 같이 가실 분?', date: '05-03' },
  { id: 1, title: '선샤인 웰니스 첫 번째 후기 — 기대 이상이었습니다 :)', date: '04-28' },
];
let _boardAllPosts = [..._boardInitPosts];
let _boardFiltered = [..._boardInitPosts];
let _boardPage = 1;
const _BOARD_PER_PAGE = 15;

function _boardRender() {
  const list  = document.getElementById('boardList');
  const total = document.getElementById('boardTotal');
  if (!list) return;
  total.textContent = _boardFiltered.length;
  const start = (_boardPage - 1) * _BOARD_PER_PAGE;
  const page  = _boardFiltered.slice(start, start + _BOARD_PER_PAGE);
  if (!page.length) {
    list.innerHTML = '<tr><td colspan="5" class="sp-empty">게시글이 없습니다.</td></tr>';
  } else {
    list.innerHTML = page.map((p, i) => {
      const full = boardData.find(b => String(b.id) === String(p.id)) || {};
      const dest   = full.destination || '부산';
      const author = full.author || '';
      const date   = full.date ? full.date.substring(5) : p.date;
      return `<tr onclick="_openBoardDetailInOverlay(${p.id})" style="cursor:pointer">
        <td class="sp-col-no">${_boardFiltered.length - start - i}</td>
        <td class="sp-col-dest">${dest}</td>
        <td class="sp-col-title"><a href="javascript:void(0)">${p.title}</a></td>
        <td class="sp-col-author">${author}</td>
        <td class="sp-col-date">${date}</td>
      </tr>`;
    }).join('');
  }
  _boardRenderPaging();
}

function _boardRenderPaging() {
  const pg    = document.getElementById('boardPaging');
  if (!pg) return;
  const total = Math.max(1, Math.ceil(_boardFiltered.length / _BOARD_PER_PAGE));
  let html = '';
  if (_boardPage > 1) html += `<a onclick="boardGoPage(${_boardPage - 1})">&#8249;</a>`;
  for (let i = 1; i <= total; i++) {
    html += i === _boardPage
      ? `<span class="active">${i}</span>`
      : `<a onclick="boardGoPage(${i})">${i}</a>`;
  }
  if (_boardPage < total) html += `<a onclick="boardGoPage(${_boardPage + 1})">&#8250;</a>`;
  pg.innerHTML = html;
}

function boardGoPage(p) { _boardPage = p; _boardRender(); document.getElementById('subPageOverlay').scrollTop = 0; }

function _openBoardDetailInOverlay(id) {
  const post = boardData.find(p => String(p.id) === String(id));
  if (!post) return;
  const overlay = document.getElementById('subPageOverlay');
  overlay.scrollTop = 0;
  overlay.innerHTML = `
    <div class="co-fullbg-wrap">
      <div class="co-fullbg-banner banner-beach">
        <div class="co-page-header">
          <p>Community</p>
          <h1>여행 이야기<span class="co-page-subtitle">— 상세보기</span></h1>
        </div>
      </div>
      <div class="sp-wrap">
        <button onclick="openWhereToNextPage()" class="board-back-btn" style="margin-bottom:28px;">← 목록으로</button>
        <div class="board-post-meta">No. ${post.id}</div>
        <h2 class="board-post-title">${post.title}</h2>
        <div class="board-post-info">
          <span>작성자 ${post.author || '선샤인 웰니스'}</span>
          <span>${post.date || ''}</span>
          <span>조회 ${post.views || 0}</span>
        </div>
        <div class="board-post-content" style="margin-top:24px;">${post.content}</div>
        <div class="board-post-bottom">
          <button onclick="openWhereToNextPage()" class="board-back-btn">목록으로</button>
        </div>
      </div>
    </div>
  `;
}

function boardSearch() {
  const q = (document.getElementById('boardSearchInput').value || '').trim().toLowerCase();
  _boardFiltered = q ? _boardAllPosts.filter(p => p.title.toLowerCase().includes(q)) : [..._boardAllPosts];
  _boardPage = 1;
  _boardRender();
}

function boardOpenWrite() { document.getElementById('boardWriteDim').classList.add('open'); }
function boardCloseWrite() { document.getElementById('boardWriteDim').classList.remove('open'); }

function boardSubmit() {
  const title = (document.getElementById('boardWriteTitle').value || '').trim();
  if (!title) { alert('제목을 입력해주세요.'); return; }
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  _boardAllPosts.unshift({ id: _boardAllPosts.length + 1, title, date: `${mm}-${dd}` });
  _boardFiltered = [..._boardAllPosts];
  _boardPage = 1;
  _boardRender();
  boardCloseWrite();
  document.getElementById('boardWriteTitle').value = '';
  document.getElementById('boardWriteAuthor').value = '';
  document.getElementById('boardWriteContent').value = '';
}

function openWhereToNextPage() {
  showSubPageFull(`
    <div class="co-fullbg-wrap">
    <div class="co-fullbg-banner banner-beach">
      <div class="co-page-header">
        <p>Community</p>
        <h1>Where to Next?<span class="co-page-subtitle">— 다음 여행지</span></h1>
      </div>
    </div>
    <div class="sp-wrap">
      <p class="co-section-title">Community</p>
      <h2 class="co-heading">다음 여행지</h2>
      <div class="sp-toolbar">
        <p class="sp-count">총 <strong id="boardTotal">0</strong>건</p>
        <button class="sp-btn-write" onclick="boardOpenWrite()">글쓰기</button>
      </div>
      <table class="sp-table">
        <thead>
          <tr>
            <th class="sp-col-no"  style="width:60px;">번호</th>
            <th class="sp-col-dest" style="width:80px;white-space:nowrap;">여행지</th>
            <th class="sp-col-title">제목</th>
            <th class="sp-col-author" style="white-space:nowrap;">작성자</th>
            <th class="sp-col-date"  style="white-space:nowrap;">등록일</th>
          </tr>
        </thead>
        <tbody id="boardList"></tbody>
      </table>
      <div class="sp-paging" id="boardPaging"></div>
      <div class="sp-search">
        <select id="boardSearchType"><option value="title">제목내용</option><option value="author">글쓴이</option></select>
        <input type="text" id="boardSearchInput" placeholder="검색어를 입력하세요" onkeydown="if(event.key==='Enter')boardSearch()"/>
        <button onclick="boardSearch()">검색</button>
      </div>
    </div>
    <div class="sp-write-dim" id="boardWriteDim" onclick="if(event.target===this)boardCloseWrite()">
      <div class="sp-write-box">
        <h2>글쓰기</h2>
        <div class="sp-write-field"><label>작성자</label><input type="text" id="boardWriteAuthor" placeholder="닉네임"/></div>
        <div class="sp-write-field"><label>제목</label><input type="text" id="boardWriteTitle" placeholder="제목을 입력하세요"/></div>
        <div class="sp-write-field"><label>내용</label><textarea id="boardWriteContent" placeholder="내용을 입력하세요"></textarea></div>
        <div class="sp-write-actions">
          <button class="sp-btn-cancel" onclick="boardCloseWrite()">취소</button>
          <button class="sp-btn-post" onclick="boardSubmit()">등록</button>
        </div>
      </div>
    </div>
    </div>
  `);
  _boardFiltered = [..._boardAllPosts];
  _boardPage = 1;
  _boardRender();
}


// =========================================
// 견적의뢰 및 문의 — K-Wellness 스타일 오버레이
// =========================================
function openContactPage() {
  showSubPageFull(`
    <div class="co-fullbg-wrap">
    <div class="co-fullbg-banner banner-night">
      <div class="co-page-header">
        <p>Inquiry</p>
        <h1>견적의뢰 및 문의<span class="co-page-subtitle">— Contact Us</span></h1>
      </div>
    </div>
    <div class="co-wrap">

      <p class="co-section-title">FAQ</p>
      <h2 class="co-heading">자주 묻는 질문</h2>
      <div class="sp-toolbar" style="margin-bottom:10px;">
        <p class="sp-count">총 <strong>6</strong>건</p>
        <button class="sp-btn-write" onclick="document.getElementById('coFormBox').scrollIntoView({behavior:'smooth'})">문의하기</button>
      </div>
      <table class="sp-table co-faq" id="coFaq">
        <thead>
          <tr>
            <th style="width:60px;">NO.</th>
            <th class="sp-col-title">제목</th>
            <th style="width:60px;">열기</th>
          </tr>
        </thead>
        <tbody>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">01</td>
            <td class="sp-col-title">투어 인원은 몇 명부터 가능한가요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">기본 2인부터 소규모 단체까지 맞춤 운영합니다. 10인 이상의 단체는 별도 견적을 통해 더욱 합리적인 요금으로 안내해 드립니다.</td></tr>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">02</td>
            <td class="sp-col-title">여행 일정은 어떻게 정해지나요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">견적 문의 후 담당자가 연락드려 희망 날짜, 관심 프로그램, 인원 등을 확인하고 최적의 일정을 제안해 드립니다.</td></tr>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">03</td>
            <td class="sp-col-title">예약금과 취소 정책이 어떻게 되나요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">투어 확정 시 총 금액의 30%를 예약금으로 납부하며, 출발 7일 전까지는 전액 환불 가능합니다. 이후 취소 시 환불 규정이 적용됩니다.</td></tr>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">04</td>
            <td class="sp-col-title">외국어 가이드 서비스도 가능한가요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">영어, 중국어 가이드 동행 서비스를 제공합니다. 사전 요청 시 추가 비용 없이 안내해 드립니다.</td></tr>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">05</td>
            <td class="sp-col-title">숙박 연계 패키지도 있나요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">네, 부산 내 웰니스 특화 숙박시설과 연계한 패키지 상품을 운영합니다. 문의 시 숙박 포함 여부를 함께 알려주세요.</td></tr>
          <tr class="co-faq-item" onclick="coFaqToggle(this)">
            <td class="sp-col-no">06</td>
            <td class="sp-col-title">비용 결제는 어떻게 하나요?</td>

            <td class="sp-col-toggle"><span class="co-faq-icon">클릭</span></td>
          </tr>
          <tr class="co-faq-answer"><td colspan="3" class="co-faq-a">계좌이체, 신용카드(온라인 결제링크) 방식을 지원합니다. 세금계산서 및 현금영수증 발행도 가능합니다.</td></tr>
        </tbody>
      </table>

      <p class="co-section-title">Contact</p>
      <h2 class="co-heading">문의하기</h2>
      <div class="co-form-box" id="coFormBox">
        <div class="co-form-row">
          <div>
            <label class="co-label">문의 유형</label>
            <select class="co-select" id="coType">
              <option value="">선택해주세요</option>
              <option value="estimate">견적 요청</option>
              <option value="general">일반 문의</option>
              <option value="payment">결제 문의</option>
              <option value="other">기타</option>
            </select>
          </div>
          <div>
            <label class="co-label">이메일 <span>*</span></label>
            <input type="email" class="co-input" id="coEmail" placeholder="example@email.com" />
          </div>
        </div>
        <div class="co-form-row">
          <div>
            <label class="co-label">이름 <span>*</span></label>
            <input type="text" class="co-input" id="coName" placeholder="홍길동" />
          </div>
          <div>
            <label class="co-label">연락처 <span>*</span></label>
            <input type="tel" class="co-input" id="coPhone" placeholder="010-0000-0000" />
          </div>
        </div>
        <div class="co-form-row full">
          <div>
            <label class="co-label">문의 내용 <span>*</span></label>
            <textarea class="co-textarea" id="coMessage" placeholder="희망 날짜, 인원, 관심 프로그램 등을 자유롭게 적어주세요."></textarea>
          </div>
        </div>
        <div class="co-privacy">
          <strong>개인정보 수집 및 이용 동의</strong><br/>
          수집 항목: 이름, 이메일, 연락처 | 수집 목적: 문의 답변 및 서비스 안내 | 보유 기간: 문의 처리 완료 후 1년
        </div>
        <div class="co-check-row">
          <input type="checkbox" id="coPrivacy" />
          <label for="coPrivacy">개인정보 수집 및 이용에 동의합니다. (필수)</label>
        </div>
        <div style="margin-top:24px;">
          <button class="co-submit" id="coSubmitBtn" onclick="coSubmit()">문의 보내기</button>
        </div>
      </div>

    </div>
    </div>
  `);
}

function coFaqToggle(tr) {
  const answerRow = tr.nextElementSibling;
  const icon = tr.querySelector('.co-faq-icon');
  const isOpen = answerRow.classList.contains('open');
  document.querySelectorAll('.co-faq-answer.open').forEach(function(el) {
    el.classList.remove('open');
    const itemRow = el.previousElementSibling;
    itemRow.classList.remove('open');
    itemRow.querySelector('.co-faq-icon').textContent = '클릭';
  });
  if (!isOpen) {
    answerRow.classList.add('open');
    tr.classList.add('open');
    icon.textContent = '닫기';
  }
}

function coSubmit() {
  const name    = (document.getElementById('coName').value    || '').trim();
  const email   = (document.getElementById('coEmail').value   || '').trim();
  const phone   = (document.getElementById('coPhone').value   || '').trim();
  const message = (document.getElementById('coMessage').value || '').trim();
  const privacy = document.getElementById('coPrivacy').checked;
  if (!name || !email || !phone || !message) {
    alert('이름, 이메일, 연락처, 문의 내용은 필수 입력 항목입니다.');
    return;
  }
  if (!privacy) { alert('개인정보 수집 및 이용에 동의해 주세요.'); return; }
  const btn = document.getElementById('coSubmitBtn');
  btn.disabled = true;
  btn.textContent = '전송 중...';
  setTimeout(function() {
    btn.textContent = '문의가 접수되었습니다 ✓';
    btn.style.background = '#3b7a55';
  }, 800);
}

// =========================================
// Contact Us — 회사 정보 오버레이
// =========================================
function openContactUsPage() {
  showSubPageFull(`
    <div class="co-fullbg-wrap">
    <div class="co-fullbg-banner banner-songdo">
      <div class="co-page-header">
        <p>Contact Us</p>
        <h1>선샤인 웰니스<span class="co-page-subtitle">— Sunshine Wellness</span></h1>
      </div>
    </div>
    <div class="cu-wrap">

      <p class="co-section-title">Support</p>
      <h2 class="co-heading">고객센터 서비스</h2>
      <div class="sp-toolbar" style="margin-bottom:24px;">
        <p class="sp-count">총 <strong>9</strong>건</p>
        <button onclick="openContactPage()" class="sp-btn-write">문의하기</button>
      </div>
      <div class="cu-hc-grid">
        <button class="cu-hc-box" onclick="cuShowSection('notice')"><span class="cu-hc-box-icon">📢</span><span class="cu-hc-box-label">공지사항</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('faq')"><span class="cu-hc-box-icon">❓</span><span class="cu-hc-box-label">자주 묻는 질문</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('qna')"><span class="cu-hc-box-icon">💬</span><span class="cu-hc-box-label">묻고 답하기</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('voice')"><span class="cu-hc-box-icon">⭐</span><span class="cu-hc-box-label">고객의 소리</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('tomorrow')"><span class="cu-hc-box-icon">🌞</span><span class="cu-hc-box-label">친절한 햇살씨</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('delivery')"><span class="cu-hc-box-icon">📦</span><span class="cu-hc-box-label">우편배송조회</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('receipt')"><span class="cu-hc-box-icon">🧾</span><span class="cu-hc-box-label">현금영수증 발급 방법</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('vip')"><span class="cu-hc-box-icon">👑</span><span class="cu-hc-box-label">우수고객 등급혜택 안내</span></button>
        <button class="cu-hc-box" onclick="cuShowSection('events')"><span class="cu-hc-box-icon">🎉</span><span class="cu-hc-box-label">이벤트 당첨자 발표</span></button>
      </div>
      <div class="cu-divider"></div>

      <div class="cu-grid">

        <div class="cu-card">
          <div class="cu-icon">📍</div>
          <h3 class="cu-card-title">모이는 장소</h3>
          <p class="cu-card-body">부산광역시 부산진구<br/>서면 쥬디스태화 백화점 앞</p>
        </div>

        <div class="cu-card">
          <div class="cu-icon">📞</div>
          <h3 class="cu-card-title">전화 문의</h3>
          <p class="cu-card-body">010-5759-5485<br/><span style="font-size:12px;color:#999;">평일 09:00 – 18:00</span></p>
        </div>

        <div class="cu-card">
          <div class="cu-icon">✉️</div>
          <h3 class="cu-card-title">이메일</h3>
          <p class="cu-card-body"><a href="mailto:healthylee7@gmail.com" style="color:#1a2e2a;text-decoration:none;">healthylee7@gmail.com</a></p>
        </div>

        <div class="cu-card">
          <div class="cu-icon">🕐</div>
          <h3 class="cu-card-title">운영 시간</h3>
          <p class="cu-card-body">평일 09:00 – 18:00<br/>점심 12:00 – 13:00<br/><span style="font-size:12px;color:#999;">주말 · 공휴일 휴무</span></p>
        </div>

      </div>

      <div class="cu-divider"></div>

      <!-- 이용 안내 — How to Book -->
      <p class="co-section-title">How to Book</p>
      <h2 class="co-heading">이용 안내</h2>
      <div class="sp-toolbar" style="margin-bottom:28px;">
        <p class="sp-count">예약부터 출발까지</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:0;">
        ${[
          ['01','문의','전화·이메일·카카오톡으로 원하는 프로그램과 일정을 알려주세요.'],
          ['02','일정 확인','담당자가 맞춤 일정과 견적을 안내해 드립니다. (1~2 영업일 내)'],
          ['03','입금 확인','안내받은 계좌로 입금 후 예약이 확정됩니다.'],
          ['04','출발','확정된 일정에 맞춰 모이는 장소에서 출발합니다. 즐거운 여행 되세요!'],
        ].map(([step, title, desc], i, arr) => `
          <div style="display:flex;gap:20px;padding:22px 0;${i < arr.length-1 ? 'border-bottom:1px solid #ece9e4;' : ''}">
            <div style="flex-shrink:0;width:36px;height:36px;border-radius:50%;background:#1a2e2a;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;letter-spacing:.04em;">${step}</div>
            <div>
              <p style="font-size:14px;font-weight:700;color:#1a2e2a;margin-bottom:4px;">${title}</p>
              <p style="font-size:13.5px;color:#666;line-height:1.75;">${desc}</p>
            </div>
          </div>`).join('')}
      </div>

      <div class="cu-divider"></div>

      <div class="cu-sns-section">
        <p class="cu-sns-label">SNS</p>
        <div class="cu-sns-row">
          <a class="cu-sns-btn" href="https://www.instagram.com/" target="_blank" rel="noopener" title="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a class="cu-sns-btn" href="https://www.facebook.com/" target="_blank" rel="noopener" title="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a class="cu-sns-btn" href="https://blog.naver.com/" target="_blank" rel="noopener" title="Blog">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4 0h-2V8h2v9z"/></svg>
          </a>
        </div>
      </div>

      <div class="cu-divider"></div>

      <div class="cu-biz">
        <p>대표: 이 〇〇 &nbsp;|&nbsp; 사업자등록번호: 000-00-00000</p>
        <p>주소: 부산광역시 부산진구 서면 쥬디스태화 백화점 앞</p>
        <p style="margin-top:8px;color:#aaa;">© 2026 선샤인 웰니스. All rights reserved.</p>
      </div>


    </div>
    </div>
  `);
}

// =========================================
// 제휴 여행사 — 아트 컨시어지
// =========================================
function openArtConciergePage() {
  showSubPageFull(`
    <div class="co-fullbg-wrap">

      <div class="co-fullbg-banner" style="background:linear-gradient(rgba(10,10,20,0.60),rgba(10,10,20,0.55)),url('images/51315836390_c2d8b2c7e2_o.jpg') center/cover no-repeat;padding-top:80px;">
        <div class="co-page-header">
          <p>Partner Agency</p>
          <h1>아트 컨시어지<span class="co-page-subtitle">Art Concierge — Destination Art Travel</span></h1>
        </div>
      </div>

      <!-- ① Partnership 헤더만 — Where to Next?와 동일 구조 -->
      <div class="sp-wrap" style="padding-bottom:20px;">
        <p class="co-section-title">Partnership</p>
        <h2 class="co-heading">제휴 투어</h2>
        <div class="sp-toolbar">
          <p class="sp-count">선샤인 웰니스 × 아트 컨시어지</p>
          <button onclick="openContactPage()" class="sp-btn-write">문의하기</button>
        </div>
      </div>

      <!-- ② 이상훈 대표 프로필 + 2023 하이라이트 -->
      <div class="sp-wrap" style="padding-top:16px;padding-bottom:0;">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;padding:20px 28px 20px 0;background:#f7f6f3;border-radius:14px;">
          <div style="width:64px;height:64px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid #e0ddd8;margin-left:0;">
            <img src="images/LSH2.jpeg" alt="이상훈 대표" style="width:100%;height:100%;object-fit:cover;display:block;" />
          </div>
          <div style="flex:1;">
            <p style="font-size:16px;font-weight:800;color:#1a2e2a;margin-bottom:2px;">이상훈 대표</p>
            <p style="font-size:12px;color:#999;letter-spacing:.04em;">Art Concierge · Destination Art Specialist</p>
          </div>
          <div style="display:flex;gap:24px;flex-shrink:0;">
            ${[['1,400+','도시'],['400+','도록'],['64+','공연']].map(([n,l])=>`
            <div style="text-align:center;">
              <span style="display:block;font-size:17px;font-weight:800;color:#3B6259;">${n}</span>
              <span style="font-size:11px;color:#aaa;">${l}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="background:#1a2e2a;border-radius:14px;padding:28px 32px;">
          <p style="font-size:10.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:20px;">2023 하이라이트</p>
          <div style="display:flex;justify-content:space-around;text-align:center;">
            ${[['170','방문 도시'],['64','관람 공연'],['126','방문 미술관']].map(([n,l])=>`
            <div>
              <span style="display:block;font-size:36px;font-weight:800;color:#e8a04a;line-height:1;">${n}</span>
              <span style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:6px;display:block;">${l}</span>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- ③ About -->
      <div class="sp-wrap" style="padding-top:36px;padding-bottom:0;">
        <p style="font-size:10.5px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#3B6259;margin-bottom:12px;">About</p>
        <h2 style="font-size:clamp(22px,3vw,28px);font-weight:800;color:#1a2e2a;line-height:1.35;margin-bottom:18px;">예술 그 자체가<br/>목적인 여행</h2>
        <p style="font-size:15px;color:#555;line-height:1.9;margin-bottom:14px;">아트 컨시어지는 단순히 여행 중 공연이나 미술관을 방문하는 것이 아닌, <strong style="color:#1a2e2a;">특정 공연·전시·건축 공간을 주목적으로 기획하는 1인 전문 여행사</strong>입니다.</p>
        <p style="font-size:15px;color:#555;line-height:1.9;">"그곳에 가야만 볼 수 있는 예술"이라는 <em>데스티네이션 아트(Destination Art)</em> 철학 아래, 서유럽 음악·콘서트·건축 공간 VIP 투어를 전문으로 합니다.</p>
      </div>

      <!-- ④ 이상훈 사진 + 동서대 강의 카드 -->
      <div class="sp-wrap" style="padding-top:28px;padding-bottom:0;">
        <div class="ac-lsh-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch;">
          <div style="border-radius:14px;overflow:hidden;background:#111;aspect-ratio:4/3;">
            <img src="images/lsh.jpg" alt="이상훈 대표" style="width:100%;height:100%;object-fit:cover;display:block;opacity:.92;" />
          </div>
          <a href="https://uni.dongseo.ac.kr/qcollege/index.php?pCode=MN2000065&pg=2&mode=view&idx=322" target="_blank" rel="noopener"
             style="display:flex;flex-direction:column;justify-content:space-between;background:#f7f6f3;border:1px solid #e8e8e4;border-radius:14px;padding:24px 22px;text-decoration:none;transition:box-shadow .2s,transform .2s;"
             onmouseover="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.09)';this.style.transform='translateY(-2px)'"
             onmouseout="this.style.boxShadow='none';this.style.transform='none'">
            <div>
              <p style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#3B6259;margin-bottom:10px;">Lecture · 동서대학교</p>
              <h3 style="font-size:15px;font-weight:800;color:#1a2e2a;line-height:1.45;margin-bottom:12px;">스토리를 찾아 떠나는<br/>유럽 그랜드 투어</h3>
              <p style="font-size:13px;color:#666;line-height:1.75;">성당을 서점으로, 오페라 극장을 서점으로 — 유럽의 건축과 공간에 담긴 스토리를 찾아가는 아트 트래블 특강.</p>
            </div>
            <div style="margin-top:16px;display:flex;align-items:center;justify-content:space-between;">
              <span style="font-size:11.5px;color:#aaa;">2022년 9월 16일 · 동서대학교</span>
              <span style="font-size:13px;color:#3B6259;font-weight:700;">보기 ↗</span>
            </div>
          </a>
        </div>
      </div>

      <!-- ⑤ Specialty 전문 서비스 -->
      <div style="background:#f5f5f3;padding:56px 0 40px;margin-top:40px;">
        <div class="sp-wrap">
          <p class="co-section-title">Specialty</p>
          <h2 class="co-heading" style="margin-bottom:32px;">전문 서비스</h2>
          <div class="ac-service-wide">
            ${[
              ['🎼','음악 · 콘서트','빈 필하모닉, 잘츠부르크 페스티벌 등 서유럽 정상급 음악 공연 VIP 관람 기획','#3B6259'],
              ['🏛️','건축 공간 투어','사그라다 파밀리아, 루이 뷔통 재단 등 현대 건축 걸작을 전문 해설과 함께','#3B6259'],
              ['🎨','미술관 컨시어지','루브르, 오르세, 테이트 등 400여 개 도록 기반의 깊이 있는 관람 설계','#3B6259'],
            ].map(([icon,title,desc,color])=>`
              <div style="display:flex;flex-direction:column;gap:12px;padding:24px 24px 22px;background:#fff;border:1px solid #e8e8e4;border-top:3px solid ${color};border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,0.05);">
                <span style="font-size:28px;">${icon}</span>
                <div>
                  <h3 style="font-size:15px;font-weight:700;color:#1a2e2a;margin-bottom:8px;">${title}</h3>
                  <p style="font-size:13.5px;color:#666;line-height:1.8;">${desc}</p>
                </div>
              </div>`).join('')}
          </div>
        </div>
        <!-- 링크 카드 — 2열 그리드 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:24px;">
          ${[
            ['📰','부산일보 기사','"예술 그 자체가 목적인 여행"','https://www.busan.com/view/busan/view.php?code=2024010814490253602',''],
            ['📄','소개자료 PDF','서비스 소개서 (busandabom.net)','https://busandabom.net/bofels/BBS_202302020440515501.pdf',''],
            ['🗞️','부산일보 연재','이상훈의 시그너처 문화공간 이야기','https://www.busan.com/search/index.php?search_string=[이상훈의시그너처문화공간이야기]','grid-column:1/-1;'],
          ].map(([icon,label,desc,url,span]) => `
            <a href="${url}" target="_blank" rel="noopener"
               style="${span}display:flex;align-items:center;gap:14px;background:#fff;border:1px solid #e0ddd8;border-radius:14px;padding:16px 18px;text-decoration:none;transition:box-shadow .2s,transform .2s;"
               onmouseover="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.09)';this.style.transform='translateY(-2px)'"
               onmouseout="this.style.boxShadow='none';this.style.transform='none'">
              <span style="font-size:24px;flex-shrink:0;">${icon}</span>
              <div style="flex:1;min-width:0;">
                <p style="font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#3B6259;margin-bottom:2px;">${label}</p>
                <p style="font-size:12.5px;font-weight:600;color:#1a2e2a;line-height:1.4;">${desc}</p>
              </div>
              <span style="font-size:14px;color:#bbb;flex-shrink:0;">↗</span>
            </a>`).join('')}
        </div>
      </div>

      <!-- ⑥ 4 Partnership 투어 카드 -->
      <div style="background:#f5f5f3;padding:0 0 56px;">
        <div class="sp-wrap">
          <div class="ac-tour-grid">
            ${[
              ['🎼','Exclusive','잘츠부르크 음악 페스티벌 VIP','오스트리아 · 8박 10일','매년 여름 개최되는 세계 최고의 클래식 음악 축제. VIP 좌석과 리허설 관람, 아티스트 백스테이지 투어 포함.','#e8a04a'],
              ['🏛️','Curated','빈 필하모닉 골든홀 콘서트','오스트리아 · 5박 7일','세계 3대 콘서트홀 무직페라인 황금홀에서의 특별 공연 관람. 비엔나 왕궁·미술사박물관 연계 투어.','#3B6259'],
              ['🎨','Curated','루브르 야간 VIP 관람','프랑스 · 6박 8일','일반 관람객 없는 시간대의 루브르 전용 투어. 큐레이터 해설과 함께하는 깊이 있는 감상 경험.','#3B6259'],
              ['🏗️','Exclusive','사그라다 파밀리아 건축 기행','스페인 · 7박 9일','가우디 건축의 정수를 탑 입장권·건축 전문가 해설과 함께. 바르셀로나 현대 건축 도시 탐방 포함.','#e8a04a'],
            ].map(([icon,tag,title,sub,desc,color])=>`
              <div style="display:flex;flex-direction:column;gap:12px;padding:24px 24px 22px;background:#fff;border:1px solid #e8e8e4;border-top:3px solid ${color};border-radius:14px;box-shadow:0 2px 12px rgba(0,0,0,0.05);">
                <div style="display:flex;align-items:center;gap:12px;">
                  <span style="font-size:26px;">${icon}</span>
                  <span style="font-size:9.5px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${color};">${tag}</span>
                </div>
                <div>
                  <h3 style="font-size:15px;font-weight:700;color:#1a2e2a;margin-bottom:4px;">${title}</h3>
                  <p style="font-size:12px;color:#aaa;margin-bottom:10px;">${sub}</p>
                  <p style="font-size:13.5px;color:#666;line-height:1.8;">${desc}</p>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div style="max-width:900px;margin:0 auto;padding:40px 40px 64px;">
        <div style="text-align:center;">
          <p style="font-size:13px;color:#999;margin-bottom:20px;">선샤인 웰니스와 아트 컨시어지가 함께 설계하는 특별한 여행</p>
          <button onclick="openContactPage()" style="display:inline-flex;align-items:center;gap:10px;background:#1a2e2a;color:#fff;font-size:14px;font-weight:700;padding:15px 44px;border-radius:32px;border:none;cursor:pointer;font-family:'Noto Sans KR',sans-serif;letter-spacing:.04em;">문의하기 →</button>
        </div>
      </div>

    </div>
  `);
}

// =========================================
// 프로그램 소개 새 창
// =========================================
function openProgramsPage() {
  const lang = currentLang || 'ko';
  const t = translations[lang] || translations.ko;

  const IMGS = {
    tour:     'images/gwangan-bridge-haeundae-busan-korea.jpg',
    culture:  'images/51315836390_c2d8b2c7e2_o.jpg',
    temple:   'images/haedong-yonggungsa-temple-haeundae-sea-busan-buddhist-temple-busan-south-korea.jpg',
    art:      'images/(BB2024)부산현대미술관_외부.jpg',
    market:   'images/Inside_Jagalchi_Fish_Market,_Busan.jpg',
    history:  'images/sulee-busan-tower-825463.jpg',
    ecology:  'images/부산광역시 사하구 을숙도 고니3.jpg',
    festival: 'images/songdo-festival.jpg',
    night:    'images/20191229151710512.jpeg',
  };

  const cards = [
    { key:'tour',    tag:t['card1.tag'], title:t['card1.title'], desc:t['card1.desc'] },
    { key:'culture', tag:t['card2.tag'], title:t['card2.title'], desc:t['card2.desc'] },
    { key:'temple',  tag:t['card3.tag'], title:t['card3.title'], desc:t['card3.desc'] },
    { key:'art',     tag:t['card4.tag'], title:t['card4.title'], desc:t['card4.desc'] },
    { key:'market',  tag:t['card5.tag'], title:t['card5.title'], desc:t['card5.desc'] },
    { key:'history', tag:t['card6.tag'], title:t['card6.title'], desc:t['card6.desc'] },
    { key:'ecology',  tag:t['card7.tag'], title:t['card7.title'], desc:t['card7.desc'] },
    { key:'festival', tag:t['card8.tag'], title:t['card8.title'], desc:t['card8.desc'] },
    { key:'night',    tag:t['card9.tag'], title:t['card9.title'], desc:t['card9.desc'] },
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
          <button class="btn-outline" onclick="openModal('${c.key}')">여행 정보</button>
          <button class="btn-solid" onclick="openContactPage()">문의하기 →</button>
        </div>
      </div>
    </div>`).join('');

  showSubPageFull(`
    <div class="co-fullbg-wrap">
    <div class="co-fullbg-banner banner-colorful">
      <div class="co-page-header">
        <p>Our Programs</p>
        <h1>웰니스 여행 프로그램<span class="co-page-subtitle">— 몸과 마음이 함께 쉬어가는 시간</span></h1>
      </div>
    </div>
    <div style="background:#f5f5f3;min-height:100%;">
      <div style="max-width:1160px;margin:0 auto;padding:56px 40px 80px;">
        <p style="font-size:15px;color:#666;margin-bottom:48px;line-height:1.8;">몸과 마음이 함께 쉬어가는 부산의 특별한 여정.<br/>신중년의 배움과 성장을 위한 맞춤형 웰니스 투어입니다.</p>
        <div class="prog-grid">${cardHtml}</div>
      </div>
    </div>
    </div>`);
}

// =========================================
// 웰니스 소개 새 창
// =========================================
function openAboutPage() {


  // 1. Hero
  const sec1 = `
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
    </section>`

  // 2. Who We Are
  const sec2 = `
    <section class="ab-section" style="background:#fff;padding:80px 40px;">
      <div class="ab-who-grid" style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;">
        <div>
          <p class="ab-eyebrow" style="color:#3B6259;">Who We Are</p>
          <h2 class="ab-h2">단순한 여행을 넘어,<br/>인생의 동반자가 되겠습니다</h2>
        </div>
        <div>
          <p class="ab-body" style="margin-bottom:18px;">선샤인 웰니스는 여행이 단순한 휴식이 아니라 인생의 의미를 찾고 성장하는 시간이 될 수 있다고 믿습니다.</p>
          <p class="ab-body">부산의 자연·문화·역사와 깊이 만나는 경험이 삶에 새로운 활력을 불어넣어 줍니다. 웰니스와 문화 체험을 결합한 독창적인 프로그램으로 몸과 마음의 균형을 되찾도록 돕겠습니다.</p>
          <blockquote style="margin-top:28px;padding:18px 22px;background:#f5f5f3;border-left:3px solid #1a2e2a;border-radius:0 8px 8px 0;">
            <p class="ab-caption" style="font-weight:600;color:#1a2e2a;font-style:italic;">"여행의 모든 순간이 의미 있고 가치 있게 완성되도록, 선샤인 웰니스는 진심 어린 동반자가 되겠습니다."</p>
          </blockquote>
        </div>
      </div>
    </section>`;

  // 3. For You
  const forYouCards = [
    ['지속적인 성장', '은퇴 후에도 배움을 멈추지 않고, 새로운 경험으로 지적·정서적 성장을 이어가고 싶은 분께 맞춤 여정을 제안합니다.'],
    ['삶의 균형 회복', '오랜 시간 타인을 위해 살아온 분들이 자신을 위한 시간을 되찾고, 몸과 마음의 균형을 회복하는 여행입니다.'],
    ['의미의 재발견', '인생 3막을 어떻게 살아갈지 고민하는 분들과 부산의 깊은 이야기 속에서 새로운 방향을 찾아갑니다.'],
    ['의미 있는 인연', '같은 가치를 공유하는 동반자들과 함께 걷고 이야기하며, 서로의 경험을 나누는 소규모 그룹 여행입니다.'],
  ].map(([t, d], i) => `
    <div style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:24px 20px;">
      <span class="ab-eyebrow" style="color:rgba(255,255,255,0.35);margin-bottom:12px;display:block;">0${i + 1}</span>
      <h3 style="font-size:15px;font-weight:700;color:#fff;margin-bottom:8px;line-height:1.4;">${t}</h3>
      <p class="ab-caption" style="color:rgba(255,255,255,0.6);">${d}</p>
    </div>`).join('');

  const sec3 = `
    <section class="ab-section" style="background:url('images/beach-landscape-sea-coast-horizon-boardwalk-796287-pxhere.com.jpg') center/cover no-repeat;padding:80px 40px;position:relative;">
      <div style="position:absolute;inset:0;background:rgba(10,30,40,0.54);"></div>
      <div style="max-width:900px;margin:0 auto;position:relative;">
        <p class="ab-eyebrow" style="color:rgba(255,255,255,0.55);">For You</p>
        <h2 class="ab-h2" style="color:#fff;margin-bottom:10px;">40~60대 신중년을 위해<br/>설계된 여행</h2>
        <p class="ab-body" style="color:rgba(255,255,255,0.72);margin-bottom:44px;">시간과 여유가 생긴 지금, 진정한 나를 찾는 여정을 시작해보세요.</p>
        <div class="ab-for-you-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">${forYouCards}</div>
      </div>
    </section>`;

  // 4. Our Promise
  const promiseCards = [
    ['01', '즐길거리', '배움과 여가가 함께하는 여행', '역사·문화·예술·자연을 깊이 탐방하는 웰니스 여행. 단순 관광이 아닌 진정한 체험으로 설계합니다.'],
    ['02', '먹거리', '건강한 부산의 맛', '여행 중 건강을 지키는 로컬 음식과 건강 간식으로 몸이 활기차게 여정을 이어갈 수 있도록 돕습니다.'],
    ['03', '일거리', '교육 및 일자리 연계', '여행 이후에도 삶이 이어지도록, 교육과 일자리 연계 서비스로 사회와 연결된 삶을 지원합니다.'],
  ].map(([n, t, tag, d]) => `
    <div style="background:#fff;border-radius:14px;padding:28px 22px;border-top:3px solid #1a2e2a;box-shadow:0 2px 14px rgba(0,0,0,0.06);">
      <span style="display:block;font-size:28px;font-weight:800;color:#ececea;line-height:1;margin-bottom:16px;">${n}</span>
      <h3 style="font-size:16px;font-weight:700;color:#1a2e2a;margin-bottom:4px;">${t}</h3>
      <span class="ab-eyebrow" style="color:#3B6259;margin-bottom:12px;display:block;">${tag}</span>
      <p class="ab-caption" style="color:#666;">${d}</p>
    </div>`).join('');

  const sec4 = `
    <section class="ab-section" style="background:#f5f5f3;padding:80px 40px;">
      <div style="max-width:900px;margin:0 auto;">
        <p class="ab-eyebrow" style="color:#3B6259;">Our Promise</p>
        <h2 class="ab-h2">선샤인 웰니스의<br/>세 가지 약속</h2>
        <div class="ab-promise-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px;">${promiseCards}</div>
      </div>
    </section>`;

  // 5. CTA
  const sec5 = `
    <section class="ab-section" style="background:url('images/haeundae-sand-festival-in-busan-south-korea-518632 (2).jpg') center/cover no-repeat;padding:80px 40px;text-align:center;position:relative;">
      <div style="position:absolute;inset:0;background:rgba(10,25,35,0.56);"></div>
      <div style="max-width:520px;margin:0 auto;position:relative;">
        <p class="ab-eyebrow" style="color:rgba(255,255,255,0.55);">Get Started</p>
        <h2 class="ab-h2" style="color:#fff;margin-bottom:14px;">지금, 당신의 여정을<br/>시작하세요</h2>
        <p class="ab-body" style="color:rgba(255,255,255,0.78);margin-bottom:36px;">선샤인 웰니스가 당신만의 맞춤 웰니스 여행을 함께 설계합니다.</p>
        <button onclick="openContactPage()" style="display:inline-block;background:#fff;color:#1a2e2a;font-size:14px;font-weight:700;padding:14px 40px;border-radius:30px;border:none;cursor:pointer;letter-spacing:.04em;font-family:'Noto Sans KR',sans-serif;">문의하기 →</button>
      </div>
    </section>`;


  showSubPageFull(`<div class="co-fullbg-wrap"><div class="co-fullbg-banner banner-seagull"><div class="co-page-header"><p>About</p><h1>웰니스 소개 <span style="font-weight:300;opacity:.7;">— Sunshine Wellness</span></h1></div></div>` + sec1 + sec2 + sec3 + sec4 + sec5 + `</div>`)
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
      title: '감천 아트 투어',
      duration: '반나절',
      price: '문의',
      maxPeople: '최대 15명',
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
      maxPeople: 'Max 15 people',
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
      maxPeople: '最多15人',
      description: '在釜山艺术村甘川文化村，与当地艺术家共同体验特别的艺术之旅。漫步五彩斑斓的小巷，欣赏各处艺术作品。',
      spots: ['甘川文化村', '小王子雕塑', '鱼形阶梯壁画', '村庄画廊'],
      courses: ['上午：甘川文化村导览游', '途中：巷弄艺术作品欣赏', '村庄咖啡厅休息', '下午：当地艺术家工作室参观'],
      tip: '甘川文化村地势有坡，请穿着舒适的鞋子。上午参观人较少。',
      links: [{ label: '甘川文化村', url: 'http://www.gamcheon.or.kr' }],
      source: '甘川文化村居民协会',
    },
  },

  art: {
    ko: {
      title: '문화 체험 여행',
      duration: '당일치기',
      price: '문의',
      maxPeople: '최대 12명',
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
      maxPeople: 'Max 12 people',
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
      maxPeople: '最多12人',
      description: '与专业解说员一同，深度体验釜山传统文化与当代艺术的特别文化之旅。包含与当地艺术家的交流及传统工艺体验。',
      spots: ['釜山市立美术馆', '釜山文化会馆', '民主公园', '宝水洞书街'],
      courses: ['上午：釜山市立美术馆参观', '午餐：南浦洞街头美食', '下午：宝水洞书街探访', '傍晚：民主公园参观'],
      tip: '釜山市立美术馆每周一休馆，请提前确认。',
      links: [{ label: '釜山市立美术馆', url: 'https://www.busan.go.kr/museum' }],
      source: '釜山文化财团',
    },
  },

  temple: {
    ko: {
      title: '부산·양산·밀양 사찰 힐링 투어',
      duration: '반나절~1일 (코스별)',
      price: '문의',
      maxPeople: '최대 12명',
      description: '도심에서 가까운 산사와 바다 사찰, 그리고 역사 깊은 명찰을 따라 떠나는 사찰 여행입니다. 부산의 대표 사찰인 범어사와 해동용궁사, 기장의 고즈넉한 장안사, 양산의 대찰 통도사, 밀양의 호국불교 유산 표충사까지 지역별 특색에 따라 선택할 수 있는 코스로 구성했습니다.',
      spots: [
        '범어사 — 부산광역시 금정구 범어사로 250',
        '해동용궁사 — 부산광역시 기장군 기장읍 용궁길 86',
        '장안사 — 부산광역시 기장군 장안읍 장안로 482',
        '통도사 — 경상남도 양산시 하북면 통도사로 108',
        '표충사 — 경상남도 밀양시 단장면 표충로 1338',
      ],
      courses: [
        '코스 1 (부산 대표): 범어사 → 해동용궁사 — 산사와 바다 사찰을 하루에 (반나절~1일)',
        '코스 2 (기장 힐링): 해동용궁사 → 장안사 — 이동 부담 없는 기장권 집중 코스 (반나절~1일)',
        '코스 3 (양산 역사): 통도사 단독 답사 — 대형 사찰·불교문화 심층 탐방 (반나절~1일)',
        '코스 4 (밀양 호국불교): 표충사 단독 답사 — 사명대사·호국불교 역사 해설 (1일)',
      ],
      tip: '편한 신발과 단정한 복장을 권장합니다. 통도사·표충사는 부산에서 차로 약 1~1.5시간 소요됩니다. 사찰 내부 촬영 시 예절을 지켜주세요.',
      links: [
        { label: '범어사 (조계종 제14교구)', url: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php' },
        { label: '범어사 관광 안내 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=402' },
        { label: '해동용궁사 공식 사이트', url: 'https://www.yongkungsa.or.kr/' },
        { label: '해동용궁사 관광 안내 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=261' },
        { label: '통도사 공식 사이트', url: 'https://www.tongdosa.or.kr' },
        { label: '범어사 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250' },
        { label: '해동용궁사 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086' },
        { label: '장안사 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482' },
        { label: '통도사 지도', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108' },
        { label: '표충사 지도', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338' },
      ],
      source: 'Visit Busan / 부산관광공사',
      spotDetails: [
        {
          name: '범어사',
          address: '부산광역시 금정구 범어사로 250',
          description: '금정산 자락에 자리한 부산의 대표 사찰입니다. 울창한 숲길과 고즈넉한 전각, 산사의 차분한 분위기가 어우러져 부산의 불교문화와 자연경관을 함께 느낄 수 있습니다. 도심과 가까우면서도 깊은 산사에 들어온 듯한 평온함을 경험할 수 있는 곳입니다.',
          commentPoint: '일주문을 지나 사찰 안으로 들어가는 과정은 일상에서 벗어나 마음을 가다듬는 여정처럼 느껴집니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250',
          officialUrl: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php',
        },
        {
          name: '해동용궁사',
          address: '부산광역시 기장군 기장읍 용궁길 86',
          description: '바다와 맞닿아 있는 부산의 대표 해안 사찰입니다. 일반적인 산속 사찰과 달리 푸른 바다를 배경으로 전각이 이어져 있어 독특한 경관을 자랑합니다. 기도처이자 관광 명소로도 인기가 높으며, 일출과 해안 풍경을 감상하기 좋은 장소입니다.',
          commentPoint: '탁 트인 해안 풍경 속에서 기도와 관광, 휴식이 함께 이루어지는 공간으로, 바다를 생활권으로 삼아온 지역성과 불교 신앙이 결합된 장소입니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086',
          officialUrl: 'https://www.yongkungsa.or.kr',
        },
        {
          name: '장안사',
          address: '부산광역시 기장군 장안읍 장안로 482',
          description: '불광산 자락에 위치한 조용한 사찰입니다. 해동용궁사가 바다와 관광의 이미지가 강하다면, 장안사는 산과 계곡, 고즈넉한 분위기가 돋보입니다. 복잡한 관광지보다 차분한 사찰 산책을 원하는 여행객에게 잘 어울립니다.',
          commentPoint: '해동용궁사와 함께 방문하면 해안 사찰과 산사의 분위기를 비교하며 감상할 수 있습니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482',
        },
        {
          name: '통도사',
          address: '경상남도 양산시 하북면 통도사로 108',
          description: '영남권을 대표하는 명찰 중 하나입니다. 사찰의 규모가 크고 문화유산이 풍부해 불교문화 답사 코스로 적합합니다. 경내를 천천히 걸으며 전각, 숲길, 사찰 주변 풍경을 함께 감상할 수 있습니다.',
          commentPoint: '대웅전, 사리 신앙, 사찰의 공간 배치 등을 중심으로 한국 불교문화의 깊이를 만날 수 있는 곳입니다.',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108',
          officialUrl: 'https://www.tongdosa.or.kr',
        },
        {
          name: '표충사',
          address: '경상남도 밀양시 단장면 표충로 1338',
          description: '밀양을 대표하는 사찰로, 사명대사와 관련된 역사적 의미가 깊은 곳입니다. 불교문화뿐 아니라 임진왜란, 호국불교, 지역 역사 해설과 연결하기 좋습니다. 사찰 주변 자연경관도 아름다워 조용한 힐링 여행지로도 좋습니다.',
          commentPoint: '"기도의 공간"이면서 동시에 "역사를 기억하는 공간"입니다. 사명대사, 임진왜란, 호국불교의 의미를 연결하면 인상 깊은 여행이 됩니다.',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338',
        },
      ],
      courseDetails: [
        {
          title: '부산 대표 사찰 코스',
          spots: '범어사 · 해동용궁사',
          subtitle: '산사와 바다 사찰을 하루에 만나는 부산 대표 코스',
          intro: '금정산의 숲과 고즈넉한 사찰 분위기, 기장 해안의 탁 트인 바다 풍경을 모두 경험할 수 있습니다.',
          info: [
            ['추천 대상', '부산 대표 사찰을 처음 방문하는 여행객'],
            ['여행 분위기', '역사, 자연, 바다 풍경, 사진 명소'],
            ['추천 소요', '반나절~1일'],
            ['이동 난이도', '보통'],
          ],
          itinerary: [
            ['오전', '범어사 도착 및 산사 관람'],
            ['점심', '금정구 또는 기장 이동 후 식사'],
            ['오후', '해동용궁사 관람 및 해안 풍경 감상'],
            ['선택', '기장 카페거리 또는 오시리아 관광단지 연계'],
          ],
        },
        {
          title: '기장 힐링 사찰 코스',
          spots: '해동용궁사 · 장안사',
          subtitle: '바다와 계곡을 함께 만나는 기장 집중 코스',
          intro: '이동 부담이 비교적 적은 기장권 사찰 여행으로, 해동용궁사의 바다 풍경과 장안사의 산과 계곡 분위기를 함께 즐길 수 있어 가족 여행이나 어르신 동반 여행에도 적합합니다.',
          info: [
            ['추천 대상', '이동 거리를 줄이고 싶은 여행객'],
            ['여행 분위기', '바다, 산사, 계곡, 힐링'],
            ['추천 소요', '반나절~1일'],
            ['이동 난이도', '쉬움'],
          ],
          itinerary: [
            ['오전', '해동용궁사 관람'],
            ['점심', '기장 해안가 식사'],
            ['오후', '장안사 관람 및 산책'],
            ['선택', '일광해수욕장, 기장 카페, 오시리아 관광단지 연계'],
          ],
        },
        {
          title: '양산 역사 사찰 코스',
          spots: '통도사 단독 답사',
          subtitle: '한국 불교문화를 깊이 만나는 양산 대표 코스',
          intro: '통도사는 양산을 대표하는 대형 사찰로 규모와 역사성이 뛰어납니다. 짧게 둘러보기보다 하루 코스로 여유 있게 방문하는 것이 좋습니다.',
          info: [
            ['추천 대상', '역사와 불교문화에 관심 있는 여행객'],
            ['여행 분위기', '역사, 문화유산, 전통 사찰'],
            ['추천 소요', '반나절~1일'],
            ['이동 난이도', '보통'],
          ],
          itinerary: [
            ['오전', '부산 출발, 양산 통도사 이동'],
            ['오전~점심', '통도사 경내 관람'],
            ['점심', '통도사 인근 식사'],
            ['오후', '통도사 주변 산책 및 카페 휴식'],
            ['선택', '양산 내원사계곡 또는 양산 시내 연계'],
          ],
        },
        {
          title: '밀양 호국불교 코스',
          spots: '표충사 단독 답사',
          subtitle: '사명대사의 정신과 산사의 고요함을 만나는 밀양 코스',
          intro: '표충사는 사명대사와 관련된 역사적 의미가 깊은 곳으로, 불교문화뿐 아니라 임진왜란·호국불교·지역 역사 해설과 연결하기 좋습니다.',
          info: [
            ['추천 대상', '역사 해설형 여행을 원하는 여행객'],
            ['여행 분위기', '역사, 호국불교, 산사, 자연'],
            ['추천 소요', '1일'],
            ['이동 난이도', '보통~다소 높음'],
          ],
          itinerary: [
            ['오전', '부산 또는 양산 출발, 밀양 이동'],
            ['오전~점심', '표충사 관람'],
            ['점심', '밀양 향토 음식 식사'],
            ['오후', '표충사 주변 산책'],
            ['선택', '얼음골, 영남루, 밀양강 주변 관광 연계'],
          ],
        },
      ],
      courseGuide: [
        ['부산 대표 사찰을 보고 싶다면', '범어사 · 해동용궁사'],
        ['이동을 줄이고 편하게 보고 싶다면', '해동용궁사 · 장안사'],
        ['불교문화와 대형 사찰을 깊이 보고 싶다면', '통도사'],
        ['역사 해설과 호국불교를 함께 보고 싶다면', '표충사'],
        ['어르신·가족 동반 여행이라면', '해동용궁사 · 장안사'],
        ['교육·답사형 여행이라면', '통도사 또는 표충사'],
      ],
    },
    en: {
      title: 'Busan · Yangsan · Miryang Temple Healing Tour',
      duration: 'Half Day~Full Day (by course)',
      price: 'Inquire',
      maxPeople: 'Max 12 people',
      description: 'A temple journey through mountain temples, seaside temples, and historic Buddhist sites near Busan. Choose from courses centered on Beomeosa & Haedong Yonggungsa in Busan, Jangan-sa in Gijang, Tongdosa in Yangsan, and Pyochungsa in Miryang.',
      spots: [
        'Beomeosa — 250 Beomeosa-ro, Geumjeong-gu, Busan',
        'Haedong Yonggungsa — 86 Yonggung-gil, Gijang-eup, Gijang-gun, Busan',
        'Jangan-sa — 482 Jangan-ro, Jangan-eup, Gijang-gun, Busan',
        'Tongdosa — 108 Tongdosa-ro, Habuk-myeon, Yangsan, Gyeongnam',
        'Pyochungsa — 1338 Pyochung-ro, Danjang-myeon, Miryang, Gyeongnam',
      ],
      courses: [
        'Course 1 (Busan Classics): Beomeosa → Haedong Yonggungsa — Mountain & seaside temples in one day',
        'Course 2 (Gijang Healing): Haedong Yonggungsa → Jangan-sa — Compact Gijang-area tour',
        'Course 3 (Yangsan History): Tongdosa solo visit — Deep Buddhist culture exploration',
        'Course 4 (Miryang Patriotic): Pyochungsa solo visit — History & patriotic Buddhism commentary',
      ],
      tip: 'Wear comfortable shoes and modest attire. Tongdosa and Pyochungsa are about 1–1.5 hours from Busan by car. Please observe temple etiquette when photographing.',
      links: [
        { label: 'Beomeosa (Jogye Order District 14)', url: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php' },
        { label: 'Beomeosa Tourist Info (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=402' },
        { label: 'Haedong Yonggungsa Official Site', url: 'https://www.yongkungsa.or.kr/' },
        { label: 'Haedong Yonggungsa Tourist Info (Visit Busan)', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=261' },
        { label: 'Tongdosa Official Site', url: 'https://www.tongdosa.or.kr' },
        { label: 'Beomeosa Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250' },
        { label: 'Haedong Yonggungsa Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086' },
        { label: 'Jangan-sa Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482' },
        { label: 'Tongdosa Map', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108' },
        { label: 'Pyochungsa Map', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338' },
      ],
      source: 'Visit Busan / Busan Tourism Organization',
      spotDetails: [
        {
          name: 'Beomeosa',
          address: '250 Beomeosa-ro, Geumjeong-gu, Busan',
          description: "Busan's representative mountain temple nestled in Geumjeongsan. Lush forest trails, serene halls, and a calm atmosphere let you experience both Buddhist culture and natural scenery. Despite being close to the city, it feels like a deep mountain retreat.",
          commentPoint: 'Walking through the Iljumun gate feels like crossing into a different world — a journey to clear the mind away from daily life.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250',
          officialUrl: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php',
        },
        {
          name: 'Haedong Yonggungsa',
          address: '86 Yonggung-gil, Gijang-eup, Gijang-gun, Busan',
          description: "Busan's iconic coastal temple right at the sea. Its halls stretch along a blue ocean backdrop for a unique landscape unlike typical mountain temples. Popular as both a prayer site and tourist attraction — excellent for sunrise and coastal views.",
          commentPoint: 'Prayer, sightseeing, and relaxation coexist in this open coastal setting where local maritime life and Buddhist faith have long been intertwined.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086',
          officialUrl: 'https://www.yongkungsa.or.kr',
        },
        {
          name: 'Jangan-sa',
          address: '482 Jangan-ro, Jangan-eup, Gijang-gun, Busan',
          description: 'A quiet temple at the foot of Bulgwangsan. Where Haedong Yonggungsa is known for ocean views and tourism, Jangan-sa stands out for its mountain and valley atmosphere. Well suited for travelers who prefer a calm temple stroll.',
          commentPoint: 'Visiting alongside Haedong Yonggungsa lets you contrast coastal temple and mountain temple experiences.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482',
        },
        {
          name: 'Tongdosa',
          address: '108 Tongdosa-ro, Habuk-myeon, Yangsan, Gyeongnam',
          description: 'One of the most representative major temples in the Yeongnam region, with outstanding scale and cultural heritage. Ideal for a Buddhist culture study tour — stroll leisurely through halls, forest paths, and surrounding landscape.',
          commentPoint: 'Focus on the Daeungjeon hall, relic faith, and spatial layout to reveal the depth of Korean Buddhist culture.',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108',
          officialUrl: 'https://www.tongdosa.or.kr',
        },
        {
          name: 'Pyochungsa',
          address: '1338 Pyochung-ro, Danjang-myeon, Miryang, Gyeongnam',
          description: "Miryang's representative temple with deep historical significance related to the monk Samyeongdang. Excellent for connecting Buddhist culture with the Imjin War, patriotic Buddhism, and local history. Beautiful natural surroundings make it a fine healing destination too.",
          commentPoint: 'Both a "space for prayer" and a "space that remembers history." Linking Samyeongdang, the Imjin War, and patriotic Buddhism creates a memorable interpretive tour.',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338',
        },
      ],
      courseDetails: [
        {
          title: 'Busan Classic Temple Course',
          spots: 'Beomeosa · Haedong Yonggungsa',
          subtitle: 'Mountain and seaside temple in one day',
          intro: "Experience Geumjeongsan's forest and serene temple atmosphere alongside Gijang's open coastal scenery.",
          info: [
            ['Best For', 'First-time Busan temple visitors'],
            ['Atmosphere', 'History, nature, ocean views, photo spots'],
            ['Duration', 'Half day~full day'],
            ['Difficulty', 'Moderate'],
          ],
          itinerary: [
            ['Morning', 'Arrive Beomeosa, temple tour'],
            ['Lunch', 'Move to Geumjeong-gu or Gijang for meal'],
            ['Afternoon', 'Haedong Yonggungsa tour & coastal views'],
            ['Optional', 'Gijang café street or Osiria Tourist Complex'],
          ],
        },
        {
          title: 'Gijang Healing Temple Course',
          spots: 'Haedong Yonggungsa · Jangan-sa',
          subtitle: 'Sea and valley in one focused Gijang tour',
          intro: 'A lower-travel-burden Gijang tour combining ocean views of Haedong Yonggungsa with the mountain and valley feel of Jangan-sa. Suitable for family or senior group travel.',
          info: [
            ['Best For', 'Travelers wanting minimal travel distance'],
            ['Atmosphere', 'Sea, mountain temple, valley, healing'],
            ['Duration', 'Half day~full day'],
            ['Difficulty', 'Easy'],
          ],
          itinerary: [
            ['Morning', 'Haedong Yonggungsa tour'],
            ['Lunch', 'Meal at Gijang coastal restaurant'],
            ['Afternoon', 'Jangan-sa tour & stroll'],
            ['Optional', 'Ilgwang Beach, Gijang café, Osiria Tourist Complex'],
          ],
        },
        {
          title: 'Yangsan History Temple Course',
          spots: 'Tongdosa — Solo Visit',
          subtitle: 'A deep dive into Korean Buddhist culture',
          intro: "Tongdosa is Yangsan's representative large temple with outstanding scale and historical significance. Plan a full day for a leisurely exploration.",
          info: [
            ['Best For', 'Travelers interested in history & Buddhist culture'],
            ['Atmosphere', 'History, cultural heritage, traditional temple'],
            ['Duration', 'Half day~full day'],
            ['Difficulty', 'Moderate'],
          ],
          itinerary: [
            ['Morning', 'Depart Busan, travel to Tongdosa, Yangsan'],
            ['Morning~Lunch', 'Tongdosa grounds tour'],
            ['Lunch', 'Meal near Tongdosa'],
            ['Afternoon', 'Stroll around Tongdosa & café rest'],
            ['Optional', "Naewon-sa Valley or Yangsan city center"],
          ],
        },
        {
          title: 'Miryang Patriotic Buddhism Course',
          spots: 'Pyochungsa — Solo Visit',
          subtitle: "Samyeongdang's spirit and mountain temple serenity in Miryang",
          intro: 'Pyochungsa holds deep historical significance related to Samyeongdang, excellent for connecting with the Imjin War and patriotic Buddhism.',
          info: [
            ['Best For', 'Travelers wanting history-commentary tours'],
            ['Atmosphere', 'History, patriotic Buddhism, mountain temple, nature'],
            ['Duration', 'Full day'],
            ['Difficulty', 'Moderate~somewhat demanding'],
          ],
          itinerary: [
            ['Morning', 'Depart Busan or Yangsan, travel to Miryang'],
            ['Morning~Lunch', 'Pyochungsa tour'],
            ['Lunch', 'Local Miryang cuisine'],
            ['Afternoon', 'Stroll around Pyochungsa'],
            ['Optional', 'Ice Valley (Eolgumgol), Yeongnamnu, Miryang River area'],
          ],
        },
      ],
      courseGuide: [
        ["Want Busan's top temples", 'Beomeosa · Haedong Yonggungsa'],
        ['Prefer minimal travel distance', 'Haedong Yonggungsa · Jangan-sa'],
        ['Want in-depth Buddhist culture', 'Tongdosa'],
        ['Want history & patriotic Buddhism', 'Pyochungsa'],
        ['Family or senior group travel', 'Haedong Yonggungsa · Jangan-sa'],
        ['Educational / study tour', 'Tongdosa or Pyochungsa'],
      ],
    },
    zh: {
      title: '釜山·梁山·密阳寺院疗愈之旅',
      duration: '半天~全天（按路线）',
      price: '请咨询',
      maxPeople: '最多12人',
      description: '沿着城市近郊山寺、海边寺院及历史悠久的名刹出发的寺院旅行。从釜山代表性寺院梵鱼寺与海东龙宫寺，到机张的幽静长安寺，梁山的大刹通度寺，以及密阳的护国佛教遗产表忠寺，按地区特色提供可选路线。',
      spots: [
        '梵鱼寺 — 釜山广域市金井区梵鱼寺路250号',
        '海东龙宫寺 — 釜山广域市机张郡机张邑龙宫路86号',
        '长安寺 — 釜山广域市机张郡长安邑长安路482号',
        '通度寺 — 庆尚南道梁山市下北面通度寺路108号',
        '表忠寺 — 庆尚南道密阳市丹场面表忠路1338号',
      ],
      courses: [
        '路线1（釜山代表）：梵鱼寺 → 海东龙宫寺 — 一天游览山寺与海边寺院',
        '路线2（机张疗愈）：海东龙宫寺 → 长安寺 — 机张集中路线，交通便利',
        '路线3（梁山历史）：通度寺单独参访 — 深度体验佛教文化',
        '路线4（密阳护国佛教）：表忠寺单独参访 — 四溟大师与护国佛教历史讲解',
      ],
      tip: '建议穿舒适的鞋子和整洁的服装。从釜山到通度寺、表忠寺约需1~1.5小时车程。在寺院内拍照时请遵守礼仪。',
      links: [
        { label: '梵鱼寺（曹溪宗第14教区）', url: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php' },
        { label: '梵鱼寺旅游信息（Visit Busan）', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=402' },
        { label: '海东龙宫寺官方网站', url: 'https://www.yongkungsa.or.kr/' },
        { label: '海东龙宫寺旅游信息（Visit Busan）', url: 'https://www.visitbusan.net/index.do?lang_cd=ko&menuCd=DOM_000000201001001000&uc_seq=261' },
        { label: '通度寺官方网站', url: 'https://www.tongdosa.or.kr' },
        { label: '梵鱼寺地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250' },
        { label: '海东龙宫寺地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086' },
        { label: '长安寺地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482' },
        { label: '通度寺地图', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108' },
        { label: '表忠寺地图', url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338' },
      ],
      source: 'Visit Busan / 釜山旅游公社',
      spotDetails: [
        {
          name: '梵鱼寺',
          address: '釜山广域市金井区梵鱼寺路250号',
          description: '位于金井山山麓的釜山代表性寺院。郁郁葱葱的林间小道、幽静的殿阁与山寺宁静的氛围相互交融，可同时感受釜山的佛教文化与自然景观。虽然距市区不远，却让人感受到深山古刹般的平静。',
          commentPoint: '穿过一柱门进入寺院的过程，如同离开日常、沉淀心绪的旅程。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%88%EC%A0%95%EA%B5%AC%20%EB%B2%94%EC%96%B4%EC%82%AC%EB%A1%9C%20250',
          officialUrl: 'https://www.buddhism.or.kr/jongdan/sub1/sub1-9-2-22.php',
        },
        {
          name: '海东龙宫寺',
          address: '釜山广域市机张郡机张邑龙宫路86号',
          description: '釜山代表性的海边寺院，与大海相接。与一般的山中寺院不同，殿阁以蓝色大海为背景延伸而来，景观独特。作为祈祷圣地与旅游名胜均颇受欢迎，也是观赏日出和海岸风光的好去处。',
          commentPoint: '在开阔的海岸风景中，祈祷、观光与休闲融为一体，是当地海洋生活与佛教信仰相结合的场所。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EA%B8%B0%EC%9E%A5%EC%9D%8D%20%EC%9A%A9%EA%B6%81%EA%B8%B8%2086',
          officialUrl: 'https://www.yongkungsa.or.kr',
        },
        {
          name: '长安寺',
          address: '釜山广域市机张郡长安邑长安路482号',
          description: '位于佛光山山麓的安静寺院。如果说海东龙宫寺以大海与观光形象著称，长安寺则以山岳、溪谷与宁静的氛围见长。更适合希望远离热闹景点、在寺院中静心漫步的游客。',
          commentPoint: '与海东龙宫寺一同游览，可对比感受海边寺院与山中寺院的不同氛围。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%9E%A5%EC%95%88%EC%9D%8D%20%EC%9E%A5%EC%95%88%EB%A1%9C%20482',
        },
        {
          name: '通度寺',
          address: '庆尚南道梁山市下北面通度寺路108号',
          description: '岭南地区的代表性名刹之一。规模宏大，文化遗产丰富，适合作为佛教文化探访路线。可在寺内悠闲漫步，欣赏殿阁、林间小道及寺院周边景色。',
          commentPoint: '围绕大雄殿、舍利信仰与寺院空间布局进行讲解，可以深入感受韩国佛教文化的厚度。',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EC%96%91%EC%82%B0%EC%8B%9C%20%ED%95%98%EB%B6%81%EB%A9%B4%20%ED%86%B5%EB%8F%84%EC%82%AC%EB%A1%9C%20108',
          officialUrl: 'https://www.tongdosa.or.kr',
        },
        {
          name: '表忠寺',
          address: '庆尚南道密阳市丹场面表忠路1338号',
          description: '密阳的代表性寺院，与四溟大师相关，历史意义深厚。除佛教文化外，还适合结合壬辰倭乱、护国佛教与当地历史进行讲解。周边自然风光秀美，也是安静的疗愈旅游地。',
          commentPoint: '既是"祈祷的空间"，也是"铭记历史的空间"。将四溟大师、壬辰倭乱与护国佛教的意义相联系，可带来深刻的旅行体验。',
          mapUrl: 'https://map.naver.com/p/search/%EA%B2%BD%EC%83%81%EB%82%A8%EB%8F%84%20%EB%B0%80%EC%96%91%EC%8B%9C%20%EB%8B%A8%EC%9E%A5%EB%A9%B4%20%ED%91%9C%EC%B6%A9%EB%A1%9C%201338',
        },
      ],
      courseDetails: [
        {
          title: '釜山代表寺院路线',
          spots: '梵鱼寺 · 海东龙宫寺',
          subtitle: '一天游览山寺与海边寺院的釜山代表路线',
          intro: '可同时体验金井山的森林与幽静寺院氛围，以及机张海岸开阔的海景。',
          info: [
            ['推荐对象', '初次访问釜山代表寺院的游客'],
            ['旅行氛围', '历史、自然、海景、拍照胜地'],
            ['建议用时', '半天~全天'],
            ['交通难度', '一般'],
          ],
          itinerary: [
            ['上午', '抵达梵鱼寺，游览山寺'],
            ['午餐', '移至金井区或机张用餐'],
            ['下午', '游览海东龙宫寺，欣赏海岸风光'],
            ['可选', '机张咖啡街或奥西利亚观光区'],
          ],
        },
        {
          title: '机张疗愈寺院路线',
          spots: '海东龙宫寺 · 长安寺',
          subtitle: '同时感受大海与溪谷的机张集中路线',
          intro: '交通负担较小的机张地区寺院之旅，可同时享受海东龙宫寺的海景与长安寺的山岳溪谷氛围，也适合家庭或老年人同行旅游。',
          info: [
            ['推荐对象', '希望减少移动距离的游客'],
            ['旅行氛围', '大海、山寺、溪谷、疗愈'],
            ['建议用时', '半天~全天'],
            ['交通难度', '轻松'],
          ],
          itinerary: [
            ['上午', '游览海东龙宫寺'],
            ['午餐', '机张海岸餐厅用餐'],
            ['下午', '游览长安寺，漫步散心'],
            ['可选', '日光海水浴场、机张咖啡馆、奥西利亚观光区'],
          ],
        },
        {
          title: '梁山历史寺院路线',
          spots: '通度寺单独参访',
          subtitle: '深度体验韩国佛教文化的梁山代表路线',
          intro: '通度寺是梁山的代表性大型寺院，规模宏大，历史性突出。建议以全天行程从容游览，而非匆匆一瞥。',
          info: [
            ['推荐对象', '对历史与佛教文化感兴趣的游客'],
            ['旅行氛围', '历史、文化遗产、传统寺院'],
            ['建议用时', '半天~全天'],
            ['交通难度', '一般'],
          ],
          itinerary: [
            ['上午', '从釜山出发，前往梁山通度寺'],
            ['上午~午餐', '游览通度寺寺内'],
            ['午餐', '通度寺附近用餐'],
            ['下午', '通度寺周边漫步及咖啡休憩'],
            ['可选', '内院寺溪谷或梁山市区'],
          ],
        },
        {
          title: '密阳护国佛教路线',
          spots: '表忠寺单独参访',
          subtitle: '在密阳感受四溟大师精神与山寺静谧',
          intro: '表忠寺与四溟大师相关，历史意义深厚，适合将佛教文化与壬辰倭乱、护国佛教、地区历史相结合进行讲解。',
          info: [
            ['推荐对象', '希望体验历史讲解型旅行的游客'],
            ['旅行氛围', '历史、护国佛教、山寺、自然'],
            ['建议用时', '全天'],
            ['交通难度', '一般~略高'],
          ],
          itinerary: [
            ['上午', '从釜山或梁山出发，前往密阳'],
            ['上午~午餐', '游览表忠寺'],
            ['午餐', '密阳乡土料理'],
            ['下午', '表忠寺周边漫步'],
            ['可选', '冰窟、岭南楼、密阳江周边观光'],
          ],
        },
      ],
      courseGuide: [
        ['想游览釜山代表寺院', '梵鱼寺 · 海东龙宫寺'],
        ['希望减少移动距离', '海东龙宫寺 · 长安寺'],
        ['想深度体验佛教文化与大型寺院', '通度寺'],
        ['想结合历史讲解与护国佛教', '表忠寺'],
        ['老年人·家庭同行旅游', '海东龙宫寺 · 长安寺'],
        ['教育·探访型旅游', '通度寺或表忠寺'],
      ],
    },
  },

  market: {
    ko: {
      title: '부산 전통시장 & 떡볶이 미식 투어',
      duration: '반일(A) / 1일(B)',
      price: '문의',
      maxPeople: '최대 12명',
      description: '부전시장에서 로컬 식재료와 시장의 활기를 느끼고, 부평깡통시장 이가네떡볶이·남천동 다리집·영도 도날드까지 이어지는 부산형 시장·골목·해변 미식 투어. 단순한 맛집 방문이 아니라, 부산 사람들이 실제로 장보고 먹고 머무는 생활공간을 함께 걷는 코스입니다.',
      spots: [
        '부전시장 — 부산진구 중앙대로783번길 23 (농수산물·건어물·인삼·반찬 등 전통시장)',
        '이가네떡볶이 — 중구 부평1길 48, 부평깡통시장 (무에서 나온 수분으로 조리하는 시원한 시장형 떡볶이)',
        '다리집 본점 — 수영구 남천바다로10번길 70 101호 (굵은 가래떡과 오징어튀김 조합)',
        '도날드 — 영도구 꿈나무길 267 (30년 전통 골목형 즉석떡볶이)',
      ],
      courses: [
        'A코스 반일형 (4~5시간): 09:30 부전시장 집결·탐방 → 11:20 이가네떡볶이 → 12:20 남천동 이동 → 13:00 다리집 본점 → 14:00 광안리 해변 산책 후 해산',
        'B코스 1일형 (7~8시간): 09:30 부전시장 집결·탐방 → 11:20 이가네떡볶이 → 12:10 국제시장 산책 → 14:00 다리집 본점 → 15:00 광안리 해변 → 16:50 도날드(영도) → 18:00 마무리 토크 → 18:30 해산',
      ],
      tip: '반일형 A코스는 부전시장·이가네·다리집까지, 1일형 B코스는 도날드(영도)까지 포함. 현금 지참 권장.',
      links: [
        { label: '부전시장 (부산진구 관광)', url: 'https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001004004003000' },
        { label: '이가네떡볶이 (트리플가이드)', url: 'https://triple.guide/restaurants/1bf7f5cf-fc32-443c-b51d-92b4d9d7cabd' },
        { label: '다리집 본점 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000201002001000&uc_seq=942' },
        { label: '도날드 (네이버지도)', url: 'https://map.naver.com/p/search/%EC%98%81%EB%8F%84%EA%B5%AC%20%EA%BF%88%EB%82%98%EB%AC%B4%EA%B8%B8%20267' },
      ],
      source: 'Visit Busan / 부산진구청',
    },
    en: {
      title: 'Delicious Busan Market & Tteokbokki Tour',
      duration: 'Half Day (A) / Full Day (B)',
      price: 'Inquire',
      maxPeople: 'Max 12 people',
      description: 'Start at Bujeon Market to absorb local ingredients and traditional market energy, then follow the tteokbokki trail — Igane at Bupyeong Market, Darijip in Namcheon-dong, and Donald in Yeongdo alley. A real Busan locals\' food and market journey.',
      spots: [
        'Bujeon Market — 23 Jungang-daero 783beon-gil, Busanjin-gu (seafood, dried goods, ginseng, side dishes)',
        'Igane Tteokbokki — 48 Bupyeong 1-gil, Jung-gu, Bupyeong Market (refreshing radish-broth tteokbokki)',
        'Darijip Main Branch — 70-101 Namcheon Bada-ro 10beon-gil, Suyeong-gu (thick rice cakes & fried squid)',
        'Donald — 267 Kkumnamu-gil, Yeongdo-gu (30-year tabletop tteokbokki, Yeongdo style)',
      ],
      courses: [
        'Course A – Half Day (4–5 hrs): 09:30 Bujeon Market → 11:20 Igane Tteokbokki → 13:00 Darijip Main Branch → 14:00 Gwangalli Beach walk & wrap-up',
        'Course B – Full Day (7–8 hrs): 09:30 Bujeon Market → 11:20 Igane → 12:10 Gukje Market stroll → 14:00 Darijip → 15:00 Gwangalli Beach → 16:50 Donald (Yeongdo) → 18:00 Wrap-up talk → 18:30 End',
      ],
      tip: 'Course A (half-day) ends at Darijip; Course B (full day) adds Donald in Yeongdo. Cash recommended at all spots.',
      links: [
        { label: 'Bujeon Market (Busanjin-gu Tourism)', url: 'https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001004004003000' },
        { label: 'Igane Tteokbokki (Triple Guide)', url: 'https://triple.guide/restaurants/1bf7f5cf-fc32-443c-b51d-92b4d9d7cabd' },
        { label: 'Darijip Main Branch (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000201002001000&uc_seq=942' },
        { label: 'Donald (Naver Map)', url: 'https://map.naver.com/p/search/%EC%98%81%EB%8F%84%EA%B5%AC%20%EA%BF%88%EB%82%98%EB%AC%B4%EA%B8%B8%20267' },
      ],
      source: 'Visit Busan / Busanjin-gu Office',
    },
    zh: {
      title: '釜山传统市场与年糕美食之旅',
      duration: '半日(A) / 全日(B)',
      price: '请咨询',
      maxPeople: '最多12人',
      description: '从富田市场感受釜山传统市场的活力与本地食材，沿富平罐头市场李家年糕、南川洞桥家本店、影岛唐纳德一路品味——体验釜山人真实生活的市场·胡同·海边美食之旅。',
      spots: [
        '富田市场 — 釜山镇区中央大路783号街23号 (农水产·干货·人参·小菜等传统市场)',
        '李家年糕 — 中区富平1街48号，富平罐头市场 (萝卜汤炒年糕，清爽微辣)',
        '桥家本店 — 水营区南川海路10巷70号101室 (粗糯米年糕配炸鱿鱼)',
        '唐纳德 — 影岛区꿈나무길267号 (30年传统即席炒年糕)',
      ],
      courses: [
        'A路线 半日游(4~5小时): 09:30 富田市场集合·探访 → 11:20 李家年糕 → 13:00 桥家本店 → 14:00 广安里海边散步后解散',
        'B路线 全日游(7~8小时): 09:30 富田市场 → 11:20 李家年糕 → 12:10 国际市场 → 14:00 桥家本店 → 15:00 广安里海边 → 16:50 唐纳德(影岛) → 18:00 总结分享 → 18:30 解散',
      ],
      tip: 'A路线(半日)至桥家本店结束，B路线(全日)含影岛唐纳德。建议全程携带现金。',
      links: [
        { label: '富田市场 (釜山镇区观光)', url: 'https://www.busanjin.go.kr/tour/index.busanjin?menuCd=DOM_000001004004003000' },
        { label: '李家年糕 (Triple Guide)', url: 'https://triple.guide/restaurants/1bf7f5cf-fc32-443c-b51d-92b4d9d7cabd' },
        { label: '桥家本店 (Visit Busan)', url: 'https://www.visitbusan.net/index.do?menuCd=DOM_000000201002001000&uc_seq=942' },
        { label: '唐纳德 (地图)', url: 'https://map.naver.com/p/search/%EC%98%81%EB%8F%84%EA%B5%AC%20%EA%BF%88%EB%82%98%EB%AC%B4%EA%B8%B8%20267' },
      ],
      source: 'Visit Busan / 釜山镇区厅',
    },
  },

  history: {
    ko: {
      title: '부산 다크 투어리즘 — 역사 탐방 투어',
      duration: '반일(A) / 1일(B)',
      price: '문의',
      maxPeople: '최대 15명',
      description: '한국전쟁의 피란 수도였던 부산, 일제강점기의 아픔을 간직한 현장, 그리고 평화의 이름으로 지켜진 유엔기념공원까지. 부산의 근현대 역사를 도심과 기장 두 코스로 깊이 탐방하는 역사 여행입니다.',
      spots: [
        '부산근현대역사관 — 부산광역시 중구 대청로 104',
        '임시수도기념관 — 부산광역시 서구 임시수도기념로 45',
        '유엔기념공원 — 부산광역시 남구 유엔평화로 93',
        '피란민마을 이바구길 — 부산광역시 동구 망양로 533 일대',
        '국립일제강제동원역사관 — 부산광역시 남구 유엔평화로 625번길 10',
        '정관박물관 — 부산광역시 기장군 정관읍 정관로 123',
      ],
      courses: [
        'A코스 (도심 역사 순환, 반일~1일): 부산근현대역사관 → 임시수도기념관 → 유엔기념공원 → 피란민마을 이바구길',
        'B코스 (근현대사 심층, 1일): 국립일제강제동원역사관 → 정관박물관 (기장 연계)',
      ],
      tip: '유엔기념공원은 무료 입장이며 경건한 복장을 권장합니다. 부산근현대역사관·임시수도기념관은 부산시립박물관 통합권 이용 가능. 일부 전시관은 월요일 휴관입니다.',
      links: [
        { label: '유엔기념공원 공식', url: 'https://www.unmck.or.kr' },
        { label: '국립일제강제동원역사관 공식', url: 'https://www.fomo.or.kr' },
        { label: '부산근현대역사관 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104' },
        { label: '임시수도기념관 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045' },
        { label: '유엔기념공원 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093' },
        { label: '피란민마을 이바구길 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533' },
        { label: '국립일제강제동원역사관 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010' },
        { label: '정관박물관 지도', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123' },
      ],
      source: '부산광역시 역사문화과 / Visit Busan',
      spotDetails: [
        {
          name: '부산근현대역사관',
          address: '부산광역시 중구 대청로 104',
          description: '일제강점기 부산세관 건물을 활용한 역사관으로, 개항기부터 현대까지 부산의 변화를 한눈에 볼 수 있습니다. 일제강점기 수탈의 역사와 부산의 성장 과정을 연계하여 이해할 수 있는 대표적인 근대 역사 공간입니다.',
          commentPoint: '건물 자체가 역사적 증거입니다. 개항기 부산이 어떻게 변해왔는지, 건물의 공간 변화와 함께 해설하면 깊이가 생깁니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104',
        },
        {
          name: '임시수도기념관',
          address: '부산광역시 서구 임시수도기념로 45',
          description: '한국전쟁 당시 부산이 대한민국 임시수도였음을 기억하는 공간입니다. 당시 이승만 대통령의 관저를 그대로 보존하여 피란 수도 시절의 생활과 국가 운영의 모습을 생생하게 전달합니다.',
          commentPoint: '단순한 전쟁 역사를 넘어 "피란 수도로서의 부산"이라는 시각으로 접근하면 현재 부산의 정체성과 연결됩니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045',
        },
        {
          name: '유엔기념공원',
          address: '부산광역시 남구 유엔평화로 93',
          description: '세계에서 유일한 유엔군 묘지로, 한국전쟁에서 전사한 유엔군 장병들이 잠들어 있는 곳입니다. 국적을 초월한 희생의 의미를 되새기는 공간으로, 매년 턴투워드부산 행사가 이곳에서 열립니다.',
          commentPoint: '전쟁의 아픔을 넘어 국제 연대와 평화의 의미를 중심으로 해설할 수 있습니다. 조용히 묵념하며 돌아보는 시간이 여행의 핵심입니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093',
          officialUrl: 'https://www.unmck.or.kr',
        },
        {
          name: '피란민마을 이바구길',
          address: '부산광역시 동구 망양로 533 일대',
          description: '한국전쟁 당시 피란민들이 산비탈에 모여 살며 형성된 골목 마을입니다. 이바구길은 "이야기(이바구)"라는 뜻으로, 골목 곳곳에 피란 시절의 삶과 기억이 담겨 있습니다. 168계단, 유치환의 우체통, 까꼬막 등 역사와 생활이 살아 있는 공간입니다.',
          commentPoint: '이 골목은 그 자체가 살아있는 역사입니다. 피란민의 일상, 재건의 의지, 부산 서민 문화를 함께 이야기할 수 있습니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533',
        },
        {
          name: '국립일제강제동원역사관',
          address: '부산광역시 남구 유엔평화로 625번길 10',
          description: '일제강점기 강제동원 피해자들의 역사를 기록하고 기억하는 국립 시설입니다. 강제동원의 실태, 피해자들의 삶, 그리고 역사적 교훈을 체계적으로 전시하고 있어 역사 교육 투어의 핵심 방문지입니다.',
          commentPoint: '추상적인 역사가 아닌 구체적인 이름과 얼굴로 기억되는 강제동원의 역사를 만날 수 있는 공간입니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010',
          officialUrl: 'https://www.fomo.or.kr',
        },
        {
          name: '정관박물관',
          address: '부산광역시 기장군 정관읍 정관로 123',
          description: '기장 지역의 역사와 문화를 담은 지역 박물관입니다. 기장의 선사시대부터 근현대까지의 유물과 생활사를 전시하며, 기장 지역 역사에 관심 있는 여행객에게 방문 가치가 높습니다.',
          commentPoint: '도심의 대형 역사관과 달리, 기장이라는 지역 단위의 역사를 깊이 있게 살펴볼 수 있는 장소입니다.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123',
        },
      ],
      courseDetails: [
        {
          title: '도심 역사 순환 코스',
          spots: '부산근현대역사관 · 임시수도기념관 · 유엔기념공원 · 이바구길',
          subtitle: '개항기부터 한국전쟁까지 부산의 역사를 걸으며 만나는 코스',
          intro: '부산 도심에 밀집한 근현대 역사 현장을 하루에 연결하는 코스입니다. 일제강점기의 흔적과 전쟁 피란 수도의 기억, 국제 연대의 상징을 차례로 만납니다.',
          info: [
            ['추천 대상', '근현대사와 한국전쟁 역사에 관심 있는 여행객'],
            ['여행 분위기', '역사, 교육, 감성 탐방, 골목 걷기'],
            ['추천 소요', '반일~1일'],
            ['이동 난이도', '보통 (도심 이동)'],
          ],
          itinerary: [
            ['오전', '부산근현대역사관 관람 (중구 대청로)'],
            ['오전 중', '임시수도기념관 관람 (서구)'],
            ['점심', '남포동 또는 서구 일대 식사'],
            ['오후', '유엔기념공원 참배 및 묵념 (남구)'],
            ['오후 후반', '피란민마을 이바구길 골목 탐방 (동구)'],
            ['선택', '초량 차이나타운 연계'],
          ],
        },
        {
          title: '근현대사 심층 코스',
          spots: '국립일제강제동원역사관 · 정관박물관',
          subtitle: '강제동원의 역사와 기장 지역 문화를 함께 탐방하는 코스',
          intro: '일제강점기 강제동원의 역사를 깊이 있게 탐방하고, 기장 지역의 역사와 문화를 연결하는 코스입니다. 역사 해설형 여행과 교육 목적 투어에 적합합니다.',
          info: [
            ['추천 대상', '역사 교육·답사형 여행을 원하는 여행객'],
            ['여행 분위기', '역사, 추모, 지역 문화'],
            ['추천 소요', '1일'],
            ['이동 난이도', '보통'],
          ],
          itinerary: [
            ['오전', '국립일제강제동원역사관 관람 (남구)'],
            ['점심', '남구 또는 기장 이동 후 식사'],
            ['오후', '정관박물관 관람 (기장군)'],
            ['선택', '기장 해안 연계 또는 A코스 일부 추가'],
          ],
        },
      ],
      courseGuide: [
        ['한국전쟁과 피란 수도 역사를 보고 싶다면', '도심 역사 순환 코스 (A)'],
        ['일제강점기 강제동원 역사에 관심 있다면', '근현대사 심층 코스 (B)'],
        ['반일 일정으로 가볍게 시작하고 싶다면', '도심 역사 순환 코스 (A) 일부'],
        ['교육·답사형 단체 여행이라면', '두 코스 연계 (1박 2일 권장)'],
        ['어르신·가족 동반 여행이라면', '유엔기념공원 + 이바구길'],
        ['부산의 전체 역사 흐름을 보고 싶다면', '도심 A + 기장 B 연계'],
      ],
    },
    en: {
      title: 'Busan Dark Tourism — History Exploration Tour',
      duration: 'Half Day (A) / Full Day (B)',
      price: 'Inquire',
      maxPeople: 'Max 15 people',
      description: "Busan was Korea's wartime capital during the Korean War, a city marked by colonial-era suffering, and home to the world's only UN memorial cemetery. Explore Busan's modern history through two thoughtfully designed courses — downtown and Gijang.",
      spots: [
        'Busan Modern History Museum — 104 Daecheong-ro, Jung-gu, Busan',
        'Provisional Capital Memorial Museum — 45 Imsi Sudo Ginyeom-ro, Seo-gu, Busan',
        'UN Memorial Cemetery — 93 UN Pyeonghwa-ro, Nam-gu, Busan',
        "Piranmin Village Ibagu-gil — Around 533 Mangyang-ro, Dong-gu, Busan",
        'National Forced Labor History Museum — 10 UN Pyeonghwa-ro 625beon-gil, Nam-gu, Busan',
        'Junggwan Museum — 123 Junggwan-ro, Junggwan-eup, Gijang-gun, Busan',
      ],
      courses: [
        'Course A (Downtown History Loop, half–full day): Modern History Museum → Provisional Capital Museum → UN Memorial Cemetery → Ibagu-gil',
        'Course B (Modern History Deep Dive, full day): National Forced Labor History Museum → Junggwan Museum',
      ],
      tip: 'UN Memorial Cemetery is free; respectful attire recommended. Some museums are closed Mondays. Busan Modern History Museum and Provisional Capital Museum accept combined city museum tickets.',
      links: [
        { label: 'UN Memorial Cemetery (official)', url: 'https://www.unmck.or.kr' },
        { label: 'National Forced Labor History Museum (official)', url: 'https://www.fomo.or.kr' },
        { label: 'Busan Modern History Museum Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104' },
        { label: 'Provisional Capital Memorial Museum Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045' },
        { label: 'UN Memorial Cemetery Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093' },
        { label: 'Ibagu-gil Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533' },
        { label: 'National Forced Labor History Museum Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010' },
        { label: 'Junggwan Museum Map', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123' },
      ],
      source: 'Busan Metropolitan City / Visit Busan',
      spotDetails: [
        {
          name: 'Busan Modern History Museum',
          address: '104 Daecheong-ro, Jung-gu, Busan',
          description: 'Housed in the former Busan Customs building from the Japanese colonial era, this museum traces Busan from the port-opening period to the modern day. It is the city\'s premier space for understanding colonial-era exploitation and Busan\'s transformation.',
          commentPoint: 'The building itself is historical evidence. Explaining how the space changed over time alongside the exhibits adds meaningful depth.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104',
        },
        {
          name: 'Provisional Capital Memorial Museum',
          address: '45 Imsi Sudo Ginyeom-ro, Seo-gu, Busan',
          description: 'A memorial preserving the memory of Busan as the provisional capital of South Korea during the Korean War. The former presidential residence is kept as it was, vividly conveying daily life and governance during the wartime refuge period.',
          commentPoint: 'Frame it as "Busan as the refuge capital" rather than just war history — this connects naturally to Busan\'s modern identity.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045',
        },
        {
          name: 'UN Memorial Cemetery',
          address: '93 UN Pyeonghwa-ro, Nam-gu, Busan',
          description: "The world's only UN forces cemetery, where soldiers from many nations who fell during the Korean War are laid to rest. The annual Turn Toward Busan ceremony is held here, honoring the multinational sacrifice for peace.",
          commentPoint: 'Guide beyond the war — center the commentary on international solidarity and the ongoing meaning of peace. Quiet reflection here is the heart of the experience.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093',
          officialUrl: 'https://www.unmck.or.kr',
        },
        {
          name: "Piranmin Village Ibagu-gil",
          address: '533 Mangyang-ro area, Dong-gu, Busan',
          description: 'An alleyway village formed when wartime refugees settled on the hillsides of Dong-gu. "Ibagu" means "story" in the Busan dialect, and every corner holds memories of wartime life — the 168 Steps, Yoo Chi-hwan\'s Postbox, and the Kkaekkomak steep path.',
          commentPoint: "This alley is living history. Talk about refugees' daily lives, the will to rebuild, and Busan's working-class culture — all present here.",
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533',
        },
        {
          name: 'National Forced Labor History Museum',
          address: '10 UN Pyeonghwa-ro 625beon-gil, Nam-gu, Busan',
          description: 'A national institution documenting and commemorating the victims of Japanese colonial-era forced mobilization. Systematic exhibits cover the reality of forced labor, survivors\' lives, and historical lessons — a key stop on any history education tour.',
          commentPoint: 'History remembered not as abstraction but through specific names and faces. A powerful, humanizing experience.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010',
          officialUrl: 'https://www.fomo.or.kr',
        },
        {
          name: 'Junggwan Museum',
          address: '123 Junggwan-ro, Junggwan-eup, Gijang-gun, Busan',
          description: 'A local museum covering the history and culture of the Gijang area from prehistoric times to the modern era. Worth visiting for travelers interested in the regional history of Gijang beyond the well-known coastal attractions.',
          commentPoint: 'Unlike large downtown museums, this is a deep look at Gijang as a specific locality — its own story within the broader Busan narrative.',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123',
        },
      ],
      courseDetails: [
        {
          title: 'Downtown History Loop',
          spots: 'Modern History Museum · Provisional Capital Museum · UN Cemetery · Ibagu-gil',
          subtitle: 'Walk through Busan\'s modern history from the colonial era to the Korean War',
          intro: 'A course linking Busan\'s modern historical sites concentrated in the downtown area. Move from colonial-era traces to wartime refuge memories to a symbol of international solidarity.',
          info: [
            ['Best For', 'Travelers interested in Korean War & colonial history'],
            ['Atmosphere', 'History, education, reflective walk, alleys'],
            ['Duration', 'Half day~full day'],
            ['Difficulty', 'Moderate (city movement)'],
          ],
          itinerary: [
            ['Morning', 'Busan Modern History Museum (Jung-gu, Daecheong-ro)'],
            ['Mid-morning', 'Provisional Capital Memorial Museum (Seo-gu)'],
            ['Lunch', 'Meal in Nampo-dong or Seo-gu area'],
            ['Afternoon', 'UN Memorial Cemetery — quiet tribute (Nam-gu)'],
            ['Late afternoon', 'Ibagu-gil alley walk (Dong-gu)'],
            ['Optional', 'Choryang Chinatown connection'],
          ],
        },
        {
          title: 'Modern History Deep Dive',
          spots: 'National Forced Labor History Museum · Junggwan Museum',
          subtitle: 'Forced mobilization history and Gijang regional culture',
          intro: 'A course for in-depth exploration of colonial-era forced labor history followed by Gijang regional heritage. Suited for educational and study-tour groups.',
          info: [
            ['Best For', 'Educational & study-tour travelers'],
            ['Atmosphere', 'History, remembrance, regional culture'],
            ['Duration', 'Full day'],
            ['Difficulty', 'Moderate'],
          ],
          itinerary: [
            ['Morning', 'National Forced Labor History Museum (Nam-gu)'],
            ['Lunch', 'Meal in Nam-gu or travel to Gijang'],
            ['Afternoon', 'Junggwan Museum (Gijang-gun)'],
            ['Optional', 'Gijang coastal addition or partial Course A'],
          ],
        },
      ],
      courseGuide: [
        ['Want Korean War & wartime capital history', 'Downtown History Loop (A)'],
        ['Want colonial-era forced labor history', 'Modern History Deep Dive (B)'],
        ['Short half-day start', 'Partial Course A (Museum + UN Cemetery)'],
        ['Educational group tour', 'Both courses combined (2-day recommended)'],
        ['Family or senior travel', 'UN Memorial Cemetery + Ibagu-gil'],
        ["Want full arc of Busan's modern history", 'Course A + B combined'],
      ],
    },
    zh: {
      title: '釜山暗黑旅游 — 历史探访之旅',
      duration: '半天(A) / 全天(B)',
      price: '请咨询',
      maxPeople: '最多15人',
      description: '釜山曾是韩国战争时期的临时首都，承载着日据时代的苦难，也是全球唯一联合国军纪念公墓的所在地。以两条路线深度探访釜山的近现代历史——市区路线与机张路线。',
      spots: [
        '釜山近现代历史馆 — 釜山广域市中区大厅路104号',
        '临时首都纪念馆 — 釜山广域市西区临时首都纪念路45号',
        '联合国纪念公园 — 釜山广域市南区联合国和平路93号',
        '战时难民村以巴谷路 — 釜山广域市东区望洋路533号一带',
        '国立日帝强制动员历史馆 — 釜山广域市南区联合国和平路625号街10号',
        '政冠博物馆 — 釜山广域市机张郡政冠邑政冠路123号',
      ],
      courses: [
        'A路线（市区历史巡回，半天~全天）：近现代历史馆 → 临时首都纪念馆 → 联合国纪念公园 → 以巴谷路',
        'B路线（近现代史深度，全天）：国立日帝强制动员历史馆 → 政冠博物馆',
      ],
      tip: '联合国纪念公园免费入场，建议着庄重服装。部分展馆周一休馆。近现代历史馆与临时首都纪念馆可使用釜山市立博物馆联票。',
      links: [
        { label: '联合国纪念公园官方', url: 'https://www.unmck.or.kr' },
        { label: '国立日帝强制动员历史馆官方', url: 'https://www.fomo.or.kr' },
        { label: '釜山近现代历史馆地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104' },
        { label: '临时首都纪念馆地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045' },
        { label: '联合国纪念公园地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093' },
        { label: '以巴谷路地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533' },
        { label: '国立日帝强制动员历史馆地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010' },
        { label: '政冠博物馆地图', url: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123' },
      ],
      source: '釜山广域市历史文化科 / Visit Busan',
      spotDetails: [
        {
          name: '釜山近现代历史馆',
          address: '釜山广域市中区大厅路104号',
          description: '利用日据时代釜山海关建筑改建的历史馆，可一览从开港时期到现代釜山的变迁历程。是深入了解日据时代掠夺历史与釜山发展过程的代表性近代历史空间。',
          commentPoint: '建筑本身就是历史的证据。结合建筑空间的变化来解说开港时期釜山的演变，可以大幅增加历史的厚度。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EB%8C%80%EC%B2%AD%EB%A1%9C%20104',
        },
        {
          name: '临时首都纪念馆',
          address: '釜山广域市西区临时首都纪念路45号',
          description: '铭记韩国战争期间釜山作为大韩民国临时首都这一历史的纪念空间。当时李承晚总统的官邸保存完好，生动再现了战时避难首都的生活与国家运营面貌。',
          commentPoint: '以"避难首都釜山"为视角，而非单纯的战争历史，可自然地与当今釜山的城市认同相连接。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%84%9C%EA%B5%AC%20%EC%9E%84%EC%8B%9C%EC%88%98%EB%8F%84%EA%B8%B0%EB%85%90%EB%A1%9C%2045',
        },
        {
          name: '联合国纪念公园',
          address: '釜山广域市南区联合国和平路93号',
          description: '全球唯一的联合国军墓地，长眠着韩国战争中牺牲的多国联合国军将士。每年在此举行"转向釜山"仪式，纪念为和平献身的国际壮举。',
          commentPoint: '超越战争本身，以国际连带与和平意义为中心进行解说。在此安静默哀的时间，正是旅行的核心所在。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%2093',
          officialUrl: 'https://www.unmck.or.kr',
        },
        {
          name: '战时难民村以巴谷路',
          address: '釜山广域市东区望洋路533号一带',
          description: '韩国战争时期难民聚居于山坡而形成的胡同村落。"以巴谷"意为"故事"，小巷各处留存着战时生活的记忆——168阶台阶、柳致环邮筒、까꼬막陡坡等，历史与生活气息并存。',
          commentPoint: '这条胡同本身就是活的历史。可讲述难民的日常、重建的意志与釜山平民文化，三者在此交汇。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8F%99%EA%B5%AC%20%EB%A7%9D%EC%96%91%EB%A1%9C%20533',
        },
        {
          name: '国立日帝强制动员历史馆',
          address: '釜山广域市南区联合国和平路625号街10号',
          description: '记录并铭记日据时代强制动员受害者历史的国立机构。系统展示强制动员的实态、受害者的生活及历史教训，是历史教育旅行的核心参访地。',
          commentPoint: '历史在这里不是抽象的概念，而是以具体的名字和面孔被铭记——是一段有力量、有温度的体验。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%82%A8%EA%B5%AC%20%EC%9C%A0%EC%97%94%ED%8F%89%ED%99%94%EB%A1%9C%20625%EB%B2%88%EA%B8%B8%2010',
          officialUrl: 'https://www.fomo.or.kr',
        },
        {
          name: '政冠博物馆',
          address: '釜山广域市机张郡政冠邑政冠路123号',
          description: '收藏并展示机张地区从史前到近现代历史与文化的地方博物馆。对希望深入了解机张地区历史的游客而言，是超越海岸景点的有价值参访地。',
          commentPoint: '与大型市区历史馆不同，可深入了解机张作为独立地区的历史脉络——釜山大故事中的一页地方叙事。',
          mapUrl: 'https://map.naver.com/p/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EA%B8%B0%EC%9E%A5%EA%B5%B0%20%EC%A0%95%EA%B4%80%EC%9D%8D%20%EC%A0%95%EA%B4%80%EB%A1%9C%20123',
        },
      ],
      courseDetails: [
        {
          title: '市区历史巡回路线',
          spots: '近现代历史馆 · 临时首都纪念馆 · 联合国纪念公园 · 以巴谷路',
          subtitle: '步行感受从日据时代到韩国战争的釜山历史',
          intro: '将釜山市区密集的近现代历史现场连接成一日游路线。依次走过日据时代的痕迹、战时避难首都的记忆与国际连带的象征。',
          info: [
            ['推荐对象', '对韩国战争与日据时代历史感兴趣的游客'],
            ['旅行氛围', '历史、教育、感性探访、胡同漫步'],
            ['建议用时', '半天~全天'],
            ['交通难度', '一般（市区移动）'],
          ],
          itinerary: [
            ['上午', '釜山近现代历史馆参观（中区大厅路）'],
            ['上午中', '临时首都纪念馆参观（西区）'],
            ['午餐', '南浦洞或西区用餐'],
            ['下午', '联合国纪念公园参拜默念（南区）'],
            ['下午后段', '以巴谷路胡同探访（东区）'],
            ['可选', '草梁唐人街联游'],
          ],
        },
        {
          title: '近现代史深度路线',
          spots: '国立日帝强制动员历史馆 · 政冠博物馆',
          subtitle: '强制动员历史与机张地区文化深度探访',
          intro: '深度探访日据时代强制动员历史，并连接机张地区历史与文化的路线。适合教育型与研学型团体旅游。',
          info: [
            ['推荐对象', '教育·研学型旅游游客'],
            ['旅行氛围', '历史、追悼、地域文化'],
            ['建议用时', '全天'],
            ['交通难度', '一般'],
          ],
          itinerary: [
            ['上午', '国立日帝强制动员历史馆参观（南区）'],
            ['午餐', '南区或前往机张途中用餐'],
            ['下午', '政冠博物馆参观（机张郡）'],
            ['可选', '机张海岸延伸或A路线部分联游'],
          ],
        },
      ],
      courseGuide: [
        ['想了解韩国战争与临时首都历史', '市区历史巡回路线（A）'],
        ['想了解日据时代强制动员历史', '近现代史深度路线（B）'],
        ['半天轻松入门', 'A路线部分（历史馆+联合国公园）'],
        ['教育型团体旅游', '两条路线联合（建议1晚2天）'],
        ['老年人·家庭同行', '联合国纪念公园+以巴谷路'],
        ['想全面了解釜山近现代历史', 'A+B路线联合'],
      ],
    },
  },

  ecology: {
    ko: {
      title: '을숙도 생태 투어 — 낙동강 하구 자연 탐방',
      duration: '반나절',
      price: '문의',
      maxPeople: '최대 12명',
      description: '부산 사하구 을숙도는 천연기념물 제179호로 지정된 철새 도래지입니다. 낙동강 하구 에코센터와 함께 탐방하며, 청둥오리·큰고니·백로 등 다양한 철새와 부산의 자연 생태를 오감으로 경험하는 힐링 투어입니다.',
      spots: [
        '을숙도 철새 도래지 — 부산광역시 사하구 낙동남로 1240',
        '낙동강 하구 에코센터 — 부산광역시 사하구 낙동남로 1240',
        '을숙도 생태공원 산책로 — 낙동강 하구 일원',
      ],
      courses: [
        'A코스 (반나절): 낙동강하구에코센터 전시 관람 → 을숙도 철새 탐조 → 생태공원 산책',
      ],
      tip: '철새 탐조 최적 시기는 10월~3월입니다. 이른 아침 방문 시 더 많은 철새를 만날 수 있으며, 망원경 대여 서비스를 제공합니다. 에코센터는 월요일 휴관입니다.',
      links: [
        { label: '낙동강하구에코센터 공식', url: 'https://www.busan.go.kr/ecopark' },
        { label: '을숙도 지도', url: 'https://map.naver.com/p/search/을숙도' },
      ],
      source: '부산광역시 낙동강하구에코센터',
      spotDetails: [
        {
          name: '을숙도 철새 도래지',
          address: '부산광역시 사하구 낙동남로 1240',
          description: '매년 수만 마리의 철새가 찾아오는 천연기념물 제179호 지정 철새 도래지입니다. 낙동강 하구의 갈대밭과 모래톱이 어우러진 자연 경관 속에서 큰고니, 청둥오리, 도요새 등 다양한 새를 관찰할 수 있습니다.',
          commentPoint: '계절마다 볼 수 있는 철새 종류가 달라 언제 방문해도 새로운 발견이 있는 곳입니다.',
          mapUrl: 'https://map.naver.com/p/search/을숙도',
        },
        {
          name: '낙동강하구에코센터',
          address: '부산광역시 사하구 낙동남로 1240',
          description: '낙동강 하구의 생태를 체계적으로 소개하는 전시관입니다. 철새 생태, 낙동강 생물 다양성, 갯벌 생태계 등을 생생한 자료로 이해할 수 있습니다.',
          commentPoint: '자연 탐방 전 사전 학습 공간으로 활용하면 탐조 체험의 이해도가 높아집니다.',
          mapUrl: 'https://map.naver.com/p/search/낙동강하구에코센터',
        },
      ],
      courseGuide: [
        ['자연·생태에 관심 있는 분', 'A코스'],
        ['철새 탐조 첫 방문', 'A코스 (해설사 동행 권장)'],
        ['어린이·가족 동반', 'A코스 + 에코센터 체험 프로그램'],
      ],
    },
    en: {
      title: 'Eulsukdo Eco Tour — Nakdong Estuary Nature Walk',
      duration: 'Half day',
      price: 'On request',
      maxPeople: 'Up to 12',
      description: 'Eulsukdo, designated Natural Monument No.179, is home to thousands of migratory birds. Explore the Nakdong Estuary Eco Center and the bird sanctuary for a healing nature experience.',
      spots: [
        'Eulsukdo Migratory Bird Sanctuary — 1240 Nakdongnnam-ro, Saha-gu, Busan',
        'Nakdong Estuary Eco Center — 1240 Nakdongnnam-ro, Saha-gu, Busan',
      ],
      courses: [
        'Course A (Half day): Eco Center exhibits → Bird watching → Ecological park walk',
      ],
      tip: 'Best season for migratory birds: October–March. Early morning visits are recommended. Telescope rental available. Closed Mondays.',
      links: [
        { label: 'Nakdong Eco Center Official', url: 'https://www.busan.go.kr/ecopark' },
      ],
      source: 'Busan Nakdong Estuary Eco Center',
      spotDetails: [],
      courseGuide: [
        ['Nature & ecology lovers', 'Course A'],
        ['First-time birdwatching', 'Course A with guide'],
      ],
    },
    zh: {
      title: '乙淑岛生态游 — 洛东江河口自然探访',
      duration: '半天',
      price: '询价',
      maxPeople: '最多12人',
      description: '乙淑岛被指定为天然纪念物第179号，是候鸟的栖息地。在洛东江河口生态中心和鸟类保护区探索釜山的自然生态之美。',
      spots: [
        '乙淑岛候鸟栖息地 — 釜山广域市沙下区洛东南路1240号',
        '洛东江河口生态中心 — 釜山广域市沙下区洛东南路1240号',
      ],
      courses: [
        'A路线（半天）：生态中心参观 → 候鸟观察 → 生态公园散步',
      ],
      tip: '最佳赏鸟季节：10月至3月。建议清晨参观，可提供望远镜租借。周一休馆。',
      links: [
        { label: '洛东江生态中心官网', url: 'https://www.busan.go.kr/ecopark' },
      ],
      source: '釜山洛东江河口生态中心',
      spotDetails: [],
      courseGuide: [
        ['热爱自然生态', 'A路线'],
        ['首次观鸟', 'A路线（含导游）'],
      ],
    },
  }
,

  festival: {
    ko: {
      title: '부산 축제 투어 — 빛과 열기의 현장',
      duration: '반나절 ~ 1박 2일',
      price: '문의',
      maxPeople: '최대 15명',
      description: '송도 불꽃 축제, 부산 국제 영화제(BIFF), 광안리 어방 불꽃 축제 등 부산을 대표하는 축제를 현지 전문 가이드와 함께 즐기는 특별 투어입니다. 축제 시즌에 맞춘 맞춤 일정으로 부산의 열기를 온몸으로 경험하세요.',
      spots: [
        '송도 해수욕장 — 부산광역시 서구 송도해변로 68',
        '광안리 해수욕장 — 부산광역시 수영구 광안해변로 219',
        'BIFF 광장 — 부산광역시 중구 비프광장로 30',
        '해운대 해수욕장 — 부산광역시 해운대구 해운대해변로 264',
      ],
      courses: [
        'A코스 (반나절, 축제 당일): 축제 현장 탐방 + 해설사 동행 관람',
        'B코스 (1박 2일): 축제 관람 + 부산 주요 명소 연계',
      ],
      tip: '축제 일정은 매년 변동되므로 문의 시 시즌 확인이 필요합니다. 송도 불꽃 축제는 주로 10월, 광안리 불꽃 축제는 11월, BIFF는 10월 개최입니다. 성수기 숙박 연계 시 사전 예약 필수.',
      links: [
        { label: 'BIFF 공식', url: 'https://www.biff.kr' },
        { label: 'Visit Busan 축제 일정', url: 'https://www.visitbusan.net' },
      ],
      source: 'Visit Busan / 부산관광공사',
      spotDetails: [
        {
          name: '송도 해수욕장 (송도 불꽃 축제)',
          address: '부산광역시 서구 송도해변로 68',
          description: '부산 최초의 공설 해수욕장인 송도에서 매년 가을 열리는 불꽃 축제. 해상 케이블카와 어우러진 불꽃쇼는 부산만의 독특한 야경을 만들어 냅니다.',
          commentPoint: '케이블카 위에서 바라보는 불꽃 장면은 부산 어디서도 볼 수 없는 특별한 경험입니다.',
          mapUrl: 'https://map.naver.com/p/search/부산 서구 송도해변로 68',
        },
        {
          name: '광안리 해수욕장 (광안리 어방 불꽃 축제)',
          address: '부산광역시 수영구 광안해변로 219',
          description: '광안대교를 배경으로 펼쳐지는 국내 최대 규모의 불꽃 축제. 매년 100만 명 이상이 찾는 부산 대표 축제입니다.',
          commentPoint: '광안대교 야경과 불꽃의 조화는 방문 전날부터 자리를 잡아야 할 만큼 인기입니다.',
          mapUrl: 'https://map.naver.com/p/search/광안리해수욕장',
        },
        {
          name: 'BIFF 광장 (부산국제영화제)',
          address: '부산광역시 중구 비프광장로 30',
          description: '아시아 최대 규모의 국제 영화제. 핸드프린팅 거리와 야외 상영, 레드카펫 행사 등 영화 도시 부산의 진면목을 경험할 수 있습니다.',
          commentPoint: '영화제 기간 중 무료 야외 상영 및 거리 공연이 풍성하게 열려 티켓 없이도 충분히 즐길 수 있습니다.',
          mapUrl: 'https://map.naver.com/p/search/BIFF광장',
        },
      ],
      courseGuide: [
        ['불꽃 축제 관람', 'A코스 (송도 또는 광안리)'],
        ['영화·문화에 관심', 'A코스 (BIFF 시즌)'],
        ['부산 2박 이상 일정', 'B코스 (축제 + 명소 연계)'],
      ],
    },
    en: {
      title: 'Busan Festival Tour — Light, Fire & Culture',
      duration: 'Half day – 2 days',
      price: 'On request',
      maxPeople: 'Up to 15',
      description: 'Join a local expert to experience Busan\'s landmark festivals: Songdo Fire Festival, Gwangalli Fireworks, and the Busan International Film Festival.',
      spots: [
        'Songdo Beach — 68 Songdo Haebyon-ro, Seo-gu, Busan',
        'Gwangalli Beach — 219 Gwangan Haebyon-ro, Suyeong-gu, Busan',
        'BIFF Square — 30 Biff Gwangjang-ro, Jung-gu, Busan',
      ],
      courses: [
        'Course A (Half day): Festival site visit with guided commentary',
        'Course B (2 days): Festival + Busan landmarks',
      ],
      tip: 'Songdo Fire Festival: October. Gwangalli Fireworks: November. BIFF: October. Pre-booking required for peak season accommodation.',
      links: [
        { label: 'BIFF Official', url: 'https://www.biff.kr' },
        { label: 'Visit Busan Events', url: 'https://www.visitbusan.net' },
      ],
      source: 'Visit Busan / Busan Tourism Organization',
      spotDetails: [],
      courseGuide: [
        ['Fireworks fan', 'Course A (Songdo or Gwangalli)'],
        ['Film & culture lover', 'Course A (BIFF season)'],
        ['Extended Busan trip', 'Course B'],
      ],
    },
    zh: {
      title: '釜山节日游 — 光与火的盛典',
      duration: '半天 ~ 2天',
      price: '询价',
      maxPeople: '最多15人',
      description: '与本地专家一起体验松岛烟花节、广安里烟花节、釜山国际电影节等釜山代表性节庆活动。',
      spots: [
        '松岛海水浴场 — 釜山广域市西区松岛海边路68号',
        '广安里海水浴场 — 釜山广域市水营区广安海边路219号',
        'BIFF广场 — 釜山广域市中区BIFF广场路30号',
      ],
      courses: [
        'A路线（半天）：节庆现场游览+导游解说',
        'B路线（2天）：节庆观赏+釜山主要景点联游',
      ],
      tip: '松岛烟花节：10月。广安里烟花节：11月。BIFF：10月。旺季住宿需提前预订。',
      links: [
        { label: 'BIFF官网', url: 'https://www.biff.kr' },
        { label: 'Visit Busan活动', url: 'https://www.visitbusan.net' },
      ],
      source: 'Visit Busan / 釜山旅游公社',
      spotDetails: [],
      courseGuide: [
        ['喜爱烟花', 'A路线（松岛或广安里）'],
        ['电影文化爱好者', 'A路线（BIFF季节）'],
        ['釜山多日游', 'B路线'],
      ],
    },
  },

  night: {
    ko: {
      title: '부산의 밤 — 야경·야식 투어',
      duration: '저녁 반나절 (약 4시간)',
      price: '문의',
      maxPeople: '최대 12명',
      description: '부산의 밤은 낮보다 더 아름답습니다. 황령산에서 도심 야경을 파노라마로 내려다보고, 서면 포차 골목에서 부산 토박이 야식을 즐긴 후, 광안대교가 빛나는 해변에서 하루를 마무리하는 저녁 특화 투어입니다.',
      spots: [
        '황령산 전망쉼터 — 부산광역시 남구 황령산로 391-39',
        '서면 포차 골목 — 부산광역시 부산진구 서면 일대',
        '광안리 해수욕장 야경 — 부산광역시 수영구 광안해변로 219',
      ],
      courses: [
        'A코스 (야경 → 야식 → 야경): 황령산 전망쉼터 → 서면 포차 골목 → 광안리 해변',
      ],
      tip: '황령산 전망쉼터는 날씨 맑은 날 광안대교부터 해운대까지 한눈에 볼 수 있는 부산 최고의 야경 포인트입니다. 서면 포차는 저녁 6시 이후 본격 운영됩니다. 편한 신발 착용 권장.',
      links: [
        { label: '황령산 전망쉼터 — Visit Busan', url: 'https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000&uc_seq=371&lang_cd=ko' },
        { label: '광안리 해수욕장 지도', url: 'https://map.naver.com/p/search/광안리해수욕장' },
      ],
      source: 'Visit Busan / 부산관광공사',
      spotDetails: [
        {
          name: '황령산 전망쉼터',
          address: '부산광역시 남구 황령산로 391-39',
          description: '해발 427m 황령산 정상부에 위치한 야경 명소. 부산 도심, 광안대교, 해운대, 센텀시티까지 360도 파노라마 야경을 감상할 수 있어 부산 최고의 야경 뷰포인트 중 하나로 꼽힙니다. Visit Busan 추천 야간 관광 핵심 명소.',
          commentPoint: '해질녘 도착해 노을과 야경을 동시에 즐기는 타이밍이 가장 아름답습니다. 블루뱅 카페가 새벽 2시까지 운영합니다.',
          mapUrl: 'https://map.naver.com/p/search/황령산전망쉼터',
        },
        {
          name: '서면 포차 골목',
          address: '부산광역시 부산진구 서면 일대',
          description: '부산 최대 번화가 서면에 자리한 포차 골목. 돼지국밥, 밀면, 어묵탕, 해산물 포차까지 부산 토박이 야식을 다양하게 즐길 수 있는 저녁 식도락의 중심지입니다.',
          commentPoint: '포차마다 메뉴와 분위기가 달라 골목 전체를 천천히 걸으며 고르는 재미가 있습니다. 현지인이 즐겨 찾는 골목 안쪽 포차를 추천합니다.',
          mapUrl: 'https://map.naver.com/p/search/서면포차골목',
        },
        {
          name: '광안리 해수욕장 야경',
          address: '부산광역시 수영구 광안해변로 219',
          description: '광안대교의 환상적인 야간 조명이 바다에 반사되는 부산 대표 야경 명소. 해변을 따라 이어지는 카페와 레스토랑에서 야경을 바라보며 하루를 마무리하기에 최적입니다.',
          commentPoint: '광안대교 야간 조명은 계절마다 색이 바뀌며, 주말·기념일에는 특별 조명 이벤트가 열립니다.',
          mapUrl: 'https://map.naver.com/p/search/광안리해수욕장',
        },
      ],
      courseGuide: [
        ['야경 감상 위주', 'A코스 (황령산 → 광안리)'],
        ['야식 탐방 위주', 'A코스 (서면 포차 집중)'],
        ['야경 + 야식 모두', 'A코스 전체'],
      ],
    },
    en: {
      title: 'Busan After Dark — Night View · Late-Night Bites',
      duration: 'Evening half day (approx. 4 hours)',
      price: 'On request',
      maxPeople: 'Up to 12',
      description: 'Busan shines brightest after sunset. Panoramic city views from Hwangnyeong Mountain, late-night bites at Seomyeon pojangmacha alley, then the glittering Gwangandaegyo Bridge to close the evening.',
      spots: [
        'Hwangnyeong Mountain Observatory — 391-39 Hwangnyeongsan-ro, Nam-gu, Busan',
        'Seomyeon Pojangmacha Alley — Busanjin-gu, Busan',
        'Gwangalli Beach Night View — 219 Gwangan Haebyon-ro, Suyeong-gu, Busan',
      ],
      courses: [
        'Course A: Hwangnyeong Observatory → Seomyeon night food alley → Gwangalli beach',
      ],
      tip: 'Best on clear evenings for unobstructed panoramic views. Pojangmacha stalls open from 6pm. Wear comfortable shoes.',
      links: [
        { label: 'Hwangnyeong Observatory — Visit Busan', url: 'https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000&uc_seq=371&lang_cd=ko' },
        { label: 'Gwangalli Beach Map', url: 'https://map.naver.com/p/search/광안리해수욕장' },
      ],
      source: 'Visit Busan / Busan Tourism Organization',
      spotDetails: [],
      courseGuide: [
        ['Night view focus', 'Course A'],
        ['Street food focus', 'Course B'],
        ['All-in night experience', 'Course A (full)'],
      ],
    },
    zh: {
      title: '釜山之夜 — 夜景·宵夜二合一游',
      duration: '傍晚半天（约4小时）',
      price: '询价',
      maxPeople: '最多12人',
      description: '从黄岭山俯瞰釜山璀璨夜景，在西面布帐马车胡同享用地道宵夜，最后在广安大桥的灯光倒影中完美收尾。',
      spots: [
        '黄岭山展望休息处 — 釜山广域市南区黄岭山路391-39',
        '西面布帐马车胡同 — 釜山广域市釜山镇区西面一带',
        '广安里海水浴场夜景 — 釜山广域市水营区广安海边路219号',
      ],
      courses: [
        'A路线：黄岭山展望台 → 西面宵夜胡同 → 广安里海边',
      ],
      tip: '晴天傍晚前往夜景最佳。西面布帐马车18:00后开始营业。建议穿舒适的鞋子。',
      links: [
        { label: '黄岭山展望台 — Visit Busan', url: 'https://www.visitbusan.net/kr/index.do?menuCd=DOM_000000201001001000&uc_seq=371&lang_cd=ko' },
        { label: '广安里海水浴场地图', url: 'https://map.naver.com/p/search/광안리해수욕장' },
      ],
      source: 'Visit Busan / 釜山旅游公社',
      spotDetails: [],
      courseGuide: [
        ['以夜景为主', 'A路线'],
        ['以美食为主', 'B路线'],
        ['夜景+宵夜全体验', 'A路线（完整）'],
      ],
    },
  }
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

  const spotDetailsHTML = d.spotDetails ? d.spotDetails.map(sp => {
    const mapLink = sp.mapUrl ? '<a href="' + sp.mapUrl + '" target="_blank" rel="noopener">\uC9C0\uB3C4 \uBCF4\uAE30</a>' : '';
    const offLink = sp.officialUrl ? ' <a href="' + sp.officialUrl + '" target="_blank" rel="noopener">\uACF5\uC2DD \uC0AC\uC774\uD2B8</a>' : '';
    const pt = sp.commentPoint ? '<div class="spot-point">\uD83D\uDCA1 ' + sp.commentPoint + '</div>' : '';
    return '<div class="spot-card"><h4>' + sp.name + '</h4><span class="spot-addr">\uD83D\uDCCD ' + sp.address + '</span><div class="spot-link-row">' + mapLink + offLink + '</div><p class="spot-desc">' + sp.description + '</p>' + pt + '</div>';
  }).join('') : null;

  const courseDetailsHTML = d.courseDetails ? d.courseDetails.map((cd, idx) => {
    const courseWord = lang === 'zh' ? '\u8DEF\u7EBF' : lang === 'en' ? 'Course' : '\ucf54\uc2a4';
    const itWord = lang === 'zh' ? '\u63A8\u8350\u884C\u7A0B' : lang === 'en' ? 'Suggested Itinerary' : '\uCD94\uCC9C \uC77C\uC815';
    const infoRows = cd.info.map(([k, v]) => '<tr><td>' + k + '</td><td>' + v + '</td></tr>').join('');
    const itRows = cd.itinerary.map(([t, s]) => '<tr><td>' + t + '</td><td>' + s + '</td></tr>').join('');
    return '<div class="course-card"><div class="course-num">' + courseWord + ' ' + (idx + 1) + '</div><h4>' + cd.title + '</h4><div class="course-spots-label">' + cd.spots + '</div><p class="course-subtitle">' + cd.subtitle + '</p><p class="course-intro">' + cd.intro + '</p><table class="course-info-table">' + infoRows + '</table><div class="itinerary"><h5>' + itWord + '</h5><table class="itinerary-table">' + itRows + '</table></div></div>';
  }).join('') : null;

  const courseGuideBlock = d.courseGuide ? (() => {
    const h3 = lang === 'zh' ? '\u8DEF\u7EBF\u9009\u62E9\u6307\u5357' : lang === 'en' ? 'Course Selection Guide' : '\ucf54\uc2a4 \uc120\ud0dd \uac00\uc774\ub4dc';
    const th1 = lang === 'zh' ? '\u65C5\u884C\u76EE\u7684' : lang === 'en' ? 'Travel Purpose' : '\uc5ec\ud589 \ubaa9\uc801';
    const th2 = lang === 'zh' ? '\u63A8\u8350\u8DEF\u7EBF' : lang === 'en' ? 'Recommended Course' : '\ucd94\ucc9c \ucf54\uc2a4';
    const rows = d.courseGuide.map(([cond, course]) => '<tr><td>' + cond + '</td><td>' + course + '</td></tr>').join('');
    return '<div class="modal-section"><h3>' + h3 + '</h3><table class="guide-table"><thead><tr><th>' + th1 + '</th><th>' + th2 + '</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
  })() : '';

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
    .course-card { border: 1px solid #e0e0e0; border-radius: 12px; padding: 20px 22px; margin-bottom: 14px; background: #fafafa; }
    .course-num { font-size: 11px; font-weight: 700; color: #2c5f2e; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 4px; }
    .course-card h4 { font-size: 1rem; color: #1a2e2a; margin-bottom: 3px; font-weight: 700; }
    .course-spots-label { font-size: 0.88rem; color: #2c5f2e; font-weight: 600; margin-bottom: 6px; }
    .course-subtitle { font-size: 0.82rem; color: #888; font-style: italic; margin-bottom: 7px; }
    .course-intro { font-size: 0.88rem; color: #555; line-height: 1.6; margin-bottom: 10px; }
    .course-info-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 10px; }
    .course-info-table td { padding: 4px 8px; border-bottom: 1px solid #f0f0f0; }
    .course-info-table td:first-child { width: 90px; color: #888; font-weight: 600; }
    .itinerary h5 { font-size: 0.82rem; color: #555; margin-bottom: 5px; }
    .itinerary-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
    .itinerary-table td { padding: 4px 8px; border-bottom: 1px solid #f5f5f5; }
    .itinerary-table td:first-child { width: 80px; color: #2c5f2e; font-weight: 600; white-space: nowrap; }
    .spot-card { border: 1px solid #e0e0e0; border-radius: 10px; padding: 16px 18px; margin-bottom: 10px; background: #fff; }
    .spot-card h4 { font-size: 0.98rem; color: #1a2e2a; margin-bottom: 4px; font-weight: 700; }
    .spot-addr { font-size: 0.8rem; color: #888; display: block; margin-bottom: 6px; }
    .spot-link-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
    .spot-link-row a { font-size: 0.78rem; background: #e8f5e9; padding: 2px 10px; border-radius: 99px; text-decoration: none; color: #2c5f2e; }
    .spot-desc { font-size: 0.86rem; color: #555; line-height: 1.65; margin-bottom: 7px; }
    .spot-point { font-size: 0.84rem; color: #2c5f2e; background: #f0f8f0; padding: 7px 11px; border-radius: 6px; line-height: 1.55; }
    .guide-table { width: 100%; border-collapse: collapse; font-size: 0.86rem; }
    .guide-table th { background: #2c5f2e; color: #fff; padding: 7px 10px; text-align: left; font-weight: 600; }
    .guide-table td { padding: 6px 10px; border-bottom: 1px solid #eee; }
    .guide-table tr:nth-child(even) td { background: #f9f9f9; }
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

    ${!courseDetailsHTML ? `<div class="modal-section"><h3>${ml.spots}</h3><ul>${spotsHTML}</ul></div>` : ''}
    ${!courseDetailsHTML ? `<div class="modal-section"><h3>${ml.courses}</h3><ul>${coursesHTML}</ul></div>` : ''}
    ${courseDetailsHTML ? `<div class="modal-section"><h3>${lang === 'zh' ? '\u63A8\u8350\u8DEF\u7EBF' : lang === 'en' ? 'Recommended Courses' : '\uCD94\uCC9C \ucf54\uc2a4'}</h3>${courseDetailsHTML}</div>` : ''}
    ${spotDetailsHTML ? `<div class="modal-section"><h3>${lang === 'zh' ? '\u5404\u5BFA\u9662\u8BE6\u7EC6\u4ECB\u7ECD' : lang === 'en' ? 'Temple Details' : '\uc0ac\ucc30\ubcc4 \uc0c1\uc138 \uc548\ub0b4'}</h3>${spotDetailsHTML}</div>` : ''}
    ${courseGuideBlock}

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
// 여행 이야기 게시판
// =========================================
const boardData = [
  {
    id: 1,
    title: '선샤인 웰니스 첫 번째 후기 — 기대 이상이었습니다 :)',
    date: '2026-04-28',
    author: '황미경',
    destination: '부산',
    views: 602,
    content: `<p>처음에는 큰 기대 없이 신청했는데, 막상 참여해보니 생각보다 훨씬 만족스러운 여행이었습니다. 선샤인 웰니스 프로그램은 단순히 관광지를 둘러보는 일정이 아니라, 몸과 마음을 편안하게 회복하는 여행에 가까웠습니다.</p>
<p>일정이 여유롭게 구성되어 있어 부담이 적었고, 해설과 체험이 적절히 어우러져 지루하지 않았습니다. 특히 여행 중간중간 쉬어갈 수 있는 시간이 있어 중장년층에게도 잘 맞는 프로그램이라고 느꼈습니다.</p>
<p>혼자 참여해도 어색하지 않았고, 함께한 분들과 자연스럽게 대화를 나눌 수 있어 좋았습니다. 다음 프로그램도 기회가 된다면 다시 참여하고 싶습니다.</p>`
  },
  {
    id: 2,
    title: '신중년 여행 동행 구합니다 — 6월 부산 근교 투어 같이 가실 분?',
    date: '2026-05-03',
    author: '이정란',
    destination: '부산',
    views: 156,
    content: `<p>6월에 부산 근교 여행을 함께하실 신중년 여행 동행을 찾습니다. 혼자 여행도 좋지만, 비슷한 관심사를 가진 분들과 함께 걸으며 이야기 나누는 여행도 좋을 것 같아 글을 남깁니다.</p>
<p>관심 있는 코스는 해동용궁사, 범어사, 기장 바다 산책, 부산 전통시장 투어, 감천문화마을 등입니다. 너무 빠듯한 일정이 아니라 천천히 걷고, 좋은 음식을 먹고, 편안하게 쉬는 여행을 생각하고 있습니다.</p>
<p>웰니스 여행, 문화해설 투어, 사찰 방문, 시장 탐방에 관심 있는 분들이라면 함께 즐거운 시간을 보낼 수 있을 것 같습니다. 관심 있으신 분들은 댓글로 편하게 남겨주세요.</p>`
  },
  {
    id: 3,
    title: '해동용궁사 새벽 예불 체험, 삶이 바뀌는 느낌이었습니다',
    date: '2026-05-08',
    author: '손명희',
    destination: '부산',
    views: 534,
    content: `<p>해동용궁사 새벽 예불 체험은 이번 여행에서 가장 특별한 시간이었습니다. 이른 새벽 바다를 바라보며 사찰에 도착했을 때의 고요한 분위기가 아직도 생생합니다.</p>
<p>파도 소리와 목탁 소리가 함께 들리는 순간, 마음속 복잡한 생각들이 조금씩 정리되는 느낌이었습니다. 종교적인 의미를 떠나, 자신을 돌아보고 조용히 숨을 고를 수 있는 시간이었습니다.</p>
<p>해동용궁사는 낮에 방문해도 아름답지만, 새벽 예불 시간에는 전혀 다른 감동이 있습니다. 바쁜 일상 속에서 잠시 멈춤이 필요한 분들에게 꼭 추천하고 싶은 경험입니다.</p>`
  },
  {
    id: 4,
    title: '부산 시장 투어 후기 — 자갈치에서 활어회 먹은 게 아직도 생각나요',
    date: '2026-05-12',
    author: '김태성',
    destination: '부산',
    views: 388,
    content: `<p>부산 여행에서 가장 생생하게 기억나는 일정은 시장 투어였습니다. 특히 자갈치시장에서 먹었던 활어회는 아직도 생각납니다.</p>
<p>시장 특유의 활기찬 분위기와 상인분들의 정겨운 모습이 인상적이었습니다. 해산물이 신선했고, 직접 보고 고른 음식을 바로 맛볼 수 있다는 점이 부산 시장 투어의 큰 매력이었습니다.</p>
<p>자갈치시장뿐만 아니라 주변 시장과 골목을 함께 둘러보니 부산 사람들의 일상과 지역 문화를 조금 더 가까이 느낄 수 있었습니다. 관광지 중심의 여행도 좋지만, 시장 투어처럼 지역의 생활을 체험하는 여행도 정말 의미 있다고 생각합니다.</p>`
  },
  {
    id: 5,
    title: '감천문화마을 투어 다녀왔습니다! 해설사 선생님이 너무 좋았어요',
    date: '2026-05-15',
    author: '정순자',
    destination: '부산',
    views: 421,
    content: `<p>감천문화마을 투어에 다녀왔습니다. 사진으로만 보던 알록달록한 마을을 직접 걸어보니 훨씬 더 인상적이었습니다.</p>
<p>무엇보다 해설사 선생님의 설명이 정말 좋았습니다. 단순히 예쁜 골목을 둘러보는 것이 아니라, 감천문화마을이 어떻게 형성되었고 어떤 이야기를 품고 있는지 들을 수 있어 여행의 깊이가 달라졌습니다.</p>
<p>골목마다 숨어 있는 벽화와 전망 포인트도 좋았고, 천천히 걸으며 마을의 분위기를 느낄 수 있어 만족스러웠습니다. 부산을 처음 방문하는 분들뿐만 아니라, 부산에 살아도 감천문화마을을 제대로 경험해보지 못한 분들에게 추천하고 싶습니다.</p>`
  },
  {
    id: 6,
    title: '다음 행선지 고민 중 — 교토 vs 부산, 어디가 좋을까요?',
    date: '2026-05-18',
    author: '최미선',
    destination: '미정',
    views: 189,
    content: `<p>다음 여행지를 고민하고 있습니다. 교토와 부산 중 어디를 선택하면 좋을지 아직 결정하지 못했습니다.</p>
<p>교토는 전통적인 분위기와 사찰, 정원, 오래된 골목길이 매력적이라 조용한 여행을 좋아하는 분들에게 잘 맞을 것 같습니다. 반면 부산은 바다, 사찰, 시장, 문화마을, 온천과 웰니스 프로그램까지 다양하게 즐길 수 있다는 점이 좋습니다.</p>
<p>특히 부산은 이동 거리가 비교적 짧고, 해동용궁사나 감천문화마을, 자갈치시장처럼 개성이 뚜렷한 장소가 많아 여행 만족도가 높을 것 같습니다. 혹시 두 지역을 모두 다녀오신 분이 있다면 어떤 여행지가 더 좋았는지 의견을 나눠주시면 감사하겠습니다.</p>`
  },
  {
    id: 7,
    title: '60대에 혼자 부산 여행, 선샤인 웰니스 덕분에 잊지 못할 경험',
    date: '2026-05-20',
    author: '박용수',
    destination: '부산',
    views: 312,
    content: `<p>혼자 여행을 떠나는 것이 처음이라 걱정이 많았습니다. 하지만 선샤인 웰니스 프로그램을 통해 부산을 여행하면서 그 걱정이 금세 사라졌습니다.</p>
<p>일정은 너무 빠듯하지 않았고, 해설사 선생님께서 장소마다 이야기를 잘 풀어주셔서 혼자였지만 외롭지 않았습니다. 바다를 바라보며 걷는 시간, 전통시장에서 음식을 맛보는 시간, 그리고 함께 여행 온 분들과 나눈 대화가 모두 따뜻한 기억으로 남았습니다.</p>
<p>특히 60대 이후에도 충분히 새로운 경험을 할 수 있다는 자신감을 얻었습니다. 혼자 여행을 고민하시는 분들께 꼭 추천하고 싶은 프로그램입니다.</p>`
  },
  {
    id: 8,
    title: '제주도 웰니스 여행 후기 — 사찰 스테이가 최고였어요',
    date: '2026-05-22',
    author: '이화진',
    destination: '제주도',
    views: 247,
    content: `<p>이번 제주도 웰니스 여행에서 가장 기억에 남는 일정은 단연 사찰 스테이였습니다. 조용한 산사에서 하루를 보내며 바쁜 일상에서 잠시 벗어날 수 있었고, 새벽 예불과 명상 시간은 마음을 차분하게 정리하는 데 큰 도움이 되었습니다.</p>
<p>특히 사찰 주변을 천천히 걷는 시간이 좋았습니다. 자연의 소리와 맑은 공기, 그리고 따뜻한 차 한 잔이 주는 여유가 오래 기억에 남습니다. 여행이 단순히 관광지를 둘러보는 것이 아니라, 몸과 마음을 돌보는 시간이 될 수 있다는 것을 느꼈습니다.</p>
<p>선샤인 웰니스 일정은 무리하지 않게 구성되어 있어 중장년층도 편안하게 참여할 수 있었습니다. 다음에도 이런 조용하고 깊이 있는 여행을 다시 경험하고 싶습니다.</p>`
  }
];

function openBoardPost(id) {
  console.log('[BOARD] openBoardPost 호출됨:', id);

  var post = boardData.find(function(p) {
    return String(p.id) === String(id);
  });
  console.log('[BOARD] post:', post ? post.title : 'NOT FOUND');

  if (!post) {
    console.warn('[BOARD] post not found:', id);
    return;
  }

  var boardTable = document.getElementById('boardTable');
  var boardPostView = document.getElementById('boardPostView');
  console.log('[BOARD] boardTable:', boardTable);
  console.log('[BOARD] boardPostView:', boardPostView);

  if (!boardTable || !boardPostView) {
    console.error('[BOARD] 요소를 찾을 수 없습니다!');
    return;
  }

  boardTable.style.display = 'none';
  boardPostView.style.display = 'block';
  console.log('[BOARD] display 전환 완료. boardPostView display:', boardPostView.style.display);
  console.log('[BOARD] showSubPage 호출 직전');

  boardPostView.innerHTML =
    '<div class="board-post-detail">' +
      '<button type="button" class="board-back-btn" id="boardBackTop">← 목록으로</button>' +
      '<div class="board-post-meta">No. ' + post.id + '</div>' +
      '<h2 class="board-post-title">' + post.title + '</h2>' +
      '<div class="board-post-info">' +
        '<span>작성자 ' + (post.author || '선샤인 웰니스') + '</span>' +
        '<span>' + (post.date || '') + '</span>' +
        '<span>조회 ' + (post.views || 0) + '</span>' +
      '</div>' +
      '<div class="board-post-content">' + post.content + '</div>' +
      '<div class="board-post-bottom">' +
        '<button type="button" class="board-back-btn" id="boardBackBottom">목록으로</button>' +
      '</div>' +
    '</div>';
  console.log('[BOARD] innerHTML 삽입 완료');

  boardPostView.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('boardBackTop').addEventListener('click', closeBoardPost);
  document.getElementById('boardBackBottom').addEventListener('click', closeBoardPost);
}

function closeBoardPost() {
  var boardTable = document.getElementById('boardTable');
  var boardPostView = document.getElementById('boardPostView');
  boardPostView.style.display = 'none';
  boardPostView.innerHTML = '';
  boardTable.style.display = '';
}

document.addEventListener('DOMContentLoaded', function() {
  var rows = document.querySelectorAll('#boardTable .board-row');
  console.log('[BOARD] rows found:', rows.length);

  var btns = document.querySelectorAll('#boardTable .board-post-button');
  console.log('[BOARD] buttons found:', btns.length);
  btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var id = btn.dataset.id;
      console.log('[BOARD] button clicked (direct):', id);
      openBoardPost(id);
    });
  });

  rows.forEach(function(row) {
    row.addEventListener('click', function() {
      var id = row.dataset.id;
      console.log('[BOARD] row clicked (direct):', id);
      openBoardPost(id);
    });
  });
});

// =========================================
// 게시판 클릭 이벤트 위임 (capture phase)
// =========================================
console.log('[BOARD] 클릭 위임 등록 시작');

function _boardHandleClick(e) {
  var target = e.target;
  var item = target.closest('.board-row, .board-post-button, .board-post-link');
  if (!item) return;

  var row = target.closest('.board-row');
  var id  = item.dataset.id || (row && row.dataset.id);

  console.log('[BOARD] 실제 게시판 클릭 감지:', item.tagName, 'id:', id);
  if (id) {
    openBoardPost(id);
  } else {
    console.warn('[BOARD] 클릭 요소에 data-id 없음:', item);
  }
}

document.addEventListener('click', _boardHandleClick, true);
window.addEventListener('click', _boardHandleClick, true);

// =========================================
// 입금안내 모달
// =========================================
document.addEventListener('DOMContentLoaded', function () {
  var bg    = document.getElementById('depositModalBg');
  var btn   = document.getElementById('btnDepositInfo');
  var close = document.getElementById('depositModalClose');
  if (!bg || !btn || !close) return;

  btn.addEventListener('click', function () { bg.classList.add('is-open'); });
  close.addEventListener('click', function () { bg.classList.remove('is-open'); });
  bg.addEventListener('click', function (e) {
    if (e.target === bg) bg.classList.remove('is-open');
  });
});


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

