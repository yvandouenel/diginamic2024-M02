class Cat {
  constructor(name) {
    this.name = name;
  }
  meow() {
    console.log(`${this.name} dit : Miawoooooo `);
  }
  eat() {
    console.log(`${this.name} mange `);
  }
}

// Instanciation d'un chat
const f = new Cat("Felix");
const p = new Cat("Praline");

// Appel de la méthode meow
f.meow();
p.meow();
f.eat();
p.eat();
console.log(`f`, f);

// Pour savoir si les deux méthodes meow sont stockées au même endroit
if (p.meow === f.meow) {
  console.log(`Les deux méthodes sont stockées au même endroit`);
} else console.log(`Les deux méthodes ne sont pas stockées au même endroit`);

//if (f.gooner) console.log(`F est un gooner`);