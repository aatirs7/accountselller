(function () {
  function makeTicketId() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const rand = Math.random().toString(16).slice(2, 8).toUpperCase();
    return `${y}${m}${day}-${rand}`;
  }

  const ticket = makeTicketId();

  const ticketInput = document.getElementById("ticketId");
  const ticketDisplay = document.getElementById("ticketDisplay");
  const acceptedAt = document.getElementById("termsAcceptedAt");

  if (ticketInput) ticketInput.value = ticket;
  if (ticketDisplay) ticketDisplay.textContent = ticket;

  // Timestamp (client-side) for evidence trail in Netlify Forms submission
  if (acceptedAt) acceptedAt.value = new Date().toISOString();
})();
