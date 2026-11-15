# 관광벤처창업론 04장(만들기 전에 검증하라 — 린 스타트업) 강의 노트 1장 Word
# 실행: python tools/mk_ch04_note.py  → learn/assets/tourism-venture-ch04-lean-note.docx
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUT = "learn/assets/tourism-venture-ch04-lean-note.docx"
FONT = "Malgun Gothic"
NAVY = RGBColor(0x17, 0x39, 0x5F)
BLUE = RGBColor(0x1F, 0x6F, 0xB2)
RED = RGBColor(0xA0, 0x2D, 0x1F)
GRAY = RGBColor(0x55, 0x60, 0x6B)

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Cm(21), Cm(29.7)
sec.top_margin = sec.bottom_margin = Cm(1.1)
sec.left_margin = sec.right_margin = Cm(1.6)

st = doc.styles["Normal"]
st.font.name = FONT
st.font.size = Pt(8.5)
st.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
st.paragraph_format.space_after = Pt(0)
st.paragraph_format.line_spacing = 1.05


def shade(cell, hex_):
    tcPr = cell._tc.get_or_add_tcPr()
    sh = OxmlElement("w:shd")
    sh.set(qn("w:val"), "clear"); sh.set(qn("w:color"), "auto"); sh.set(qn("w:fill"), hex_)
    tcPr.append(sh)


def runs(p, parts, size=None):
    """parts: [(text, style)] style in {'', 'b', 'r', 'n', 'g'}"""
    for t, s in parts:
        r = p.add_run(t)
        r.font.name = FONT
        r._element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
        if size: r.font.size = Pt(size)
        if "b" in s or "r" in s or "n" in s: r.bold = True
        if "r" in s: r.font.color.rgb = RED
        if "n" in s: r.font.color.rgb = NAVY
        if "g" in s: r.font.color.rgb = GRAY
    return p


