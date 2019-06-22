class Car{
    constructor(model){
        this.model = model;
    }
    setCar(){
        let changed = prompt('Insert a new car model:');
        this.model = changed;
    }
    getCar(){
        console.log(`This car is a ${this.model}`);
    }
}

const car1 = new Car('Uno');