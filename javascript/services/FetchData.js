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
  static async addTask(new_task) {
    return fetch(FetchData.url,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(new_task)
      })
      .then(response => {
        console.log(`status dans le post`, response.status);
        if (response.status != 201) {
          throw new Error("Pb dans addTask")
        } else return response.json();
      })
      .then(task => {
        console.log(`task :`, task);
        return task;
      })
      .catch(error => {
        console.log(`Erreur attrapée dans addTask` + error);
      })

  }
}

/*
fetch("http://localhost:3000/posts",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
*/