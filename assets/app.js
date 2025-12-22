(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const tierSelect = document.getElementById("tier");
  const tierHint = document.getElementById("tierHint");
  const clearBtn = document.getElementById("clearBtn");

  const tierHints = {
    "5k": "Typical: starter affiliate accounts. Fastest availability.",
    "10k": "Typical: higher follower base. Availability varies.",
    "50k+": "Premium tier. Limited supply; vetting may apply.",
    "Custom": "Describe your exact requirements; pricing/availability varies.",
  };

  function setTier(tier) {
    if (!tierSelect) return;
    tierSelect.value = tier;
    if (tierHint) tierHint.textContent = tierHints[tier] || "";
    const requestSection = document.getElementById("request");
    if (requestSection) requestSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Tier cards click → prefill form
  document.querySelectorAll(".tier[data-tier]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tier = btn.getAttribute("data-tier");
      setTier(tier);
    });
  });

  // Select change → update hint
  if (tierSelect) {
    tierSelect.addEventListener("change", (e) => {
      const tier = e.target.value;
      if (tierHint) tierHint.textContent = tierHints[tier] || "";
    });
  }

  // Clear button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const form = document.querySelector('form[name="account_request"]');
      if (form) form.reset();
      if (tierHint) tierHint.textContent = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
