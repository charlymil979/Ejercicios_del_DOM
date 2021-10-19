const d= document,
n=navigator,
ua=n.userAgent;

export default function userDeviceInfo(id) {
   const $id = d.getElementById(id),

     isMobile = {
       android: () => ua.match(/android/i),
       //comprueba sistema android
       ios: () => ua.match(/iphone|ipad|ipod/i),
       //  comprueba sistema ios
       windows: () => ua.match(/windows-phone/i),
       //comprueba win smartphone
       any: function () {
         return this.android() || this.ios() || this.windows();
         //compeurba q sea disp movil, cualquiera de ellos
       },
     },
     isDesktop = {
       linux: () => ua.match(/linux/i),
       mac: () => ua.match(/mac os/i),
       windows: () => ua.match(/windows nt/i),
       any: function () {
         return this.linux() || this.mac() || this.windows();
       },
     },
     isBrowser = {
       chrome: () => ua.match(/chrome/i),
       safari: () => ua.match(/safari/i),
       firefox: () => ua.match(/firefox/i),
       opera: () => ua.match(/opera|opera mini/i),
       ie: () => ua.match(/msie|iemobile/i),
       edge: () => ua.match(/edge/i),
       any: function () {
          return this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie()||this.edge()
       },
     };
   $id.textContent += ua;
     $id.innerHTML = `
     <ul>
     <li>User Agent: <b>${ua}</b></li>
     <li>Plataforma: <b>${
       isMobile.any() ? isMobile.any() : isDesktop.any()
     }</b></li>
     <li>Navegador:  <b>${isBrowser.any()}</b></li>
     </ul>`;

     /*  Contenido exclusivo*/
     //Para Chome
     if(isBrowser.chrome()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Chrome</mark></p>`;
     } 

     //Para Firefox
     if(isBrowser.firefox()){
        $id.innerHTML += `<p><mark>Este contenido sólo se ve en Firefox</mark></p>`;
     } 
     if(isMobile.any()){
        $id.innerHTML += `<p><mark>Estas viendo contenido esclusivo para móviles</mark></p>`;
     }
     /*Redirecciones*/
    /*  if(isMobile.android()){
        window.location.href = "https://jonmircha.com";
     }     reenvio si esta en movil */
}