# -*- coding: utf-8 -*-
"""2026학년도 2학기 관광벤처창업론 — 강의계획서 안 2 (업종축 + 연구용역 + 진로·취업)"""
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUT = r'C:\Users\PC\sunshine-wellness\learn\assets\tourism-venture-syllabus-2026-2-plan2.docx'

FONT = '맑은 고딕'
LINE = '8C8C8C'
HDR = 'E8ECF0'
SUB = 'F5F7F9'
DARK = '1F3864'
RED = 'B02418'
GRAY = '595959'
NEW = '1F6B4A'
C = WD_ALIGN_PARAGRAPH.CENTER
TOP = WD_ALIGN_VERTICAL.TOP
MID = WD_ALIGN_VERTICAL.CENTER

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Cm(21.0), Cm(29.7)
sec.left_margin = sec.right_margin = Cm(1.7)
sec.top_margin = Cm(1.5)
sec.bottom_margin = Cm(1.3)
W = Cm(17.6)

st = doc.styles['Normal']
st.font.name = FONT
st.font.size = Pt(10)
st.element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
st.paragraph_format.space_before = Pt(0)
st.paragraph_format.space_after = Pt(0)
st.paragraph_format.line_spacing = 1.35


def run(p, t, size=10, bold=False, color=None):
    r = p.add_run(t)
    r.font.name = FONT
    r.font.size = Pt(size)
    r.bold = bold
    r._element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
    if color:
        r.font.color.rgb = RGBColor.from_string(color)
    return r


