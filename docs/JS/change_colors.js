
const d=document

export default function changeColors(activar,operators) {
   let $target = "",
     $mainColor = "--main-color",
     $viewport = d.querySelector(".change-colors-screen"),
     $ChangeMainColor = function (mainColor, newColor) {
       d.documentElement.style.setProperty(mainColor, newColor);
     },
     $values = d.querySelectorAll(".value"),
     $operators = d.querySelectorAll(operators),
     screen = ".change-colors",
     reset = "rgb(240,220,78)",
     color = `rgb(${$values[0].textContent},${$values[1].textContent},${$values[2].textContent})`,
     $limitesLinea = [
       d.querySelector(".c-c-red").getBoundingClientRect().left,
       d.querySelector(".c-c-red").getBoundingClientRect().right,
     ],
     anchoLinea=$limitesLinea[1]-$limitesLinea[0],
     $limitesBotones = [
       d.querySelector(".r-selector").getBoundingClientRect().left,
       d.querySelector(".r-selector").getBoundingClientRect().right,
     ],
     anchoBoton=$limitesBotones[1]-$limitesBotones[0],
     unidadMov = (anchoLinea - anchoBoton) / 256,
     redInit = $values[0].textContent * unidadMov,
     greenInit = $values[1].textContent * unidadMov,
     blueInit = $values[2].textContent * unidadMov,
     redMove = redInit,
     greenMove = greenInit,
     blueMove = blueInit;

   d.querySelector(".r-selector").style.transform = `translate(${redInit}px,0px)`
   d.querySelector(".g-selector").style.transform = `translate(${greenInit}px,0px)`
   d.querySelector(".b-selector").style.transform = `translate(${blueInit}px,0px)`
 

   
   d.addEventListener(('click'),(e)=>{

   const $selector='';

   console.log(e.target, $limitesBotones)
   $target = `.${e.target.classList}`;
   console.log('target=',$target)
   // console.log('botones=', $operators)


switch (`${$target}`) {
  case '.colors-button':
    d.querySelector(screen).classList.toggle("is-active");
    break;

  case ".r-less":
     if ($values[0].textContent>0)
     $values[0].textContent--,
      redMove-=unidadMov,
      d.querySelector(
     ".r-selector"
   ).style.transform = `translate(${redMove}px,0px)`;

    break;
  case ".g-less":
     if ($values[1].textContent>0) 
     $values[1].textContent--,
     greenMove -= unidadMov,
     d.querySelector(
       ".g-selector"
     ).style.transform = `translate(${greenMove}px,0px)`;

    break;
  case ".b-less":
     if ($values[2].textContent>0) 
     $values[2].textContent--,
     blueMove -= unidadMov,
     d.querySelector(
       ".b-selector"
     ).style.transform = `translate(${blueMove}px,0px)`;

    break;
  case ".r-more":
     if ($values[0].textContent<256) 
     $values[0].textContent++,
     redMove += unidadMov,
       d.querySelector(".r-selector"
       ).style.transform = `translate(${redMove}px,0px)`;

    break;
  case ".g-more":
     if ($values[1].textContent < 256) 
     $values[1].textContent++,
     greenMove += unidadMov,
       d.querySelector(".g-selector"
       ).style.transform = `translate(${greenMove}px,0px)`;

    break;
  case ".b-more":
     if ($values[2].textContent < 256) 
     $values[2].textContent++,
     blueMove += unidadMov, 
     d.querySelector(".b-selector"
       ).style.transform = `translate(${blueMove}px,0px)`;

    break;

  case ".more":

    break;
case '.ok':
   console.log('ok');
   $ChangeMainColor($mainColor,color)
   
   break;
case '.reset':
   console.log('ok');
   $ChangeMainColor($mainColor, reset),
     ($values[0].textContent = 240),
     ($values[1].textContent = 220),
     ($values[2].textContent = 78),
     redMove=redInit,
     greenMove=greenInit,
     blueMove=blueInit,
     (d.querySelector(
       ".r-selector"
     ).style.transform = `translate(${redMove}px,0px)`);
     (d.querySelector(
       ".g-selector"
     ).style.transform = `translate(${greenMove}px,0px)`);
     (d.querySelector(
       ".b-selector"
     ).style.transform = `translate(${blueMove}px,0px)`);

   
   break;

  default:
    break;
   }
   color=`rgb(${$values[0].textContent},${$values[1].textContent},${$values[2].textContent})`;

   console.log(
     ($viewport.style.backgroundColor = color)
   );
   
})

   
}