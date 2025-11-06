let students = [];

function addStudent() {
  const name = document.getElementById('name').value.trim();
  const grade = parseFloat(document.getElementById('grade').value);

  if (!name || isNaN(grade) || grade < 0 || grade > 100) {
    alert("Please enter a valid name and grade (0-100).");
    return;
  }

  students.push({ name, grade });
  document.getElementById('name').value = '';
  document.getElementById('grade').value = '';
  displayStudents();
  calculateStats();
}

function displayStudents() {
  const list = document.getElementById('studentList');
  list.innerHTML = '';
  students.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name}: ${student.grade}`;
    list.appendChild(li);
  });
}

function calculateStats() {
  if (students.length === 0) {
    document.getElementById('average').textContent = '';
    document.getElementById('passed').textContent = '';
    return;
  }

  const total = students.reduce((sum, s) => sum + s.grade, 0);
  const average = (total / students.length).toFixed(2);
  const passed = students.filter(s => s.grade >= 40).length;

  document.getElementById('average').textContent = `Average Grade: ${average}`;
  document.getElementById('passed').textContent = `Passed Students: ${passed}/${students.length}`;
}
