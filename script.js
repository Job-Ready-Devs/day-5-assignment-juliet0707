console.log("Hello, World! Welcome to the Student Management App.");

const form = document.querySelector('#add-student form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const studentList = document.querySelector('#student-list ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture and trim inputs
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate inputs
    if (!name || !email) {
        alert('Both fields are required!');
        return;
    }
        addStudent(name, email);

    nameInput.value = '';
    emailInput.value = '';

    alert("Student Added Successfully!");
});
    function addStudent(name, email) {
const listItem = document.createElement('li');
listItem.textContent = `${name} - ${email}`; // Format the student data
studentList.appendChild(listItem); // Add the list item to the student list
}
function renderStudentList(students) {
// Clear the current list
studentList.innerHTML = '';

// Loop through the student array and add each to the list
students.forEach(student => {
    addStudent(student.name, student.email);
});
}
const sampleStudents = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' }
];
renderStudentList(sampleStudents);    
const students = []; // Array to store student data