const d=document
export default function scrollTopButton(boton){
   const $scrollButton = d.querySelector(boton);
   window.addEventListener(("scroll"),()=>{
      const scroll=scrollY,
      scroll2=pageYOffset;
   if(scroll>500){
      $scrollButton.classList.remove("hidden");
   }else{
      $scrollButton.classList.add("hidden")}
   //Recomendado, en vez de scrollY, pageYoffset
   })
   d.addEventListener("click",(e)=>{
      if (e.target.matches(boton)){
         //literalmente 'ir a'
         // envia el scroll a top=0, behavior es el comportamiento
         window.scrollTo({
            behavior:'smooth',
            top:0,
         })
      }
   })
}