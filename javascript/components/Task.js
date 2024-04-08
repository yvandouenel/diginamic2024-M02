export default class Task {
  constructor(id, name, done, parent) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.parent = parent;

    // Affichage et récupération des références vers les éléments du DOM constitutifs de la tâches
    this.domElts = this.render();

    // Gestion des événements
    this.manageEvents();
  }
  manageEvents() {
    this.domElts.buttonDeleteElt.addEventListener("click", () => {
      console.log(`bouton delete cliqué`);
      this.domElts.articleElt.remove();
    })
    this.domElts.buttonValidateElt.addEventListener("click", () => {
      console.log(`bouton validate cliqué`);
      this.done = !this.done;
      console.log(this);
      this.domElts.h2Elt.classList.toggle("done");
    })
  }
  render() {
    // création des éléments du DOM constitutifs de la tâche
    const articleElt = this.createMarkup("article", "", this.parent);
    const h2Elt = this.createMarkup("h2", this.name, articleElt);
    const buttonDeleteElt = this.createMarkup("button", "Supprimer", articleElt);
    const buttonValidateElt = this.createMarkup("button", "Validate", articleElt);
    return ({
      articleElt,
      h2Elt,
      buttonDeleteElt,
      buttonValidateElt
    })
  }
  /**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object} attributes
   * @returns domElement
   */
  createMarkup(markupname, text, parent, attributes = {}) {
    const markup = document.createElement(markupname);
    markup.textContent = text;
    parent.appendChild(markup);
    for (key in attributes) {
      markup.setAttribute(key, attributes[key]);
    }
    return markup;
  }
}