function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        };

    }
    class Teacher extends Person {
        constructor(subject) {
            super(this.name, this.email);
            this.subject = subject;
        }
    }

    return { Person, Teacher };
}