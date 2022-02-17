const btnSwitch = document.getElementById("btn-switch");
const logo = document.getElementById("logo")

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("active-dark");
    btnSwitch.classList.toggle("active-dark");
    /*logo.setAttribute("src", "./Imagen/Logo.png");
    
    console.log(logo.getAttribute("src"))*/


})

