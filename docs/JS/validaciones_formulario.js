const d = document

export default function commentFormValidation(){

const $form = d.querySelector(".comment-form"),
$inputs = d.querySelectorAll(".comment-form [required]");
let regexp=[];


$inputs.forEach((input,i)=>{
   input.pattern
   ?regexp.push(input.pattern)
   :regexp.push(input.dataset.pattern);

   const $span = d.createElement("span");
   $span.id = input.name;
   $span.textContent = input.title;
   $span.classList.add("comment-form-error","none");
   $span.style.width = `${64 + i*12}%`; 
   //lo de arriba es xq le di witdth individual a cada input
   input.insertAdjacentElement("afterend",$span);
})
d.addEventListener(("click"),e=>{
   
   if(e.target.matches(".comment-form [type='submit']")){
      let ok= 1
      $inputs.forEach((input,i)=>{
         let expresion=new RegExp(regexp[i]);
         if(!expresion.exec(input.value)){
            d.getElementById(input.name).classList.add("is-active");
            ok--}
            else{d.getElementById(input.name).classList.remove("is-active")};
         })
         if(ok!==1){
         e.preventDefault()
            
         
      }

   }
})
d.addEventListener(("submit"),e=>{
   // e.preventDefault();
   alert("enviando mensaje")
   const $loader = d.querySelector(".comment-form-loader"),
   $response = d.querySelector(".comment-form-response");
   $loader.classList.remove("none");
   
   setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset()
      setTimeout(() =>$response.classList.add("none"), 2500);

   }, 2500);

})

}