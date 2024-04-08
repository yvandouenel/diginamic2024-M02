import Dom from "../utils/Dom.js";
export default class TodoList extends Dom {
  constructor() {
    super();
    // Référence à l'élément du DOM existant qui a pour id "root"
    this.rootDom = document.getElementById("root");

    this.render();
  }
  render() {
    // Création du formulaire
    const form = this.createMarkup("form", "", this.rootDom);
    // Création de l'élément section qui comprend toutes les tâches
    this.sectionListTasks = this.createMarkup("section", "", this.rootDom);
  }
}