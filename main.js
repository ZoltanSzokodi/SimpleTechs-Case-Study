// All properties in ES6 classes are public by default and can be examined or modified outside the class.
// ES6 Unprotected Property Scenario ===============
class PersonOne {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.savings = 0.0;
  }
  getName() {
    return this.name;
  }
  setName(value) {
    this.name = value;
  }
  getAge() {
    return this.age;
  }
  setAge(value) {
    this.age = value;
  }
  givePaycheck() {
    this.savings += 100;
  }
  hasEnoughSavings(value) {
    return this.savings >= value;
  }
}

// INSTANTIATE a NEW PERSON
const peter_parker = new PersonOne('Peter Parker', 18, 220);

// We can access and modify without the getters and setters - no protection
peter_parker.name = 'Mike Jennings'; // Changed without the setter function
peter_parker.age = 14;
peter_parker.savings = 0;

console.log('============== ES6 ==============');
console.log(`${peter_parker.getName()} is ${peter_parker.getAge()} years old`);
console.log(
  `Does ${peter_parker.getName()} have enough savings? - ${peter_parker.hasEnoughSavings(
    200
  )}`
);
console.log(' ');

// In OOP languages such as JAVA it is permitted to have Private fields in classes. Until recently this was not possible in ES6 classes, so we had to use workarounds such as Closures to protect values from re-assigment. Some devs use an underscore prefix for fields that should be "Private", but there’s nothing to prevent them from being modified outside the object.

// ES6 SOLUTION (Hiding Props with Closures) ====================================================
// To isolate property from external modification one can use an inner closure that closes over the constructor parameters.
// The closure approach has an advantage of true privacy but the cost is that for each Person instance new closures have to be created (the functions inside the Person constructor).
class PersonTwo {
  constructor(name, age, savings) {
    this.getName = function () {
      return name;
    };
    this.setName = function (value) {
      return (name = value);
    };
    this.getAge = function () {
      return age;
    };
    this.setAge = function (value) {
      return (age = value);
    };
    this.givePaycheck = function () {
      return (savings += 100);
    };
    this.hasEnoughSavings = function (value) {
      return savings >= value;
    };
  }
}

// INSTANTIATE a NEW PERSON
const john_smith = new PersonTwo('John Smith', 22, 100);

// We can only access and modify with the getters and setters
john_smith.setName('John Bauer'); // Change name
john_smith.setAge(34); // Change age
john_smith.givePaycheck(); // +100
john_smith.givePaycheck(); // +100

john_smith.name = 'Jack';
john_smith.age = 26; // No effect on the class insatnce only a simple property set (normal JS behavior)

console.log('===== ES6 with Closures =====');
console.log(`${john_smith.getName()} is ${john_smith.getAge()} years old`);
console.log(
  `Does ${john_smith.getName()} have enough savings? - ${john_smith.hasEnoughSavings(
    200
  )}`
);
console.log(' ');

// ES10 SOLUTION (Private Class Fields) ===========================================
// In ES2019, private class fields are defined using a hash # prefix
//ES6 class definitions were simplistic. ES2019 class fields require less code, aid readability, and enable some interesting object-oriented programming possibilities.

class PersonThree {
  // #name => Private field (need getters and setters to acces and modify)
  // name => Public field (can be accessed and modified outside)
  #name = undefined;
  #age = undefined;
  #savings = 0;

  getName() {
    return this.#name;
  }
  setName(value) {
    this.#name = value;
  }
  getAge() {
    return this.#age;
  }
  setAge(value) {
    this.#age = value;
  }
  givePaycheck() {
    this.#savings += 100;
  }
  hasEnoughSavings(value) {
    return this.#savings >= value;
  }
}

// INSTANTIATE a NEW PERSON
let jane_dough = new PersonThree();

jane_dough.setName('Jane Dough'); // Add name
jane_dough.setAge('22'); // Add age
jane_dough.givePaycheck(); // +100

console.log('===== ES10 with Private Fields =====');
console.log(`${jane_dough.getName()} is ${jane_dough.getAge()} years old`);
console.log(
  `Does ${jane_dough.getName()} have enough savings? - ${jane_dough.hasEnoughSavings(
    200
  )}`
);
console.log('======================================');
