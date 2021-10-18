var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.fullname = fname + " " + lname;
    }
    Employee.prototype.display = function () {
        console.log('Employee fullname:' + this.fullname);
    };
    return Employee;
}());
var Student = /** @class */ (function () {
    function Student(fname, lname) {
        this.fullname = fname.toUpperCase() + " " + lname.toUpperCase();
    }
    Student.prototype.display = function () {
        console.log('Student fullname:' + this.fullname);
    };
    return Student;
}());
var emp1 = new Employee("Arunima", "Gupta");
emp1.display();
var stud1 = new Student("John", "Steve");
stud1.display();
