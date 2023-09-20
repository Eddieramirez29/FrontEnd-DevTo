const buttonSendPost = document.getElementById('Post-form');



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
         user: "e.target.user.value"
      })
      
    } );
     
    // //Ir a la página de creación de confirmación de registro de usuario.
    // window.location.href = "http://127.0.0.1:5500/registerCompleted.html";
   }
 
   
   catch (error)
  {
    
    
    console.error("Error al realizar la solicitud:", error);
  }
});