def para(parts, size=None, before=0, after=0, align=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    if align: p.alignment = align
    return runs(p, parts, size)


def head(text):
    p = para([(text, "n")], size=10, before=4, after=1)
    pPr = p._p.get_or_add_pPr()
    bdr = OxmlElement("w:pBdr"); b = OxmlElement("w:bottom")
    for k, v in (("val", "single"), ("sz", "6"), ("space", "1"), ("color", "1F6FB2")):
        b.set(qn("w:" + k), v)
    bdr.append(b); pPr.append(bdr)


def table(rows, widths, header_fill="DCE8F5", first_col_fill="F5F9FD", size=7.8):
    t = doc.add_table(rows=len(rows), cols=len(rows[0]))
    t.style = "Table Grid"
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    for i, row in enumerate(rows):
        for j, val in enumerate(row):
            c = t.cell(i, j)
            c.width = Cm(widths[j])
            c.paragraphs[0].paragraph_format.space_after = Pt(0)
            parts = val if isinstance(val, list) else [(val, "b" if i == 0 or j == 0 else "")]
            runs(c.paragraphs[0], parts, size)
            if i == 0: shade(c, header_fill)
            elif j == 0: shade(c, first_col_fill)
    return t


# ── 머리 ──
para([("관광벤처창업론 · 강의 노트  ", "g"), ("04장", "n")], size=8.5)
para([("만들기 전에 검증하라 — 린 스타트업", "n")], size=13.5, after=1)
para([("가장 비싼 실수는 ", ""), ("아무도 원하지 않는 것을 완벽하게 만드는 것", "r"),
      ("이다. 그래서 만들기 전에 묻고, 숫자로 배우고, 필요하면 방향을 바꾼다.", "")], size=9.5, after=4)

head("학습 목표")
for n, (k, body) in enumerate([
    ("린 스타트업", [("「만든다 → 묻는다 → 배운다」 순환을 설명하고, 왜 ", ""), ("만들기 전에 고객 검증", "r"), ("이 먼저인지 말할 수 있다.", "")]),
    ("PoC · 프로토타입 · MVP", [("「되나? · 어떻게 생겼나? · 쓰나?」로 셋을 구분하고, ", ""), ("보여 주고 묻기", "r"), ("와 ", ""), ("써 보게 하기", "r"), ("의 차이를 말할 수 있다.", "")]),
    ("KPI · 피벗", [("KPI로 목표까지의 거리를 숫자로 읽고, 가설과 다르면 ", ""), ("비전은 두고 전략만 바꾸는", "r"), (" 피벗을 설명할 수 있다. KPI가 사업계획서의 ", ""), ("협약목표(매출 · 투자 · 고용)", "r"), ("가 됨을 안다.", "")]),
], 1):
    para([(f"{n}. ", "n"), (k, "n"), (" — ", "")] + body, after=1)

head("1. 린 스타트업 순환 — 만든다 → 묻는다 → 배운다")
table([
    ["단계", "핵심", "하는 일"],
    ["만든다", "MVP · 최소기능제품", "핵심 가치만 담은 가장 작은 버전으로 빠르게 시장에 묻는다."],
    ["묻는다 ★", "고객 검증", "인터뷰 · 사전예약 · 랜딩페이지로 「정말 돈을 낼까」를 확인한다."],
    ["배운다", "측정 · 학습", "반응을 KPI로 읽고, 방향을 유지하거나 바꾼다(피벗)."],
], [2.3, 3.6, 11.9])
para([("사업계획서에는 ", "g"), ("만들기 전에 고객에게 확인한 과정", "b"), ("을 보여 준다. 이 웹사이트도 정적 사이트로 먼저 내걸고 반응을 보는 하나의 MVP다.", "g")], size=8.5, before=2)

head("2. 만들기 전에 검증하는 다섯 말 — PoC → 프로토타입 → MVP → KPI → 피벗")
table([
    ["말", "묻는 것", "뜻", "관광 예"],
    ["① PoC\n개념 증명", "되나?", "실행 가능성을 며칠~몇 주에 확인. 팀 · 투자자 · 협력처를 설득할 근거.", "투어 한 코스를 지인 10명에게 한 번 돌려 본다"],
    ["② 프로토타입\n시제품", "어떻게 생겼나?", "만들 모습을 화면 · 모형으로 보여 준다. 고객에게 보여 주고 묻는 도구.", "예약 화면을 그려 보인다"],
    ["③ MVP\n최소 기능 제품", "쓰나?", [("Minimum", "b"), ("=기능을 덜어냄, ", ""), ("Viable", "b"), ("=그래도 고객이 쓰고 값을 매길 수 있음. ", ""), ("덜 만든 제품이 아니라 배우기 위해 만든 가장 작은 제품", "r"), (".", "")], "실제 예약을 받는다"],
    ["④ KPI\n핵심성과지표", "얼마나 가고 있나?", "목표를 향해 얼마나 왔는지 숫자로 보여 주는 지표.", "목표 대비 달성률을 계산한다"],
    ["⑤ 피벗\n방향 전환", "무엇을 바꾸나?", [("KPI가 가설과 다르면 ", ""), ("비전은 두고", "r"), (" 고객 · 채널 · 수익모델 같은 전략만 바꾼다. 처음부터 다시가 아니다.", "")], "예상과 다른 숫자 → 바꿀 칸을 정한다"],
], [2.6, 2.4, 8.1, 4.7])

head("3. 무엇을 묻나 — 작은 고리(보여 주고 확인)와 큰 고리(실제로 쓰게)")
table([
    ["묻는 단계", "질문 예", "프로토타입은?"],
    ["① 불편 묻기\n문제 인터뷰", "「여행할 때 무엇이 불편하세요?」 「지금은 어떻게 해결하세요?」", "없어도 된다 — 없어야 고객이 내 아이디어에 끌려가지 않는다."],
    ["② 보여 주고 묻기\n해결책 확인", "「이런 화면이면 쓰시겠어요?」 「얼마면 내시겠어요?」", "있어야 한다 — 말로만 하면 고객이 상상한 것에 답한다."],
    ["③ 써 보게 하고 묻기\nMVP · 큰 고리", "「어디서 멈추셨어요?」 「다시 쓰시겠어요?」", "계속 만든다 — 고칠 기능은 먼저 프로토타입으로 확인 후 MVP에."],
], [3.6, 7.0, 7.2])
para([("작은 고리", "n"), (": 불편 묻기 → 프로토타입 → 보여 주고 묻기 ↺ (공모 서류 · 피칭은 여기까지로도)   ", ""),
      ("큰 고리", "n"), (": 핵심 기능만 최소 MVP → 불만 듣고 → 고쳐 보기 → 최적화 → 시장 · 기업에 → 혁신 · 확장 ↺", "")], size=8.5, before=2)

head("4. KPI가 사업계획서에서는 — 협약목표")
para([("선정되면 「1년 뒤 이만큼」을 약속하는 숫자 = ", ""), ("매출 · 투자 · 고용", "r"),
      (" (01장 일반현황 표 맨 아래 칸). 목표는 크면 좋은 것이 아니라 ", ""), ("근거로 닿을 수 있는 숫자", "b"),
      ("여야 한다. 고용은 숫자와 증빙(채용 계획)으로 쓴다.", "")], after=2)

head("수업 끝 확인 — 한 줄씩 써 보기")
for q in ["내 아이템의 PoC는 무엇이며, 누구에게 몇 명에게 해 보나?",
          "내 MVP에서 덜어낼 기능 하나와 꼭 남길 기능 하나는?",
          "내 KPI 하나와 목표 숫자 — 그 숫자가 안 나오면 무엇을 바꿀까(피벗 칸)?"]:
    para([("□ ", "n"), (q, "")], after=1)

fp = sec.footer.paragraphs[0]; fp.alignment = WD_ALIGN_PARAGRAPH.RIGHT
sec.footer_distance = Cm(0.6)
runs(fp, [("관광벤처창업론 · 선샤인 웰니스 학습자료 · 04장 강의 노트", "g")], 7.5)

doc.save(OUT)
print("saved", OUT)
