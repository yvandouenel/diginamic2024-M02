"use strict";
import Task from "./components/Task.js";

const rootDom = document.getElementById("root");
// Création de l'élément section qui comprend toutes les tâches
const sectionListTasks = createMarkup("section", "", rootDom)

// Création d'une tâche
const firstTask = new Task(123, "Apprendre le js", false, sectionListTasks);
console.log(`firstTask`, firstTask);

/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Object} attributes
   * @returns domElement
   */
function createMarkup(markupname, text, parent, attributes = {}) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }
  return markup;
}