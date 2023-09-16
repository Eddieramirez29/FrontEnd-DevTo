const buttonRegister = document.getElementById('Register-form');

buttonRegister.addEventListener("submit", async (e) => {
  e.preventDefault();
  

  try {
    console.log(e.target.name.value);
  console.log(e.target.lastName.value);
  console.log(e.target.email.value);
  console.log(e.target.password.value);
    const respuesta =  await fetch('http://127.0.0.1:3001/signup', {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
        },
      body: JSON.stringify({
        name: e.target.name.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value
      })
    });

   }
 
   catch (error)
  {
    console.error("Error al realizar la solicitud:", error);
  }
});
