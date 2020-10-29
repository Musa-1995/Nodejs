// Excercise 1
 
 class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
   let date = new Date();
   return date.getFullYear() - this.year;
  }
}

let myCar1 = new Car1("Ford", 2014);
document.getElementById("Excercise 1").innerHTML =
"My car is " + myCar1.age() + " years old.";

// Excercise 2

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar2 = new Car2("Ford", 2014);
document.getElementById("Excercise 2").innerHTML=
"My car is " + myCar2.age(year) + " years old.";

// // Excercise 3

class Car3 {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
   // date = new Date();  // This will not work
   let date = new Date(); // This will work
   return date.getFullYear() - this.year;
  }
}

myCar3 = new Car3("Ford", 2014);
document.getElementById("Excercise 3").innerHTML =
"My car is " + myCar3.age() + " years old.";
 
// Excercise 4

class Car4 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car4 {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar4 = new Model("Ford", "Mustang");
document.getElementById("Excercise 4").innerHTML = myCar4.show();

// Excercise 5

class Car5 {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar5 = new Car5("Ford");

document.getElementById("Excercise 5").innerHTML = myCar5.cnam;

// Excercise 6

class Car6 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar6 = new Car6("Ford");

document.getElementById("Excercise 6").innerHTML = myCar6.carname;

// Excercise 7

class Car7 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

let myCar7 = new Car7("Ford");
myCar7.carname = "Volvo";
document.getElementById("Excercise 7").innerHTML = myCar7.carname;

// Excercise 8

class Car8 {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar8 = new Car8("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("Excercise 8").innerHTML = Car8.hello();

// Excercise 9

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("Excercise 9").innerHTML = Car.hello();