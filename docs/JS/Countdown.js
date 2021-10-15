const d = document;
export default function countDown(display, limitDate,saludo){
   
   let cuenta=setInterval(() => {
      let zero = new Date(limitDate).getTime(),
      countDown=new Date().getTime(),
      dif=zero-countDown;
      let dia = 1000 * 60 * 60 * 24,
        hora = 1000 * 60 * 60,
        minuto = 1000 * 60,
        days = dif / dia,
        hours = (dif % dia) / hora,
        minutes = (dif % dia % hora) / minuto,
        seconds = (dif % dia % hora % minuto)/ 1000;
       d.querySelector(display).textContent = `Faltan ${Math.floor(
         days
       )} días, ${Math.floor(hours)} horas, ${Math.floor(
         minutes
       )} minutos, ${Math.floor(seconds)} segundos
       Para el 25 de Diciembre`;
       if(Math.round(dif)<1000) //<1000 xq son milisegundos
       clearInterval(cuenta),
       d.querySelector(display).classList.add("saludo"),
       d.querySelector(display).textContent = saludo;
   }, 1000);
}