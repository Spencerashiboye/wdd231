// Hamburger Menu Toggle 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
})

// Footer Content 
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Course List Array
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, category: "WDD" },
    { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true, category: "CSE" },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false, category: "WDD" },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: false, category: "CSE" },
];