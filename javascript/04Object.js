class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} mange `);
  }
}
class Cat extends Animal {
  meow() {
    console.log(`${this.name} dit : Miawoooooo `);
  }
}
class Dog extends Animal {
  constructor(name, job) {
    super(name);
    this.job = job;
  }
  woof() {
    console.log(`${this.name} dit : Ouaf, attention je suis un ${this.job}`);
  }
}
class AllergicDog extends Dog {
  constructor(name, job, allergy) {
    super(name, job);
    this.allergy = allergy;
  }
  eat() {
    super.eat();
    console.log(`mais pas de ${this.allergy}`);
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

const filou = new Dog("Filou", "chien de garde");
const zazie = new Dog("Zazie", "chien de berger");
const nash = new AllergicDog("Nash", "chien de concours", "lait");
filou.woof();
zazie.woof();
zazie.eat();
nash.eat();
// Pour savoir si les deux méthodes meow sont stockées au même endroit
if (p.meow === f.meow) {
  console.log(`Les deux méthodes sont stockées au même endroit`);
} else console.log(`Les deux méthodes ne sont pas stockées au même endroit`);

//if (f.gooner) console.log(`F est un gooner`);
// instanciation d'une chaîne de caractères 
/**
 * Création d'une classe (une fonction constructeur) MyString qui hérite de la classe String
 * Réécriture (polymorphisme) de la méthdoe toUpperCase
 */
class MyString extends String {
  toUpperCase() {
    return `<strong>${super.toUpperCase()}</strong>`
  }
}
const testString = new MyString("Test de String");
const testStringUpper = testString.toUpperCase();
console.log(`testStringUpper`, testStringUpper);
