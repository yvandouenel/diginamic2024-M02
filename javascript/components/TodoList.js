import Dom from "../utils/Dom.js";
export default class TodoList extends Dom {
  constructor() {
    super();
    // Référence à l'élément du DOM existant qui a pour id "root"
    this.rootDom = document.getElementById("root");

    this.domElts = this.render();

    // Gestion des événements
    this.manageEvents();
  }
  manageEvents() {
    this.domElts.form.addEventListener("submit", (event) => {
      // Supprimer l'appel de la requête http via l'action du formulaire avec la méthode GET
      event.preventDefault();
      console.log(`Dans submit addEventListener`);
    })
  }
  render() {
    // Création du formulaire
    const form = this.createMarkup("form", "", this.rootDom);
    const label = this.createMarkup("label", "Tâche : ", form, { "for": "task" });
    const input = this.createMarkup("input", "", form, { "id": "task", type: "text" });
    const buttonSubmit = this.createMarkup("button", "Ajouter la tâche", form, { "id": "task", type: "submit" });
    // Création de l'élément section qui comprend toutes les tâches
    this.sectionListTasks = this.createMarkup("section", "", this.rootDom);

    return {
      form
    }
  }
}