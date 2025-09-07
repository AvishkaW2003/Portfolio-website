// Simple form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you, your message has been sent!");
  this.reset();
});
