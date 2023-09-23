const buttonRegister = document.getElementById('Register-form');



buttonRegister.addEventListener("submit", async (e) => {
  e.preventDefault();
  

  try {
    await fetch("http://localhost:27027/signup", {
      method: "POST",
      headers:
       {
      "Content-Type": "application/json"
        },
        //Se envía la información como formato JSON.
      body: JSON.stringify({
        name: e.target.name.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
      
    } );
    localStorage.setItem('usuarioPost', e.target.name.value);
    
    //Ir a la página de creación de confirmación de registro de usuario.
    window.location.href = "http://127.0.0.1:5500/registerCompleted.html";
   }
 
   
   catch (error)
  {
    
    
    console.error("Error al realizar la solicitud:", error);
  }
});

