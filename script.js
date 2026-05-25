// =========================================
// SUNSHINE WELLNESS ??script.js
// =========================================

// --- ?ㅻ뜑: ?ㅽ겕濡????щ챸 ???곗깋 ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// =========================================
// ?ㅺ뎅??踰덉뿭 ?쒖뒪??// =========================================
let currentLang = 'ko';

const translations = {
  ko: {
    // ?ㅻ퉬寃뚯씠??    'nav.about': '?곕땲???뚭컻',
    'nav.programs': '?꾨줈洹몃옩 ?뚭컻',
    'nav.contact': '寃ъ쟻?섎ː 諛?臾몄쓽',
    'nav.wheretonext': 'Where to Next?',
    'nav.contactus': 'Contact Us',
    'auth.login': '濡쒓렇??,
    'auth.signup': '?뚯썝媛??,

    // ?щ씪?대뱶 1
    'slide1.title': '媛移섏엳???뱀떊???몄깮<br /><strong>\'??3留?'</strong>',
    'slide1.desc': '?좎쨷?꾩쓣 ?꾪븳 留욎땄???몄궗?댄듃 ?먮갑 諛??곕땲???ы뻾',
    'slide1.tagline': 'Journey with Purpose, Wellness All Around',

    // ?щ씪?대뱶 2
    'slide2.title': '怨⑤ぉ留덈떎 ?닿릿<br /><strong>遺?곗쓽 ?댁빞湲?/strong>',
    'slide2.desc': '媛먯쿇臾명솕留덉쓣, ?꾨Ц ?댁꽕?ъ? ?④퍡?섎뒗 源딆? ?먮갑',
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // ?щ씪?대뱶 3
    'slide3.title': '怨좎슂???띿뿉??br /><strong>留덉쓬???대젮?볥떎</strong>',
    'slide3.desc': '踰붿뼱?? ?대룞?⑷턿????遺???ъ같?먯꽌??紐낆긽 ?ъ뼱',
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // ?щ씪?대뱶 4
    'slide4.title': '吏媛묒씠 ?뉗븘??br /><strong>愿쒖갖??</strong>',
    'slide4.desc': '援?젣?쒖옣, 遺?됯묀?듭떆?? ?먭컝移섏떆????遺??3? ?쒖옣 ?뚰궧 ?ъ뼱',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // ?щ씪?대뱶 5
    'slide5.title': '?꾪뵒??湲곗뼲?섍퀬<br /><strong>?됲솕瑜?諛곗슦??/strong>',
    'slide5.desc': '?섑깉쨌?쇰?쨌?ш굔쨌?됲솕 ??遺???ㅽ겕 ?ъ뼱由ъ쬁',
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // ?щ씪?대뱶 6
    'slide6.title': '?덉닠濡?臾쇰뱶??br /><strong>遺?곗쓽 ?섎（</strong>',
    'slide6.desc': '遺?고쁽?誘몄닠愿, 遺?곕퉬?붾궇????遺?곗쓽 ?덉닠 怨듦컙??源딆씠 ?먮갑',
    'slide6.tagline': 'Art Flows Through Every Street',

    // ?뚭컻 ?뱀뀡
    'about.label': 'About Us',
    'about.title': '遺?곗쓽 ?꾨쫫?ㅼ???br /><strong>?⑤じ?쇰줈 ?먮겮?몄슂</strong>',
    'about.desc': '?좎깶???곕땲?ㅻ뒗 遺?곗쓽 ?먯뿰, 臾명솕, ?덉닠, ??궗瑜?源딄퀬 ?먮━寃?寃쏀뿕?섎뒗 留욎땄???곕땲???ы뻾???쒓났?⑸땲?? 嫄룰퀬, 蹂닿퀬, ?щŉ ???뱀떊留뚯쓽 遺?곗쓣 留뚮굹蹂댁꽭??',
    'stat1.label': '?꾨Ц ?꾨줈洹몃옩',
    'stat2.label': '留욎땄???ъ뼱',
    'stat3.label': '濡쒖뺄 ?꾨Ц ?ы뻾??,

    // ?꾨줈洹몃옩 ?뱀뀡
    'programs.label': 'Our Programs',
    'programs.title': '?곕땲???ы뻾<br /><strong>?꾨줈洹몃옩</strong>',
    'programs.desc': '紐멸낵 留덉쓬???④퍡 ?ъ뼱媛??br />遺?곗쓽 ?밸퀎???ъ젙',

    // 移대뱶 1 - ?ъ뼱
    'card1.tag': '?ъ뼱',
    'card1.title': '遺??洹쇨탳 ?ъ뼱',
    'card1.desc': '湲곗옣, ?댁슫?, ?곷룄 ??遺??洹쇨탳???④꺼吏?蹂댁꽍 媛숈? ?μ냼瑜??먮갑?⑸땲??',

    // 移대뱶 2 - 而ъ쿂
    'card2.tag': '臾명솕',
    'card2.title': '媛먯쿇臾명솕留덉쓣 ?댁꽕',
    'card2.desc': '?꾨Ц ?댁꽕?ъ? ?④퍡 媛먯쿇臾명솕留덉쓣????궗? ?덉닠, 怨⑤ぉ ?댁빞湲곕? ?ㅼ뼱蹂댁꽭??',

    // 移대뱶 3 - ?ъ같
    'card3.tag': '紐낆긽',
    'card3.title': '?ъ같 ?ъ뼱',
    'card3.desc': '踰붿뼱?? ?대룞?⑷턿????遺?곗쓽 怨좎쫰?됲븳 ?ъ같?먯꽌 紐낆긽怨??ъ같 臾명솕瑜?寃쏀뿕?⑸땲??',

    // 移대뱶 4 - ?덉닠
    'card4.tag': '?덉닠',
    'card4.title': '遺???덉닠 ?ы뻾',
    'card4.desc': '源↔묀?댁삁?좊쭏?? F1963, 遺?고쁽?誘몄닠愿 ??遺?곗쓽 ?덉닠 怨듦컙??源딆씠 ?먮갑?⑸땲??',

    // 移대뱶 5 - ?쒖옣
    'card5.tag': '誘몄떇',
    'card5.title': '?쒖옣 & ?〓낭??誘몄떇 ?ъ뼱',
    'card5.desc': '遺?꾩떆?????닿??????ㅻ━吏????꾨궇????遺???쒖옣쨌?대?쨌怨⑤ぉ???곕씪 吏??퀎 ?〓낭?댁쓽 留쏄낵 ?댁빞湲곕? ?먮갑?⑸땲??',

    // 移대뱶 6 - ??궗
    'card6.tag': '??궗',
    'card6.title': '遺???ㅽ겕 ?ъ뼱由ъ쬁',
    'card6.desc': '?섑깉쨌?쇰?쨌?ш굔쨌?됲솕 ??遺?곗씠 寃щ뵒怨??뚮났????洹쇳쁽??щ? ?꾩옣?먯꽌 嫄룰퀬 諛곗썎?덈떎.',

    // 移대뱶 怨듯넻
    'card.info': '?ы뻾 ?뺣낫',
    'card.contact': '臾몄쓽?섍린 ??,

    // ?곕씫泥??뱀뀡
    'contact.label': 'Contact',
    'contact.title': '?ы뻾??br /><strong>?쒖옉?대낫?몄슂</strong>',
    'contact.desc': '?먰븯???꾨줈洹몃옩???뚮젮二쇱떆硫?留욎땄 ?쇱젙???덈궡???쒕┰?덈떎.',
    'contact.address': '?쒕㈃ 伊щ뵒?ㅽ깭??諛깊솕????,

    // ??    'form.name': '?대쫫',
    'form.namePlaceholder': '?띻만??,
    'form.phone': '?곕씫泥?,
    'form.phonePlaceholder': '010-0000-0000',
    'form.program': '愿???꾨줈洹몃옩',
    'form.programDefault': '?좏깮?댁＜?몄슂',
    'prog.tour': '遺??洹쇨탳 ?ъ뼱',
    'prog.culture': '媛먯쿇臾명솕留덉쓣 ?댁꽕',
    'prog.art': '遺???덉닠 ?ы뻾',
    'prog.temple': '?ъ같 ?ъ뼱',
    'prog.market': '?쒖옣 ?뚰궧 ?ъ뼱',
    'form.message': '臾몄쓽 ?댁슜',
    'form.messagePlaceholder': '?щ쭩 ?좎쭨, ?몄썝, ?붿껌 ?ы빆???곸뼱二쇱꽭??',
    'form.submit': '臾몄쓽 蹂대궡湲?,
    'form.sending': '?꾩넚 以?..',
    'form.success': '媛먯궗?⑸땲?? 怨??곕씫?쒕━寃좎뒿?덈떎.',
    'form.error': '?ㅻ쪟媛 諛쒖깮?덉뒿?덈떎. ?ㅼ떆 ?쒕룄?댁＜?몄슂.',

    // ?명꽣
    'footer.tagline': '遺?곗뿉???쒖옉?섎뒗 ?밸퀎???곕땲???ы뻾',
    'footer.about': '?뚭컻',
    'footer.programs': '?꾨줈洹몃옩',
    'footer.contact': '臾몄쓽',
    'footer.copyright': '짤 2026 ?좎깶???곕땲?? All rights reserved.',
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
    'slide2.desc': 'Gamcheon Culture Village ??a deep exploration with expert guides',
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // Slide 3
    'slide3.title': 'In Stillness,<br /><strong>Let It All Go</strong>',
    'slide3.desc': 'Beomeosa & Haedong Yonggungsa ??meditation tours at Busan\'s temples',
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // Slide 4
    'slide4.title': 'No Big Budget?<br /><strong>No Problem!</strong>',
    'slide4.desc': 'Gukje Market, Bupyeong Market, Jagalchi Market ??Busan\'s top 3 markets walking tour',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // Slide 5
    'slide5.title': 'Remember the Pain,<br /><strong>Learn Peace</strong>',
    'slide5.desc': 'Exploitation 쨌 Refuge 쨌 Reconstruction 쨌 Peace ??Busan Dark Tourism',
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // Slide 6
    'slide6.title': 'A Day in Busan<br /><strong>Painted by Art</strong>',
    'slide6.desc': 'Busan Museum of Contemporary Art, Busan Biennale ??deep dive into Busan\'s art spaces',
    'slide6.tagline': 'Art Flows Through Every Street',

    // About section
    'about.label': 'About Us',
    'about.title': 'Feel the Beauty of Busan<br /><strong>with Every Sense</strong>',
    'about.desc': 'Sunshine Wellness offers tailor-made wellness travel that explores Busan\'s nature, culture, art, and history slowly and deeply. Walk, see, rest ??discover your own Busan.',
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
    'card1.desc': 'Explore hidden gems around Busan ??Gijang, Haeundae, Yeongdo, and more.',

    // Card 2 - Culture
    'card2.tag': 'Culture',
    'card2.title': 'Gamcheon Village Tour',
    'card2.desc': 'Listen to the history, art, and alley stories of Gamcheon Culture Village with an expert guide.',

    // Card 3 - Temple
    'card3.tag': 'Meditation',
    'card3.title': 'Temple Tour',
    'card3.desc': 'Experience meditation and temple culture at Busan\'s serene temples ??Beomeosa and Haedong Yonggungsa.',

    // Card 4 - Art
    'card4.tag': 'Art',
    'card4.title': 'Busan Art Journey',
    'card4.desc': 'A deep dive into Busan\'s art spaces ??Kkangkkangyi Arts Village, F1963, and Busan Museum of Contemporary Art.',

    // Card 5 - Market
    'card5.tag': 'Food',
    'card5.title': 'Market & Tteokbokki Food Tour',
    'card5.desc': 'Bujeon Market ??Igane ??Darijip ??Donald ??follow Busan\'s markets, beaches & alleys to taste and discover regional tteokbokki stories.',

    // Card 6 - History
    'card6.tag': 'History',
    'card6.title': 'Busan Dark Tourism',
    'card6.desc': 'Exploitation 쨌 Refuge 쨌 Reconstruction 쨌 Peace ??walk and learn Busan\'s modern history on-site.',

    // Card common
    'card.info': 'Travel Info',
    'card.contact': 'Inquire ??,

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
    'footer.copyright': '짤 2026 Sunshine Wellness. All rights reserved.',
  },

  zh: {
    // 野쇠닼
    'nav.about': '?념틢?묇뺄',
    'nav.programs': '窈밭쎅餓뗧퍖',
    'nav.contact': '?②?窯꾤벧',
    'nav.wheretonext': '訝뗤?塋쇿렮?わ폕',
    'nav.contactus': '?붺내?묇뺄',
    'auth.login': '?삣퐬',
    'auth.signup': '力ⓨ냼',

    // 亮사겘??1
    'slide1.title': '?ⓨ츧兀듕볶?잏쉪<br /><strong>"寧т툒亮?</strong>',
    'slide1.desc': '訝뷸뼭訝?뭅?뤺벴若싧댍?꾣킒野잋퉳?끺툗?ε볜?끾만',
    'slide1.tagline': 'Journey with Purpose, Wellness All Around',

    // 亮사겘??2
    'slide2.title': '?뤷쑉藥룟펲?뚨쉪<br /><strong>?쒎굇?끺틟</strong>',
    'slide2.desc': '?섇퇌?뉐뙑?묅붴붶툗訝볞툣鰲ｈ??섇뀻?뚧런佯?렋溫?,
    'slide2.tagline': 'Stories Hidden in Every Alley',

    // 亮사겘??3
    'slide3.title': '?③쓾瘟㏛릎<br /><strong>?얌툔恙껆겣</strong>',
    'slide3.desc': '歟들굴野뷩곫돈訝쒒풖若ュ??붴붼뇸掠긷??®쫭岳?퉳??,
    'slide3.tagline': 'Find Peace in Ancient Temples',

    // 亮사겘??4
    'slide4.title': '窯꾤츞?됮솏<br /><strong>阿잍깹?녕내竊?/strong>',
    'slide4.desc': '?썽솀躍귛쑛?곩칽亮녕퐧鸚닷툊?뷩곫쑎?롥끀躍귛쑛?붴붼뇸掠긴툒鸚㎩툊?뷴풎閭ζ만',
    'slide4.tagline': 'Walk the Markets, Taste the City',

    // 亮사겘??5
    'slide5.title': '???鴉ㅷ뿘<br /><strong>耶╊튌?뚦뭄</strong>',
    'slide5.desc': '?졾ㅊ쨌?욥슻쨌?띶뻠쨌?뚦뭄?붴붼뇸掠깁퍚?꿩뾽歷?,
    'slide5.tagline': 'Remember the Past, Walk Toward Peace',

    // 亮사겘??6
    'slide6.title': '?뷸쑐?볢돯??br /><strong>?쒎굇訝??/strong>',
    'slide6.desc': '?쒎굇壤볞빰獰롦쑐腰녴곲뇸掠긷룎亮닷콝?붴붹런佯?렋溫욥뇸掠김돷??㈉??,
    'slide6.tagline': 'Art Flows Through Every Street',

    // ?념틢?묇뺄
    'about.label': 'About Us',
    'about.title': '?ⓨ뀲翁ュ퓘?잌룛<br /><strong>?쒎굇阿뗧풆</strong>',
    'about.desc': '?녑뀎?ε볜?끾만?먧풘若싧댍?뽩겈佯룡뾽烏뚳펽溫⒵궓曆긷뀯煐볠뀬?겻퐪謠뚪뇸掠긺쉪?ょ꽫?곫뻼?뽧곮돷??툗?녶뤁?귝섐閭γ곮쭆壅뤵곦폂?⒱붴붼걞鰲곩콪雅롦궓?꾦뇸掠긱?,
    'stat1.label': '訝볞툣窈밭쎅',
    'stat2.label': '若싧댍?끾만',
    'stat3.label': '?у쑑訝볞툣?낁죱鹽?,

    // 窈밭쎅餓뗧퍖
    'programs.label': 'Our Programs',
    'programs.title': '?ε볜?끾만<br /><strong>窈밭쎅</strong>',
    'programs.desc': '翁ュ퓘?긷릪鴉묉넩??br />?쒎굇?밧닽?끿쮮',

    // ?←뎴 1
    'card1.tag': '?끾만',
    'card1.title': '?쒎굇瓦묌깏歷?,
    'card1.desc': '????뷴폖?곫돈雅묈룿?곩쉽略쏁춬?쒎굇瓦묌깏?먫뿈?꾢츧?뤶퉳?겹?,

    // ?←뎴 2
    'card2.tag': '?뉐뙑',
    'card2.title': '?섇퇌?뉐뙑?묋㎗瑥?,
    'card2.desc': '訝롣툜訝싪㎗瑥닷몮訝?뚩걝?х뵖藥앮뻼?뽪쓳?꾢럣?꿔곮돷??툗藥룟펲?끺틟??,

    // ?←뎴 3
    'card3.tag': '獵끺엶',
    'card3.title': '野븅솫阿뗦뾽',
    'card3.desc': '?ⓩ℉浴쇔??곫돈訝쒒풖若ュ?嶺됮뇸掠긷룮?밥퐪謠뚨쫭岳?툗野븅솫?뉐뙑??,

    // ?←뎴 4
    'card4.tag': '?뷸쑐',
    'card4.title': '?쒎굇?뷸쑐阿뗦뾽',
    'card4.desc': '曆긷벧????쒎굇?뷸쑐令븅뿴?붴붷룼??돷??쓳?갌1963?곲뇸掠긷퐪餓ｇ풆??쫮??,

    // ?←뎴 5
    'card5.tag': '獰롩짘',
    'card5.title': '躍귛쑛&?믣뭅楹뺟풆繇잍만',
    'card5.desc': '野뚨뵲躍귛쑛?믣닶若뜯넂旅ε??믣뵍瀛녑쓿?붴붹꼬?쒎굇躍귛쑛?곫돈略멧툗弱뤷렁竊뚦뱚?녑릢?곁굮亮당퀡?꾣븙雅뗣?,

    // ?←뎴 6
    'card6.tag': '?녶뤁',
    'card6.title': '?쒎굇容묋돯?끾만',
    'card6.desc': '?졾ㅊ쨌?욥슻쨌?띶뻠쨌?뚦뭄?붴붷츩?계뎔溫울펽耶╊튌?쒎굇瓦묊렟餓ｅ럣?꿔?,

    // ?←뎴 怨듯넻
    'card.info': '?끾만瑥?깄',
    'card.contact': '?②? ??,

    // ?붺내?묇뺄
    'contact.label': 'Contact',
    'contact.title': '凉??궓??br /><strong>?끿쮮</strong>',
    'contact.desc': '?딂칹?묇뺄?ⓩ꽏?닺땃?꾦」??펽?묇뺄弱녵맏?③뇧翁ュ츣?띈죱葉뗣?,
    'contact.address': '?쒎굇蜈욥씊?김역??낡?뚨쇍兀㎩뎺',

    // 烏ⓨ뜒
    'form.name': '冶볟릫',
    'form.namePlaceholder': '凉졽툒',
    'form.phone': '?붺내?듣캕',
    'form.phonePlaceholder': '+82-10-0000-0000',
    'form.program': '?잌뀾擁ｇ쉪窈밭쎅',
    'form.programDefault': '瑥룬됪떓',
    'prog.tour': '?쒎굇瓦묌깏歷?,
    'prog.culture': '?섇퇌?뉐뙑?묋㎗瑥?,
    'prog.art': '?쒎굇?뷸쑐阿뗦뾽',
    'prog.temple': '野븅솫阿뗦뾽',
    'prog.market': '躍귛쑛孃믤?歷?,
    'form.message': '?②??끻?',
    'form.messagePlaceholder': '瑥룟∥?쇿툕?쏁쉪?ζ쐿?곦볶?겼룋?밧닽誤곫콆??,
    'form.submit': '?묌곩뮜瑥?,
    'form.sending': '?묌곦릎...',
    'form.success': '?잒각?⑨펯?묇뺄弱녶갹恙ヤ툗?②걫楹삠?,
    'form.error': '?묊뵟?숃?竊뚩??띹캊??,

    // 窈듣꽊
    'footer.tagline': '餓롩뇸掠긷눣?묊쉪?밧닽?ε볜阿뗦뾽',
    'footer.about': '?념틢',
    'footer.programs': '窈밭쎅',
    'footer.contact': '?붺내',
    'footer.copyright': '짤 2026 ?녑뀎?ε볜?끾만. All rights reserved.',
  },
};

