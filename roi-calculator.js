(function () {
  var el = function (id) {
    return document.getElementById(id);
  };

  var fmtMoney = function (n) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  };

  var fmtNum = function (n, d) {
    d = d === undefined ? 1 : d;
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: d, minimumFractionDigits: d }).format(n);
  };

  var retainerInput = el("roi-retainer");
  var leadsInput = el("roi-leads");
  var closeInput = el("roi-close");
  var jobInput = el("roi-job");
  var tierBtns = document.querySelectorAll("[data-tier-retainer]");

  function readNum(input, fallback) {
    var v = parseFloat(String(input.value).replace(/[^0-9.-]/g, ""));
    return Number.isFinite(v) ? v : fallback;
  }

  function calc() {
    var retainer = Math.max(1, readNum(retainerInput, 2500));
    var leads = Math.max(0, readNum(leadsInput, 40));
    var closePct = Math.min(100, Math.max(0, readNum(closeInput, 25)));
    var jobVal = Math.max(1, readNum(jobInput, 11000));

    var jobs = leads * (closePct / 100);
    var revenue = jobs * jobVal;
    var roiX = revenue / retainer;
    var cpl = leads > 0 ? retainer / leads : 0;
    var breakEven = jobVal > 0 ? Math.ceil(retainer / jobVal) : 0;
    var netGain = revenue - retainer;

    el("out-jobs").textContent = fmtNum(jobs, 1);
    el("out-revenue").textContent = fmtMoney(revenue);
    el("out-roi").textContent = fmtNum(roiX, 1) + "×";
    el("out-cpl").textContent = leads > 0 ? fmtMoney(cpl) : "—";
    el("out-breakeven").textContent = String(breakEven) + " job" + (breakEven === 1 ? "" : "s");
    el("out-net").textContent = fmtMoney(netGain);
  }

  tierBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var r = btn.getAttribute("data-tier-retainer");
      var l = btn.getAttribute("data-tier-leads");
      if (r) retainerInput.value = r;
      if (l) leadsInput.value = l;
      tierBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      calc();
    });
  });

  [retainerInput, leadsInput, closeInput, jobInput].forEach(function (input) {
    if (!input) return;
    input.addEventListener("input", function () {
      tierBtns.forEach(function (b) {
        b.classList.remove("is-active");
      });
      calc();
    });
  });

  calc();
})();
