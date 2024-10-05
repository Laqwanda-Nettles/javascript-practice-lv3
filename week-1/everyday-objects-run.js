import { Car, Phone, Book, Laptop, Backpack } from "./everyday-objects.js";

// use node everyday-objects.js to try this out.
// Create instances
const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // Output: "2020 Toyota Corolla"
myCar.startEngine(); // Output: "The engine of Toyota Corolla is now running."

const myPhone = new Phone("Samsung", "A15", 67);
myPhone.makeCall(1234567);
myPhone.batteryStatus();

const myBook = new Book("Green Eggs and Ham", "Dr. Suess", 15);
console.log(myBook.getSummary());
myBook.readPage();

const myLaptop = new Laptop("Lenovo", "Thinkpad", 16);
myLaptop.bootUp();
myLaptop.shutDown();

const myBackpack = new Backpack("JanSport", "Navy Blue", 26);
myBackpack.open();
myBackpack.checkCapacity();
