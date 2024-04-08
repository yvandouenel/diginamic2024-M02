export default class Task {
  constructor(id, name, done, parent) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.parent = parent;

    // Affichage
    this.render();
  }

  render() {
    // création des éléments du DOM constitutifs de la tâche
    const articleElt = this.createMarkup("article", "", this.parent);
    const h2Elt = this.createMarkup("h2", this.name, articleElt);

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