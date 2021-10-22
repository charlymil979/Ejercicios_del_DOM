const d=document

export default function responsiveSlider() {

   const $slider = d.querySelectorAll(".slider-slide"),
   $div = d.querySelector(".slider-points");
   
   let posic=0;

   $slider.forEach((el,i)=>{
      $div.innerHTML += `<span id="slider${i}" class="sliderBtn"></span>`
   })
   const $puntos = d.querySelectorAll(".slider-points span");
   $puntos[posic].classList.add("slider-point-active");

// ******* No mezclar E del addEventListener con el EL del forEach******* 

   d.addEventListener(('click'),e=>{
      if(e.target.matches(".sliderBtn")){
         $puntos.forEach((el,i)=>{
         $slider[i].classList.remove("slide-active");
              el.classList.remove("slider-point-active")
         if (e.target.matches(`#slider${i}`)){
            el.classList.add("slider-point-active");
            $slider[i].classList.add("slide-active");}
            
      })}

      if (
        e.target.matches("#slider-prev") ||
        e.target.matches("#slider-next")) {
        e.preventDefault();
        $slider.forEach((el, i) => {
          if (el.classList.contains("slide-active")) {
            el.classList.remove("slide-active");
            $puntos[i].classList.remove("slider-point-active");
            return (posic = i);
          }
        });
        if (e.target.matches("#slider-prev")) {
           //es mejor restar "posic" y desp operar, que cambiar por "posic-1"
           posic--;
          if(posic === -1) posic = $slider.length - 1;
              $slider[posic].classList.add("slide-active");
            ;
        } else {
           posic++
          if(posic === $slider.length) posic=0
            $slider[posic].classList.add("slide-active");
        }
        $puntos[posic].classList.add("slider-point-active");
      }
   })
 
}

