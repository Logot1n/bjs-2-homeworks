function Student(name, gender, age) {
    this.marks = [];
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty("marks") === false) {
        console.log("Добавление невозможно, пользователь отчислен");
    } else {
        this.marks = [...marks];
    }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
