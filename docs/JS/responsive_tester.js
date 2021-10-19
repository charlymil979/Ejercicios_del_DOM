const d= document;

export default function tester(form) {
   const $form=d.getElementById(form)
   let ventana;
   d.addEventListener(('submit'),e=>{
      
      if(e.target===$form){
        //igualar target a variable en lugar de .matches
        e.preventDefault(); // evitar el envio del formulario

        ventana = open(
          $form.URL.value,
          "ventana", // poner el nombre de la variable
          `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
        );
        //en un formulario, la notacion del punto accede a los inputs internos del mismo, mediante el name, las strWindowFeatures van con "="
      }
      d.addEventListener(('click'),e=>{
         if(e.target===$form.cerrar){
            ventana.close()  // ventana guardo el open, asi q se cierra ventana
         }
      })
    });
}