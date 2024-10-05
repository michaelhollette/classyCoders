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

module.exports = {
    SoftwareEngineer,
}