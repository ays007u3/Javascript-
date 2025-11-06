document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (name === "" || email === "" || message === "") {
    errorMsg.textContent = "⚠️ Please fill out all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "❌ Please enter a valid email address.";
    return;
  }

  successMsg.textContent = "✅ Message sent successfully!";
  document.getElementById("contactForm").reset();
});
