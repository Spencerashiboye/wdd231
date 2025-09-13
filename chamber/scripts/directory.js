// Fetch and display members
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        displayMembers(members, 'grid');
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

// Display members based on view type
function displayMembers(members, viewType) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = '';
    memberList.className = `member-${viewType}`;

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = `member-card membership-level-${member.membershipLevel}`;
        card.innerHTML = `
            <img src="${member.image}" alt="Photo of ${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>${member.description}</p>
        `;
        memberList.appendChild(card);
    });
}

// Toggle view type
function setupViewToggle() {
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');

    gridViewBtn.addEventListener('click', () => {
        loadMembers(); // Reload with grid view
    });

    listViewBtn.addEventListener('click', () => {
        loadMembers().then(() => {
            document.getElementById('member-list').className = 'member-list';
        });
    });
}

// Dynamic footer content
function updateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear(); // 2025
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadMembers();
    setupViewToggle();
    updateFooter();

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
});

// Last Modification Date
document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString();

// Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();