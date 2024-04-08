import Dom from "../utils/Dom.js";
import Task from "./Task.js";

export default class TodoList extends Dom {
  constructor() {
    super();
    // Référence à l'élément du DOM existant qui a pour id "root"
    this.rootDom = document.getElementById("root");

    // Création des éléments du DOM
    this.domElts = this.render();

    // Gestion des événements
    this.manageEvents();
  }
  manageEvents() {
    this.domElts.form.addEventListener("submit", (event) => {
      console.log(`Dans submit addEventListener`);
      // Supprimer l'appel de la requête http via l'action du formulaire avec la méthode GET
      event.preventDefault();

      // Récupération des données envoyées par le formulaire
      const taskName = this.domElts.input.value;
      if (taskName) {
        // Création d'une tâche
        new Task(1, taskName, false, this.domElts.sectionListTasks);
        this.domElts.input.value = "";
      }
    })
  }
  render() {
    // Création du formulaire
    const form = this.createMarkup("form", "", this.rootDom);
    const label = this.createMarkup("label", "Tâche : ", form, { "for": "task" });
    const input = this.createMarkup("input", "", form, { "id": "task", type: "text" });
    const buttonSubmit = this.createMarkup("button", "Ajouter la tâche", form, { "id": "task", type: "submit" });
    // Création de l'élément section qui comprend toutes les tâches
    const sectionListTasks = this.createMarkup("section", "", this.rootDom);

    return {
      form,
      input,
      sectionListTasks
    }
  }
}