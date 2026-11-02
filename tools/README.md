# tools — 배포용 DOCX·오디오 생성기

`learn/assets/` 의 워드·오디오 파일은 손으로 만든 것이 아니라 **여기 스크립트가 찍어낸 것**이다.
파일을 직접 고치면 다음에 스크립트를 돌릴 때 덮어써진다. **반드시 스크립트를 고치고 다시 돌린다.**

| 스크립트 | 만드는 것 | 쪽수·분량 |
|---|---|---|
| `mkworkbook.py` | `tourism-venture-weekly-workbook.docx` — 주차별 작업 워크북 | A4 18쪽(표지 2 + 16시트) |
| `mksyllabus.py` | `tourism-venture-syllabus-2026-2.docx` — 강의계획서 **안 1**(서식 축) | A4 4~5쪽 |
| `mksyllabus2.py` | `tourism-venture-syllabus-2026-2-plan2.docx` — 강의계획서 **안 2**(업종·연구용역·진로) | A4 5~6쪽 |
| `wb_lib.py` | `mkworkbook.py` 전용 공통 도구(표·알약·시트 골격). 단독 실행하지 않는다 | — |
| `mk_smarttourism_city_audio.py` | 「디지털 뉴딜 시대의 스마트관광도시」 16장 교수자 음성 mp3(`smart-tourism-city-coauthor-ch*-script.mp3`) | 1장당 약 2분 |
| `insert_chapter_audio.py` | 위 16개 mp3를 `smart-tourism-city-coauthor-comic-1-8.html`·`comic-9-16.html` 각 장에 끼워넣기 | — |

## 쓰는 법

```bash
pip install python-docx          # 한 번만
python tools/mkworkbook.py       # 저장 경로가 스크립트 안에 절대경로로 박혀 있다
python tools/mksyllabus.py
python tools/mksyllabus2.py

pip install edge-tts              # 오디오 생성용, 한 번만
python tools/mk_smarttourism_city_audio.py --only 1-1   # 샘플 1개
python tools/mk_smarttourism_city_audio.py              # 16개 전부
python tools/insert_chapter_audio.py                     # 만화 페이지 2개에 끼워넣기
```

`mk_smarttourism_city_audio.py`·`insert_chapter_audio.py` 의 대상 파일은
**comic-1-8.html(8.5MB) / comic-9-16.html(32MB)** — 만화 이미지가 base64로 박혀 있어
Read·Edit 도구로 직접 열면 안 된다. `insert_chapter_audio.py`는 줄 단위로만 다뤄서
긴 이미지 줄은 건드리지 않고 짧은 구조 줄(`</article>`, `.panel-title-row`) 앞뒤에만 삽입한다.
**이 둘을 고칠 때도 같은 원칙을 지킨다 — 파일 전체를 열어서 보지 말 것.**

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
