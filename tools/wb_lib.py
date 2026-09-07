# -*- coding: utf-8 -*-
"""관광벤처창업론 · 예비관광벤처 사업계획서 주차별 작업 워크북 — 공통 도구

mkworkbook.py 가 `from wb_lib import *` 로 부른다. 둘은 같은 폴더에 있어야 한다.
(2026-09-07 복원 — 원본이 세션 임시 폴더에 있다가 사라져 저장소로 옮겨 왔다.)
"""
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

FONT = 'NanumBarunGothic'
NAVY = '17365D'
HEAD_BG = 'EAF0F7'
ACCENT_BG = 'FDF3E3'
AI_BG = 'F0F4EC'
AI_TAB = 'DCE6D5'
BORDER = 'B7C3D0'
GRAY = '6B7280'
CENTER = WD_ALIGN_PARAGRAPH.CENTER
RIGHT = WD_ALIGN_PARAGRAPH.RIGHT
TOP = WD_ALIGN_VERTICAL.TOP

doc = Document()

sec = doc.sections[0]
sec.page_width, sec.page_height = Cm(21.0), Cm(29.7)
sec.left_margin = sec.right_margin = Cm(1.4)
sec.top_margin = sec.bottom_margin = Cm(1.1)

st = doc.styles['Normal']
st.font.name = FONT
st.font.size = Pt(10.5)
st.element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
st.paragraph_format.space_before = Pt(0)
st.paragraph_format.space_after = Pt(0)
st.paragraph_format.line_spacing = 1.3

W = Cm(18.2)   # 본문 폭


def run(p, text, size=10.5, bold=False, color=None, italic=False):
    r = p.add_run(text)
    r.font.name = FONT
    r.font.size = Pt(size)
    r.bold = bold
    r.italic = italic
    r._element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
    if color:
        r.font.color.rgb = RGBColor.from_string(color)
    return r


