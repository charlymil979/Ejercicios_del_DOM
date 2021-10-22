const d = document

export default function sorteo(lista, boton) {
   const getWinner=(lista)=>{
      const $players=d.querySelectorAll(lista),
      random = Math.floor(Math.random() * $players.length),
      winner=$players[random];
      return `El ganador es: ${winner.textContent}`
   }

   d.addEventListener(('click'),e=>{
      if(e.target.matches(boton)){
         let result=getWinner(lista);
         alert(result)
      }


})
}




      // Esta es la forma directa
      /* Para que funcione el matches hay que pasar el id del boton con el # */
      /* if(e.target.matches(boton)){
      let getWinner=Math.floor(Math.random()*$lista.length)
      // console.log(winner)
      alert(`El ganador es ${$lista[getWinner].textContent}`)
      } */
