# -*- coding: utf-8 -*-
"""2026학년도 2학기 관광벤처창업론 — 학교 제출용 강의계획서"""
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUT = r'C:\Users\PC\sunshine-wellness\learn\assets\tourism-venture-syllabus-2026-2.docx'

FONT = '맑은 고딕'
LINE = '8C8C8C'
HDR = 'E8ECF0'
SUB = 'F5F7F9'
DARK = '1F3864'
RED = 'B02418'
GRAY = '595959'
C = WD_ALIGN_PARAGRAPH.CENTER
TOP = WD_ALIGN_VERTICAL.TOP
MID = WD_ALIGN_VERTICAL.CENTER

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Cm(21.0), Cm(29.7)
sec.left_margin = sec.right_margin = Cm(2.0)
sec.top_margin = Cm(1.6)
sec.bottom_margin = Cm(1.4)
W = Cm(17.0)

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
    e = OxmlElement('w:shd')
    e.set(qn('w:fill'), color)
    cell._tc.get_or_add_tcPr().append(e)


def _bd(cell):
    b = OxmlElement('w:tcBorders')
    for s in ('top', 'left', 'bottom', 'right'):
        e = OxmlElement('w:' + s)
        e.set(qn('w:val'), 'single')
        e.set(qn('w:sz'), '6')
        e.set(qn('w:color'), LINE)
        b.append(e)
    cell._tc.get_or_add_tcPr().append(b)


def fill(cell, text='', size=9.5, bold=False, color=None, align=None,
         valign=MID, bg=None, lines=0):
    _bd(cell)
    if bg:
        _sh(cell, bg)
    cell.vertical_alignment = valign
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.line_spacing = 1.25
    if align:
        p.alignment = align
    first = True
    for ln in str(text).split('\n'):
        if not first:
            p = cell.add_paragraph()
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.25
            if align:
                p.alignment = align
        first = False
        if ln:
            run(p, ln, size, bold, color)
    for _ in range(lines):
        q = cell.add_paragraph()
        q.paragraph_format.line_spacing = 1.7
        run(q, '', size)


def table(widths):
    t = doc.add_table(rows=0, cols=len(widths))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    lay = OxmlElement('w:tblLayout')
    lay.set(qn('w:type'), 'fixed')
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
            d = dict(spec)
            fill(c, d.pop('text', ''), **d)
        else:
            fill(c, spec)
    return r


def repeat_header(t):
    tr = t.rows[0]._tr
    trPr = tr.get_or_add_trPr()
    e = OxmlElement('w:tblHeader')
    e.set(qn('w:val'), 'true')
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


