/**
 * Fonction constructeur de Cat
 * @param {string} name 
 * @return {Cat} retourne une instance de Cat
 */
function Cat(name) {
  this.name = name;
}
// Ajout de la propriété meow au prototype de la fonction consructeur Cat
// meow devient accessible à toutes les instances issues de la fonction constructeur Cat
Cat.prototype.meow = function () {
  console.log(`${this.name} dit : Miawoooooo `);
}
Cat.prototype.eat = function () {
  console.log(`${this.name} mange `);
}
Cat.prototype.gooner = true;
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

if (f.gooner) console.log(`F est un gooner`);