def para(text='', size=10.5, bold=False, color=None, before=0, after=0, align=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    if align:
        p.alignment = align
    if text:
        run(p, text, size, bold, color)
    return p


def _shade(cell, color):
    tcPr = cell._tc.get_or_add_tcPr()
    el = OxmlElement('w:shd')
    el.set(qn('w:fill'), color)
    tcPr.append(el)


def _borders(cell, color=BORDER, sz=5):
    tcPr = cell._tc.get_or_add_tcPr()
    b = OxmlElement('w:tcBorders')
    for side in ('top', 'left', 'bottom', 'right'):
        e = OxmlElement('w:' + side)
        e.set(qn('w:val'), 'single')
        e.set(qn('w:sz'), str(sz))
        e.set(qn('w:color'), color)
        b.append(e)
    tcPr.append(b)


def fill(cell, text='', size=10.0, bold=False, color=None, align=None,
         valign=WD_ALIGN_VERTICAL.CENTER, bg=None, lines=0):
    _borders(cell)
    if bg:
        _shade(cell, bg)
    cell.vertical_alignment = valign
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.line_spacing = 1.25
    if align:
        p.alignment = align
    first = True
    for line in str(text).split('\n'):
        if not first:
            p = cell.add_paragraph()
            p.paragraph_format.space_before = Pt(0)
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.25
            if align:
                p.alignment = align
        first = False
        if line:
            run(p, line, size, bold, color)
    for _ in range(lines):
        q = cell.add_paragraph()
        q.paragraph_format.space_before = Pt(0)
        q.paragraph_format.space_after = Pt(0)
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
        hr = OxmlElement('w:trHeight')
        hr.set(qn('w:val'), str(int(h * 20)))
        hr.set(qn('w:hRule'), 'exact' if exact else 'atLeast')
        trPr.append(hr)
    for i, spec in enumerate(cells):
        c = r.cells[i]
        c.width = t._widths[i]
        if isinstance(spec, dict):
            d = dict(spec)
            fill(c, d.pop('text', ''), **d)
        else:
            fill(c, spec)
    return r


def spacer(pts=6):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    run(p, '', pts)


def page_break():
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    p.add_run().add_break(WD_BREAK.PAGE)


# ── 시트 구성요소 ──────────────────────────────────────────────

def band(left, right):
    t = table([Cm(12.6), Cm(5.6)])
    row(t, [
        {'text': left, 'size': 11.5, 'bold': True, 'color': 'FFFFFF', 'bg': NAVY},
        {'text': right, 'size': 8.5, 'bold': True, 'color': 'FFFFFF', 'bg': NAVY,
         'align': RIGHT},
    ], h=24)
    spacer(4)


def namebar():
    t = table([Cm(6.0), Cm(6.1), Cm(6.1)])
    row(t, [
        {'text': '학번 ________________', 'size': 8.5, 'align': CENTER},
        {'text': '이름 ________________', 'size': 8.5, 'align': CENTER},
        {'text': '작성일 ______ / ______', 'size': 8.5, 'align': CENTER},
    ], h=15)
    spacer(4)


def goal(text):
    t = table([W])
    row(t, [{'text': text, 'size': 9.0, 'color': '33475B', 'bg': 'F7F9FC'}], h=18)
    spacer(4)


def head(text):
    p = para(text, 9.5, True, NAVY, before=2, after=1)
    return p


def star(text, lines=2):
    t = table([W])
    row(t, [{'text': '★  ' + text, 'size': 9.5, 'bold': True, 'color': '9A5B00',
             'bg': ACCENT_BG, 'lines': lines, 'valign': TOP}], h=22)
    spacer(4)


def ai_block(allow, forbid, prompt, check=None):
    t = table([Cm(2.2), Cm(16.0)])
    row(t, [
        {'text': 'AI', 'size': 9.0, 'bold': True, 'color': '2F5D2F', 'bg': AI_TAB,
         'align': CENTER},
        {'text': '써도 되는 것  ·  ' + allow, 'size': 8.5, 'bg': AI_BG},
    ], h=15)
    row(t, [
        {'text': '사용', 'size': 9.0, 'bold': True, 'color': '2F5D2F', 'bg': AI_TAB,
         'align': CENTER},
        {'text': '직접 써야 하는 것  ·  ' + forbid, 'size': 8.5, 'bg': AI_BG,
         'color': 'A03030'},
    ], h=15)
    row(t, [
        {'text': '규칙', 'size': 9.0, 'bold': True, 'color': '2F5D2F', 'bg': AI_TAB,
         'align': CENTER},
        {'text': '프롬프트 예시  ·  ' + prompt, 'size': 8.5, 'bg': AI_BG, 'color': GRAY},
    ], h=15)
    if check:
        row(t, [
            {'text': '검증', 'size': 9.0, 'bold': True, 'color': '2F5D2F', 'bg': AI_TAB,
             'align': CENTER},
            {'text': check, 'size': 8.5, 'bg': AI_BG, 'color': '2F5D2F', 'bold': True},
        ], h=15)
    t2 = table([Cm(2.2), Cm(5.4), Cm(5.3), Cm(5.3)])
    row(t2, [
        {'text': '사용 기록', 'size': 8.5, 'bold': True, 'color': '2F5D2F', 'bg': AI_TAB,
         'align': CENTER},
        {'text': '무엇을 물었나', 'size': 8.5, 'bold': True, 'color': NAVY, 'bg': HEAD_BG,
         'align': CENTER},
        {'text': '받은 답 중 실제로 쓴 것', 'size': 8.5, 'bold': True, 'color': NAVY,
         'bg': HEAD_BG, 'align': CENTER},
        {'text': '내가 고치거나 버린 것', 'size': 8.5, 'bold': True, 'color': NAVY,
         'bg': HEAD_BG, 'align': CENTER},
    ], h=14)
    row(t2, ['', '', '', ''], h=30, exact=True)
    spacer(4)


def submit(text):
    t = table([Cm(2.6), Cm(15.6)])
    row(t, [
        {'text': '다음 주까지', 'size': 8.5, 'bold': True, 'color': 'FFFFFF', 'bg': '4A6C8C',
         'align': CENTER},
        {'text': text, 'size': 9.0, 'bg': 'F7F9FC'},
    ], h=17)
