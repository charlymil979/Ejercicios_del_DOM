const d=document,
w=window;

export default function scrollSpy() {

let breakPoint=w.matchMedia("(min-width:1024px)")

//responsive recibe un (e) q es un boolean
const responsive=(e)=>{
   if(e.matches/*===true */){
      console.log("hola")
      d.querySelector(".burger-menu-button").classList.add('hidden');
      d.querySelector(".burger-menu").classList.add('b-m-right');
      //opcion agregar CSS Style
      d.querySelector("body").classList.add('menu-right');
      //Opcion agregar Inline Style
      d.querySelector('.init-button').style.marginRight='calc(25% - 4.75rem)'
   }
   else{
      console.log("bye")
      d.querySelector(".burger-menu-button").classList.remove('hidden');
      d.querySelector(".burger-menu").classList.remove("b-m-right");
      d.querySelector("body").classList.remove('menu-right');
      d.querySelector('.init-button').style.marginRight=''
      
   };
}
   responsive(breakPoint);
breakPoint.addEventListener("change",responsive)
}