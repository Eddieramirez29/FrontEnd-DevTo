const buttonSendPost = document.getElementById('Post-form');
 // Recuperar el nombre de usuario almacenado en localStorage
 const nombreUsuario = localStorage.getItem('nombreUsuario');


buttonSendPost.addEventListener("submit", async (e) => {
  e.preventDefault();
  //Almacenar el usuario del post
   localStorage.setItem('usuarioPost', nombreUsuario);
   localStorage.setItem('tituloPost', e.target.name.value);//Almacenar el titulo
   localStorage.setItem('contenidoPost', e.target.content.value);//Almacenar el contenido del post
   console.log(e.target.name.value);
 
   console.log(e.target.content.value);

  console.log(nombreUsuario)
 

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
     
    //Ir a la página de creación de posts
  window.location.href = "http://127.0.0.1:5500/index.html";

   }
 
   
   catch (error)
  {
    
    
    console.error("Error al realizar la solicitud:", error);
  }
});

