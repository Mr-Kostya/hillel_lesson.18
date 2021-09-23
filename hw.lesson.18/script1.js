"use strict";

class Group {
    constructor() {
        this._studentsArray = [];
    }

    get students() {
        return this._studentsArray;
    }

    addStudent(student) {
        if (!this._validateStudent(student)) {
            console.error("NOT A STUDENT");
            return;
        }
        this._studentsArray.push(student);
    }

    getAverageMark() {
        const marks = [];
        this._studentsArray.forEach((student) => {
            student.marks.forEach((mark) => marks.push(mark));
        });
        let value = 0;
        marks.forEach((mark) => (value += mark));
        return value / marks.length;
    }

    _validateStudent(student) {
        if (student && typeof student !== "object") {
            return false;
        } else if (
            !student.name ||
            !student.marks ||
            !Array.isArray(student.marks)
        ) {
            return false;
        }

        return true;
    }
}

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

const group = new Group();
group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));

console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);

console.log(group.getAverageMark());
console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6);

group.students = [new Student("John", [10, 10, 5, 10])];
console.log(group.students.length === 3);
