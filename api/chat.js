// =========================================================
// Sunshine Wellness — FAQ Chatbot (무료, API 키 불필요)
// =========================================================
// 키워드 매칭으로 사전 정의된 답변을 반환합니다.
// 비용: $0 (서버리스 함수 실행 시간만 소모, Vercel Hobby 무료)
// =========================================================

const FAQ_DB = {
  ko: [
    { keywords: ['프로그램', '투어', '여행', '코스'], answer: '선샤인 웰니스는 9가지 프로그램을 운영합니다:\n\n1. 부산 근교 투어 (기장, 해운대, 영도)\n2. 감천문화마을 해설 투어\n3. 사찰 투어 (범어사, 해동용궁사)\n4. 부산 예술 여행\n5. 시장 & 떡볶이 미식 투어\n6. 부산 다크 투어리즘\n7. 을숙도 생태 투어\n8. 부산 축제 투어\n9. 야경·야식 투어\n\n맞춤 일정을 원하시면 문의하기를 통해 연락주세요!' },
    { keywords: ['가격', '요금', '비용', '얼마'], answer: '선샤인 웰니스는 100% 맞춤형 투어라 인원·일정에 따라 요금이 달라집니다.\n\n문의하기를 통해 원하시는 프로그램을 알려주시면 맞춤 견적을 안내해 드립니다.\n\n📞 010-5759-5485\n✉ healthylee7@gmail.com' },
    { keywords: ['예약', '신청', '문의'], answer: '예약 및 문의는 아래로 연락해주세요:\n\n📞 전화: 010-5759-5485\n✉ 이메일: healthylee7@gmail.com\n💛 카카오톡: https://open.kakao.com/o/sl2k01wi\n\n홈페이지 하단 문의 양식으로도 접수 가능합니다!' },
    { keywords: ['운영', '시간', '영업'], answer: '운영 시간:\n\n평일 09:00 – 18:00\n점심 12:00 – 13:00\n주말 · 공휴일 휴무\n\n📍 모임 장소: 부산광역시 부산진구 서면 쥬디스태화 백화점 앞' },
    { keywords: ['위치', '주소', '어디', '찾아가는'], answer: '📍 부산광역시 부산진구\n서면 쥬디스태화 백화점 앞\n\n카카오맵에서 "쥬디스태화"를 검색해보세요!' },
    { keywords: ['사찰', '절', '명상', '범어사', '해동용궁사'], answer: '사찰 투어에서는 범어사와 해동용궁사를 방문합니다.\n\n바다 위에 세워진 해동용궁사는 한국에서 유일한 해안 사찰로, 특히 일출이 아름답습니다. 범어사에서는 숲길 산책과 템플스테이 체험이 가능합니다.\n\n명상과 사찰 문화를 경험하고 싶으시면 이 프로그램을 추천합니다!' },
    { keywords: ['감천', '문화마을', '감천문화마을'], answer: '감천문화마을 해설 투어는 전문 해설사와 함께 합니다.\n\n단순히 예쁜 골목을 보는 것이 아니라, 마을의 역사와 예술, 골목 속 이야기를 들을 수 있습니다. 벽화 포인트와 전망대도 방문합니다.\n\n부산에서 가장 인기 있는 프로그램입니다!' },
    { keywords: ['시장', '떡볶이', '맛집', '먹거리', '미식'], answer: '시장 & 떡볶이 미식 투어:\n\n부전시장 → 이가네떡볶이 → 다리집 본점 → 도날드\n\n부산 전통시장과 골목·해변을 따라가며 지역별 떡볶이의 맛과 이야기를 탐방합니다. 현지에서만 맛볼 수 있는 특별한 미식 경험입니다!' },
    { keywords: ['야경', '밤', '야식'], answer: '부산의 밤 — 야경·야식 투어:\n\n황령산 전망대(부산 야경 파노라마) → 서면 포차 골목(야식) → 광안대교(야경)\n\n저녁 반나절(약 4시간) 코스입니다. 부산의 밤은 낮보다 더 아름답습니다!' },
    { keywords: ['축제', 'BIFF', '불꽃'], answer: '부산 축제 투어:\n\n🎆 송도 불꽃 축제 (10월)\n🎬 부산국제영화제 BIFF (10월)\n🎆 광안리 불꽃 축제 (11월)\n\n현지 전문가와 함께 축제를 깊이 즐기는 특별 투어입니다.旺季에는 숙소 조기 예약을 권장합니다!' },
    { keywords: ['할인', '쿠폰'], answer: '웰니스 여행 특별 할인쿠폰 10%를 발행 중입니다!\n\n쿠폰 코드: SW-2026\n유효기간: 2026.12.31\n\n홈페이지 하단 "할인쿠폰" 버튼을 클릭하면 저장할 수 있습니다. 1인 1회 사용 가능하며 타 할인과 중복은 불가합니다.' },
    { keywords: ['입금', '계좌', '결제'], answer: '입금 안내:\n\n🏦 은행: 우리은행\n👤 예금주: 이유안\n💳 계좌: 1002-033-556-363\n\n⚠️ 직원 개인 명의 계좌로는 입금을 받지 않습니다. 개인 계좌로 입금 요청을 받으면 고객센터(010-5759-5485)로 연락해주세요.' },
    { keywords: ['카카오', '채널', '친구'], answer: '카카오톡 채널에서 실시간 상담 가능합니다!\n\n💛 https://open.kakao.com/o/sl2k01wi\n\n친구추가 하시면 빠른 답변을 도와드립니다.' },
    { keywords: ['안녕', '하이', '헬로', 'hi', 'hello'], answer: '안녕하세요! 선샤인 웰니스 AI 상담입니다 ☀️\n\n부산 여행 프로그램, 예약, 요금 등 무엇이든 물어보세요!' },
  ],
  en: [
    { keywords: ['program', 'tour', 'course'], answer: 'Sunshine Wellness offers 9 programs:\n\n1. Busan Suburb Tour\n2. Gamcheon Village Tour\n3. Temple Tour\n4. Busan Art Journey\n5. Market & Food Tour\n6. Dark Tourism\n7. Eulsukdo Eco Tour\n8. Festival Tour\n9. Night View & Late-Night Bites\n\nContact us for a custom itinerary!' },
    { keywords: ['price', 'cost', 'fee', 'how much'], answer: 'Prices vary based on group size and itinerary since all tours are custom-made.\n\n📞 010-5759-5485\n✉ healthylee7@gmail.com\n\nPlease inquire for a personalized quote!' },
    { keywords: ['booking', 'reservation', 'contact'], answer: 'Contact us:\n\n📞 010-5759-5485\n✉ healthylee7@gmail.com\n💛 KakaoTalk: https://open.kakao.com/o/sl2k01wi\n\nOr use the inquiry form at the bottom of our homepage!' },
    { keywords: ['hours', 'operation'], answer: 'Business Hours:\n\nMon–Fri 09:00 – 18:00\nLunch 12:00 – 13:00\nClosed weekends & holidays\n\n📍 Seomyeon, Busanjin-gu, Busan' },
    { keywords: ['location', 'address', 'where'], answer: '📍 In front of Judith Taewhwa Dept. Store, Seomyeon, Busanjin-gu, Busan\n\nSearch "쥬디스태화" on KakaoMap!' },
    { keywords: ['hello', 'hi', 'hey'], answer: 'Hello! Welcome to Sunshine Wellness AI ☀️\n\nAsk me about Busan tours, programs, prices, or anything!' },
  ],
  zh: [
    { keywords: ['项目', '旅游', '行程'], answer: '阳光健康旅游提供9个项目：\n\n1. 釜山近郊游\n2. 甘川文化村解说\n3. 寺院之旅\n4. 釜山艺术之旅\n5. 市场&美食游\n6. 黑色旅游\n7. 乙淑岛生态游\n8. 节日游\n9. 夜景·宵夜游\n\n请联系我们为您量身定制行程！' },
    { keywords: ['价格', '费用', '多少钱'], answer: '所有旅游均为定制，价格因人数和行程而异。\n\n📞 010-5759-5485\n✉ healthylee7@gmail.com\n\n请咨询获取个性化报价！' },
    { keywords: ['预订', '预约', '联系'], answer: '联系方式：\n\n📞 010-5759-5485\n✉ healthylee7@gmail.com\n💛 卡卡奥: https://open.kakao.com/o/sl2k01wi\n\n或使用网站首页底部的咨询表单！' },
    { keywords: ['你好', '嗨'], answer: '您好！欢迎使用阳光健康旅游AI咨询 ☀️\n\n请随时询问关于釜山旅游、项目、价格等问题！' },
  ],
};