def para(t='', size=10, bold=False, color=None, before=0, after=0, align=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    if align:
        p.alignment = align
    if t:
        run(p, t, size, bold, color)
    return p


def _sh(cell, color):
    e = OxmlElement('w:shd'); e.set(qn('w:fill'), color)
    cell._tc.get_or_add_tcPr().append(e)


def _bd(cell):
    b = OxmlElement('w:tcBorders')
    for s in ('top', 'left', 'bottom', 'right'):
        e = OxmlElement('w:' + s)
        e.set(qn('w:val'), 'single'); e.set(qn('w:sz'), '6'); e.set(qn('w:color'), LINE)
        b.append(e)
    cell._tc.get_or_add_tcPr().append(b)


def fill(cell, text='', size=9.5, bold=False, color=None, align=None,
         valign=MID, bg=None):
    _bd(cell)
    if bg:
        _sh(cell, bg)
    cell.vertical_alignment = valign
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.line_spacing = 1.22
    if align:
        p.alignment = align
    first = True
    for ln in str(text).split('\n'):
        if not first:
            p = cell.add_paragraph()
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.22
            if align:
                p.alignment = align
        first = False
        if ln:
            run(p, ln, size, bold, color)


def table(widths):
    t = doc.add_table(rows=0, cols=len(widths))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    lay = OxmlElement('w:tblLayout'); lay.set(qn('w:type'), 'fixed')
    t._tbl.tblPr.append(lay)
    t._widths = widths
    return t


def row(t, cells, h=None, exact=False):
    r = t.add_row()
    if h:
        trPr = r._tr.get_or_add_trPr()
        e = OxmlElement('w:trHeight')
        e.set(qn('w:val'), str(int(h * 20)))
        e.set(qn('w:hRule'), 'exact' if exact else 'atLeast')
        trPr.append(e)
    for i, spec in enumerate(cells):
        c = r.cells[i]
        c.width = t._widths[i]
        if isinstance(spec, dict):
            d = dict(spec); fill(c, d.pop('text', ''), **d)
        else:
            fill(c, spec)
    return r


def repeat_header(t):
    trPr = t.rows[0]._tr.get_or_add_trPr()
    e = OxmlElement('w:tblHeader'); e.set(qn('w:val'), 'true')
    trPr.append(e)


def spacer(p=6):
    q = doc.add_paragraph()
    q.paragraph_format.space_before = Pt(0)
    q.paragraph_format.space_after = Pt(0)
    run(q, '', p)


def h2(text, num=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(11)
    p.paragraph_format.space_after = Pt(3)
    if num:
        run(p, num + '. ', 11, True, DARK)
    run(p, text, 11, True, DARK)


def page_break():
    p = doc.add_paragraph()
    p.add_run().add_break(WD_BREAK.PAGE)


# ══════════════════════════════════════════════════════════
para('2026학년도 2학기  강의계획서', 18, True, DARK, after=2, align=C)
para('관광벤처창업론', 13, True, '000000', after=1, align=C)
para('안 2 — 업종 축 · 연구용역 창업 · 진로와 취업을 더한 안', 10, True, NEW, after=9, align=C)

h2('교과목 기본정보', 'Ⅰ')
t = table([Cm(2.6), Cm(6.2), Cm(2.6), Cm(6.2)])
for a, b, c, d in [
    ('교과목명', '관광벤처창업론', '학수번호', ''),
    ('이수구분', '', '학점 / 시수', '3학점 / 3시간'),
    ('강의시간', '화요일 5 · 6 · 7교시\n(13:00~13:50 / 14:00~14:50 / 15:00~15:50)', '강의실', '5 · 6교시  사회대 2106호(PC실)\n7교시  사회대 3402호'),
    ('대상 학년', '4학년', '수강 인원', ''),
    ('담당교수', '', '연락처 · 이메일', ''),
    ('상담시간', '', '수업 홈페이지', 'sunshinewellness.co.kr/learn/tourism-venture.html'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': b, 'size': 9.5},
            {'text': c, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': d, 'size': 9.5}], h=19)

h2('교과목 개요', 'Ⅱ')
t = table([W])
row(t, [{'text':
    '창업은 「좋은 아이템을 파는 일」이 아니라 「누군가의 불편을 반복 가능한 방식으로 푸는 일」이다. '
    '관광벤처는 그 불편이 여행의 여정 어딘가에 있는 사업이다.\n'
    '한 학기의 산출물은 리포트가 아니라 「실제로 제출할 수 있는 사업계획서 한 부」이며, '
    '한국관광공사 「관광벤처사업 예비부문」의 공식 양식과 평가 배점표를 그대로 사용한다. '
    '수강생은 사업자등록증이 없는 예비창업자로서 지원자격을 충족하고 만 39세 이하 청년 가점 대상이므로, '
    '본 학기 산출물을 2027년 4월 공고 예정인 차기 회차에 실제로 제출할 수 있다.\n'
    '안 2는 안 1에 세 가지를 더한다. ① 여행사 · 외식 · 농어촌 자원 등 업종별 창업 실무(교재 2권 축), '
    '② 정책연구용역 수주와 분석 보고서 작성이라는 또 하나의 창업 경로, '
    '③ 창업하지 않는 학생을 위한 진로 · 취업 지도 주차. '
    '기말 발표는 창업 IR과 취업 모의면접 두 갈래로 나뉘어, 학생이 자기 진로에 맞는 트랙을 고른다.',
    'size': 9.5, 'valign': TOP}], h=92)

h2('학습목표 및 기대 학습성과', 'Ⅲ')
t = table([Cm(1.1), Cm(16.5)])
for n, x in [
    ('1', '관광벤처의 개념 · 유형과 공모의 모집유형 넷에 자신의 아이템을 근거를 들어 배치할 수 있다.'),
    ('2', '관광 현장의 문제를 대상 · 원인 · 배경으로 정의하고, 공개 통계와 정책 문서로 뒷받침할 수 있다.'),
    ('3', '여행사 · 외식 · 숙박 · 농어촌 자원 · 지역 협업 등 업종별 창업의 요건과 수익 구조를 비교할 수 있다.'),
    ('4', '비즈니스 모델을 도식으로 표현하고 수익 구조와 잠재 리스크 및 대응방안을 서술할 수 있다.'),
    ('5', '자금 집행계획 · 추진 일정 · 성장 계획을 산출근거와 계산식을 갖추어 작성할 수 있다.'),
    ('6', '정책연구용역의 구조를 이해하고, 과업 이해에서 실행안에 이르는 분석 보고서를 작성할 수 있다.'),
    ('7', '관광 분야 일자리의 지형을 파악하고, 특정 기업을 조사해 자신의 역량과 연결한 제안서를 쓸 수 있다.'),
    ('8', '생성형 AI를 조사 · 검토 도구로 활용하되 사용을 기록하고 사실과 출처를 스스로 검증할 수 있다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': x, 'size': 9.5, 'valign': TOP}], h=20)

page_break()

h2('교재 및 참고자료', 'Ⅳ')
t = table([Cm(2.6), Cm(15.0)])
for a, b in [
    ('주교재 ①', '안덕수 · 이난희, 「관광벤처창업론」, 백산출판사, 2021. — 이론 8장 + 실무와 정보 11장'),
    ('주교재 ②', '허진 외 4인, 「관광창업론 — 도서+워크북」, 한국방송통신대학교출판문화원, 2022.\n'
              '  여행사(3~5장) · 외식(6~8장) · 프랜차이즈(9장) · 스마트관광(10~11장) · 펜션(12~13장) · 관광두레(14~15장)'),
    ('공식 서식', '한국관광공사 「관광벤처사업 예비부문」 모집공고문 및 사업계획서 양식 — 투어라즈(touraz.kr)'),
    ('작업 서식', '「예비관광벤처 사업계획서 주차별 작업 워크북」(자체 제작, A4 18쪽) — 매주 1장씩 작성'),
    ('수업 자료', '수업 홈페이지 — 이론 6개 장, 창업 사례 3건, 공모 4층위, 로컬크리에이터 · 지역재생 자료'),
    ('참고 사이트', '한국관광 데이터랩 · PRISM · 나라장터 · 모모365 · 소상공인24 · TourAPI · THE VC'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': b, 'size': 9.0, 'valign': TOP}], h=20)

h2('수업 운영 방법 — 3시간 연강의 세 블록', 'Ⅴ')
t = table([Cm(3.0), Cm(2.0), Cm(12.6)])
row(t, [{'text': x, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['블록', '시간', '운영']], h=16)
for a, b, c in [
    ('① 이론', '50분', '앞 25분 개념 · 뒤 25분 적용 — 배운 개념을 자기 아이템에 대 보는 시간'),
    ('② 사례 · 원문', '50분', '앞 25분 사례 하나를 깊게 · 뒤 25분 원문 또는 두 번째 사례로 넓히기'),
    ('③ 워크북 · 활동', '50분', '앞 25분 각자 작성 · 뒤 25분 짝 점검과 교수자 순회 — 매주 고정'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'align': C},
            {'text': b, 'size': 9.5, 'align': C},
            {'text': c, 'size': 9.0}], h=20)
spacer(4)
para('※ 강의실이 6교시 뒤에 바뀐다. ① · ② 블록은 PC실(2106호)에서 운영하여 자료 검색과 공고 원문 열람이 '
     '가능하도록 하고, ③ 블록은 3402호로 이동해 워크북을 손으로 작성한다. 워크북은 인쇄물로 지참한다.',
     8.5, False, GRAY)
para('※ ③의 뒤 25분을 매주 짝 점검으로 고정한다. 혼자 쓴 원고를 남이 한 번 읽지 않으면 '
     '학기 말까지 같은 약점이 남는다.', 8.5, False, GRAY)

h2('평가 방법 및 배점', 'Ⅵ')
t = table([Cm(4.4), Cm(1.8), Cm(2.6), Cm(8.8)])
row(t, [{'text': x, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['평가 항목', '배점', '시기', '평가 내용']], h=16)
for a, b, c, d in [
    ('최종 사업계획서', '30%', '16주 12/15', '사업요약 1매 + 1~6절. 공모 서류평가 6개 항목 배점을 100점으로 환산'),
    ('중간시험', '15%', '8주 10/20', '1절 + 2-1 · 2-2 제출 및 3분 발표(문제 · 고객 · 아이템)'),
    ('Demo Day — 창업 IR 또는 취업 면접 택1', '15%', '14주 12/1', '창업 트랙 IR 5분 + 질의 3분 / 취업 트랙 모의 면접 5분 + 질의 3분'),
    ('주차별 워크북 14장', '12%', '매주', '작성 성실도 · 기한 준수 · AI 사용 기록 작성 여부'),
    ('과제 2 · 취업 조사와 입사 제안서', '8%', '13주 11/24', '관광기업 1개사 조사 후 A4 1장 제안서(다섯 칸)'),
    ('과제 3 · 연구용역 분석 보고서', '7%', '14주 12/1', '과업 이해 → 현황 · 데이터 → 분석 → 시사점 → 실행안'),
    ('AI 사용기록 · 수업 참여', '5%', '상시', '주차별 AI 사용 기록 · 짝 점검과 동료 리뷰 참여'),
    ('출석', '8%', '상시', '학칙에 따름'),
]:
    row(t, [{'text': a, 'size': 9.0, 'bold': True},
            {'text': b, 'size': 9.0, 'bold': True, 'align': C},
            {'text': c, 'size': 8.5, 'align': C},
            {'text': d, 'size': 8.5, 'valign': TOP}], h=24)
row(t, [{'text': '합  계', 'size': 10, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '100%', 'size': 10, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '', 'bg': HDR}, {'text': '', 'bg': HDR}], h=18)
spacer(4)
para('※ 평가 기준은 한국관광공사 모집공고문 Ⅴ장의 평가항목과 가중치를 준용한다. '
     '학생은 1주차에 해당 배점표를 배부받고, 자신의 원고가 어느 항목에서 몇 점 배점인지 알고 작성한다.',
     8.5, False, GRAY)

page_break()

h2('주차별 강의계획', 'Ⅶ')
para('관광벤처창업론(화 5·6·7교시)은 본 학기 공휴일·교내행사와 겹치는 결강이 없어 보강 편성이 필요하지 않다. '
     '각 주는 ① 이론 · ② 사례·원문 · ③ 워크북·활동의 세 블록으로 운영한다.',
     8.5, False, GRAY, after=4)
cw = [Cm(1.0), Cm(1.5), Cm(3.0), Cm(9.2), Cm(2.9)]
t = table(cw)
row(t, [{'text': x, 'size': 9.0, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['주', '일자', '주제', '학습 내용 및 활동', '과제 · 제출물']], h=16)
repeat_header(t)

PLAN = [
    ('1', '9/1', '오리엔테이션',
     '① 수업 전반 소개 — 산출물(사업계획서 한 부) · P·S·S·T 네 칸 지도 · 워크북과 배점표 배부\n'
     '② 수업 홈페이지 순회 11정거장 — 각 구역이 몇 주차에 다시 쓰이는지 표시\n'
     '③ 발표 전반 소개(중간 3분 발표 · Demo Day 두 갈래) · 「읽는 법」 배부 · AI 3원칙',
     '—'),
    ('2', '9/8', '관광창업의 지도',
     '① 관광벤처 정의와 3유형(플랫폼 · 콘텐츠 · 시설공간) / 로컬크리에이터 7대 유형\n'
     '② 공고 원문 — 모집유형 넷 · 지원자격의 공통 문법(나이 · 지역 · 분야 · 업력) · 청년가점\n'
     '③ 시트 1 유형 택1 · 서비스명 · 한줄설명 / 투어라즈 개인회원 가입',
     '시트 1\n투어라즈 가입'),
    ('3', '9/15', '아이디어는 문제에서',
     '① 문제 정의 세 축 WHO · WHAT · WHY NOW / 디자인 씽킹 공감 단계\n'
     '② 생성형 AI 「여정(Journey)」으로 여행 여정 6단계 따라가기 / 짝 인터뷰\n'
     '③ 시트 2 — 1-1 문제 인식 3문장 + 「그 한 사람」',
     '시트 2'),
    ('4', '9/22', '근거와 공고를 찾는 법',
     '① 근거의 세 층 — 통계 · 정책연구 · 정책 신호 / 허위 기재 조항과 출처 표기\n'
     '② 검색 실습 — 데이터랩 · PRISM / 공고 창구 모모365 · 소상공인24 · 중기부 통합검색 / AI 자동화의 한계\n'
     '③ 시트 3 — 출처 · URL · 숫자 3건',
     '시트 3\n출처 3건'),
    ('5', '9/29', '여행 · 외식 창업',
     '① 여행업 등록 3종과 수익 모델(수수료 · 직판 · 패키지 · OTA) / 외식 콘셉트 개발 · 메뉴경영 · 프랜차이즈 <교재② 3~9장>\n'
     '② 사례 성심당 — 넓히지 않는 전략 · 자기만의 상품 / 테마여행 상품과 실감형 콘텐츠\n'
     '③ 시트 4 — 경쟁 비교표 + 진입장벽 → 1절 완성',
     '1절 초고'),
    ('6', '10/6', '농어촌 자원의\n사업화',
     '① 숙박 등록 업종(농어촌민박 · 도시민박 · 한옥체험) / 스마트팜 융복합과 6차산업(생산 → 가공 → 체험) <교재② 12~13장>\n'
     '② 로컬스티치 · 리플레이스 문경 화수헌 / 팜스테이 · 치유농업 · 농촌체험휴양마을\n'
     '③ 시트 5 — 2-1 시장 · 목표고객 + 공간 · 규제 체크 1쪽',
     '시트 5\n규제 체크'),
    ('7', '10/13', '비즈니스 모델과\n지역 창업',
     '① 가치제안 · 고객 · 채널 · 수익 모델 / 양면시장과 다자 구조 <교재① 4장>\n'
     '② 지역 세 갈래 — 두레(공동체) · 로컬크리에이터(개인) · 재생(공공+민간) / 구미 · 포항 · 경북 현황도 69개소\n'
     '③ 시트 6 — 2-2 사업모델 도식 + 수익 구조',
     '2절(2-1 · 2-2)'),
    ('8', '10/20', '중간시험',
     '1절 + 2-1 · 2-2 제출 및 서식 확인 / 3분 발표 — 문제 · 고객 · 아이템 / 배점표로 자기 위치 확인',
     '1 · 2절 통합본'),
    ('9', '10/27', '시장 검증과\n리스크',
     '① 린 스타트업 · MVP · 고객 검증 / 리스크의 다섯 결(법제도 · 기술 · 시장 · 운영 · 자금) <교재① 12장>\n'
     '② 비건부산 — 등급 체계라는 진입장벽 / 06장 이 사이트 읽기 / TourAPI · 관광데이터 활용 공모전\n'
     '③ 시트 7 잠재리스크 + 시트 8 동료 상호 리뷰',
     '1 · 2절 수정본'),
    ('10', '11/3', '연구용역 창업과\n분석 보고서',
     '① 정책연구용역 · 수탁연구의 구조와 발주처 / 1인 기업의 수주 방식 / 어반리즘 하우스 B2G 모델\n'
     '② 분석 보고서의 뼈대 — 과업 이해 → 현황 · 데이터 → 분석 → 시사점 → 실행안 / 제안서와 결과보고서의 차이\n'
     '③ 시트 9 — 3-1 개발계획 · MVP / 과제 3 착수',
     '시트 9\n과제 3 착수'),
    ('11', '11/10', '진로와 취업 —\n관광 분야에서\n일한다는 것',
     '① 관광 일자리 지도 — 공공(관광공사 · 문화관광재단 · 지자체 · 관광기업지원센터) · 민간(여행사 · 호텔 · OTA · 플랫폼) · '
     '연구컨설팅 · 로컬기업 / 관광 자격증과 요건 / 채용 공고에서 요구 역량 뽑기\n'
     '② 회사 하나 고르기 — 어반리즘 채용 게시판 · THE VC · 투어라즈 등록기업 / 과제 2 다섯 칸 안내\n'
     '③ 시트 10 — 3-2 홍보 · 판로',
     '시트 10\n과제 2 착수'),
    ('12', '11/17', '자금운용과\n추진 일정',
     '① 지원금 7천만 한도 · 자부담 10% 현물 · 집행 기준 · 산출근거 쓰는 법\n'
     '② [표1] 예시 읽기 — 견적 없는 금액과 있는 금액 / 협약기간 5개월의 의미\n'
     '③ 시트 11 · 12 — [표1] 자금집행 + [표2][표3] 일정',
     '[표1][표2][표3]'),
    ('13', '11/24', '성장 전략 · 팀빌딩\n기업가정신 · KPI',
     '① Scale-up 계산식 · 손익분기점 / 투자와 펀딩 · TIPS · 관광기업 육성펀드 / [표5] 「예정」 쓰는 법\n'
     '② 공고의 층위 — 정부 R&D 예고 → 보도자료 / 공모 4층위(전국 · 경북 · 안동 · 경주 · 부산)\n'
     '③ 시트 13 · 14 — [표4] + 4절 + 5절[표5] / 협약 KPI 8지표 설정',
     '과제 2 제출'),
    ('14', '12/1', '사업요약 · 발표 준비\n→ Demo Day',
     '① 사업요약 1매 쓰는 법 — 본문 편집 금지, 처음부터 다시 / 시트 15 마무리\n'
     '② 발표 두 갈래 시연 후 바로 진행 — 창업 IR 5분 + 질의 3분 / 취업 면접 5분 + 질의 3분\n'
     '③ 상호평가 집계 · 총평 · 시트 16',
     '과제 3 제출\n전체 통합본 · 발표자료'),
    ('15', '12/8~12/11', '보강 지정 기간\n정규 수업 없음',
     '교내 보강 지정 기간. 본 교과목은 결강이 없어 보강 편성이 없고, 12월 8일(화)은 이미 타 교과목 '
     '보강일로 지정되어 있어 정규 회차를 두지 않는다. 최종본 보완과 개별 상담에 쓴다.',
     '(수업 없음)'),
    ('16', '12/15', '기말시험',
     '최종본(사업요약 1매 + 1~6절) 제출 및 서식 확인 / 개별 피드백 / '
     '겨울방학 보완(13장 완본)과 제19회 접수 일정 안내',
     '최종본\nAI 사용기록'),
]
for a, b, c, d, e in PLAN:
    exam = a in ('8', '16')
    row(t, [
        {'text': a, 'size': 9.0, 'bold': True, 'align': C, 'bg': HDR if exam else SUB},
        {'text': b, 'size': 8.5, 'align': C, 'bg': HDR if exam else None},
        {'text': c, 'size': 8.5, 'bold': True, 'color': RED if exam else DARK,
         'valign': TOP, 'bg': HDR if exam else None, 'align': C if exam else None},
        {'text': d, 'size': 8.0, 'valign': TOP, 'bg': HDR if exam else None},
        {'text': e, 'size': 8.0, 'valign': TOP, 'bg': HDR if exam else None},
    ], h=22 if exam else 40)
spacer(4)
para('※ 학사일정 — 중간시험 10/20~10/26, 기말시험 12/14~12/18, 보강 지정 기간 12/8~12/11. '
     '대동체육대회(9/16~18) · 추석연휴(9/24~25) · 개천절 대체휴일(10/5) · 한글날(10/9)은 모두 화요일과 '
     '겹치지 않아 본 교과목의 결강이 없다.' + chr(10) +
     '※ 따라서 15주차에는 보강할 회차가 없고, 12월 8일(화)은 이미 타 교과목 보강일로 지정되어 있다. '
     '정규 수업은 14주차(12/1)로 끝나며 그날 Demo Day 를 시행한다.',
     8.5, False, GRAY)

page_break()

h2('생성형 AI 활용 지침', 'Ⅷ')
t = table([W])
row(t, [{'text':
    '본 교과목은 생성형 AI의 사용을 허용한다. 다만 최종 산출물이 실제 정부 지원사업에 제출 가능한 서류이므로, '
    '해당 공모의 규정을 그대로 수업 규정으로 삼는다. 모집공고문은 「타인의 사업계획서를 모방 · 표절 · 도용하거나 '
    '대필하는 경우 사업 참여 불가 및 사업비 환수」, 「사업계획서를 허위로 기재한 경우 심사 · 선정 대상에서 '
    '제외되며 선정 후에도 취소될 수 있음」을 명시하고 있다.',
    'size': 9.5, 'valign': TOP}], h=40)
spacer(4)
t = table([Cm(1.1), Cm(4.8), Cm(11.7)])
row(t, [{'text': x, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['', '원칙', '적용']], h=16)
for n, a, b in [
    ('1', '허용 범위', '자료 조사, 경쟁 서비스 정리, 통계 출처 탐색, 작업 단위 분해, 자신이 쓴 문장에 대한 '
                   '지적 요청, 예상 질문 도출은 허용한다.'),
    ('2', '직접 작성 영역', '1-1 문제 인식과 5절 팀빌딩은 학생이 직접 작성한다. AI가 생성한 문장을 그대로 옮긴 '
                      '경우 해당 항목을 0점 처리한다.'),
    ('3', '사실 검증 의무', 'AI가 제시한 수치 · 기관명 · 기업명은 원문 URL을 열어 확인한 것만 사용한다. '
                      '확인되지 않은 수치의 기재는 허위 기재로 간주한다.'),
    ('4', '사용 기록', '워크북 각 시트 하단의 <AI 사용 기록>(무엇을 물었나 · 받은 답 중 쓴 것 · 고치거나 버린 것)을 '
                   '매주 작성하고 학기말에 전체를 제출한다. 기록한 사용은 감점하지 않으며, 기록하지 않은 사용이 '
                   '확인될 때 감점한다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': a, 'size': 9.5, 'bold': True, 'valign': TOP},
            {'text': b, 'size': 9.0, 'valign': TOP}], h=28)

h2('수업 규정 및 유의사항', 'Ⅸ')
t = table([Cm(1.1), Cm(16.5)])
for n, x in [
    ('1', '출결은 학칙에 따른다. 매 차시 워크북 작성이 수업 활동의 일부이므로, 결석 시 해당 시트를 '
          '다음 주까지 개별 제출하여야 한다.'),
    ('2', '워크북은 매주 지참한다. 각 시트는 「오늘 끝내야 할 것 → 채울 칸 → 핵심 질문 → AI 사용 기록 → '
          '다음 주까지」로 구성되며, 수업 시간 내 작성을 원칙으로 한다.'),
    ('3', '사업계획서는 공사 제공 양식만 인정된다. 임의 양식 · 수기 작성 · 분량 미준수는 실제 공모에서 '
          '평가 대상 제외 사유이므로 본 수업에서도 동일하게 감점한다.'),
    ('4', '학내 제출본은 본문 6장 이내(사업요약 1매 포함)로 축약하되, 공식 양식의 절 구성은 생략하지 않는다.'),
    ('5', '15주 Demo Day는 창업 IR과 취업 모의면접 두 트랙으로 운영한다. 학생은 자기 진로에 따라 하나를 '
          '선택하며, 두 트랙의 배점은 동일하다.'),
    ('6', '우수 과제는 겨울방학 중 본문 13장 완본으로 보완하여 2027년 4월 공고 예정인 차기 회차에 실제 '
          '접수하도록 지도한다. 투어라즈 개인회원 가입은 2주차에 완료한다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': x, 'size': 9.0, 'valign': TOP}], h=24)

spacer(8)
para('※ 본 강의계획서는 학사일정 및 학과 방침에 따라 일부 조정될 수 있다.', 9, False, GRAY, align=C)

doc.save(OUT)
print('saved:', OUT)
