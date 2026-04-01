(function () {
  var el = function (id) {
    return document.getElementById(id);
  };

  var fmtMoney = function (n) {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(n);
  };

  var fmtNum = function (n, d) {
    d = d === undefined ? 1 : d;
    return new Intl.NumberFormat("en-CA", { maximumFractionDigits: d, minimumFractionDigits: d }).format(n);
  };

  var retainerInput = el("roi-retainer");
  var leadsInput = el("roi-leads");
  var closeInput = el("roi-close");
  var jobInput = el("roi-job");
  var leadsSlider = el("roi-leads-slider");
  var closeSlider = el("roi-close-slider");
  var tierBtns = document.querySelectorAll("[data-tier-retainer]");

  function readNum(input, fallback) {
    var v = parseFloat(String(input.value).replace(/[^0-9.-]/g, ""));
    return Number.isFinite(v) ? v : fallback;
  }

  function calc() {
    var retainer = Math.max(0, readNum(retainerInput, 2500));
    var leads = Math.max(1, readNum(leadsInput, 22));
    var closePct = Math.min(100, Math.max(0, readNum(closeInput, 25)));
    var jobVal = Math.max(0, readNum(jobInput, 11000));

    if (leadsSlider) {
      leadsSlider.value = String(Math.min(Math.max(leads, 1), 100));
    }
    if (closeSlider) {
      closeSlider.value = String(Math.min(Math.max(closePct, 5), 60));
    }

    var jobs = leads * (closePct / 100);
    var revenue = jobs * jobVal;
    var roiX = retainer > 0 ? revenue / retainer : 0;
    var cpl = leads > 0 ? retainer / leads : 0;
    var breakEven = jobVal > 0 ? Math.ceil(retainer / jobVal) : null;
    var netGain = revenue - retainer;
    var retainerPct = revenue > 0 ? Math.min(100, (retainer / revenue) * 100) : 0;

    el("out-jobs").textContent = jobs % 1 === 0 ? String(jobs) : fmtNum(jobs, 1);
    el("out-revenue").textContent = fmtMoney(revenue);
    el("out-roi").textContent =
      roiX >= 1 ? Math.round(roiX) + "×" : (roiX > 0 ? fmtNum(roiX, 1) + "×" : "—");
    el("out-cpl").textContent = leads > 0 ? fmtMoney(cpl) : "—";
    el("out-breakeven").textContent =
      breakEven != null ? String(breakEven) + " job" + (breakEven === 1 ? "" : "s") : "—";
    el("out-net").textContent = fmtMoney(netGain);

    var netEl = el("out-net");
    if (netEl) {
      netEl.style.color = netGain >= 0 ? "var(--accent)" : "#f87171";
    }

    var barFill = el("roi-bar-fill");
    var barPct = el("roi-bar-pct");
    if (barFill && barPct) {
      barFill.style.width = Math.min(100, retainerPct) + "%";
      barPct.textContent = revenue > 0 ? Math.round(retainerPct) + "% of revenue" : "—";
    }
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

  if (leadsSlider) {
    leadsSlider.addEventListener("input", function () {
      leadsInput.value = leadsSlider.value;
      tierBtns.forEach(function (b) {
        b.classList.remove("is-active");
      });
      calc();
    });
  }

  if (closeSlider) {
    closeSlider.addEventListener("input", function () {
      closeInput.value = closeSlider.value;
      tierBtns.forEach(function (b) {
        b.classList.remove("is-active");
      });
      calc();
    });
  }

  calc();
})();
