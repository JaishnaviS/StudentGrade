let studentData = {};
let subjects = []; // Array to store subjects dynamically

function goToPage2() {
    const name = document.getElementById('name').value;
    const regNumber = document.getElementById('regNumber').value;
    const dob = document.getElementById('dob').value;

    studentData = {
        name: name,
        regNumber: regNumber,
        dob: dob
    };

    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    
    // Dynamically add subject input fields based on user input
    const numSubjects = parseInt(prompt("Enter number of subjects:", "5")); // Default to 5 subjects
    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            const subjectName = prompt(`Enter subject ${i} name:`);
            subjects.push(subjectName);
            const markup = `
                <label for="subject${i}">${subjectName}:</label>
                <input type="number" id="subject${i}" min="0" max="100" required><br><br>
            `;
            document.getElementById('marksForm').insertAdjacentHTML('beforeend', markup);
        }
    }
}

function calculateGrades() {
    const gradesBody = document.getElementById('gradesBody');
    gradesBody.innerHTML = ''; // Clear previous data

    subjects.forEach(subject => {
        const marks = parseInt(document.getElementById(`subject${subjects.indexOf(subject) + 1}`).value);
        let grade;

        if (marks >= 80) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 40) {
            grade = 'C';
        } else {
            grade = 'F';
        }

        const row = `
            <tr>
                <td>${studentData.name}</td>
                <td>${studentData.regNumber}</td>
                <td>${studentData.dob}</td>
                <td>${grade}</td>
            </tr>
        `;
        gradesBody.insertAdjacentHTML('beforeend', row);
    });

    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}
