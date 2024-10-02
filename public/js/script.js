let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');


window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menu.addEventListener('click',()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
});
