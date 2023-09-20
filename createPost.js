const buttonCreatePostPage = document.querySelector(".btn__link-create");
//Permite ir a la página para crear posts
buttonCreatePostPage.addEventListener("click", function()
{
    //Ir a la página de logueo.
    window.location.href = "http://127.0.0.1:5500/createPost.html";
});