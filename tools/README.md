# tools — 배포용 DOCX 생성기

`learn/assets/` 의 워드 파일 셋은 손으로 만든 것이 아니라 **여기 스크립트가 찍어낸 것**이다.
파일을 워드에서 직접 고치면 다음에 스크립트를 돌릴 때 덮어써진다. **반드시 스크립트를 고치고 다시 돌린다.**

| 스크립트 | 만드는 것 | 쪽수 |
|---|---|---|
| `mkworkbook.py` | `tourism-venture-weekly-workbook.docx` — 주차별 작업 워크북 | A4 18쪽(표지 2 + 16시트) |
| `mksyllabus.py` | `tourism-venture-syllabus-2026-2.docx` — 강의계획서 **안 1**(서식 축) | A4 4~5쪽 |
| `mksyllabus2.py` | `tourism-venture-syllabus-2026-2-plan2.docx` — 강의계획서 **안 2**(업종·연구용역·진로) | A4 5~6쪽 |
| `wb_lib.py` | `mkworkbook.py` 전용 공통 도구(표·알약·시트 골격). 단독 실행하지 않는다 | — |

## 쓰는 법

```bash
pip install python-docx          # 한 번만
python tools/mkworkbook.py       # 저장 경로가 스크립트 안에 절대경로로 박혀 있다
python tools/mksyllabus.py
python tools/mksyllabus2.py
```

`mkworkbook.py` 는 같은 폴더의 `wb_lib.py` 를 부른다(`sys.path` 에 자기 폴더를 넣는다).
**둘을 떼어 놓지 말 것.**

## 고칠 때 주의

- **한 쪽에 한 시트**가 워크북의 규칙이다. 내용을 늘리면 쪽이 넘칠 수 있으니,
  고친 뒤 행 높이 합이 **780pt(A4 사용 높이)** 를 넘지 않는지 확인한다.
- 표의 `row(..., h=..., exact=True)` 는 **고정 높이**, `exact=False` 는 최소 높이다.
  글이 길어지는 칸은 `exact` 를 쓰지 않는다.
- **워크북과 페이지가 어긋나기 쉽다.** 같은 내용이 `learn/tourism-venture.html` 에도 있는 경우가 있어
  (예: 시트 2 「여섯 문장」, 시트 3 「근거의 세 층」), 한쪽만 고치면 서로 다른 말을 하게 된다.
  **워크북을 고치면 페이지의 대응 문구도 함께 본다.**
- 두 강의계획서는 **정규 수업이 14주차(12/1)로 끝난다**는 전제 위에 있다.
  15주차(12/8~12/11)는 보강 지정 기간이고 12/8 은 이미 타 교과목 보강일이다.

## 왜 저장소에 있나

원래 세션 임시 폴더(`AppData\Local\Temp`)에만 있었다. 2026-09-07 확인해 보니
`wb_lib.py` 가 이미 사라져 있어 **워크북을 다시 찍어낼 수 없는 상태**였다.
복원해 여기로 옮겼고, 셋 다 돌려 **기존 DOCX 와 내용이 완전히 일치**하는 것을 확인했다
(워크북 표 셀 1012 · 문단 198, 안 1 셀 234, 안 2 셀 218 전부 동일).
