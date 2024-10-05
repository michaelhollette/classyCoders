const Employee = require('./Employee.js')

class SoftwareEngineer extends Employee {
    #programmingLanguages
    constructor(name, position, salary, programmingLanguages){
        super(name, position,salary)
        this.#programmingLanguages = programmingLanguages
    }
    getProgrammingLanguages(){
        return this.#programmingLanguages
    }
    setProgrammingLanguage(language){
        this.#programmingLanguages.push(language)

    }
  
}
const programmer = new SoftwareEngineer("Becca", "Senior Software Engineer", 100000, ["JavaScript", "Java", "Python"]);
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python"]
programmer.setProgrammingLanguage("C#"); 
console.log(programmer.getProgrammingLanguages()); // ["JavaScript", "Java", "Python", "C#"]

module.exports = {
    SoftwareEngineer,
}