()=>{
   
   const d=document;
   const boton= d.getElementById('bigButton');
   let funcion;
   const detener=clearInterval(funcion);

   console.clear();
   console.log('Inicia robot');
   boton.click();
   funcion = setInterval(() => {
      boton.click();
      setTimeout(() => {
         history.back()
      }, 20000);
      console.clear();
      console.log('robot funcionando');
      console.log('para detener el robot, escriba "detener"');
      
   }, (930000))
}