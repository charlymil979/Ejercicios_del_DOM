const d=document,
w=window,
n=navigator;

export default function estadoConexion() {

   const isOnline =()=>{
      const $div = d.createElement("div");


      if (n.onLine){
         $div.textContent='Se ha restablecido la conexión';
         $div.classList.add('online');
         $div.classList.remove('offline');
         console.log($div)
      }
      else{
         $div.textContent='Se ha perdido la conexión';
         $div.classList.add('offline');
         $div.classList.remove('online');
         console.log($div);
      };
      d.body.insertAdjacentElement("afterbegin",$div);
      setTimeout(() => d.body.removeChild($div), 1500);
   }
   w.addEventListener(('online'),(e)=>isOnline());
   w.addEventListener(('offline'),(e)=>isOnline());

}

// ******* funciona pero falta el z-index
//    const $cabecera = d.querySelector(".fixed-header h1"),
//    $texto = $cabecera.innerHTML,
//    normal=function (){setTimeout(() => {
//          $cabecera.style.background = "";
//          $cabecera.style.color = "";
//          $cabecera.innerHTML= $texto; 
//       }, 1500)}; 

// window.addEventListener(('offline'),e=>{

//    $cabecera.style.background='red';
//    $cabecera.style.color='yellow';
//    $cabecera.innerHTML = "Se ha perdido la conexión";
//    normal();
// });
// window.addEventListener(('online'),e=>{
   
//    $cabecera.style.background='Green';
//    $cabecera.style.color='white';
//    $cabecera.innerHTML = "Se ha restablecido la conexión";
//    normal();
// }); 