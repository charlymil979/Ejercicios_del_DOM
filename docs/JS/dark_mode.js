const d= document;

export default function darkMode(button, dark,isactive){
   const $selectors=d.querySelectorAll("[data-dark]"),
   $button=d.querySelector(button),
   moon='🌒',
   sun='☀️';
   const darkactive=function(){
      $selectors.forEach((el) => {
        el.classList.add(dark);
      });
      $button.textContent = sun;
      localStorage.setItem("darkmode", 1);
   },
   light=function(){
      $selectors.forEach((el) => {
        el.classList.remove(dark);
      });
      $button.textContent = moon;
      localStorage.setItem("darkmode", 0);
   }
   //este if es para comprobar si quedo activado en memoria
if(isactive==='1') darkactive();

d.addEventListener(('click'),(e)=>{
   //(`${button} *`)implica todos los elementos dentro de button
   if(e.target.matches(button)||(e.target.matches(`${button} *`))){
// d.querySelector('body').classList.toggle(darkMode),esto es muy estatico, con data-attributes es mas fluido, solo hay que agregar data-dark a cada elemento a aplicar el darkMode
   if($button.textContent===moon){
      darkactive();
         }
         else{
            light()}
}
})
}