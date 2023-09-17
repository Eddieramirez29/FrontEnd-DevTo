const buttonLogin = document.querySelector(".btn-login_user");


buttonLogin.addEventListener("sumit",  async(e) =>
{
    e.preventDefault();
    const email = e.target.email.value
    // URL del servidor desde el que deseas obtener datos
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
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    // Manejar errores de red o errores en el proceso
    console.error('Error al obtener datos:', error);
  });

})