"""스마트관광도시 16장 만화 페이지 2개에 챕터별 교수자 음성(mp3)을 끼워넣는다.

파일이 각각 8.5MB / 32MB(만화 이미지 base64 포함)라 Read/Edit 도구로 직접
열면 안 되므로, 줄 단위로만 다뤄서(작은 줄만 손대고 긴 이미지 줄은 절대
메모리에 올려 출력/검사하지 않는 방식으로) 특정 줄 앞에 새 줄을 끼워넣는다.

comic-1-8.html  : 각 슬라이드(<article class="slide">...)의 </article> 바로 앞에 삽입
comic-9-16.html : 각 .panel-title-row 줄 바로 다음 줄에 삽입
"""
import os

BASE = os.path.join(os.path.dirname(__file__), "..", "learn")

AUDIO_BOX = (
    '<div style="margin:14px 18px 10px;padding:12px 14px;background:#eef6ff;'
    'border:1px solid #c9ddf1;border-radius:10px;">'
    '<div style="font-weight:800;font-size:13px;color:#14385f;margin-bottom:6px;">'
    '<span class="chap-audio-icon">🔊</span> 교수자 음성 강의 · 핵심 메시지 낭독 (약 2분)</div>'
    '<audio controls preload="none" style="width:100%;" src="assets/smart-tourism-city-coauthor-ch{cid}-script.mp3">'
    '브라우저가 오디오 재생을 지원하지 않습니다.</audio></div>\n'
)

# 각 페이지의 </style> 직전에 한 번만 넣는 깜박이 애니메이션 — insert_chapter_audio.py를
# 새 파일에 처음 돌릴 때를 위해 남겨 둔다(이미 돌린 두 파일은 별도 1회성 스크립트로 추가함).
BLINK_KEYFRAMES = (
    "<style>@keyframes chapAudioBlink{0%,100%{opacity:1}50%{opacity:.25}}"
    ".chap-audio-icon{display:inline-block;animation:chapAudioBlink 1.1s ease-in-out infinite}</style>\n"
)

# comic-1-8.html: slide 번호 -> 챕터 id
SLIDE_MAP_1_8 = {1: "1-1", 2: "1-2", 3: "1-3", 4: "1-4", 5: "1-5", 6: "2-1", 7: "2-2", 8: "2-3"}
# comic-9-16.html: N/8 순번 -> 챕터 id
PANEL_MAP_9_16 = {1: "2-4", 2: "2-5", 3: "3-1", 4: "3-2", 5: "3-3", 6: "3-4", 7: "3-5", 8: "3-6"}


def insert_before_closing_article(path, slide_map):
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    slide_order = []  # queue of chapter ids in the order slides open
    out = []
    current_slide_n = 0
    for line in lines:
        stripped = line.strip()
        if stripped.startswith('<article class="slide"'):
            current_slide_n += 1
        if stripped == "</article>" and current_slide_n in slide_map:
            cid = slide_map[current_slide_n]
            out.append(AUDIO_BOX.format(cid=cid))
        out.append(line)

    with open(path, "w", encoding="utf-8") as f:
        f.writelines(out)
    print(f"[ok] {os.path.basename(path)} — inserted {len(slide_map)} audio boxes before </article>")


def insert_after_panel_title_row(path, panel_map):
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    out = []
    seen = 0
    for line in lines:
        out.append(line)
        if 'class="panel-title-row"' in line and "<h2>" in line:
            seen += 1
            if seen in panel_map:
                cid = panel_map[seen]
                out.append(AUDIO_BOX.format(cid=cid))

    with open(path, "w", encoding="utf-8") as f:
        f.writelines(out)
    print(f"[ok] {os.path.basename(path)} — inserted {len(panel_map)} audio boxes after panel-title-row")


if __name__ == "__main__":
    insert_before_closing_article(
        os.path.join(BASE, "smart-tourism-city-coauthor-comic-1-8.html"), SLIDE_MAP_1_8
    )
    insert_after_panel_title_row(
        os.path.join(BASE, "smart-tourism-city-coauthor-comic-9-16.html"), PANEL_MAP_9_16
    )
