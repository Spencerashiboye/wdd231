// Course List Array
const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true, category: "WDD" },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: false, category: "WDD" },
    { code: "WDD 231", name: "Advanced Web Development", credits: 2, completed: false, category: "WDD" },
    { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: false, category: "CSE" }
];

// Dynamic Footer Content (updated for current date: September 08, 2025, 04:02 PM GMT)
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear(); // 2025
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Display Courses
function displayCourses(courseArray) {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseCard.innerHTML = `<h3>${course.code.replace(' ', '')}</h3>`; // e.g., "WDD130"
        courseList.appendChild(courseCard);
    });

    const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('credit-count').textContent = totalCredits;
}

// Filter Courses with Event Listener
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            let filteredCourses;
            if (category === 'all') {
                filteredCourses = courses;
            } else {
                filteredCourses = courses.filter(course => course.category === category);
            }
            displayCourses(filteredCourses);
        });
    });
});

// Initial Display
displayCourses(courses);
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
});