import hamburgerMenu from "./JS/burger_menu.js";
import clock from "./JS/clock.js";
import { moveBall, shortcuts } from "./JS/keyboard.js";
import countDown from "./JS/Countdown.js";
import scrollTopButton from "./JS/scroll_button.js";
import darkMode from "./JS/dark_mode.js";
import changeColors from "./JS/change_colors.js";
import responsiveMedia from "./JS/objeto_responsive.js";
import tester from "./JS/responsive_tester.js";
import userDeviceInfo from "./JS/deteccion_dispositivos.js";
import estadoConexion from "./JS/conectividad.js";
import webCam from "./JS/web_cam.js";
import getGeolocation from "./JS/geolocalizacion.js";
import filtro from "./JS/filtro_busqueda.js";

const d= document;

d.addEventListener("DOMContentLoaded",(e)=>{
   hamburgerMenu(".burger-menu-button", ".burger_menu", ".menu a");

   clock(".clock-init",".clock-stop",".alarm-init", ".alarm-stop","./assets/alarm.mp3");

   countDown(".count-down", "December 25, 2021 00:00:00", "Feliz Navidad!!!!");

   scrollTopButton(".init-button");
   
   darkMode(".dark-mode", "dark",localStorage.darkmode);

   changeColors(
     ".colors-button",
     ".change-colors *",
     localStorage.maincolor,
     getComputedStyle(d.querySelector(":root")).getPropertyValue("--main-color")
   );
   responsiveMedia(
     "youtube",
     "(min-width:1024px)",
     `<a href="https://www.youtube.com/watch?v=w2MRi_huek8&ab_channel=DomzSantos">Ver Video</a>`,
     `<iframe width="560" height="315" src="https://www.youtube.com/embed/w2MRi_huek8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
   );
   responsiveMedia(
     "gmaps",
     "(min-width:1024px)",
     `<a href="https://goo.gl/maps/7HgEtVjVR8mc5ae79">Ver Mapa</a>`,
     `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105082.20669161533!2d-58.4438240417969!3d-34.60873919999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad313b06289%3A0x8a0b9d45a2dea96f!2sMuseo%20Hist%C3%B3rico%20Nacional%20del%20Cabildo%20y%20la%20Revoluci%C3%B3n%20de%20Mayo!5e0!3m2!1ses-419!2sar!4v1634335083710!5m2!1ses-419!2sar" width="520" height="390" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
   );
   tester("responsive-tester");
   userDeviceInfo("user-device");
   webCam('webcam');
   getGeolocation("geolocation");
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
      moveBall(e, ".ball", ".stage");
      filtro("filter", ".filtro figure");
   });
   
      estadoConexion();
      
   // })
      
      