// =============================
// Union Types
// =============================

// 1) printId
function printId(id: number | string): void {
  if (typeof id === "number") {
    console.log(`ID number: ${id}`);
  } else {
    console.log(`ID string: ${id}`);
  }
}

// 2) getLength
function getLength(arg: string | string[]): number {
  return typeof arg === "string" ? arg.length : arg.length;
}

// 3) boolean check
function checkValue(value: number | string): boolean {
  if (typeof value === "number") {
    return value !== 0;
  } else {
    return value !== "";
  }
}

// 4) getArea
type Circle = { kind: "circle"; radius: number };
type Rectangle = { kind: "rectangle"; width: number; height: number };

function getArea(shape: Circle | Rectangle): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}

// 5) combine
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Arguments must be both numbers or both strings");
}

// =============================
// Literal Types
// =============================

// 1) move
function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction} direction`);
}

// 2) role
let role: "admin" | "user" | "guest";
role = "admin";
console.log(`Your role is: ${role}`);

// 3) trafficLight
function trafficLight(color: "red" | "yellow" | "green"): string {
  if (color === "red") return "Stop";
  if (color === "yellow") return "Wait";
  return "Go";
}

// 4) makeRequest
function makeRequest(method: "GET" | "POST" | "PUT" | "DELETE"): void {
  console.log(`Making ${method} request`);
}

// 5) rollDice
function rollDice(): "one" | "two" | "three" | "four" | "five" | "six" {
  const values = ["one", "two", "three", "four", "five", "six"] as const;
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

// =============================
// პატარა ტესტები
// =============================
printId(42);
printId("xyz");

console.log(getLength("hello"));
console.log(getLength(["a", "b", "c"]));

console.log(checkValue(0));
console.log(checkValue(10));
console.log(checkValue(""));
console.log(checkValue("hi"));

console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "rectangle", width: 4, height: 6 }));

console.log(combine(5, 7));
console.log(combine("Hello ", "World"));

move("left");
console.log(trafficLight("green"));
makeRequest("POST");
console.log(rollDice());


// =============================
// 1) Person class
// =============================
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// =============================
// 2) Animal, Dog, Cat
// =============================
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow!");
  }
}

// =============================
// 3) BankAccount
// =============================
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds or invalid amount!");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// =============================
// 4) MathHelper
// =============================
class MathHelper {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
}

// =============================
// 5) User with getter/setter
// =============================
class User {
  private _password: string = "";

  set password(newPass: string) {
    if (newPass.length >= 6) {
      this._password = newPass;
      console.log("Password set successfully!");
    } else {
      console.log("Password must be at least 6 characters long!");
    }
  }

  get password(): string {
    return "**"; // hides the actual password
  }
}

// =============================
// ტესტები
// =============================

// Person
const p1 = new Person("David", 15);
p1.greet();

// Animal
const d = new Dog("Rex");
d.makeSound();

const c = new Cat("Murka");
c.makeSound();

// BankAccount
const account = new BankAccount();
account.deposit(100);
account.withdraw(40);
console.log("Final balance:", account.getBalance());

// MathHelper (object-ის გარეშე)
console.log(MathHelper.add(5, 7));
console.log(MathHelper.subtract(10, 4));
console.log(MathHelper.multiply(3, 6));

// User
const u = new User();
u.password = "123";       // short → reject
u.password = "12345678";  // valid
console.log(u.password);  // always "**"
