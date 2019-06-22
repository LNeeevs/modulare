class Car {
    constructor(model) {
        this.model = model;
    }

    setCar() {
        const changed = prompt('Insert a new car model:');
        this.model = changed;
    }

    getCar() {
        console.log(`This car is a ${this.model}`);
    }
}

const car1 = new Car('Uno');
car1.getCar();
car1.setCar();
car1.getCar();
