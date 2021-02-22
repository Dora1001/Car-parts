const btn = document.querySelector(".menu-burger");

const menu = document.querySelector(".menu");


btn.addEventListener("click", function (){

btn.classList.toggle("active");
    menu.classList.toggle("show");
});