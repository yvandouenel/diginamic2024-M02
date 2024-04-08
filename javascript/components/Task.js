import Dom from "../utils/Dom.js";
export default class Task extends Dom {
  constructor(id, name, done, parent) {
    super();
    this.id = id;
    this.name = name;
    this.done = done;
    this.parent = parent;

    // Affichage et récupération des références vers les éléments du DOM constitutifs de la tâches
    this.domElts = this.render();

    // Gestion des événements
    this.manageEvents();

    console.log(`task créée : `, this);
  }
  manageEvents() {
    this.domElts.buttonDeleteElt.addEventListener("click", () => {
      console.log(`bouton delete cliqué`);
      this.domElts.articleElt.remove();
    })
    // Gestion du clic sur le bouton validé
    this.domElts.buttonValidateElt.addEventListener("click", () => {
      console.log(`bouton validate cliqué`);
      this.done = !this.done;
      this.domElts.h2Elt.classList.toggle("done");
      this.parent.appendChild(this.domElts.articleElt);
      // Gestion du label
      this.domElts.buttonValidateElt.innerText = (this.done) ? "Invalider" : "Valider";
    })
  }
  render() {
    // création des éléments du DOM constitutifs de la tâche
    const articleElt = this.createMarkup("article", "", this.parent);
    const h2Elt = this.createMarkup("h2", this.name, articleElt);
    const buttonDeleteElt = this.createMarkup("button", "Supprimer", articleElt);
    const buttonValidateElt = this.createMarkup("button", "Valider", articleElt);
    return ({
      articleElt,
      h2Elt,
      buttonDeleteElt,
      buttonValidateElt
    })
  }

}