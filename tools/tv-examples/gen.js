const fs=require('fs');const C=require('./content.js');const E=Object.fromEntries(require('./econ.json').map(x=>[x.id,x]));
const man=n=>Math.round(n/1e4).toLocaleString('ko-KR');
const sgn=n=>(n<0?'−':'')+man(Math.abs(n));
const order=['coffee','sigongan','busk','hanji','adco','gachiga','from','gbzip','localcasse'];
const months=['5월','6월','7월','8월','9월','10월','11월'];
const sec=(id,no,title,body)=>`<section class="fs" id="${id}"><h3><span class="no">양식 ${no}</span>${title}</h3>${body}</section>`;
let nav='',main='';
order.forEach((k,i)=>{
  const c=C[k],e=E[k].c,anc='co-'+c.file,nn=String(i+1).padStart(2,'0');
  nav+=`<a href="#${anc}"><b>${nn}</b>${c.name}<small>${c.student}</small></a>`;
  const g=c.budget.reduce((a,r)=>a+r[2],0),s=c.budget.reduce((a,r)=>a+r[3],0);
  const t1=`<table><thead><tr><th>비목</th><th>내용</th><th>정부지원금</th><th>자부담</th><th>산출 근거</th></tr></thead><tbody>${c.budget.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td class="n">${r[2].toLocaleString()}</td><td class="n">${r[3].toLocaleString()}</td><td>${r[4]}</td></tr>`).join('')}<tr class="sum"><td colspan="2">합계(만 원)</td><td class="n">${g.toLocaleString()}</td><td class="n">${s.toLocaleString()}</td><td>정부지원금 7,000만 원 한도 안</td></tr></tbody></table>`;
  const t2=`<table><thead><tr><th>단계</th><th>시기</th><th>할 일</th><th>산출물(증빙)</th></tr></thead><tbody>${c.s341.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('')}</tbody></table>`;
  const t3=`<div class="months">${c.s342.map((t,j)=>`<div><b>${months[j]}</b>${t}</div>`).join('')}</div>`;
  const rev=[.6,1,1.3].map(f=>man(e.rev*f));
  const t4=`<table><thead><tr><th>구분</th><th>2027</th><th>2028</th><th>2029</th></tr></thead><tbody><tr><td>매출(만 원, 가정)</td><td class="n">${rev[0]}</td><td class="n">${rev[1]}</td><td class="n">${rev[2]}</td></tr><tr><td>고용(명)</td><td class="n">1</td><td class="n">2</td><td class="n">3</td></tr><tr><td>투자 유치</td><td>—</td><td>지역 엔젤 · 관광 펀드 문의</td><td>시드 투자 검토</td></tr></tbody></table><p class="calc">기준값(BM 실습실 기본 가정 · 1년): 매출 ${man(e.rev)}만 · 직접원가 ${man(e.direct)}만 · 고정비 ${man(e.fixed)}만 → 영업손익 <b class="${e.profit<0?'neg':'pos'}">${sgn(e.profit)}만 원</b> · 수요 −20%면 ${sgn(E[k].lo)}만 · +20%면 ${sgn(E[k].hi)}만. 표의 2027년은 기준값의 60%, 2029년은 130%로 둔 예시입니다.</p>`;
  const t5=`<table><thead><tr><th>KPI</th><th>협약기간 목표</th><th>측정 방법</th></tr></thead><tbody>${c.kpi.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table>`;
  main+=`<article class="co" id="${anc}"><header class="co-h"><span class="co-n">${nn}</span><div><h2>${c.name}<small>${c.student} · ${c.region}</small></h2><p>${c.oneLine}</p></div><a class="co-go" href="${c.file}.html" target="_blank" rel="noopener">내 작성실 열기 ↗</a></header>
${sec(anc+'-33','3-3','자금운용계획 [표1]',`<p>${c.b33}</p>${t1}`)}
${sec(anc+'-341','3-4-1','전체 사업추진 일정 [표2]',t2)}
${sec(anc+'-342','3-4-2','협약기간 내 일정 [표3] · 2026.5~11',t3)}
${sec(anc+'-35','3-5','성장전략 · Scale-up [표4]',`<p>${c.s35}</p>${t4}`)}
${sec(anc+'-4','4-1 · 4-2','관광시장 트렌드 · 관광산업 연관성',`<p><b>4-1</b> ${c.s41}</p><p><b>4-2</b> ${c.s42}</p>`)}
${sec(anc+'-5','5-1 ~ 5-3','팀 빌딩 [표5]',`<p><b>5-1 창업자 전문성</b> ${c.s51}</p><p><b>5-2 팀 신뢰</b> ${c.s52}</p><p><b>5-3 인력 · 조직</b> ${c.s53}</p>`)}
${sec(anc+'-61','6-1','KPI 달성 현실성 · 참여 적극성',t5)}
<p class="back"><a href="#top">↑ 기업 목록</a></p></article>`;
});
const css=fs.readFileSync(__dirname+'/style.css','utf8');
const html=`<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>양식 3-3~6-1 작성 예시본 · 9개 기업</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>${css}</style></head><body><div class="wrap" id="top">
<header class="top"><div class="eb">TOURISM VENTURE · 양식 3-3 ~ 6-1 · 작성 예시본</div><h1>9개 기업 사업계획서 나머지 칸 — 이렇게 채워 볼 수 있다</h1>
<p>각 기업의 <b>2단 첨삭(교수자 코멘트)</b>, 칸별 작성 지시, <b>BM 실습실 수익 시뮬레이터</b> 기본값을 바탕으로 쓴 예시입니다. 내 작성실을 채우기 전에 「무엇을 · 어느 깊이로」 쓰는지 보는 용도입니다.</p>
<div class="warn"><b>교육용 예시입니다.</b> 금액 · 인원 · 전환율 · 일정은 <b>검증된 실적이 아니라 가정값</b>입니다. 그대로 옮겨 제출하지 말고, 인터뷰 · 견적 · 시범 운영으로 확인한 <b>내 숫자</b>로 바꾸십시오. 정부지원금 한도 · 비목 규정은 해당 연도 공고문을 다시 확인하십시오.</div></header>
<nav class="cos" aria-label="기업 바로가기">${nav}</nav>
${main}
<p class="foot">자료: 제18회 예비관광벤처부문 사업계획서 양식 번호 · 9개 기업 2단 첨삭 · learn/bm-sim 기본 가정값(1년). 표의 금액 단위는 만 원.</p>
</div></body></html>
`;
fs.writeFileSync(process.argv[2],html);console.log(html.length);
