 const params = new URLSearchParams(window.location.search);
    document.getElementById("firstName").textContent = params.get("firstName");
    document.getElementById("lastName").textContent = params.get("lastName");
    document.getElementById("email").textContent = params.get("email");
    document.getElementById("phone").textContent = params.get("phone");
    document.getElementById("organization").textContent = params.get("organization");
    document.getElementById("timestamp").textContent = params.get("timestamp");

document.addEventListener("DOMContentLoaded", () => {
    const fields = ["First Name", "Last Name", "Email", "Mobile Phone", "Organization Name"];
    fields.forEach(field => {
      const value = localStorage.getItem(field);
      document.getElementById(field.replace(/\s+/g, '-').toLowerCase()).textContent = value || "Not provided";
    });
  });


const el = document.getElementById("first-name");
if (el) {
  el.textContent = localStorage.getItem("First Name") || "Not provided";
}
