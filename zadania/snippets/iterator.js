const user = {
  friends: ["Leonard", "Stan", "Sheldon"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index >= this.friends.length) {
          return { done: true };
        }
        return { value: this.friends[index++] };
      }
    };
  }
};

class User {
  constructor() {
    this.friends = ["Leonard", "Stan", "Sheldon"];
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index >= this.friends.length) {
          return { done: true };
        }
        return { value: this.friends[index++] };
      }
    };
  }
}

const Seba = new User();

console.log(...Seba);
console.log(...user);
