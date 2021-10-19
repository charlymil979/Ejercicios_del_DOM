const d=document,
w=window;

//ID a comprobar
//mq mediaquery a ejecutar (altura minima, ancho minimo, etc)
//mobileContent lo que se ve si es un movil
// dekstop contenido que se carga dinamicamente

export default function responsiveMedia(id, mq,mobileContent,dekstopContent){
let breakPoint=w.matchMedia(mq);

const responsive=(e)=>{
   if(e.matches){
      d.getElementById(id).innerHTML=dekstopContent;
   }
   else{
      d.getElementById(id).innerHTML=mobileContent;
   };
}
responsive(breakPoint);
breakPoint.addEventListener("change", responsive)}