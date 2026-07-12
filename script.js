/* ============================================================
   [SPA NAME] — landing interactions
   ============================================================ */

/* ---------- reveal-on-scroll ---------- */
(function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
})();

/* ---------- lead form ---------- */
(function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;
  const success = document.getElementById("form-success");
  const successDetail = document.getElementById("success-detail");

  // These labels appear in the confirmation message after submit.
  // Keep the keys in sync with the <option value="..."> attributes in index.html,
  // and set the text to match your service names.
  const SERVICE_LABELS = {
    "service-1": "[SERVICE 1 NAME]",
    "service-2": "[SERVICE 2 NAME]",
    "service-3": "[SERVICE 3 NAME]",
    other: "[OTHER OPTION]",
  };

  const validators = {
    name: (v) => (v.trim().length >= 2 ? "" : "Please tell us your name."),
    phone: (v) =>
      /^[+()\-\s\d]{7,}$/.test(v.trim()) ? "" : "Enter a valid phone number.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address.",
    service: (v) => (v ? "" : "Choose what you're curious about."),
  };

  function setError(name, message) {
    const field = form.elements[name].closest(".field");
    const errEl = form.querySelector(`[data-error-for="${name}"]`);
    if (errEl) errEl.textContent = message;
    if (field) field.classList.toggle("invalid", Boolean(message));
    return !message;
  }

  // Clear a field's error as soon as the user fixes it.
  Object.keys(validators).forEach((name) => {
    const input = form.elements[name];
    if (!input) return;
    const revalidate = () => {
      if (form.elements[name].closest(".field").classList.contains("invalid")) {
        setError(name, validators[name](input.value));
      }
    };
    input.addEventListener("input", revalidate);
    input.addEventListener("change", revalidate);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;
    let ok = true;
    Object.keys(validators).forEach((name) => {
      const valid = setError(name, validators[name](form.elements[name].value));
      if (!valid) {
        ok = false;
        if (!firstInvalid) firstInvalid = form.elements[name];
      }
    });

    if (!ok) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const data = {
      name: form.elements.name.value.trim(),
      phone: form.elements.phone.value.trim(),
      email: form.elements.email.value.trim(),
      service: form.elements.service.value,
    };

    submitLead(data);

    // Warm confirmation state.
    const firstName = data.name.split(" ")[0];
    successDetail.textContent =
      `Thanks, ${firstName} — we'll be in touch within one business day about ` +
      `${SERVICE_LABELS[data.service] || "your visit"}.`;
    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  /* --------------------------------------------------------
     Backend hook — no server yet.
     Swap this out for a real fetch() to your CRM / endpoint.
     e.g.  return fetch("/api/leads", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
     -------------------------------------------------------- */
  function submitLead(data) {
    console.log("[SPA NAME] lead captured:", data);
  }
})();
