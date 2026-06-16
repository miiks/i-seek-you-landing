/* ===========================================================================
   "Linear, est. 2004" -- script.js
   Enhancement only. The page is fully complete and correct without this file.
   No analytics, no trackers, no external calls. Vanilla JS.
   =========================================================================== */
(function () {
  "use strict";

  /* -------------------------------------------------------------------------
     Visitor counter: period-correct faux hit counter. Starts from a fixed
     large base and bumps by a small random amount on each load. Rendered in
     the footer in a monospace odometer style. Purely decorative.
     ------------------------------------------------------------------------- */
  var BASE_HITS = 4193207;

  function renderVisitorCounter() {
    var el = document.getElementById("visitor-counter");
    if (!el) { return; }
    var bump = Math.floor(Math.random() * 40) + 1; // small per-load increment
    var total = BASE_HITS + bump;
    // Zero-pad to a fixed 7-digit width so the odometer never reflows.
    el.textContent = String(total).padStart(7, "0");
  }

  // The "Today in the Linear community" date stays a fixed malformed string in
  // the HTML ("June 3, 119"); no JS clock is needed and none is added.

  document.addEventListener("DOMContentLoaded", renderVisitorCounter);
})();
