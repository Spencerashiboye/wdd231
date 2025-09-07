// Hamburger Menu Toggle 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

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
        courseCard.innerHTML = `
            <h3>${course.code}: ${course.name}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseList.appendChild(courseCard);
    });

    // Calculate Total Credits
    const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('credit-count').textContent = totalCredits;
}
// Filter Courses
function filterCourses(category) {
    let filteredCourses;
    if (category === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === category);
    }
    displayCourses(filteredCourses);
}
