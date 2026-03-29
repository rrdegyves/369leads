(function () {
  var yearEl = document.getElementById("campaign-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var trigger = item.querySelector(".faq-trigger");
    var panel = item.querySelector(".faq-panel");
    if (!trigger || !panel) return;

    trigger.addEventListener("click", function () {
      var open = item.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      document.querySelectorAll(".faq-item").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          var t = other.querySelector(".faq-trigger");
          if (t) t.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  var form = document.getElementById("roof-lead-form");
  if (!form) return;

  var errEl = document.getElementById("form-error");

  function showError(msg) {
    if (!errEl) return;
    errEl.textContent = msg;
    errEl.classList.add("is-visible");
  }

  function clearError() {
    if (!errEl) return;
    errEl.textContent = "";
    errEl.classList.remove("is-visible");
  }

  form.addEventListener("submit", function (e) {
    clearError();

    var homeowner = form.querySelector("#homeowner");
    if (homeowner && homeowner.value === "no") {
      e.preventDefault();
      showError("We schedule inspections with the property owner. If you rent, please have the owner submit this form or call us.");
      homeowner.focus();
      return;
    }

    var webhook = (form.getAttribute("data-webhook") || "").trim();
    if (!webhook) return;

    e.preventDefault();

    var fd = new FormData(form);
    var payload = {};
    fd.forEach(function (v, k) {
      payload[k] = v;
    });

    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      mode: "cors",
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Webhook failed");
        window.location.href = form.getAttribute("action") || "thank-you.html";
      })
      .catch(function () {
        showError("Something went wrong sending your request. Please call the number at the top of the page—we’re here to help.");
      });
  });
})();
