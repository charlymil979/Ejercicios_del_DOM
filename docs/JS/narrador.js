const d=document,
      w=window;

export default function narrador() {
   const $speechSelect=d.getElementById("speech-select"),
   $speechTextarea=d.getElementById("speech-text"),
   $speechBtn=d.getElementById("speech-btn"),
   speechMessage=new SpeechSynthesisUtterance();
   
   // console.log(speechMessage)
   
   let voices=[];

d.addEventListener("DOMContentLoaded",e=>{
   
   w.speechSynthesis.addEventListener("voiceschanged", e=>{
      voices =w.speechSynthesis.getVoices();

      voices.forEach((voz,i)=>{
         const $option=d.createElement("option");
         $option.value=voz.name;
         $option.textContent=`${voz.name} - (${voz.lang})`
         $speechSelect.appendChild($option)
      })

   })
});



d.addEventListener("change",e=>{
   if(e.target===$speechSelect){
      speechMessage.voice=voices.find(voice=>voice.name===e.target.value);
   }
});

d.addEventListener("click",e=>{
if(e.target===$speechBtn){
   speechMessage.text=$speechTextarea.value;
   w.speechSynthesis.speak(speechMessage)
}
});
   
}