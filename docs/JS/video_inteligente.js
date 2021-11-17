const d = document,
w = window;

export default function smartVideo() {
   //crear el array de videos
   const $videos=d.querySelectorAll("video[data-smart-video]")

   //crear callback
   const cb = (entries)=>{
      entries.forEach(entry => {
      (entry.isIntersecting)
      //tiene q ser ebtry.target para que tome el video
      ?entry.target.play()
      :entry.target.pause()   
   
   w.addEventListener("visibilitychange",e=>{
   (d.visibilityState === "visible" && entry.isIntersecting)
     ?entry.target.play() 
     :entry.target.pause();
    
   })
   });
   }

//crear el observer
   const observer = new IntersectionObserver(cb,{threshold:0.6})
//definir destino para el observer
//Este forEach devuelve las entries
   $videos.forEach((el) => observer.observe(el));

}