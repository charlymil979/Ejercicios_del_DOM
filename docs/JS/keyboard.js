const d=document
let x = 0,
y = 0;
export function moveBall(e, ball, stage) {
   const $ball=d.querySelector(ball), //al exportar, ball devuelve .ball
   $stage=d.querySelector(stage),
   limitsBall=$ball.getBoundingClientRect(), //muestra los limites de ball
   limitsStage=$stage.getBoundingClientRect(); //muestra los limites de stage
   
   switch (e.keyCode) {
      case 37:  //left
      if(limitsBall.left>limitsStage.left)e.preventDefault(), x--; // compara limites de ball y stage
      break;
      case 38:  //up
      if(limitsBall.top>limitsStage.top) e.preventDefault(), y--;
      break;
      case 39: //right
      if (limitsBall.right < limitsStage.right) e.preventDefault(), x++;
      break;
      case 40: //down
      if (limitsBall.bottom < limitsStage.bottom) e.preventDefault(),y++;
      break;
      
      default:
         break;
      }
      $ball.style.transform = `translate(${x*10}px,${y*10}px)` //por cada pulsacion de tecla se mueve 10px


}

export function shortcuts(e) {
   //console.log(e.type)
   //console.log(e.key)
   //console.log(e.keyCode) codigo de la tecla
   //console.log(e.ctrlKey) true si se presiona ctrl
   //console.log(e.altKey) true si se presiona alt
   //console.log(e.timeStamp) muestra el tiempo transcurrido desde que se carga el doc hta que se ejecuta la acción
   //console.log(e)
   if(e.key==="a"&&e.altKey){
      alert('Ha lanzado una alerta con el teclado')
   }
   if(e.key==="p"&&e.altKey){
      prompt('Ha lanzado un aviso con el teclado')
   }
   if(e.key==="c"&&e.altKey){
      confirm('Ha lanzado un cuadro de confirmación con el teclado')
   }
}
