// Factory function for creating a Circle object
function createCircle(radius) {
  return {
    radius,
    getArea() {
      return Math.PI * radius * radius;
    },
    getCircumference() {
      return 2 * Math.PI * radius;
    },
  };
}

// Class for creating a Circle object
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Factory function for creating a Dog object
function createDog(name, breed) {
  return {
    name,
    breed,
    bark() {
      return `${this.name} says woof!`;
    },
  };
}

// Class for creating a Dog object
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    return `${this.name} says woof!`;
  }
}

class Food {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  eat() {
    return `${this.name} are my favorite type of ${this.type}!`;
  }
}

// Exporting all functions and classes at the end of the file
export { createCircle, Circle, createDog, Dog, Food };
