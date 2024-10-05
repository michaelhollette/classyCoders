class Employee {
    #salary
    #isHired
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
    }
    getSalary(){
        return this.#salary
    }
    setSalary(amount){
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

    
}

const preston = new Employee("Preston", "Engineer", 100000);
preston.setSalary(105000);
console.log(preston.getSalary()); // 105000
console.log(preston.getStatus()); // true;
preston.setStatus("fire");
console.log(preston.getStatus()); // false;
module.exports = {
    Employee,
}


module.exports = Employee