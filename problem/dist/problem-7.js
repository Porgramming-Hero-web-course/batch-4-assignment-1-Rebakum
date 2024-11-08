"use strict";
//problem-7
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(currentYear = new Date().getFullYear()) {
        return currentYear - this.year;
    }
}
// Sample Input
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); // Output: 6 (assuming current year is 2024)
