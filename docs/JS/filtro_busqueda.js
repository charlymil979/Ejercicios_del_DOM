const d=document;

export default function filtro(id,container) {
const $filtro=d.getElementById(id),
   $container=d.querySelectorAll(container);
   
   setTimeout(() =>{
      let compare=$filtro.value,
      expReg=new RegExp(compare,'i');
      // console.log(compare);
      
       $container.forEach(el=>{
         console.log(expReg.test(el.textContent));
         if (!expReg.test(el.textContent)) {
            el.classList.add("oculta");
         }
         else{
            el.classList.remove("oculta");
         }
      
      console.log(el.classList)
      
   })
   }, 1);
}