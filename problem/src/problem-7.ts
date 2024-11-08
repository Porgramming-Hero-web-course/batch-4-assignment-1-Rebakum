//problem-7
class Car {
    constructor(public make: string, public model: string, public year: number) {}

    getCarAge(currentYear: number = new Date().getFullYear()): number {
        return currentYear - this.year;
    }
}

// Sample Input
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge()); // Output: 6 (assuming current year is 2024)