const Employee = require('./Employee.js')
class SalesPerson extends Employee{
    #totalSales
    constructor(name, position, salary, clients, totalSales){
        super(name, position, salary)
        this.clients = clients
        this.#totalSales = 0
    }
    getSalesNumbers(){
        return this.#totalSales
    }
    makeSale(amount){
        this.#totalSales += amount
        
    }
   
}



module.exports = {
    SalesPerson,
}