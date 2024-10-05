const Employee = require('./Employee.js')
class Manager extends Employee {
    #employeesManaged;
    constructor(name,position, salary, department){
        super(name, position, salary)
            this.department = department
            this.#employeesManaged = []

        
        
    }
    getEmployeesManaged(){
        return this.#employeesManaged
    }
    setEmployeesManaged(employee){
        this.#employeesManaged.push(employee)
    }    
}
const jenna = new Manager("Jenna", "Head of Engineers", 120000, "Software Engineering", 10);
console.log(jenna.getEmployeesManaged()); // []
const preston = new Employee("Preston", "Engineer", 100000);
jenna.setEmployeesManaged(preston);
console.log(jenna.getEmployeesManaged());


module.exports = {
    Manager,
}