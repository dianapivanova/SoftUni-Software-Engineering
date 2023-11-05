function storeAndPrintGrades(data) {
    let studentGrades = new Map();

    for (let entry of data) {
        let [name, ...grades] = entry.split(' ');
        grades = grades.map(Number);

        if (studentGrades.has(name)) {
            // If the student already exists, add the new grades to the existing ones
            studentGrades.set(name, studentGrades.get(name).concat(grades));
        } else {
            // If it's a new student, set their grades
            studentGrades.set(name, grades);
        }
    }

    let sortedStudents = Array.from(studentGrades).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sortedStudents) {
        let total = grades.reduce((acc, grade) => acc + grade, 0);
        let average = (total / grades.length).toFixed(2);
        console.log(`${name}: ${average}`);
    }
}
schoolGrades(['Lilly', 'Josh 5 3 3 3', 'Josh 3 3 3 3', 'Josh 3 3 3 3']
)