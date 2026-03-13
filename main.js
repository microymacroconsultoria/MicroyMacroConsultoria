const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {

menu.classList.toggle("active");

});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Mensaje enviado correctamente");

form.reset();

});
