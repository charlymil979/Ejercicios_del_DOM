const d=document

export default function scrollSpy(params) {
const $sections = d.querySelectorAll("section[data-scroll-spy]");


const cb = (entries)=>{
   // entries es cada uno de los elementos a los q se le asigna el observador con el forEach
   
   entries.forEach(entry=>{
   const id = entry.target.getAttribute("id");

   if(entry.isIntersecting){
      d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
      
   }
   else{
      d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
   }

})
};

   const observer = new IntersectionObserver(cb,{
      //root  elemento raiz con que comparar, por def es el document
       rootMargin:"-250px 0px -350px 0px"  //con neg, cierra el espacio de trabajo la cant de px (solo en px) para validar true
      // threshold:(0.47,0.75)  //entre 0 y 1, repesenta el % de elemento visible
   });

   $sections.forEach(el => observer.observe(el));
};