const modalLabels = {
  ko: {
    programInfo: '?꾨줈洹몃옩 ?뺣낫',
    spots: '諛⑸Ц ?μ냼',
    courses: '異붿쿇 肄붿뒪',
    tip: '?ы뻾 ??,
    links: '愿??留곹겕',
    source: '異쒖쿂',
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
    programInfo: '窈밭쎅岳→겘',
    spots: '歷멱쭏?곁궧',
    courses: '?②뜍瓮?봇',
    tip: '?낁죱弱뤺눼鶯?,
    links: '?멨뀽?얏렏',
    source: '壅꾣뼑?ζ틦',
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
// ?덉뼱濡?罹먮윭? (crossfade)
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

// ?꾪듃 ?ㅻ퉬寃뚯씠??(HTML??.pdot 踰꾪듉???대깽???곌껐)
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

// ?붿궡??踰꾪듉
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); goToSlide(currentSlide - 1); startAutoPlay(); });
if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });

// 泥??щ씪?대뱶 利됱떆 ?쒖떆 (transition ?놁씠)
slides[0].style.transition = 'none';
slides[0].classList.add('active');
requestAnimationFrame(() => requestAnimationFrame(() => {
  slides[0].style.transition = '';
}));

startAutoPlay();

// =========================================
// ?쒕툕?섏씠吏 ?ㅻ쾭?덉씠 (???ㅻ뜑 ?좎?)
// =========================================
function showSubPage(html) {
  const el = document.getElementById('subPageOverlay');
  el.innerHTML = html;
  el.style.display = 'block';
  el.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeSubPage() {
  const el = document.getElementById('subPageOverlay');
  if (!el || el.style.display === 'none') return;
  el.style.display = 'none';
  el.innerHTML = '';
  document.body.style.overflow = '';
}

// =========================================
// Where to Next? 寃뚯떆??(?ㅻ쾭?덉씠)
// =========================================
const _boardInitPosts = [
  { id: 8, title: '?쒖＜???곕땲???ы뻾 ?꾧린 ???ъ같 ?ㅽ뀒?닿? 理쒓퀬??댁슂', date: '05-22' },
  { id: 7, title: '60????쇱옄 遺???ы뻾, ?좎깶???곕땲???뺣텇???딆? 紐삵븷 寃쏀뿕', date: '05-20' },
  { id: 6, title: '?ㅼ쓬 ?됱꽑吏 怨좊? 以???援먰넗 vs 遺?? ?대뵒媛 醫뗭쓣源뚯슂?', date: '05-18' },
  { id: 5, title: '媛먯쿇臾명솕留덉쓣 ?ъ뼱 ?ㅻ??붿뒿?덈떎! ?댁꽕???좎깮?섏씠 ?덈Т 醫뗭븯?댁슂', date: '05-15' },
  { id: 4, title: '遺???쒖옣 ?ъ뼱 ?꾧린 ???먭컝移섏뿉???쒖뼱??癒뱀? 寃??꾩쭅???앷컖?섏슂', date: '05-12' },
  { id: 3, title: '?대룞?⑷턿???덈꼍 ?덈텋 泥댄뿕, ?띠씠 諛붾뚮뒗 ?먮굦?댁뿀?듬땲??, date: '05-08' },
  { id: 2, title: '?좎쨷???ы뻾 ?숉뻾 援ы빀?덈떎 ??6??遺??洹쇨탳 ?ъ뼱 媛숈씠 媛??遺?', date: '05-03' },
  { id: 1, title: '?좎깶???곕땲??泥?踰덉㎏ ?꾧린 ??湲곕? ?댁긽?댁뿀?듬땲??:)', date: '04-28' },
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
    list.innerHTML = '<tr><td colspan="3" class="sp-empty">寃뚯떆湲???놁뒿?덈떎.</td></tr>';
  } else {
    list.innerHTML = page.map((p, i) =>
      `<tr>
        <td class="sp-col-no">${_boardFiltered.length - start - i}</td>
        <td class="sp-col-title"><a href="#">${p.title}</a></td>
        <td class="sp-col-date">${p.date}</td>
      </tr>`
    ).join('');
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
  if (!title) { alert('?쒕ぉ???낅젰?댁＜?몄슂.'); return; }
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
  showSubPage(`
    <div class="sp-hero">
      <p>Community</p>
      <h1>Where to Next? <span style="font-weight:300;opacity:.7;">???ㅼ쓬 ?ы뻾吏</span></h1>
    </div>
    <div class="sp-wrap">
      <div class="sp-toolbar">
        <p class="sp-count">珥?<strong id="boardTotal">0</strong>嫄?/p>
        <button class="sp-btn-write" onclick="boardOpenWrite()">湲?곌린</button>
      </div>
      <table class="sp-table">
        <thead>
          <tr>
            <th style="width:60px;">NO.</th>
            <th class="sp-col-title">?쒕ぉ</th>
            <th style="width:90px;">?좎쭨</th>
          </tr>
        </thead>
        <tbody id="boardList"></tbody>
      </table>
      <div class="sp-paging" id="boardPaging"></div>
      <div class="sp-search">
        <select id="boardSearchType"><option value="title">?쒕ぉ?댁슜</option><option value="author">湲?댁씠</option></select>
        <input type="text" id="boardSearchInput" placeholder="寃?됱뼱瑜??낅젰?섏꽭?? onkeydown="if(event.key==='Enter')boardSearch()"/>
        <button onclick="boardSearch()">寃??/button>
      </div>
    </div>
    <div class="sp-write-dim" id="boardWriteDim" onclick="if(event.target===this)boardCloseWrite()">
      <div class="sp-write-box">
        <h2>湲?곌린</h2>
        <div class="sp-write-field"><label>?묒꽦??/label><input type="text" id="boardWriteAuthor" placeholder="?됰꽕??/></div>
        <div class="sp-write-field"><label>?쒕ぉ</label><input type="text" id="boardWriteTitle" placeholder="?쒕ぉ???낅젰?섏꽭??/></div>
        <div class="sp-write-field"><label>?댁슜</label><textarea id="boardWriteContent" placeholder="?댁슜???낅젰?섏꽭??></textarea></div>
        <div class="sp-write-actions">
          <button class="sp-btn-cancel" onclick="boardCloseWrite()">痍⑥냼</button>
          <button class="sp-btn-post" onclick="boardSubmit()">?깅줉</button>
        </div>
      </div>
    </div>
  `);
  _boardFiltered = [..._boardAllPosts];
  _boardPage = 1;
  _boardRender();
}

// =========================================
// Contact Us — 메인 페이지 섹션으로 스크롤
// =========================================
function openContactPage() {
  closeSubPage();
  setTimeout(() => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

// =========================================
// ?꾨줈洹몃옩 ?뚭컻 ??李?// =========================================
function openProgramsPage() {
  const BASE = 'https://www.sunshinewellness.co.kr';
  const lang = currentLang || 'ko';
  const t = translations[lang] || translations.ko;

  const IMGS = {
    tour:    `${BASE}/images/gwangan-bridge-haeundae-busan-korea.jpg`,
    culture: `${BASE}/images/51315836390_c2d8b2c7e2_o.jpg`,
    temple:  `${BASE}/images/haedong-yonggungsa-temple-haeundae-sea-busan-buddhist-temple-busan-south-korea.jpg`,
    art:     `${BASE}/images/(BB2024)遺?고쁽?誘몄닠愿_?몃?.jpg`,
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
    return { ...c, duration: pd.duration || '?뱀씪~1諛???, people: pd.maxPeople || '?뚭퇋紐? };
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
          <span>??${c.duration}</span>
          <span>?뫁 ${c.people}</span>
        </div>
        <div class="prog-btns">
          <a href="${BASE}/#programs" target="_parent" class="btn-outline">?ы뻾 ?뺣낫</a>
          <button class="btn-solid" onclick="openContactPage()">臾몄쓽?섍린 ??/button>
        </div>
      </div>
    </div>`).join('');

  showSubPage(`
    <div style="background:#f5f5f3;min-height:100%;">
      <div style="max-width:1160px;margin:0 auto;padding:64px 40px 80px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8a04a;margin-bottom:12px;">Our Programs</p>
        <h2 style="font-size:clamp(28px,4vw,42px);font-weight:800;color:#1a2e2a;line-height:1.25;margin-bottom:10px;">?곕땲???ы뻾 <span style="font-weight:300;">?꾨줈洹몃옩</span></h2>
        <p style="font-size:15px;color:#666;margin-bottom:52px;line-height:1.8;">紐멸낵 留덉쓬???④퍡 ?ъ뼱媛??遺?곗쓽 ?밸퀎???ъ젙.<br/>?좎쨷?꾩쓽 諛곗?怨??깆옣???꾪븳 留욎땄???곕땲???ъ뼱?낅땲??</p>
        <div class="prog-grid">${cardHtml}</div>
      </div>
    </div>`);
}

// =========================================
// ?곕땲???뚭컻 ??李?// =========================================
function openAboutPage() {

  // 1. Hero ???ㅽ겕洹몃┛ + ?レ옄 ?ㅽ꺈
  const sec1 = `
    <section style="background:#1a2e2a;padding:100px 40px 80px;text-align:center;">
      <div style="max-width:680px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,0.38);margin-bottom:28px;">Sunshine Wellness</p>
        <h1 style="font-size:clamp(28px,5vw,46px);font-weight:800;line-height:1.25;color:#fff;margin-bottom:28px;">媛移섏엳???뱀떊???몄깮<br/>??3留됱쓣 ?④퍡?⑸땲??/h1>
        <p style="font-size:16px;color:rgba(255,255,255,0.6);line-height:1.9;max-width:480px;margin:0 auto;">?좎쨷?꾩쓽 諛곗?怨??깆옣, 紐멸낵 留덉쓬??洹좏삎??吏?먰븯??br/>留욎땄???곕땲???ы뻾 ?꾨Ц ?ы뻾?ъ엯?덈떎.</p>
        <div style="margin-top:56px;display:flex;justify-content:center;align-items:center;">
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">6</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">?꾨Ц ?꾨줈洹몃옩</span>
          </div>
          <div style="width:1px;height:36px;background:rgba(255,255,255,0.15);"></div>
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">100%</span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">留욎땄???ъ뼱</span>
          </div>
          <div style="width:1px;height:36px;background:rgba(255,255,255,0.15);"></div>
          <div style="text-align:center;padding:0 40px;">
            <span style="display:block;font-size:32px;font-weight:800;color:#fff;">遺??/span>
            <span style="font-size:10px;color:rgba(255,255,255,0.42);letter-spacing:.12em;text-transform:uppercase;margin-top:6px;display:block;">濡쒖뺄 ?꾨Ц</span>
          </div>
        </div>
      </div>
    </section>`;

  // 2. Who We Are ??2???덉씠?꾩썐 + ?몄슜援?  const sec2 = `
    <section style="background:#fff;padding:88px 40px;">
      <div style="max-width:920px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start;">
        <div>
          <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#3B6259;margin-bottom:18px;">Who We Are</p>
          <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#1a2e2a;line-height:1.35;">?⑥닚???ы뻾???섏뼱,<br/>?몄깮??br/>?숇컲?먭? ?섍쿋?듬땲??/h2>
        </div>
        <div>
          <p style="font-size:15px;color:#555;line-height:1.95;margin-bottom:20px;">?좎깶???곕땲?ㅻ뒗 ?ы뻾???⑥닚???댁떇???꾨땲???몄깮???섎?瑜?李얘퀬 ?깆옣?섎뒗 ?쒓컙???????덈떎怨?誘우뒿?덈떎.</p>
          <p style="font-size:15px;color:#555;line-height:1.95;">遺?곗쓽 ?먯뿰쨌臾명솕쨌??궗? 源딆씠 留뚮굹??寃쏀뿕???띠뿉 ?덈줈???쒕젰??遺덉뼱?ｌ뼱 以띾땲?? ?곕땲?ㅼ? 臾명솕 泥댄뿕??寃고빀???낆갹?곸씤 ?꾨줈洹몃옩?쇰줈 紐멸낵 留덉쓬??洹좏삎???섏갼?꾨줉 ?뺢쿋?듬땲??</p>
          <blockquote style="margin-top:32px;padding:20px 24px;background:#f5f5f3;border-left:3px solid #1a2e2a;border-radius:0 8px 8px 0;">
            <p style="font-size:14px;font-weight:600;color:#1a2e2a;line-height:1.75;font-style:italic;">"?ы뻾??紐⑤뱺 ?쒓컙???섎? ?덇퀬 媛移??덇쾶 ?꾩꽦?섎룄濡?<br/>?좎깶???곕땲?ㅻ뒗 吏꾩떖 ?대┛ ?숇컲?먭? ?섍쿋?듬땲??"</p>
          </blockquote>
        </div>
      </div>
    </section>`;

  // 3. For You ??踰덊샇??移대뱶 4媛?  const forYouCards = [
    ['吏?띿쟻???깆옣', '????꾩뿉??諛곗???硫덉텛吏 ?딄퀬, ?덈줈??寃쏀뿕?쇰줈 吏?겶룹젙?쒖쟻 ?깆옣???댁뼱媛怨??띠? 遺꾧퍡 留욎땄 ?ъ젙???쒖븞?⑸땲??'],
    ['?띠쓽 洹좏삎 ?뚮났', '?ㅻ옖 ?쒓컙 ??몄쓣 ?꾪빐 ?댁븘??遺꾨뱾???먯떊???꾪븳 ?쒓컙???섏갼怨? 紐멸낵 留덉쓬??洹좏삎???뚮났?섎뒗 ?ы뻾?낅땲??'],
    ['?섎????щ컻寃?, '?몄깮 3留됱쓣 ?대뼸寃??댁븘媛덉? 怨좊??섎뒗 遺꾨뱾怨?遺?곗쓽 源딆? ?댁빞湲??띿뿉???덈줈??諛⑺뼢??李얠븘媛묐땲??'],
    ['?섎? ?덈뒗 ?몄뿰', '媛숈? 媛移섎? 怨듭쑀?섎뒗 ?숇컲?먮뱾怨??④퍡 嫄룰퀬 ?댁빞湲고븯硫? ?쒕줈??寃쏀뿕???섎늻???뚭퇋紐?洹몃９ ?ы뻾?낅땲??'],
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
        <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#fff;margin-bottom:12px;">40~60? ?좎쨷?꾩쓣 ?꾪빐<br/>?ㅺ퀎???ы뻾</h2>
        <p style="font-size:15px;color:rgba(255,255,255,0.56);margin-bottom:48px;line-height:1.8;">?쒓컙怨??ъ쑀媛 ?앷릿 吏湲? 吏꾩젙???섎? 李얜뒗 ?ъ젙???쒖옉?대낫?몄슂.</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">${forYouCards}</div>
      </div>
    </section>`;

  // 4. Our Promise ??踰덊샇 移대뱶 3媛? 洹몃┛ ?곷떒??  const promiseCards = [
    ['01', '利먭만嫄곕━', '諛곗?怨??ш?媛 ?④퍡?섎뒗 ?ы뻾', '??궗쨌臾명솕쨌?덉닠쨌?먯뿰??源딆씠 ?먮갑?섎뒗 ?곕땲???ы뻾. ?⑥닚 愿愿묒씠 ?꾨땶 吏꾩젙??泥댄뿕?쇰줈 ?ㅺ퀎?⑸땲??'],
    ['02', '癒밴굅由?, '嫄닿컯??遺?곗쓽 留?, '?ы뻾 以?嫄닿컯??吏?ㅻ뒗 濡쒖뺄 ?뚯떇怨?嫄닿컯 媛꾩떇?쇰줈 紐몄씠 ?쒓린李④쾶 ?ъ젙???댁뼱媛????덈룄濡??뺤뒿?덈떎.'],
    ['03', '?쇨굅由?, '援먯쑁 諛??쇱옄由??곌퀎', '?ы뻾 ?댄썑?먮룄 ?띠씠 ?댁뼱吏?꾨줉, 援먯쑁怨??쇱옄由??곌퀎 ?쒕퉬?ㅻ줈 ?ы쉶? ?곌껐???띠쓣 吏?먰빀?덈떎.'],
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
        <h2 style="font-size:clamp(22px,3vw,32px);font-weight:800;color:#1a2e2a;margin-bottom:48px;">?좎깶???곕땲?ㅼ쓽<br/>??媛吏 ?쎌냽</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">${promiseCards}</div>
      </div>
    </section>`;

  // 5. CTA ???ㅽ겕洹몃┛
  const sec5 = `
    <section style="background:#1a2e2a;padding:88px 40px;text-align:center;">
      <div style="max-width:560px;margin:0 auto;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:rgba(255,255,255,0.36);margin-bottom:22px;">Get Started</p>
        <h2 style="font-size:clamp(24px,3vw,34px);font-weight:800;color:#fff;margin-bottom:16px;line-height:1.3;">吏湲? ?뱀떊???ъ젙??br/>?쒖옉?섏꽭??/h2>
        <p style="font-size:15px;color:rgba(255,255,255,0.6);margin-bottom:40px;line-height:1.8;">?좎깶???곕땲?ㅺ? ?뱀떊留뚯쓽 留욎땄 ?곕땲???ы뻾???④퍡 ?ㅺ퀎?⑸땲??</p>
        <button onclick="openContactPage()" style="display:inline-block;background:#fff;color:#1a2e2a;font-size:14px;font-weight:700;padding:15px 44px;border-radius:30px;border:none;cursor:pointer;letter-spacing:.04em;font-family:'Noto Sans KR',sans-serif;">臾몄쓽?섍린 ??/button>
      </div>
    </section>`;

  showSubPage(sec1 + sec2 + sec3 + sec4 + sec5);
}

// =========================================
// ?꾨줈洹몃옩 ?곗씠??(?ㅺ뎅??
// =========================================
const programData = {
  tour: {
    ko: {
      title: '遺???먮쭅 ?ъ뼱',
      duration: '1諛?2??,
      price: '臾몄쓽',
      maxPeople: '理쒕? 10紐?,
      description: '?댁슫?, 愿묒븞由? ?쒖쥌?瑜?以묒떖?쇰줈 ??遺?곗쓽 ????먮쭅 ?ㅽ뙚???먮갑?⑸땲?? 諛붾떎? ?먯뿰???댁슦?ъ쭊 ?먮쭅 ?ы뻾?쇰줈 ?쇱긽???쇰줈瑜??살뼱?쒕┰?덈떎.',
      spots: ['?댁슫? ?댁닔?뺤옣', '愿묒븞?援??쇨꼍', '?쒖쥌? ?먯뿰怨듭썝', '?숇갚??],
      courses: ['?ㅼ쟾: ?댁슫? ?곗콉 諛??댁닔??, '?먯떖: ?댁슫? ?쒖옣 ?댁궛臾?, '?ㅽ썑: 愿묒븞由?移댄럹 ?먮갑', '??? 愿묒븞?援??쇨꼍 媛먯긽', '?댄듌?? ?쒖쥌? ?몃옒??],
      tip: '二쇰쭚怨??깆닔湲곗뿉???댁슫?媛 留ㅼ슦 ?쇱옟?⑸땲?? ?됱씪 諛⑸Ц??異붿쿇?쒕┰?덈떎.',
      links: [{ label: '?댁슫? 愿愿??뺣낫', url: 'https://www.haeundae.go.kr' }],
      source: '遺?곌?愿묎났??,
    },
    en: {
      title: 'Busan Healing Tour',
      duration: '1 Night 2 Days',
      price: 'Inquire',
      maxPeople: 'Max 10 people',
      description: 'Explore Busan\'s iconic healing spots centered around Haeundae, Gwangalli, and Taejongdae. Wash away daily fatigue with this healing journey where the sea and nature harmonize.',
      spots: ['Haeundae Beach', 'Gwangandaegyo Bridge Night View', 'Taejongdae Natural Park', 'Dongbaekseom Island'],
      courses: ['Morning: Haeundae walk & swimming', 'Lunch: Haeundae Market seafood', 'Afternoon: Gwangalli caf챕 tour', 'Evening: Gwangandaegyo night view', 'Day 2: Taejongdae trekking'],
      tip: 'Haeundae can be very crowded on weekends and peak season. Weekday visits are recommended.',
      links: [{ label: 'Haeundae Tourist Info', url: 'https://www.haeundae.go.kr' }],
      source: 'Busan Tourism Organization',
    },
    zh: {
      title: '?쒎굇?쀦꼫阿뗦뾽',
      duration: '1??鸚?,
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?0雅?,
      description: '餓ζ돈雅묈룿?곩뮈若됮뇤?곩ㄺ若쀥룿訝뷰릎恙껓펽????쒎굇餓ｈ〃?㎫쉪?쀦꼫?쒎쑑?귛쑉役룡큾訝롨눎?뜸벡?띸쉪?낂붶릎竊뚧킋?삥뿥躍며뼯?ャ?,
      spots: ['役룝틧?경돈麗닸뎬??, '亮욕츎鸚㎪‥鸚쒏솺', '鸚ゅ츞?계눎?뜹뀶??, '?ф윆略?],
      courses: ['訝듿뜄竊싨돈雅묈룿轢ユ?訝롦만力?, '?덆쨶竊싨돈雅묈룿躍귛쑛役룬쿇', '訝뗥뜄竊싧뮈若됮뇤?뽩븸佯쀦렋溫?, '?띷솞竊싧뮈若됧ㄷ旅ε쩂??, '寧т틠鸚⑼폏鸚ゅ츞?겼풎閭?],
      tip: '?ⓩ쑌?뚧뿺耶ｆ돈雅묈룿?욃만?ζ뙟竊뚦뻠溫?뭄?ε뎺孃??,
      links: [{ label: '役룝틧?경뾽歷멧에??, url: 'https://www.haeundae.go.kr' }],
      source: '?쒎굇?끾만?хㅎ',
    },
  },

  culture: {
    ko: {
      title: '臾명솕 泥댄뿕 ?ы뻾',
      duration: '?뱀씪移섍린',
      price: '臾몄쓽',
      maxPeople: '理쒕? 15紐?,
      description: '遺?곗쓽 ?꾪넻 臾명솕? ?꾨? ?덉닠???④퍡 寃쏀뿕?섎뒗 ?밸퀎??臾명솕 ?ы뻾?낅땲?? 吏???덉닠媛?ㅺ낵??留뚮궓怨??꾪넻 怨듭삁 泥댄뿕???ы븿?⑸땲??',
      spots: ['遺?곗떆由쎈??좉?', '遺?곕Ц?뷀쉶愿', '誘쇱＜怨듭썝', '蹂댁닔??梨낅갑怨⑤ぉ'],
      courses: ['?ㅼ쟾: 遺?곗떆由쎈??좉? 愿??, '?먯떖: ?⑦룷??嫄곕━ ?뚯떇', '?ㅽ썑: 蹂댁닔??梨낅갑怨⑤ぉ ?먮갑', '?ㅽ썑 ??쾶: 誘쇱＜怨듭썝 諛⑸Ц'],
      tip: '遺?곗떆由쎈??좉?? 留ㅼ＜ ?붿슂???닿??낅땲?? 諛⑸Ц ???뺤씤?섏꽭??',
      links: [{ label: '遺?곗떆由쎈??좉?', url: 'https://www.busan.go.kr/museum' }],
      source: '遺?곕Ц?붿옱??,
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
      title: '?섇퇌?뉐뙑?묋㎗瑥닸만',
      duration: '壤볠뿥孃瓦?,
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?5雅?,
      description: '訝롣툜訝싪㎗瑥닷몮訝?뚳펽曆긷벧鵝볣챿?쒎굇鴉좂퍨?뉐뙑訝롥퐪餓ｈ돷??쉪?밧닽?뉐뙑阿뗦뾽?귛똿?ヤ툗壤볟쑑?뷸쑐若띄쉪雅ㅶ탛?듾폖瀯잌램?뷰퐪謠뚣?,
      spots: ['?쒎굇躍귞쳦獰롦쑐腰?, '?쒎굇?뉐뙑鴉싮쫮', '麗묇말?у쎃', '若앮객域욂묘烏?],
      courses: ['訝듿뜄竊싮뇸掠긷툊塋뗧풆??쫮?귟쭆', '?덆쨶竊싧뜔役?킒烏쀥ㅄ獰롩짘', '訝뗥뜄竊싧츧麗닸킒阿?죿???', '?띷솞竊싨컩訝삣뀶??뢿鰲?],
      tip: '?쒎굇躍귞쳦獰롦쑐腰녷캀?ⓧ?鴉묌쫮竊뚩??먨뎺簾????,
      links: [{ label: '?쒎굇躍귞쳦獰롦쑐腰?, url: 'https://www.busan.go.kr/museum' }],
      source: '?쒎굇?뉐뙑兀℡썴',
    },
  },

  art: {
    ko: {
      title: '媛먯쿇 ?꾪듃 ?ъ뼱',
      duration: '諛섎굹??,
      price: '臾몄쓽',
      maxPeople: '理쒕? 12紐?,
      description: '遺?곗쓽 ?덉닠 留덉쓣 媛먯쿇臾명솕留덉쓣?먯꽌 吏???덉닠媛?ㅺ낵 ?④퍡?섎뒗 ?밸퀎???꾪듃 ?ъ뼱?낅땲?? ?뚮줉?щ줉??怨⑤ぉ??嫄몄쑝硫??덉닠 ?묓뭹??媛먯긽?⑸땲??',
      spots: ['媛먯쿇臾명솕留덉쓣', '?대┛?뺤옄 議고삎臾?, '臾쇨퀬湲?怨꾨떒 踰쏀솕', '留덉쓣 媛ㅻ윭由?],
      courses: ['?ㅼ쟾: 媛먯쿇臾명솕留덉쓣 ?덈궡 ?ъ뼱', '以묎컙: 怨⑤ぉ ?덉닠 ?묓뭹 媛먯긽', '留덉쓣 移댄럹?먯꽌 ?댁떇', '?ㅽ썑: 吏???덉닠媛 ?묒뾽??諛⑸Ц'],
      tip: '媛먯쿇臾명솕留덉쓣? 寃쎌궗媛 ?덉뼱 ?명븳 ?좊컻??李⑹슜?섏꽭?? ?ㅼ쟾 諛⑸Ц????遺먮퉽?덈떎.',
      links: [{ label: '媛먯쿇臾명솕留덉쓣', url: 'http://www.gamcheon.or.kr' }],
      source: '媛먯쿇臾명솕留덉쓣 二쇰??묒쓽??,
    },
    en: {
      title: 'Gamcheon Art Tour',
      duration: 'Half Day',
      price: 'Inquire',
      maxPeople: 'Max 12 people',
      description: 'A special art tour with local artists in Gamcheon Culture Village, Busan\'s vibrant artistic neighborhood. Stroll through colorful alleys while appreciating artworks.',
      spots: ['Gamcheon Culture Village', 'Little Prince Statue', 'Fish Stairway Mural', 'Village Gallery'],
      courses: ['Morning: Guided Gamcheon tour', 'Mid-tour: Alley artwork viewing', 'Break at village caf챕', 'Afternoon: Local artist studio visit'],
      tip: 'Gamcheon Culture Village has slopes ??wear comfortable shoes. Morning visits are less crowded.',
      links: [{ label: 'Gamcheon Culture Village', url: 'http://www.gamcheon.or.kr' }],
      source: 'Gamcheon Culture Village Residents Council',
    },
    zh: {
      title: '?섇퇌?뷸쑐阿뗦뾽',
      duration: '?듿ㄹ',
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?2雅?,
      description: '?③뇸掠김돷??쓳?섇퇌?뉐뙑?묕펽訝롥퐪?계돷????긷릪鵝볣챿?밧닽?꾥돷??퉳?끹귝섐閭δ틪壤⒵뼇?볡쉪弱뤷렁竊뚧В壅뤷릢鸚꾥돷??퐳?곥?,
      spots: ['?섇퇌?뉐뙑??, '弱뤹럨耶먬썢櫻?, '浴쇔숱?뜻¿鶯곭뵽', '?묈틖?삣퍓'],
      courses: ['訝듿뜄竊싩뵖藥앮뻼?뽪쓳野쇠쭏歷?, '?붶릎竊싧렁凉꾥돷??퐳?곫В壅?, '?묈틖?뽩븸?끺폂??, '訝뗥뜄竊싧퐪?계돷???藥δ퐳若ㅵ뢿鰲?],
      tip: '?섇퇌?뉐뙑?묈쑑?욘쐣?∽펽瑥루㈎??믧귞쉪?뗥춴?귚툓?덂뢿鰲귚볶渦껃컩??,
      links: [{ label: '?섇퇌?뉐뙑??, url: 'http://www.gamcheon.or.kr' }],
      source: '?섇퇌?뉐뙑?묈콉麗묈뜌鴉?,
    },
  },

  temple: {
    ko: {
      title: '?ъ같 紐낆긽 泥댄뿕',
      duration: '?뱀씪移섍린',
      price: '臾몄쓽',
      maxPeople: '理쒕? 8紐?,
      description: '踰붿뼱?ъ? ?대룞?⑷턿?ъ뿉??吏꾪뻾?섎뒗 源딆씠 ?덈뒗 紐낆긽怨??ъ같 泥댄뿕 ?꾨줈洹몃옩?낅땲?? ?꾩떖 ??怨좎슂???ъ같?먯꽌 留덉쓬???됲솕瑜?李얠븘蹂댁꽭??',
      spots: ['踰붿뼱??, '?대룞?⑷턿??, '湲덉젙???곗콉濡?, '?ъ같 ?뺤썝'],
      courses: ['?대Ⅸ ?꾩묠: 踰붿뼱???덈꼍 ?덈텋 李멸?', '?ㅼ쟾: ?ъ같 紐낆긽 泥댄뿕', '?먯떖: ?ъ같 梨꾩떇 ?앹궗', '?ㅽ썑: ?대룞?⑷턿??諛⑸Ц', '?댁쭏?? 湲덉젙???쇰ぐ 媛먯긽'],
      tip: '?덈꼍 ?덈텋? ?ㅼ쟾 4?쒖뿉 ?쒖옉?⑸땲?? 議곗슜??蹂듭옣??沅뚯옣?⑸땲??',
      links: [{ label: '踰붿뼱??怨듭떇 ?ъ씠??, url: 'http://www.beomeosa.co.kr' }],
      source: '遺?곕텋援먮Ц?붿썝',
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
      title: '野븅솫獵끺엶鵝볣챿',
      duration: '壤볠뿥孃瓦?,
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?雅?,
      description: '?ⓩ℉浴쇔?訝롦돈訝쒒풖若ュ?瓦쏂죱曆긷벧獵끺엶訝롥??㏘퐪謠뚪」??귛쑉?밧툊訝?쉪?숃갊野븅솫竊뚦??얍냵恙껆쉪亮녜쓾??,
      spots: ['歟들굴野?, '役룝툥榕쇿?野?, '?묇틫掠길???, '野븅솫佯?쎃'],
      courses: ['歷끾솳竊싨℉浴쇔??③뮓鹽쇌퐲', '訝듿뜄竊싧??®쫭岳?퐪謠?, '?덆쨶竊싧??®킔繇?, '訝뗥뜄竊싨돈訝쒒풖若ュ??귟쭆', '容꾣삈竊싮뇫雅뺝굇?θ맼'],
      tip: '?③뮓鹽쇌퐲雅롥뇤???뜹?冶뗰펽瑥루?榮좈썒?띹즳??,
      links: [{ label: '歟들굴野뷴츟?밭퐨塋?, url: 'http://www.beomeosa.co.kr' }],
      source: '?쒎굇鵝쎿븰?뉐뙑??,
    },
  },

  market: {
    ko: {
      title: '?쒖옣 誘몄떇 ?ъ뼱',
      duration: '諛섎굹??,
      price: '臾몄쓽',
      maxPeople: '理쒕? 12紐?,
      description: '遺?곗쓽 ?꾪넻 ?쒖옣怨??쇱떆?μ쓣 ?먮갑?섎ŉ ?꾩? ?뚯떇 臾명솕瑜?泥댄뿕?⑸땲?? ?좎꽑???댁궛臾쇰???湲멸굅由??뚯떇源뚯? 遺?곗쓽 留쏆쓣 留뚮겱?섏꽭??',
      spots: ['遺???먭컝移??쒖옣', '援?젣?쒖옣', '遺?됯묀?듭떆??, '?⑦룷??癒뱀옄怨⑤ぉ'],
      courses: ['?ㅼ쟾: ?먭컝移??쒖옣 ?댁궛臾??ъ뼱', '?먯떖: 援?젣?쒖옣 留쏆쭛 ?먮갑', '?ㅽ썑: 遺?됯묀?듭떆???쇳븨', '??? ?⑦룷???쇱떆??],
      tip: '?먭컝移??쒖옣? ?ㅼ쟾 ?쇱컢 諛⑸Ц?섎㈃ 媛???좎꽑???댁궛臾쇱쓣 留뚮궇 ???덉뒿?덈떎.',
      links: [{ label: '?먭컝移??쒖옣', url: 'https://www.jagalchi.kr' }],
      source: '遺?곌킅??떆 愿愿묒쭊?κ낵',
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
      title: '躍귛쑛獰롩짘歷?,
      duration: '?듿ㄹ',
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?2雅?,
      description: '????쒎굇鴉좂퍨躍귛쑛訝롥쩂躍귨펽鵝볣챿壤볟쑑耀?짘?뉐뙑?귚퍗?곈쿇役룬쿇?계죿鸚닷컦?껓펽弱썰벴?쒎굇?꾤풆?녈?,
      spots: ['?쒎굇??삇?뜹툊??, '?썽솀躍귛쑛', '野뚦뭄營먨ㅄ躍귛쑛', '?쀦덱域욅풆繇잒죿'],
      courses: ['訝듿뜄竊싨쑎?롥끀躍귛쑛役룬쿇歷?, '?덆쨶竊싧쎖?끻툊?븀풆繇잍렋溫?, '訝뗥뜄竊싧칽亮녕퐧鸚닷툊?븃눌??, '?띷솞竊싧뜔役?킒鸚쒎툊'],
      tip: '歷끾뿩?띶???삇?뜹툊?뷴룾餓δ물?경??곈쿇?꾣돈縟쒌?,
      links: [{ label: '??삇?뜹툊??, url: 'https://www.jagalchi.kr' }],
      source: '?쒎굇亮욕윜躍귝뾽歷멩뙬?당쭛',
    },
  },

  history: {
    ko: {
      title: '遺???ㅽ겕 ?ъ뼱由ъ쬁',
      duration: '?뱀씪移섍린',
      price: '臾몄쓽',
      maxPeople: '理쒕? 15紐?,
      description: '?쒓뎅?꾩웳???꾪뵒??媛꾩쭅??遺?곗쓽 ??궗 ?좎쟻???먮갑?섎ŉ ?됲솕???뚯쨷?⑥쓣 諛곗썎?덈떎. ?쇰?誘쇱쓽 ?띔낵 ??궗瑜??댄빐?섎뒗 ?밸퀎???ы뻾?낅땲??',
      spots: ['?좎뿏湲곕뀗怨듭썝', '?꾩떆?섎룄湲곕뀗愿', '遺?곌렐?꾨???궗愿', '?쇰?誘??뺤갑珥??붿쟻吏', '援?┰?쇱젣媛뺤젣?숈썝??궗愿', '遺?고빆 ??遺??],
      courses: [
        '?ㅼ쟾: ?좎뿏湲곕뀗怨듭썝 李몃같 諛?異붾え',
        '?ㅼ쟾 以묐컲: ?꾩떆?섎룄湲곕뀗愿 愿??(1쨌4 ?꾪눜 ?쒖젅??遺???꾩떆 ?섎룄)',
        '?먯떖: 遺?곗쭊援??꾪넻 ?앸떦',
        '?ㅽ썑: 遺?곌렐?꾨???궗愿 (?쇱젣媛뺤젏湲??꾨?)',
        '?ㅽ썑 以묐컲: 援?┰?쇱젣媛뺤젣?숈썝??궗愿',
        '??? ?ㅽ썑: 遺?고빆 ??遺????궗 ?먮갑',
      ],
      tip: '?좎뿏湲곕뀗怨듭썝? 臾대즺 ?낆옣?대ŉ 寃쎄굔??蹂듭옣??沅뚯옣?⑸땲?? ?쇰? ?꾩떆愿? ?붿슂???닿??낅땲??',
      links: [
        { label: '?좎뿏湲곕뀗怨듭썝', url: 'https://www.unmck.or.kr' },
        { label: '援?┰?쇱젣媛뺤젣?숈썝??궗愿', url: 'https://www.fomo.or.kr' },
      ],
      source: '遺?곌킅??떆 ??궗臾명솕怨?,
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
      title: '?쒎굇容묋돯?끾만',
      duration: '壤볠뿥孃瓦?,
      price: '瑥룟뮜瑥?,
      maxPeople: '?鸚?5雅?,
      description: '壅계??욤슬?⒴쎖?섆틝鴉ㅷ뿘?꾦뇸掠긷럣?꿴걮?竊뚦?阿졾뭽亮녕쉪?띹뉘?귟퓳???餘든릤鰲ｆ닔?띌슻麗묊뵟域삡툗?녶뤁?꾤돶?ユ뾽葉뗣?,
      spots: ['?붷릦?썹벳恙드뀶??, '訝닸뿶腰뽭꺗瀛ゅ영腰?, '?쒎굇瓦묊렟餓ｅ럣?꿴쫮', '?섆틝?얏컩若싧콉?쀥?', '?썹쳦?ε툦凉뷴댍?ⓨ몮?녶뤁腰?, '?쒎굇歷?К訝?곩ㅄ'],
      courses: [
        '訝듿뜄竊싪걫?덂쎖瀛ゅ영?у쎃?귝떆訝롦궪恙?,
        '訝듿뜄訝??竊싦릿?띌쫿?썹벳恙들쫮?귟쭆竊덆뇸掠긴퐳訝뷸닔?뜸릿?띌쫿?쏙펹',
        '?덆쨶竊싮뇸掠깁븛?뷰폖瀯잓쨶??,
        '訝뗥뜄竊싮뇸掠김퓩?겻빰?녶뤁腰놅펷?ζ뜮?뜸빰?녕렟餓ｏ펹',
        '訝뗥뜄訝??竊싧쎖塋뗦뿥躍앭성?뜹뒯?섇럣?꿴쫮',
        '?띷솞竊싮뇸掠길릭寧т??곩ㅄ?녶뤁???',
      ],
      tip: '?붷릦?썹벳恙드뀶??뀓兀밧뀯?븝펽兩븃??佯꾦뇥?띹즳?귡깿?녶콝腰녶뫅訝鴉묌쫮??,
      links: [
        { label: '?붷릦?썹벳恙드뀶??, url: 'https://www.unmck.or.kr' },
        { label: '?썹쳦?ε툦凉뷴댍?ⓨ몮?녶뤁腰?, url: 'https://www.fomo.or.kr' },
      ],
      source: '?쒎굇亮욕윜躍귛럣?꿩뻼?뽫쭛',
    },
  },
};

// =========================================
// 紐⑤떖 (????
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
  <title>${d.title} ??Sunshine Wellness</title>
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
      <span>??${d.duration}</span>
      <span>?뮥 ${d.price}</span>
      <span>?뫁 ${d.maxPeople}</span>
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
// 移대뱶 ?대┃ ?대깽??// =========================================
document.querySelectorAll('.card-info-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openModal(btn.dataset.program);
  });
});

// =========================================
// ?곷떞 ?좎껌 ??(Formspree)
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
// ?ㅻТ???ㅽ겕濡?(?ㅻ퉬 留곹겕)
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
// 援먯감 愿李곗옄 (移대뱶 ?섏씠?쒖씤)
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
