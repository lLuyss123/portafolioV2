const about = document.querySelector(".nav_about");
//const resume=document.querySelector(".resume");
const pets = document.querySelector(".nav_pets");
const titulo = document.querySelector("#title_nav");
const about2 = document.querySelector(".about2")
const seccion_about = document.querySelector(".about_me");
const seccion_pets = document.querySelector(".pets");

about.addEventListener("click", () => fAct_Des("about"));
//resume.addEventListener("click", () => fAct_Des("resume"));
pets.addEventListener("click", () => fAct_Des("pets"));



function fAct_Des(info) {

    if (info == "about") {
        seccion_about.classList.add("active");
        seccion_pets.classList.remove("active");
        about.classList.add("active");
        //resume.classList.remove("active")
        pets.classList.remove("active");
        about2.classList.add("active");
        titulo.textContent = "About Me";
    } else if (info == "resume") {
        about.classList.remove("active");
        //resume.classList.add("active")
        pets.classList.remove("active");
        titulo.textContent = "Resume";
    } else {
        about.classList.remove("active");
        //resume.classList.remove("active")
        pets.classList.add("active");
        titulo.textContent = "My Pets";
        seccion_pets.classList.add("active");
        seccion_about.classList.remove("active");
        about2.classList.remove("active");
    }

}