def kv(label, value, lw=Cm(3.2)):
    t = table([lw, Cm(17.0) - lw])
    row(t, [{'text': label, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': value, 'size': 9.5}], h=18)
    return t


def page_break():
    p = doc.add_paragraph()
    p.add_run().add_break(WD_BREAK.PAGE)


# ══════════════════════════════════════════════════════════════
# 표제
# ══════════════════════════════════════════════════════════════
para('2026학년도 2학기  강의계획서', 18, True, DARK, after=2, align=C)
para('관광벤처창업론', 13, True, '000000', after=10, align=C)

# 1. 교과목 기본정보
h2('교과목 기본정보', 'Ⅰ')
t = table([Cm(2.6), Cm(5.9), Cm(2.6), Cm(5.9)])
for a, b, c, d in [
    ('교과목명', '관광벤처창업론', '학수번호', ''),
    ('이수구분', '', '학점 / 시수', '3학점 / 3시간'),
    ('강의시간', '화요일 5 · 6 · 7교시\n(13:00~13:50 / 14:00~14:50 / 15:00~15:50)', '강의실', '5 · 6교시  사회대 2106호(PC실)\n7교시  사회대 3402호'),
    ('대상 학년', '', '수강 인원', ''),
    ('개설 학과', '', '강의 언어', '한국어'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': b, 'size': 9.5},
            {'text': c, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': d, 'size': 9.5}], h=19)
spacer(4)
t = table([Cm(2.6), Cm(5.9), Cm(2.6), Cm(5.9)])
for a, b, c, d in [
    ('담당교수', '', '연구실', ''),
    ('연락처', '', '이메일', ''),
    ('상담시간', '', '수업 홈페이지', 'sunshinewellness.co.kr/learn/tourism-venture.html'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': b, 'size': 9.5},
            {'text': c, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': d, 'size': 9.5}], h=19)

# 2. 교과목 개요
h2('교과목 개요', 'Ⅱ')
t = table([W])
row(t, [{'text':
    '창업은 「좋은 아이템을 파는 일」이 아니라 「누군가의 불편을 반복 가능한 방식으로 푸는 일」이다. '
    '관광벤처는 그 불편이 여행의 여정 어딘가에 있는 사업이다.\n'
    '이 과목은 관광벤처의 개념과 유형에서 출발하여 문제 정의 · 비즈니스 모델 · 시장 검증 · 창업 지원제도까지를 '
    '다루되, 이론을 강의로만 전달하지 않는다. 한 학기의 산출물은 리포트가 아니라 '
    '「실제로 제출할 수 있는 사업계획서 한 부」이며, 한국관광공사 「관광벤처사업 예비부문」의 '
    '공식 사업계획서 양식과 평가 배점표를 그대로 사용한다.\n'
    '수강생은 사업자등록증이 없는 예비창업자로서 해당 공모의 지원자격을 모두 충족하며, '
    '만 39세 이하 청년 가점 대상이다. 본 학기에 작성한 사업계획서는 2027년 4월 공고 예정인 '
    '차기 회차에 그대로 제출할 수 있다.',
    'size': 9.5, 'valign': TOP}], h=88)

# 3. 학습목표
h2('학습목표 및 기대 학습성과', 'Ⅲ')
t = table([Cm(1.2), Cm(15.8)])
for n, x in [
    ('1', '관광벤처의 개념 · 유형 · 산업 내 위치를 설명하고, 공모의 모집유형 넷(관광체험서비스 · 실감형 관광콘텐츠 · '
          '관광인프라 · 관광딥테크)에 자신의 아이템을 근거를 들어 배치할 수 있다.'),
    ('2', '관광 현장의 문제를 대상 · 원인 · 배경으로 나누어 정의하고, 공개 통계와 정책 문서로 그 정의를 뒷받침할 수 있다.'),
    ('3', '비즈니스 모델을 도식으로 표현하고 수익 구조와 잠재 리스크 및 대응방안을 서술할 수 있다.'),
    ('4', '사업화 자금 집행계획 · 추진 일정 · 성장(Scale-up) 계획을 산출근거와 계산식을 갖추어 작성할 수 있다.'),
    ('5', '공식 양식에 따른 사업계획서 한 부를 완성하고, 심사 형식의 발표와 질의응답에 대응할 수 있다.'),
    ('6', '생성형 AI를 자료 조사 · 검토 도구로 활용하되 그 사용을 기록하고, 사실과 출처를 스스로 검증할 수 있다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': x, 'size': 9.5, 'valign': TOP}], h=22)

page_break()

# 4. 교재
h2('교재 및 참고자료', 'Ⅳ')
t = table([Cm(2.6), Cm(14.4)])
for a, b in [
    ('주교재', '안덕수 · 이난희, 「관광벤처창업론」, 백산출판사, 2021.\n'
             '  PART Ⅰ 이론 8장(관광벤처 · 창업 · 디자인 씽킹 · 비즈니스 모델 · 사업계획서 · 투자와 펀딩 · '
             '기업가정신 · 창업마케팅) / PART Ⅱ 실무와 정보 11장'),
    ('공식 서식', '한국관광공사 「관광벤처사업 예비부문」 모집공고문 및 사업계획서 양식(제18회 기준).\n'
              '  한국관광산업포털 투어라즈(touraz.kr) — 공고 원문 · 첨부 서식 · 접수 매뉴얼'),
    ('수업 자료', '수업 홈페이지(sunshinewellness.co.kr/learn/tourism-venture.html) — 이론 6개 장, '
              '공모 사례, 로컬크리에이터 · 지역재생 자료, 링크 모음'),
    ('작업 서식', '「예비관광벤처 사업계획서 주차별 작업 워크북」(자체 제작, A4 18쪽) — 매주 1장씩 작성'),
    ('참고 사이트', '한국관광 데이터랩 · PRISM 정책연구 정보서비스 · 기업마당(bizinfo) · 소상공인24 · THE VC'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
            {'text': b, 'size': 9.5, 'valign': TOP}], h=22)

# 5. 수업 방법
h2('수업 운영 방법', 'Ⅴ')
t = table([Cm(3.6), Cm(2.0), Cm(11.4)])
row(t, [{'text': '방법', 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '비중', 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '내용', 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}], h=17)
for a, b, c in [
    ('이론 강의', '35%', '관광벤처 개념 · 문제 정의 · 비즈니스 모델 · 린 스타트업 · 창업 지원제도'),
    ('작성 실습', '40%', '매주 워크북 1장을 수업 시간 내에 작성 — 교수자 순회 지도 및 즉시 피드백'),
    ('사례 분석', '15%', '공모 선정 사례 · 로컬 브랜드 · 관광 컨설팅 기업 · 유럽 벤치마킹 사례'),
    ('발표 · 상호평가', '10%', '중간 동료 리뷰(9주) 및 심사 형식 모의 PT(15주)'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True, 'align': C},
            {'text': b, 'size': 9.5, 'align': C},
            {'text': c, 'size': 9.5}], h=18)

# ══════════════════════════════════════════════════════════════
# 6. 평가
# ══════════════════════════════════════════════════════════════
h2('평가 방법 및 배점', 'Ⅵ')
t = table([Cm(3.4), Cm(1.8), Cm(2.4), Cm(9.4)])
row(t, [{'text': x, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['평가 항목', '배점', '시기', '평가 내용 및 기준']], h=17)
for a, b, c, d in [
    ('중간시험', '25%', '8주 (10/20)', '사업계획서 1절(사업개요) · 2절(시장성) 제출 및 구술 확인. '
                                 '공모 서류평가 배점의 1·2항(각 25%)을 그대로 적용'),
    ('기말시험', '30%', '16주 (12/15)', '사업계획서 최종본(사업요약 1매 + 1~6절) 제출. '
                                   '공모 서류평가 6개 항목 배점을 100점으로 환산'),
    ('주차별 워크북', '15%', '매주', '워크북 시트 13장의 성실도 · 제출 기한 준수 · AI 사용 기록 작성 여부'),
    ('모의 PT 발표', '10%', '14주 (12/1)', '발표 8분 + 질의 4분. 공모 「발표평가」 가중치 적용 '
                                     '(사업개요 20 · 시장성 20 · 사업화역량 25 · 관광 연관성 10 · 팀빌딩 15 · 기업가정신 10)'),
    ('과제 2 · 입사 제안서', '10%', '13주 (11/24)', '관광기업 1개사를 조사하여 A4 1장 입사 제안서 작성 — '
                                            '창업하지 않는 학생의 진로 경로 확보'),
    ('출석 및 수업 참여', '10%', '상시', '학칙에 따름. 동료 리뷰(9주) 참여 포함'),
]:
    row(t, [{'text': a, 'size': 9.5, 'bold': True},
            {'text': b, 'size': 9.5, 'bold': True, 'align': C},
            {'text': c, 'size': 9.0, 'align': C},
            {'text': d, 'size': 9.0, 'valign': TOP}], h=30)
row(t, [{'text': '합  계', 'size': 10, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '100%', 'size': 10, 'bold': True, 'bg': HDR, 'align': C},
        {'text': '', 'bg': HDR}, {'text': '', 'bg': HDR}], h=19)
spacer(4)
t = table([W])
row(t, [{'text': '※ 본 교과목의 평가 기준은 한국관광공사 「관광벤처사업 예비부문」 모집공고문 Ⅴ장의 '
                 '평가항목 및 가중치를 그대로 준용한다. 학생은 학기 초에 해당 배점표를 배부받으며, '
                 '자신의 원고가 어느 항목에서 몇 점 배점인지를 알고 작성한다.',
         'size': 9.0, 'valign': TOP}], h=26)

page_break()

# 7. 주차별 강의계획
h2('주차별 강의계획', 'Ⅶ')
para('교내 학사일정 기준. 관광벤처창업론(화 5·6·7교시)은 본 학기 공휴일·교내행사와 겹치는 결강이 없어 '
     '보강 편성이 필요하지 않다.', 9, False, GRAY, after=4)
cw = [Cm(1.1), Cm(1.7), Cm(3.5), Cm(5.4), Cm(1.9), Cm(3.4)]
t = table(cw)
row(t, [{'text': x, 'size': 9.0, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['주차', '일자', '강의 주제', '학습 내용 및 활동', '수업방법', '과제 · 제출물']], h=17)
repeat_header(t)

PLAN = [
    ('1', '9/1', '오리엔테이션 ·\n관광벤처란 무엇인가',
     '강의 운영과 평가 방식 안내 / 관광벤처의 정의와 유형 / '
     '예비관광벤처 공모 요강 읽기 / 모집유형 넷의 정의와 예시 비교',
     '강의 · 실습', '워크북 시트 1\n(신청유형 택1)'),
    ('2', '9/8', '아이디어는 문제에서\n나온다',
     '문제 정의의 세 축 — 누구의 · 어떤 문제 · 왜 지금 / 디자인 씽킹 / '
     '「그 한 사람」을 특정하는 훈련',
     '강의 · 실습', '워크북 시트 2\n(문제 정의 3문장)'),
    ('3', '9/15', '근거를 찾는 법',
     '한국관광 데이터랩 · PRISM 정책연구용역 · 정부 보도자료 검색 실습 / '
     '통계를 문장으로 옮기기 / 출처 표기',
     '실습(전산)', '워크북 시트 3\n(출처 URL 3건)'),
    ('4', '9/22', '차별성 —\n따라 하기 어려운 규칙',
     '경쟁 서비스 비교표 작성 / 「저희는 다릅니다」를 대체하는 진입장벽 서술 / '
     '사례: 비건부산 등급 체계',
     '강의 · 실습', '워크북 시트 4\n1절 초고 A4 1장'),
    ('5', '9/29', '비즈니스 모델 —\n어떻게 돈이 도는가',
     '비즈니스 모델 캔버스 / 가치 제안 · 고객 · 수익 구조 / '
     '시장 현황과 목표고객 좁히기',
     '강의 · 실습', '워크북 시트 5\n(2-1 초고)'),
    ('6', '10/6', '만들기 전에 검증하라 ·\n린 스타트업',
     'MVP와 고객 검증 / 사업모델 도식화 실습 — 돈과 가치의 흐름을 그림으로',
     '강의 · 실습', '워크북 시트 6\n(BM 도식)'),
    ('7', '10/13', '잠재리스크와\n대응방안',
     '법·제도 · 기술 · 시장 · 운영 · 자금 리스크의 유형 / 대응방안 서술법 / '
     '2절 통합 및 중간시험 안내',
     '강의 · 실습', '워크북 시트 7\n2절 통합본'),
    ('8', '10/20', '중간시험', '사업계획서 1절 · 2절 제출 및 구술 확인 (배점 25%)',
     '시험', '1 · 2절 통합본'),
    ('9', '10/27', '중간 점검 ·\n창업 생태계와 지원',
     '동료 상호 리뷰 — 「그래서 왜?」 지점 찾기 / 창업 지원제도의 층위 '
     '(관광벤처 · 로컬크리에이터 · 지자체 · R&D)',
     '토의 · 강의', '워크북 시트 8\n(1·2절 수정본)'),
    ('10', '11/3', '개발 계획과 MVP',
     '상품 · 서비스 · 인프라 개발 계획 / 협약기간 5개월 안에 완결되는 최소 범위 설정 / '
     '성공 기준의 수치화',
     '강의 · 실습', '워크북 시트 9\n(MVP 정의)'),
    ('11', '11/10', '홍보와 판로개척',
     '채널별 홍보 계획과 성과 지표 / 첫 고객 확보 경로 / '
     '과제 2(관광기업 입사 제안서) 안내',
     '강의 · 실습', '워크북 시트 10\n(채널별 계획표)'),
    ('12', '11/17', '자금운용계획과\n추진 일정',
     '[표1] 자금집행계획 — 산출근거 작성법 / 총사업비와 자부담 10% 현물 / '
     '[표2][표3] 전체 및 협약기간 일정',
     '실습', '워크북 시트 11 · 12\n([표1][표2][표3])'),
    ('13', '11/24', '성장 전략 · 팀 빌딩\n기업가정신 · KPI',
     '[표4] Scale-up 3년 추정과 계산식 / 손익분기점 / 관광산업 연관성 서술 / [표5] 팀 구성 / '
     '협약 KPI 설정과 달성 근거',
     '강의 · 실습', '워크북 시트 13 · 14\n과제 2 제출'),
    ('14', '12/1', '사업요약과 모의 PT\n(정규 수업 마지막)',
     '사업요약 1매 작성 — 요약만으로 설득하기 / 발표 구성과 리허설 / '
     '모의 PT 8분 + 질의응답 4분, 공모 발표평가 배점표에 따른 교수자 · 동료 평가',
     '실습 · 발표', '워크북 시트 15 · 16\n전체 통합본 · 발표자료'),
    ('15', '12/8~12/11', '보강 지정 기간\n정규 수업 없음',
     '본 교과목은 결강이 없어 보강 편성이 없고, 12월 8일(화)은 이미 타 교과목 보강일로 지정되어 있다. '
     '최종본 보완과 개별 상담에 쓴다.',
     '—', '(수업 없음)'),
]
for a, b, c, d, e, f in PLAN:
    exam = (a == '8')
    row(t, [
        {'text': a, 'size': 9.0, 'bold': True, 'align': C, 'bg': HDR if exam else SUB},
        {'text': b, 'size': 8.5, 'align': C, 'bg': HDR if exam else None},
        {'text': c, 'size': 9.0, 'bold': exam, 'color': RED if exam else None,
         'valign': TOP, 'bg': HDR if exam else None, 'align': C if exam else None},
        {'text': d, 'size': 8.5, 'valign': TOP, 'bg': HDR if exam else None},
        {'text': e, 'size': 8.5, 'align': C, 'bold': exam, 'bg': HDR if exam else None},
        {'text': f, 'size': 8.5, 'valign': TOP, 'bg': HDR if exam else None},
    ], h=30 if not exam else 22)
row(t, [
    {'text': '16', 'size': 9.0, 'bold': True, 'align': C, 'bg': HDR},
    {'text': '12/15', 'size': 8.5, 'align': C, 'bg': HDR},
    {'text': '기말시험', 'size': 9.0, 'bold': True, 'color': RED, 'align': C, 'bg': HDR},
    {'text': '사업계획서 최종본(사업요약 1매 + 1~6절) 제출 및 평가 (배점 30%)',
     'size': 8.5, 'valign': TOP, 'bg': HDR},
    {'text': '시험', 'size': 8.5, 'align': C, 'bold': True, 'bg': HDR},
    {'text': '최종본', 'size': 8.5, 'valign': TOP, 'bg': HDR},
], h=24)
spacer(4)
t = table([W])
row(t, [{'text':
    '※ 학사일정 참고 — 중간시험 10/20~10/26, 기말시험 12/14~12/18, 보강 지정 기간 12/8~12/11, '
    '겨울방학 12/21, 성적제출 마감 12/28.  대동체육대회(9/16~18) · 추석연휴(9/24~25) · '
    '개천절 대체휴일(10/5) · 한글날(10/9)은 모두 화요일과 겹치지 않아 본 교과목의 결강이 없다.\n'
    '※ 따라서 15주차에는 보강할 회차가 없고, 12월 8일(화)은 이미 타 교과목 보강일로 '
    '지정되어 있다. 정규 수업은 14주차(12/1)로 끝나며 그날 모의 PT 를 시행한다.',
    'size': 8.5, 'valign': TOP, 'color': GRAY}], h=44)

page_break()

# ══════════════════════════════════════════════════════════════
# 8. 생성형 AI 활용 지침
# ══════════════════════════════════════════════════════════════
h2('생성형 AI 활용 지침', 'Ⅷ')
t = table([W])
row(t, [{'text':
    '본 교과목은 생성형 AI의 사용을 허용한다. 다만 최종 산출물이 실제 정부 지원사업에 제출 가능한 '
    '서류이므로, 해당 공모의 규정을 그대로 수업 규정으로 삼는다. 모집공고문은 '
    '「타인의 사업계획서를 모방 · 표절 · 도용하거나 대필하는 경우 사업 참여 불가 및 사업비 환수」, '
    '「사업계획서를 허위로 기재한 경우 심사 · 선정 대상에서 제외되며 선정 후에도 취소될 수 있음」을 '
    '명시하고 있다.',
    'size': 9.5, 'valign': TOP}], h=42)
spacer(4)
t = table([Cm(1.1), Cm(5.0), Cm(10.9)])
row(t, [{'text': x, 'size': 9.5, 'bold': True, 'bg': HDR, 'align': C}
        for x in ['', '원칙', '적용']], h=17)
for n, a, b in [
    ('1', '허용 범위', '자료 조사, 경쟁 서비스 정리, 통계 출처 탐색, 작업 단위 분해, '
                   '자신이 쓴 문장에 대한 지적 요청, 예상 질문 도출은 허용한다.'),
    ('2', '직접 작성 영역', '1-1 문제 인식과 5절 팀빌딩은 학생이 직접 작성한다. '
                      'AI가 생성한 문장을 그대로 옮긴 경우 해당 항목을 0점 처리한다.'),
    ('3', '사실 검증 의무', 'AI가 제시한 수치 · 기관명 · 기업명은 원문 URL을 열어 확인한 것만 사용한다. '
                      '확인되지 않은 수치의 기재는 허위 기재로 간주한다.'),
    ('4', '사용 기록', '워크북 각 시트 하단의 <AI 사용 기록>(무엇을 물었나 · 받은 답 중 쓴 것 · '
                   '고치거나 버린 것)을 매주 작성하고, 학기말에 전체를 함께 제출한다. '
                   '기록한 사용은 감점하지 않으며, 기록하지 않은 사용이 확인될 때 감점한다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': a, 'size': 9.5, 'bold': True, 'valign': TOP},
            {'text': b, 'size': 9.0, 'valign': TOP}], h=30)

# 9. 수업 규정
h2('수업 규정 및 유의사항', 'Ⅸ')
t = table([Cm(1.1), Cm(15.9)])
for n, x in [
    ('1', '출결은 학칙에 따르며, 매 차시 워크북 작성이 수업 활동의 일부이므로 결석 시 해당 시트를 '
          '다음 주까지 개별 제출하여야 한다.'),
    ('2', '워크북은 매주 지참한다. 각 시트는 「오늘 끝내야 할 것 → 채울 칸 → 핵심 질문 → AI 사용 기록 → '
          '다음 주까지」의 순서로 구성되어 있으며, 수업 시간 내 작성을 원칙으로 한다.'),
    ('3', '사업계획서는 공사 제공 양식만 인정된다. 임의 양식 · 수기 작성 · 분량 미준수는 실제 공모에서 '
          '평가 대상에서 제외되므로, 본 수업에서도 동일하게 감점한다.'),
    ('4', '학내 제출본은 본문 6장 이내(사업요약 1매 포함)로 축약하되, 공식 양식의 절 구성은 생략하지 않는다. '
          '항목 누락은 실제 공모에서 감점 사유이다.'),
    ('5', '우수 과제는 겨울방학 중 본문 13장 완본으로 보완하여 2027년 4월 공고 예정인 차기 회차에 '
          '실제 접수할 수 있도록 지도한다. 접수처인 투어라즈 개인회원 가입은 마감 1주일 전까지 완료하여야 한다.'),
    ('6', '수강생은 공고일 기준 사업자등록증이 없는 예비창업자로서 지원자격을 충족하며, '
          '만 39세 이하는 청년 가점(1점) 대상이다.'),
]:
    row(t, [{'text': n, 'size': 9.5, 'bold': True, 'bg': SUB, 'align': C},
            {'text': x, 'size': 9.0, 'valign': TOP}], h=26)

spacer(8)
para('※ 본 강의계획서는 학사일정 및 학과 방침에 따라 일부 조정될 수 있다.', 9, False, GRAY, align=C)

doc.save(OUT)
print('saved:', OUT)
