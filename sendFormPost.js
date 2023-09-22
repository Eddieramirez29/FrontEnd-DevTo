const buttonSendPost = document.getElementById('Post-form');

 // Recuperar el nombre de usuario almacenado en localStorage
 const nombreUsuario = localStorage.getItem('nombreUsuario');


buttonSendPost.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  console.log(e.target.name.value);
  console.log(e.target.content.value);

  try {
    await fetch("http://localhost:27027/posts", {
      method: "POST",
      headers:
       {
      "Content-Type": "application/json"
        },
        //Se envía la información como formato JSON del formulario del post
      body: JSON.stringify({
        title: e.target.name.value,
        content: e.target.content.value,
         user: nombreUsuario
      }) 
      
    } );
     
    // //Ir a la página de creación de posts depués determinar de escribir el post
     window.location.href = "http://127.0.0.1:5500/index.html";
   }
 
   
   catch (error)
  {
    
    
    console.error("Error al realizar la solicitud:", error);
  }
});

