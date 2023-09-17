const buttonLogin = document.querySelector(".btn__link-LogIn");
//Permite ir a la página de logueo desde la página de inicio
buttonLogin.addEventListener("click", function()
{
    //Ir a la página de logueo.
    window.location.href = "http://127.0.0.1:5500/login.html";
});