function findAnswer(text, lang) {
  const db = FAQ_DB[lang] || FAQ_DB.ko;
  const lower = text.toLowerCase();
  let best = null;
  let bestScore = 0;

  for (const faq of db) {
    let score = 0;
    for (const kw of faq.keywords) {
      if (lower.includes(kw.toLowerCase())) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  if (best) return best.answer;

  const defaults = {
    ko: '죄송합니다. 해당 질문에 대한 답변을 찾지 못했습니다.\n\n더 자세한 도움이 필요하시면 아래로 연락해주세요:\n📞 010-5759-5485\n✉ healthylee7@gmail.com\n💛 https://open.kakao.com/o/sl2k01wi',
    en: 'Sorry, I couldn\'t find an answer to that question.\n\nFor more help, contact us:\n📞 010-5759-5485\n✉ healthylee7@gmail.com',
    zh: '抱歉，我找不到该问题的答案。\n\n如需更多帮助，请联系我们：\n📞 010-5759-5485\n✉ healthylee7@gmail.com',
  };
  return defaults[lang] || defaults.ko;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch { body = {}; }
    }

    const messages = body.messages || [];
    if (!messages.length) {
      return res.status(400).json({ error: '메시지가 필요합니다.' });
    }

    const lastUserMsg = messages.filter(m => m.role === 'user').pop();
    if (!lastUserMsg) {
      return res.status(400).json({ error: '사용자 메시지가 필요합니다.' });
    }

    const text = lastUserMsg.content || '';
    const lang = detectLang(text);
    const reply = findAnswer(text, lang);

    return res.status(200).json({ reply });
  } catch (e) {
    console.error('Chat API error:', e);
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' });
  }
};

function detectLang(text) {
  if (/[\u4e00-\u9fff]/.test(text)) return 'zh';
  if (/[a-zA-Z]{3,}/.test(text)) return 'en';
  return 'ko';
}
