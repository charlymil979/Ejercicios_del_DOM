export default function clock(clock_start, clock_stop, alarm_start, alarm_stop, sound) {
   let start = document.querySelector(".clock-init"),
   show_clock,
   soundAlarm,
   $hour=document.querySelector(".hour"),
   $minutes=document.querySelector(".minutes"),
   $seconds=document.querySelector(".seconds");
   const $alarm=document.createElement("audio")
   $alarm.src=sound;

   document.addEventListener(('click'),e=>{
      if(e.target.matches(clock_start)){
         start.disabled=true;
         let fecha=new Date();  
         $hour.classList.add('on');
         $minutes.classList.add('on');
         $seconds.classList.add('on');
         
         show_clock= setInterval(() => {
         fecha=new Date();
         $hour.textContent=fecha.getHours().toLocaleString();
         $minutes.textContent=fecha.getMinutes().toLocaleString();
            if ($hour.textContent<10) 
              $hour.textContent = `0${$hour.textContent}`;
            if ($minutes.textContent<10)
              $minutes.textContent = `0${$minutes.textContent}`;
            
            $seconds.textContent =fecha.getSeconds().toLocaleString();
            if ($seconds.textContent<10)
               $seconds.textContent = `0${$seconds.textContent}`;
            
         }, 1000); 
         
      }
  if(e.target.matches(clock_stop)){
      start.disabled = false;
      clearInterval(show_clock);
      $hour.textContent=$minutes.textContent=$seconds.textContent=''
      
         $hour.classList.remove("on");
         $minutes.classList.remove("on");
         $seconds.classList.remove("on");
   }
   if(e.target.matches(alarm_start)){
      // crear una etiqueta de audio fuera del addevent
      e.target.disabled=true
      soundAlarm = setTimeout(() => {
         $alarm.play()
      }, 1500);
   }
   if(e.target.matches(alarm_stop)){
      clearTimeout(soundAlarm);
      $alarm.pause()
      $alarm.currentTime=0
      document.querySelector(".alarm-init").disabled=false;
   }
})
}