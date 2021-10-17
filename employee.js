"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Employee code: " + this.empCode + ", Employee name: " + this.empName);
    };
    return Employee;
}());
exports.Employee = Employee;
