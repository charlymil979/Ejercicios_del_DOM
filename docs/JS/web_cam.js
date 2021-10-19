const d= document,
n=navigator
export default function webCam(id){
   const $video= d.getElementById(id);
   
   if (n.mediaDevices.getUserMedia) {
      n.mediaDevices
        .getUserMedia({ video: { width: 400, height: 300 }, audio: false})
        //audio true o false maneja el microfono de la cam
        .then((stream) => {
          console.log(stream);

          $video.srcObject = stream;
          console.log($video.srcObject);
          $video.play();
          $video.controls=true // activa los controles solo si hay video

        })
        .catch((err) => {
           $video.insertAdjacentHTML(
             "beforebegin",
             `
             <p>
               !Sucedió el siguiente error!:
               <mark>${err}:</mark>
             </p>`
           );
          console.log(`!Sucedió el siguiente error!: ${err}`);
        });
      // video y audio se envian como objeto
      //Stream es lo que devuelve la promisse getUserMedia
      //stream es un objeto, entonces se us srcObje
   }
}

/* navigator.getUserMedia(
  { video: true, audio: true }, //solicita cam y mic
  () => console.log("ok"), //funcion si se acepta
  () => console.log("not ok") // funcion si se rechaza
); */


// definiendo pantalla
//navigator.mediaDevices.getUserMedia({audio:true, video:{ width: 640, height: 480 },