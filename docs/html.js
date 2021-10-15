import hamburgerMenu from "./JS/burger_menu.js";
import clock from "./JS/clock.js";
import { moveBall, shortcuts } from "./JS/keyboard.js";
import countDown from "./JS/Countdown.js";
import scrollTopButton from "./JS/scroll_button.js";
import darkMode from "./JS/dark_mode.js";
import changeColors from "./JS/change_colors.js";

const d= document;

d.addEventListener("DOMContentLoaded",(e)=>{
   hamburgerMenu(".burger-menu-button", ".burger_menu", ".menu a");

   clock(".clock-init",".clock-stop",".alarm-init", ".alarm-stop","./assets/alarm.mp3");

   countDown(".count-down", "December 25, 2021 00:00:00", "Feliz Navidad!!!!");

   scrollTopButton(".init-button");
   
   darkMode(".dark-mode", "dark",localStorage.darkmode);

   changeColors(".colors-button",
   ".change-colors *");
})

// keyup se ejecuta al soltar la tecla
// d.addEventListener("keyup",(e)=>{
//       shortcuts(e);
// })
   // keypress se ejecuta mientras se mantiene presionada la tecla, cada 33ms
   // d.addEventListener("keypress",(e)=>{
      //    shortcuts(e);
      // })

      // keydown se ejecuta al presionar la tecla
      d.addEventListener("keydown",(e)=>{
         shortcuts(e);
         moveBall(e, ".ball", ".stage")
      })

