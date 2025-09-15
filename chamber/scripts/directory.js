document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members");
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");
  const yearSpan = document.getElementById("current-year");
  const modifiedSpan = document.getElementById("last-modified");

  // Footer timestamp setup
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

  let membersData = [];

  // Load member data from JSON
  async function loadMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to fetch members data.");
      membersData = await response.json();
      displayMembers(membersData, "grid");
    } catch (error) {
      console.error("Error loading members:", error);
      membersContainer.innerHTML = `<p class="error">Unable to load member data.</p>`;
    }
  }

  // Display members based on view type
  function displayMembers(members, view = "grid") {
    membersContainer.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");

      if (view === "grid") {
        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}" width="100" />
          <h2>${member.name}</h2>
          <p>${member.tagline}</p>
          <p>📍 ${member.address}</p>
          <p>📞 ${member.phone}</p>
          <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${["Member", "Silver", "Gold"][member.membership - 1]}</p>
        `;
      } else {
        card.innerHTML = `
          <h2>${member.name}</h2>
          <p>${member.tagline}</p>
          <p>📍 ${member.address}</p>
          <p>📞 ${member.phone}</p>
          <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>Membership Level: ${["Member", "Silver", "Gold"][member.membership - 1]}</p>
        `;
      }

      membersContainer.appendChild(card);
    });
  }

  // Toggle view buttons
  if (gridBtn && listBtn && membersContainer) {
    gridBtn.addEventListener("click", () => {
      membersContainer.classList.add("grid-view");
      membersContainer.classList.remove("list-view");
      displayMembers(membersData, "grid");
    });

    listBtn.addEventListener("click", () => {
      membersContainer.classList.add("list-view");
      membersContainer.classList.remove("grid-view");
      displayMembers(membersData, "list");
    });
  }

  loadMembers();
});
