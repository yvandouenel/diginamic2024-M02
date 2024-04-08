async function loadToken() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.2) {
        resolve("SDddsiopdfqsdfoeeld;tedDD");// Envoi au then "Glop" qui sera récupéré dans le paramètre
      } else {
        reject("Erreur dans loadToken");
      }
    }, 2000)
  })
}
async function loadUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (Math.random() > 0.2) {
        resolve({ name: "toto", id: 1 });// Envoi au then l'objet qui représente l'utilisateur
      } else {
        reject("Erreur dans loadUser");
      }
    }, 2000)
  })
}
/* loadToken()
  // si la promesse est tenue, on va dans le then
  .then(token => {
    console.log(`msg`, token);
    return loadUser(token); // On chaine les promesses 
  })
  .then(user => {
    console.log(`user`, user);
    // Cas favorable deux fois : lors de l'appel de loadToken puis de loadUser
  })
  // Si la promesse n'est pas tenue, on passe dans le catch
  .catch(error => {
    console.error(error);
  }) */
console.log(`après l'appel de loadToken`);

// Nouvelle syntaxe 
try {
  const token = await loadToken();
  console.log(`token : `, token);
  const user = await loadUser(token);
  console.log(`user : `, user);
} catch (error) {
  console.error(`Erreur attrapée : `, error);
}
