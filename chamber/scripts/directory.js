document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members");
  const gridBtn = document.getElementById("gridView");
  const listBtn = document.getElementById("listView");

  async function loadMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) throw new Error("Failed to fetch members data.");
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error("Error loading members:", error);
      membersContainer.innerHTML = `<p class="error">Unable to load member data.</p>`;
    }
  }

  function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" width="100" />
        <h2>${member.name}</h2>
        <p>${member.tagline}</p>
        <p>📍 ${member.address}</p>
        <p>📞 ${member.phone}</p>
        <p>🌐 <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: ${["Member", "Silver", "Gold"][member.membership - 1]}</p>
      `;
      membersContainer.appendChild(card);
    });
  }

  if (gridBtn && listBtn && membersContainer) {
    gridBtn.addEventListener("click", () => {
      membersContainer.classList.add("grid-view");
      membersContainer.classList.remove("list-view");
    });

    listBtn.addEventListener("click", () => {
      membersContainer.classList.add("list-view");
      membersContainer.classList.remove("grid-view");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("current-year");
  const modifiedSpan = document.getElementById("last-modified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
});

  loadMembers();
  });

