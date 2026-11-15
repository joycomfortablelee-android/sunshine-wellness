/* 양식별 워크북 공용 — 표 행 되살리기
   · 「삭제」 직후 「↶ 방금 지운 줄 되살리기」 (지운 자리 그대로)
   · 「↺ 기본 항목 되살리기」 — 처음 들어 있던 기본 항목 중 지금 없는 것만 다시 넣는다(쓴 행은 그대로)
   본문 스크립트의 CFG · state · renderTables · save 를 그대로 쓴다. */
(function () {
  'use strict';
  if (typeof CFG === 'undefined' || typeof state === 'undefined' || typeof renderTables !== 'function') return;
  var last = null;
  var clone = function (x) { return JSON.parse(JSON.stringify(x)); };
  var firstKey = function (t) { return t.columns && t.columns[0] ? t.columns[0].key : null; };
  function missing(t) {
    var k = firstKey(t); if (!k) return [];
    var have = new Set((state.tables[t.key] || []).map(function (r) { return String(r[k] || '').trim(); }));
    return (t.rows || []).filter(function (r) { var v = String(r[k] || '').trim(); return v && !have.has(v); });
  }
  function mk(box, cls, txt, fn) {
    var b = document.createElement('button'); b.type = 'button'; b.className = 'btn secondary ' + cls; b.textContent = txt;
    b.addEventListener('click', fn);
    var mini = box.querySelector('.mini'); box.insertBefore(b, mini || null); return b;
  }
  function paint() {
    [].forEach.call(document.querySelectorAll('.table-actions'), function (box) {
      var add = box.querySelector('[data-add]'); if (!add) return;
      var key = add.dataset.add, t = CFG.tables.find(function (x) { return x.key === key; }); if (!t) return;
      var u = box.querySelector('.rr-undo') || mk(box, 'rr-undo', '↶ 방금 지운 줄 되살리기', function () {
        if (!last) return; var arr = state.tables[last.k];
        arr.splice(Math.min(last.i, arr.length), 0, last.r); last = null; renderTables(); save(); paint();
      });
      u.hidden = !(last && last.k === key);
      var d = box.querySelector('.rr-def') || mk(box, 'rr-def', '↺ 기본 항목 되살리기', function () {
        var m = missing(t); if (!m.length) return;
        m.forEach(function (r) { var c = clone(r); c._months = c._months || []; state.tables[key].push(c); });
        renderTables(); save(); paint();
      });
      var n = missing(t).length; d.hidden = !n; if (n) d.textContent = '↺ 기본 항목 되살리기 (' + n + ')';
    });
  }
  // 본문의 삭제 처리보다 먼저(캡처 단계) 지울 줄을 기억해 둔다
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('button.delete[data-del]'); if (!b) return;
    var k = b.dataset.del, i = Number(b.dataset.row), arr = state.tables[k];
    if (arr && arr.length > 1 && arr[i]) last = { k: k, i: i, r: clone(arr[i]) };
    setTimeout(paint, 0);
  }, true);
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('[data-add]')) setTimeout(paint, 0); });
  var st = document.createElement('style');
  st.textContent = '.table-actions .rr-undo{background:#fff4e5;color:#8a5212;border:1px solid #f0c98a}.table-actions .rr-def{background:#eef6ff;color:#1f5f99;border:1px solid #bcd6f0}';
  document.head.appendChild(st);
  paint();
})();
