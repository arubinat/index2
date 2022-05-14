 import '@fortawesome/fontawesome-free/js/all.js';



/*Menu movement*/
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar");
    }else{
        navToggle.setAttribute("aria-label", "Abrir");
    }
});


/* top bar */
//Tap top
const Top = document.getElementById('totop');
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    Top.classList.add('totop--show');
  } else {
    Top.classList.remove('totop--show');
  }
}
Top.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

/*Flex container*/

