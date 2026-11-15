/* 브라우저 음성(speechSynthesis · TTS) 속도 조절 — learn/ 페이지 공용
   · 페이지가 정한 기본 속도(utterance.rate)에 0.8× · 1× · 1.25× · 1.5×를 곱해 읽는다
   · 고른 속도는 audio-speed.js와 같은 저장값(sw-audio-rate)을 써서 mp3 음성과 함께 맞춰진다
   · 화면 오른쪽 아래에 작은 속도 띠 하나 */
(function () {
  'use strict';
  if (!('speechSynthesis' in window) || window.__swTtsSpeed) return;
  window.__swTtsSpeed = true;
  var KEY = 'sw-audio-rate', RATES = [0.8, 1, 1.25, 1.5];
  function get() { try { var v = parseFloat(localStorage.getItem(KEY)); return RATES.indexOf(v) >= 0 ? v : 1; } catch (e) { return 1; } }
  var mult = get();
  var speak = window.speechSynthesis.speak.bind(window.speechSynthesis);
  window.speechSynthesis.speak = function (u) {
    try { if (u && !u.__swBase) { u.__swBase = u.rate || 1; } if (u) u.rate = Math.max(0.1, Math.min(10, (u.__swBase || 1) * mult)); } catch (e) {}
    return speak(u);
  };
  function set(r) {
    mult = r; try { localStorage.setItem(KEY, String(r)); } catch (e) {}
    [].forEach.call(document.querySelectorAll('.sw-tts button'), function (b) { b.setAttribute('aria-pressed', String(parseFloat(b.dataset.r) === r)); });
    [].forEach.call(document.querySelectorAll('audio'), function (a) { try { a.playbackRate = r; a.defaultPlaybackRate = r; } catch (e) {} });
  }
  function ui() {
    var st = document.createElement('style');
    st.textContent = '.sw-tts{position:fixed;right:12px;bottom:12px;z-index:80;display:inline-flex;align-items:center;gap:3px;background:#fff;border:1px solid #d5dfe9;border-radius:99px;padding:5px 9px;box-shadow:0 3px 12px rgba(23,54,93,.15);font:12px/1 "Malgun Gothic","Noto Sans KR",sans-serif}' +
      '.sw-tts i{font-style:normal;font-size:11px;font-weight:800;color:#5d7385;margin-right:3px}' +
      '.sw-tts button{border:1px solid #c3d0dd;background:#fff;color:#33475b;border-radius:99px;padding:3px 7px;font:inherit;font-size:11.5px;font-weight:800;cursor:pointer}' +
      '.sw-tts button[aria-pressed="true"]{background:#17365d;border-color:#17365d;color:#fff}' +
      '@media print{.sw-tts{display:none!important}}';
    document.head.appendChild(st);
    var g = document.createElement('span'); g.className = 'sw-tts'; g.setAttribute('role', 'group'); g.setAttribute('aria-label', '음성 읽기 속도');
    var l = document.createElement('i'); l.textContent = '🔊 속도'; g.appendChild(l);
    RATES.forEach(function (r) {
      var b = document.createElement('button'); b.type = 'button'; b.dataset.r = r; b.textContent = r + '×'; b.title = r + '배속으로 읽기';
      b.setAttribute('aria-pressed', String(r === mult));
      b.addEventListener('click', function (e) { e.preventDefault(); set(r); });
      g.appendChild(b);
    });
    document.body.appendChild(g);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ui); else ui();
})();
