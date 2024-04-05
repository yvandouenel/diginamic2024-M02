const h1 = document.createElement("h1");
h1.innerText = "Titre de niveau 1"
document.body.appendChild(h1);


h1.addEventListener("click", function () {
  console.log(`Click sur h1 en utilisant addEventListener 1`);
})
h1.addEventListener("click", function () {
  console.log(`Click sur h1 en utilisant addEventListener 2`);
})
// ATTENTION, ICI IL FAUT DONNER UNE Référence à UNE FONCTION ET NON PAS L'APPEL D'UNE FONCTION
h1.addEventListener("click", faireLeCafe);

function faireLeCafe() {
  console.log(`El cafe esta listo mi vida !!`);
}