/* ===========================================================================
   "Linear.com, est. 2000" -- script.js
   Enhancement only. The page is fully complete and correct without this file.
   No analytics, no trackers, no external calls. Vanilla JS.
   =========================================================================== */
(function () {
  "use strict";

  /* -------------------------------------------------------------------------
     "Linear Users Around the World" counter: a period-correct faux odometer.
     Starts from a fixed large base and bumps by a small random amount on each
     load, rendered with thousands separators. Purely decorative.
     ------------------------------------------------------------------------- */
  var BASE_USERS = 74142101;

  function renderUserCounter() {
    var el = document.getElementById("user-counter");
    if (!el) { return; }
    var bump = Math.floor(Math.random() * 900) + 1; // small per-load increment
    el.textContent = (BASE_USERS + bump).toLocaleString("en-US");
  }

  document.addEventListener("DOMContentLoaded", renderUserCounter);
})();
