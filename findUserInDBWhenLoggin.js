const buttonLogin = document.getElementById("Register-form");


buttonLogin.addEventListener("submit",  async(e) =>
{
    e.preventDefault();
    const email = e.target.email.value//Obtine el email del formulario.
    const passwordUser = e.target.password.value//Obtine el password del formulario.
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    // URL del servidor desde el que deseas obtener datos y que usuario en especifico
const apiUrl = 'http://localhost:27027/users/' + email;

// Realizar una solicitud GET utilizando Fetch
fetch(apiUrl)
  .then(response => {
    // Verificar si la respuesta HTTP indica éxito (código 200-299)
    if (!response.ok) {
      throw new Error('La solicitud no se pudo completar correctamente.');
    }
    // Parsear la respuesta como JSON y devolverla como una promesa
    return response.json();
  })
  .then(data => {
    // Manejar los datos obtenidos
    // Aquí puedes realizar acciones con los datos, como mostrarlos en la interfaz de usuario
    
    //Validación para determinar si el usuario existe en la base de datos
    if(email === data.email && passwordUser === data.password)
    {
        //Ir a página de "cargado", la cual mostrará un mensaje como el siguiente: ¡Iniciando sesión!
        setTimeout(goToIndexHTML, 3000);
    }

    else
    {
        alert('El no usuario existe');
    }
  })
  .catch(error => {
    // Manejar errores de red o errores en el proceso
    console.error('Error al obtener datos:', error);
  });

})

function goToIndexHTML()
{
    window.location.href = "http://127.0.0.1:5500/index.html"
}