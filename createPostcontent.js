document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = localStorage.getItem('usuarioPost');
    const titulo = localStorage.getItem('tituloPost');
    const contenido = localStorage.getItem('contenidoPost');
  
    // Obtén una referencia al elemento con el id "comments"
    const divContenedorNombreUsuario = document.getElementById("comments");
    const divContenedorTitulo = document.getElementById("comments");
    const divContenedorContenido= document.getElementById("comments");
  
    // Verifica si nombreUsuario es válido
    if (nombreUsuario) {
      // Crea un nuevo elemento <p>
      const parrafoNombreUsuario = document.createElement("p");
      const parrafoNombreTitulo = document.createElement("p");
      const parrafoNombreContenido = document.createElement("p");
  
      // Agrega contenido al párrafo utilizando la variable nombreUsuario
      parrafoNombreUsuario.textContent = nombreUsuario;
      parrafoNombreTitulo.textContent = titulo;
      parrafoNombreContenido.textContent = contenido;
  
      // Agrega el párrafo al div
      divContenedorNombreUsuario.appendChild(parrafoNombreUsuario);
      divContenedorTitulo.appendChild(parrafoNombreTitulo);
      divContenedorContenido.appendChild(parrafoNombreContenido);
    } else {
      console.error("El nombre de usuario no está definido en localStorage.");
    }
  });
  