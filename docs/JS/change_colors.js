
const d=document

/********PARA USAR ESTA FUNCION HAY QUE DEFINIR LA VARIANTE
--main-color EN HEXA  */

export default function changeColors(activar,operators, setColor, defaultColor) {
      let reset = "rgb(240,220,78)",
      rDefault=240,
      gDefault=220,
      bDefault=78,
      $values = d.querySelectorAll(".value"),
      long=defaultColor.length
      if (defaultColor != "") {
      reset = defaultColor;
      rDefault=$values[0].textContent =parseInt(
        `${reset[long - 6]}${reset[long - 5]}`,
        16
      );
      gDefault=$values[1].textContent = parseInt(
        `${reset[long - 4]}${reset[long - 3]}`,
        16
      );
      bDefault = ($values[2].textContent = parseInt(
        `${reset[long - 2]}${reset[long - 1]}`,
        16
      ));};

      //   $values[0].textContent = parseInt(`${reset[2]}${reset[3]}`, 16),
        let r = $values[0],
        g = $values[1],
        b = $values[2];

   let $target = "",
   $mainColor = "--main-color",
   $viewport = d.querySelector(".change-colors-screen"),
   ChangeMainColor = function (mainColor, newColor) {
      d.documentElement.style.setProperty(mainColor, newColor);
   };
   if(setColor) {
      
      r.textContent = localStorage.getItem('r'),        
      g.textContent = localStorage.getItem('g'),        
      b.textContent = localStorage.getItem('b');
      };
      let $operators = d.querySelectorAll(operators),
      screen = ".change-colors",
      color = `rgb(${r.textContent},${g.textContent},${b.textContent})`,
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
      redInit = r.textContent * unidadMov,
      greenInit = g.textContent * unidadMov,
      blueInit = b.textContent * unidadMov,
      redMove = redInit,
      greenMove = greenInit,
      blueMove = blueInit;
      
      d.querySelector(".r-selector").style.transform = `translate(${redInit}px,0px)`
      d.querySelector(".g-selector").style.transform = `translate(${greenInit}px,0px)`
      d.querySelector(".b-selector").style.transform = `translate(${blueInit}px,0px)`;
      
      
 
      $viewport.style.backGroundColor=color;
      ChangeMainColor($mainColor, reset);
      
      //***********addEventListenet*********************** */ 
      
      d.addEventListener(('click'),(e)=>{
         
   const $selector='';

   $target = `.${e.target.classList}`;


switch (`${$target}`) {
  case activar:
    d.querySelector(screen).classList.toggle("is-active");
    break;

  case ".r-less":
     if (r.textContent>0)
     r.textContent--,
      redMove-=unidadMov,
      d.querySelector(
     ".r-selector"
   ).style.transform = `translate(${redMove}px,0px)`;

    break;
  case ".g-less":
     if (g.textContent>0) 
     g.textContent--,
     greenMove -= unidadMov,
     d.querySelector(
       ".g-selector"
     ).style.transform = `translate(${greenMove}px,0px)`;

    break;
  case ".b-less":
     if (b.textContent>0) 
     b.textContent--,
     blueMove -= unidadMov,
     d.querySelector(
       ".b-selector"
     ).style.transform = `translate(${blueMove}px,0px)`;

    break;
  case ".r-more":
     if (r.textContent<255) 
     r.textContent++,
     redMove += unidadMov,
       d.querySelector(".r-selector"
       ).style.transform = `translate(${redMove}px,0px)`;

    break;
  case ".g-more":
     if (g.textContent < 255) 
     g.textContent++,
     greenMove += unidadMov,
       d.querySelector(".g-selector"
       ).style.transform = `translate(${greenMove}px,0px)`;

    break;
  case ".b-more":
     if (b.textContent < 255) 
     b.textContent++,
     blueMove += unidadMov, 
     d.querySelector(".b-selector"
       ).style.transform = `translate(${blueMove}px,0px)`;

    break;

  case ".more":

    break;
case '.ok':
   ChangeMainColor($mainColor,color),
   localStorage.setItem('maincolor','1'),
   localStorage.setItem('r',r.textContent),
   localStorage.setItem('g',g.textContent),
   localStorage.setItem('b',b.textContent);
   
   break;
case '.reset':
   ChangeMainColor($mainColor, reset),
     r.textContent= rDefault,
     g.textContent = gDefault,
     b.textContent = bDefault,
     localStorage.removeItem('maincolor'),
     localStorage.removeItem('r'),
     localStorage.removeItem('g'),
     localStorage.removeItem('b'),
     redMove=redInit,
     greenMove=greenInit,
     blueMove=blueInit,
     d.querySelector(".r-selector")
       .style.transform = `translate(${redMove}px,0px)`;
     d.querySelector(".g-selector")
       .style.transform = `translate(${greenMove}px,0px)`;
     d.querySelector(".b-selector")
       .style.transform = `translate(${blueMove}px,0px)`;

   
   break;

  default:
    break;
   }
   color=`rgb(${r.textContent},${g.textContent},${b.textContent})`;
   $viewport.style.backgroundColor=color;
      
})

   
}