const d=document;

export default function filtro(filtro,container) {
const $filtro=d.getElementById(filtro),
   $container=d.querySelectorAll(container);

   /* keyup no puede manejar la 'x' del boton, por eso se usa input */
   d.addEventListener('input',(e) => {
      let compare = $filtro.value.toLowerCase();
      if(e.key==="Escape") compare="";
      
         $container.forEach((el) => el.textContent.toLowerCase().includes(compare)
            ?el.classList.remove("oculta")
            :el.classList.add("oculta")
         )
   })
   
  /* Esto seria en el keyDown del HTML.js
  
  setTimeout(() =>{

      let compare=$filtro.value,
      expReg=new RegExp(compare,'i');
      
       $container.forEach(el=>{
         if (!expReg.test(el.textContent)) {
            el.classList.add("oculta");
         }
         else{
            el.classList.remove("oculta");
         }
      
      console.log(el.classList)
      
   })
   }, 1); */
}