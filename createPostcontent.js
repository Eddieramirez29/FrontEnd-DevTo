document.addEventListener("DOMContentLoaded", function () {
  const nombreUsuario = localStorage.getItem('usuarioPost');
  const titulo = localStorage.getItem('tituloPost');
  const contenido = localStorage.getItem('contenidoPost');

  // Obtén una referencia al elemento con el id "comments"
  const divContenedor = document.getElementById("comments");

  // Verifica si nombreUsuario es válido
  if (nombreUsuario) {
    // Crea un nuevo elemento <div> con la clase "card"
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Crea un nuevo elemento <div> con la clase "card-body"
    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    // Crea elementos <h5>, <h6> y <p> con las clases correspondientes
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = titulo;

    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle mb-2 text-muted";
    cardSubtitle.textContent = "Usuario: " + nombreUsuario;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = "Contenido: " + contenido;

    // Agrega los elementos al árbol DOM en el orden correcto
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardSubtitle);
    cardBodyDiv.appendChild(cardText);
    cardDiv.appendChild(cardBodyDiv);
    divContenedor.appendChild(cardDiv);
  } else {
    console.error("El nombre de usuario no está definido en localStorage.");
  }
});
