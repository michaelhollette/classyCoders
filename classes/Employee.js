class Employee {
    #salary
    #isHired
    static #allEmployees = []
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employee.#allEmployees.push(this)
    }
    getSalary(){
        return this.#salary
    }
    setSalary(amount){
        if(amount < 0){
            throw new Error('Salary cannot be negative')
        }
        this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if(command === "hire"){
            this.#isHired = true;
        }
        if(command === "fire"){
            this.#isHired = false;
        }
    }
    static getEmployees(){
        return Employee.#allEmployees

    }
    static getTotalSalary() {
        let totalPayroll = 0;
        for (let index in Employee.#allEmployees) {
            totalPayroll += Employee.#allEmployees[index].getSalary();
        }
        return totalPayroll;
    }

        
}


module.exports = {
    Employee,
}


