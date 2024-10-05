const { Employee } = require("./classes/Employee.js")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
const preston = new Employee("Preston", "Engineer", 100000);
preston.setSalary(105000);
console.log(preston.getSalary()); // 105000
console.log(preston.getStatus()); // true;
preston.setStatus("fire");
console.log(preston.getStatus()); // false;



console.log(Employee.getEmployees()); // [ Manager { }, SoftwareEngineer { }, SalesPerson { }]
console.log(Employee.getTotalSalary()); // 310000


const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);
console.log(jenna.getEmployeesManaged()); // []

jenna.setEmployeesManaged(preston);
console.log(jenna.getEmployeesManaged());


const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])
console.log(malik.getSalesNumbers()); // 0
malik.makeSale(10500);
malik.makeSale(20000);
console.log(malik.getSalesNumbers()); // 30500

const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguage("C#"); 
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]


module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
