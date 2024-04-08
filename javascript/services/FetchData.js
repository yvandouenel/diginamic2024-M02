export default class FetchData {
  static url = 'http://localhost:3000/tasks';

  static async loadTasks() {
    return fetch(FetchData.url)
      .then(response => {
        if (response.status != 200) {
          throw new Error("Pb dans loadTasks")
        } else return response.json();
      })
      .then(tasks => {
        console.log(`tasks :`, tasks);
        return tasks;
      })
      .catch(error => {
        console.log(`Erreur attrapée` + error);
      })
  }
}