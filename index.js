const menu = document.getElementById("mobile");
const navbar = document.getElementById("navbar")

if(menu){
    menu.addEventListener("click",function(){
        navbar.classList.add("menu");
    })
}

const close = document.getElementById("close");
close.addEventListener("click",function(){
    navbar.classList.remove("menu");
})