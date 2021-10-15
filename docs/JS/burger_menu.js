
// Aqui rcibe variables creadas por nosotros para manejar el boton
// en el HTML.js recibe las class en el lugar de cada variable

export default function hamburgerMenu(panelButton, burger_menu, menulink){
 const $menu = document.querySelector(".burger-menu"),
      $button= document.querySelector(".burger-menu-button"),
      $line= document.querySelectorAll(".line"),
      $line1= document.querySelectorAll(".line1"),
      $cross= document.querySelector(".cross");
  document.addEventListener("click", (e) => {
     if(e.target.matches(panelButton)||e.target.matches(`${panelButton} *`)){
      $menu.classList.toggle("is-active");
      $line1[0].classList.toggle("inactive");
      $line1[1].classList.toggle("inactive");
      $line[1].classList.toggle("rotated");
      $cross.classList.toggle("active");
      $cross.classList.toggle("rotated");
     }
     if (e.target.matches(menulink)) {
        $menu.classList.remove("is-active");
      $line1[0].classList.remove("inactive");
      $line1[1].classList.remove("inactive");
      $line[1].classList.remove("rotated");
      $cross.classList.remove("active");
      $cross.classList.remove("rotated");
      
     }
});
}