const d = document,
  n = navigator;
  
  export default function getGeolocation(id) {
     const $div=d.getElementById(id),
     options={
        enableHighAccuracy:true, // precision mejorada, es lenta
        timeout:5000, // tiempo de espera para la lectura de la posicion
        maximunAge:0 // no guarda lecturas previas en memoria
      },
      success=position=>{
      let g=position.coords,
      ubic=`https://www.google.com.ar/maps/@${g.latitude},${g.longitude},15z`//15z es el zoom del maps (de 1z a 20z)
      console.log(position);
      $div.innerHTML = `<br><ul>Tu posición actual es: <br>
            <li>Latitud: <b>${g.latitude}</b></li>
            <li>Longitud: <b>${g.longitude}</b></li>
            <li>Precisión: <b>${g.accuracy} </b>metros</li>
         </ul><a href=${ubic} target="_blank" rel="noopener">Ver en GoogleMaps</a>`;
   },
   error=(err)=>{
      $div.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
     console.log(`Error:$ ${err.code}: ${err.message}`); // los errores devuelves 2 elementos, code y msj, aqui podemos mostrarlos de forma entendible
   }
   
   n.geolocation.getCurrentPosition(success, error, options)





   //desde aca funciona directo pero arriba esta mas limpio y estructurado
  /*  if(n.geolocation){
      n.geolocation.getCurrentPosition((position) => {
         const latitud = position.coords.latitude;
         console.log(latitud);
         const longitud = position.coords.longitude;
         console.log(longitud);
         
         console.log($div);
         $div.innerHTML=`<br><ul>Tu posición actual es: <br>
            <li>Latitud: ${latitud}</li>
            <li>Longitud: ${longitud}</li>
            <li>Precisión:{}</li>
         </ul><a href="">Ver en GoogleMaps</a>`;
     });
   } */
  }