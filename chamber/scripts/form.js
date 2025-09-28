// Set timestamp on page load
window.addEventListener("DOMContentLoaded", () => {
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toLocaleString();
  }
});

    const yearSpan = document.getElementById("current-year");
    const modifiedSpan = document.getElementById("last-modified");
  // Footer timestamp setup
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;



 document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual submission
    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
      localStorage.setItem(key, value);
    }
    window.location.href = "thank-you.html";
  });