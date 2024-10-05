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
    promote(newJobTitle, newSalary, newDepartment){
        this.position = newJobTitle
        this.setSalary(newSalary)
        this.department = newDepartment

    }
}


module.exports = {
    Manager,
}