class Person {
  // Public Field
  id = undefined;
  // Private Fields
  #name = undefined;
  #age = undefined;
  #savings = 0;

  // Getters & Setters
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
  getID() {
    return this.id;
  }
  setID(value) {
    this.id = value;
  }
  givePaycheck() {
    this.#savings += 100;
  }
  hasEnoughSavings(value) {
    if (value === 0) return null;
    return this.#savings >= value;
  }
}

export default Person;
