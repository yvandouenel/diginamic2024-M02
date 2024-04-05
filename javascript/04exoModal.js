//
const button = document.querySelector("button");
const sectionModal = document.querySelector("#my-modal");

// Gestion des événements
button.addEventListener("click", function () {
  sectionModal.classList.toggle("modal-show");
})

sectionModal.addEventListener("click", function (e) {
  console.log(e.target.id);
  if (e.target.id === "my-modal") sectionModal.classList.toggle("modal-show");
})
