/* 모든 음성 속도 조절 — learn/ 페이지 공용
   · 페이지의 <audio> 옆마다 속도 버튼(0.8× · 1× · 1.25× · 1.5×)을 붙인다
   · 🔊 버튼처럼 new Audio()로 재생하는 음성도 같은 속도로 재생한다(play 직전에 속도 적용)
   · 고른 속도는 이 브라우저에 기억(다른 페이지에서도 같은 속도) */
(function () {
  'use strict';
  var KEY = 'sw-audio-rate', RATES = [0.8, 1, 1.25, 1.5];
  function get() { try { var v = parseFloat(localStorage.getItem(KEY)); return RATES.indexOf(v) >= 0 ? v : 1; } catch (e) { return 1; } }
  var rate = get();
  var all = []; // 이 페이지에서 재생된 오디오
  var P = HTMLMediaElement.prototype, play = P.play;
  P.play = function () {
    try { this.playbackRate = rate; this.defaultPlaybackRate = rate; if ('preservesPitch' in this) this.preservesPitch = true; } catch (e) {}
    if (all.indexOf(this) < 0) all.push(this);
    return play.apply(this, arguments);
  };
  function set(r) {
    rate = r; try { localStorage.setItem(KEY, String(r)); } catch (e) {}
    all.concat([].slice.call(document.querySelectorAll('audio'))).forEach(function (a) { try { a.playbackRate = r; a.defaultPlaybackRate = r; } catch (e) {} });
    [].forEach.call(document.querySelectorAll('.sw-rate button'), function (b) { b.setAttribute('aria-pressed', String(parseFloat(b.dataset.r) === r)); });
  }
  function group() {
    var g = document.createElement('span'); g.className = 'sw-rate'; g.setAttribute('role', 'group'); g.setAttribute('aria-label', '재생 속도');
    var l = document.createElement('i'); l.textContent = '속도'; g.appendChild(l);
    RATES.forEach(function (r) {
      var b = document.createElement('button'); b.type = 'button'; b.dataset.r = r; b.textContent = r + '×';
      b.setAttribute('aria-pressed', String(r === rate)); b.title = r + '배속으로 듣기';
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); set(r); });
      g.appendChild(b);
    });
    return g;
  }
  function css() {
    var s = document.createElement('style');
    s.textContent = '.sw-rate{display:inline-flex;align-items:center;gap:2px;margin:4px 6px;vertical-align:middle;font:12px/1 "Malgun Gothic","Noto Sans KR",sans-serif;white-space:nowrap}' +
      '.sw-rate i{font-style:normal;font-size:11px;font-weight:800;color:#5d7385;margin-right:3px}' +
      '.sw-rate button{border:1px solid #c3d0dd;background:#fff;color:#33475b;border-radius:99px;padding:3px 7px;font:inherit;font-size:11.5px;font-weight:800;cursor:pointer;line-height:1.2}' +
      '.sw-rate button:hover{border-color:#17365d}' +
      '.sw-rate button[aria-pressed="true"]{background:#17365d;border-color:#17365d;color:#fff}' +
      '.sw-rate.float{position:fixed;left:12px;bottom:12px;z-index:70;background:#fff;border:1px solid #d5dfe9;border-radius:99px;padding:5px 9px;box-shadow:0 3px 12px rgba(23,54,93,.15);margin:0}' +
      '@media print{.sw-rate{display:none!important}}';
    document.head.appendChild(s);
  }
  function init() {
    css();
    var aus = document.querySelectorAll('audio');
    [].forEach.call(aus, function (a) {
      if (a.dataset.swRate) return; a.dataset.swRate = '1';
      a.playbackRate = rate; a.defaultPlaybackRate = rate;
      a.insertAdjacentElement('afterend', group());
    });
    // 나중에 그려지는 <audio>에도 붙인다
    new MutationObserver(function () {
      [].forEach.call(document.querySelectorAll('audio:not([data-sw-rate])'), function (a) { a.dataset.swRate = '1'; a.playbackRate = rate; a.defaultPlaybackRate = rate; a.insertAdjacentElement('afterend', group()); });
    }).observe(document.body, { childList: true, subtree: true });
    // <audio> 태그 없이 🔊 버튼으로만 재생하는 페이지는 화면 왼쪽 아래에 속도 버튼 하나
    // 페이지가 <body data-no-rate-float> 로 끄면 띄우지 않는다(관광벤처 — 2026-11-15 사용자 요청)
    if (!document.body.hasAttribute('data-no-rate-float') && /new Audio\(/.test([].map.call(document.scripts, function (x) { return x.textContent; }).join(''))) { var g = group(); g.classList.add('float'); document.body.appendChild(g); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
