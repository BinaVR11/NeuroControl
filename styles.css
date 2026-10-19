:root{
  --blue:#073A69;
  --white:#ffffff;
  --soft-blue:#dcecf9;
  --text:#073A69;
  --shadow:0 18px 45px rgba(7,58,105,.14);
  --ease:cubic-bezier(.22,1,.36,1);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--white);
  color:var(--text);
  font-family:Arial, Helvetica, sans-serif;
  overflow-x:hidden;
}
button{font:inherit}

.view{
  display:none;
  min-height:100vh;
  position:relative;
}
.view.active{
  display:block;
  animation:pageIn .75s var(--ease) both;
}
@keyframes pageIn{
  from{opacity:0;transform:translateY(22px)}
  to{opacity:1;transform:none}
}

.transition-layer{
  position:fixed;
  inset:0;
  background:var(--blue);
  transform:translateY(100%);
  z-index:100;
  pointer-events:none;
}
.transition-layer.go{
  animation:transition .72s var(--ease) both;
}
@keyframes transition{
  0%{transform:translateY(100%)}
  45%{transform:translateY(0)}
  55%{transform:translateY(0)}
  100%{transform:translateY(-100%)}
}

/* INICIO */
#homeView{
  min-height:100svh;
  overflow:hidden;
  display:none;
}
#homeView.active{display:block}
.home-bg{
  position:absolute;
  inset:0;
  background:url("assets/fondo.jpg") center/cover no-repeat;
  transform:scale(1.02);
}
.home-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(180deg,rgba(0,0,0,.15),rgba(0,0,0,.22));
}
.home-content{
  position:relative;
  z-index:2;
  min-height:100svh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:5vh 6vw;
  color:white;
}
.brand-logo{width:min(15vw,170px);min-width:90px;margin-bottom:4vh;filter:brightness(0) invert(1)}
.welcome{font-size:clamp(42px,5vw,88px);font-weight:900;letter-spacing:.01em;margin:0}
.welcome-small{font-size:clamp(38px,4vw,76px);font-weight:900;margin:0 0 4vh}
.home-content h1{
  font-size:clamp(80px,10vw,190px);
  line-height:.9;
  margin:0 0 8vh;
  letter-spacing:.015em;
  font-weight:900;
}
.primary-btn{
  border:0;
  background:var(--blue);
  color:white;
  padding:1.25rem 3rem;
  border-radius:999px;
  font-weight:900;
  font-size:clamp(16px,1.5vw,28px);
  cursor:pointer;
  box-shadow:0 16px 40px rgba(0,0,0,.25);
  transition:transform .3s var(--ease),box-shadow .3s var(--ease),background .3s ease;
}
.primary-btn:hover{transform:translateY(-5px) scale(1.02);box-shadow:0 22px 50px rgba(0,0,0,.3)}
.primary-btn:active{transform:scale(.98)}
.primary-btn span{margin-left:.7rem}

/* SELECCIÓN */
#levelsView,#detailView{
  padding:clamp(28px,5vw,72px) clamp(24px,5vw,72px) 80px;
}
.section-header,.detail-header{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:30px;
  max-width:1500px;
  margin:0 auto 48px;
}
.eyebrow{
  margin:0 0 8px;
  font-size:clamp(12px,1vw,18px);
  font-weight:800;
  letter-spacing:.12em;
  opacity:.72;
}
h2{
  font-size:clamp(42px,6vw,88px);
  line-height:.98;
  margin:0;
  font-weight:900;
}
.header-line{
  width:100%;
  height:5px;
  margin-top:18px;
  background:var(--blue);
}
.small-logo{
  width:clamp(70px,8vw,130px);
  height:auto;
  object-fit:contain;
  filter:none;
}
.levels-grid{
  max-width:1500px;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
}
.level-card{
  min-height:285px;
  background:var(--blue);
  color:white;
  border-radius:16px;
  padding:28px;
  position:relative;
  overflow:hidden;
  cursor:pointer;
  box-shadow:var(--shadow);
  transform:translateY(0);
  transition:transform .4s var(--ease),box-shadow .4s var(--ease);
}
.level-card::after{
  content:"";
  position:absolute;
  inset:auto -35px -55px auto;
  width:180px;height:180px;
  border-radius:50%;
  background:rgba(255,255,255,.05);
  transition:transform .5s var(--ease);
}
.level-card:hover{transform:translateY(-9px);box-shadow:0 25px 55px rgba(7,58,105,.25)}
.level-card:hover::after{transform:scale(1.35)}
.level-number{
  display:inline-block;
  font-size:clamp(25px,2.4vw,42px);
  font-weight:900;
  border-bottom:3px solid white;
  padding-bottom:7px;
}
.level-name{
  font-size:clamp(16px,1.45vw,25px);
  line-height:1.12;
  font-weight:800;
  max-width:85%;
  margin-top:18px;
}
.arrow{
  position:absolute;
  right:24px;
  bottom:24px;
  width:54px;height:54px;
  border-radius:50%;
  background:var(--soft-blue);
  color:var(--blue);
  display:grid;
  place-items:center;
  font-size:28px;
  font-weight:900;
  transition:transform .3s var(--ease);
}
.level-card:hover .arrow{transform:translateX(6px)}
.level-card.wide{grid-column:1/-1;min-height:230px}
.selector-photo{
  max-width:1500px;
  margin:52px auto 0;
  border-radius:18px;
  overflow:hidden;
  box-shadow:var(--shadow);
}
.selector-photo img{width:100%;display:block}

/* DETALLE */
.back-btn{
  position:fixed;
  top:26px;
  left:26px;
  z-index:20;
}
.icon-btn{
  width:58px;height:58px;
  border:0;
  border-radius:50%;
  background:var(--blue);
  color:white;
  display:grid;
  place-items:center;
  font-size:30px;
  cursor:pointer;
  box-shadow:var(--shadow);
  transition:transform .3s var(--ease);
}
.icon-btn:hover{transform:translateX(-5px) scale(1.05)}
.detail-header{padding-top:15px}
.detail-header p:not(.eyebrow){
  max-width:1000px;
  margin:20px 0 0;
  font-size:clamp(16px,1.35vw,24px);
  line-height:1.35;
  font-weight:700;
}
.areas{
  max-width:1450px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:85px;
}
.area{
  display:grid;
  grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  align-items:center;
  gap:60px;
  min-height:390px;
}
.area:nth-child(even) .area-image{order:2}
.area:nth-child(even) .area-copy{text-align:right}
.area-image{
  width:100%;
  aspect-ratio:1.65/1;
  object-fit:cover;
  border-radius:15px;
  box-shadow:var(--shadow);
  background:#dbe7f1;
  transition:transform .7s var(--ease),filter .5s ease;
}
.area:hover .area-image{transform:scale(1.025);filter:saturate(1.05)}
.area-copy h3{
  font-size:clamp(22px,2vw,34px);
  margin:0 0 8px;
  line-height:.95;
}
.area-copy h4{
  font-size:clamp(42px,5vw,78px);
  margin:0 0 25px;
}
.area-copy p{
  font-size:clamp(16px,1.25vw,23px);
  line-height:1.45;
  margin:0;
  color:#315c80;
  font-weight:600;
}
.placeholder{
  display:grid;
  place-items:center;
  text-align:center;
  padding:30px;
  color:var(--blue);
  font-weight:900;
  border:2px dashed rgba(7,58,105,.35);
}
.placeholder span{opacity:.6}
.video-placeholder{
  max-width:1450px;
  min-height:300px;
  margin:90px auto 0;
  border-radius:18px;
  background:var(--blue);
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:40px;
}
.video-icon{
  width:68px;height:68px;border-radius:50%;
  background:var(--soft-blue);
  color:var(--blue);
  display:grid;place-items:center;
  font-size:28px;margin-bottom:15px;
}
.video-placeholder h3{margin:0;font-size:clamp(24px,3vw,40px)}
.video-placeholder p{margin:10px 0 0;opacity:.85}

/* SCROLL REVEAL */
.reveal{
  opacity:0;
  transform:translateY(35px);
  transition:opacity .8s var(--ease),transform .8s var(--ease);
}
.reveal.visible{opacity:1;transform:none}

/* RESPONSIVE */
@media(max-width:950px){
  .levels-grid{grid-template-columns:repeat(2,1fr)}
  .level-card.wide{grid-column:1/-1}
  .area{gap:35px}
}
@media(max-width:700px){
  #levelsView,#detailView{padding:28px 18px 60px}
  .section-header,.detail-header{margin-bottom:32px}
  .small-logo{width:72px}
  .levels-grid{grid-template-columns:1fr;gap:16px}
  .level-card,.level-card.wide{grid-column:auto;min-height:220px}
  .selector-photo{margin-top:30px}
  .back-btn{top:14px;left:14px;width:50px;height:50px}
  .detail-header{padding-top:55px}
  .areas{gap:60px}
  .area,.area:nth-child(even){grid-template-columns:1fr;min-height:0}
  .area:nth-child(even) .area-image{order:0}
  .area:nth-child(even) .area-copy{text-align:left}
  .area-copy h3{font-size:48px}
  .area-image{aspect-ratio:1.45/1}
  .home-content{padding:5vh 22px}
  .brand-logo{width:110px}
  .home-content h1{font-size:clamp(70px,20vw,130px);margin-bottom:8vh}
  .primary-btn{width:100%;max-width:440px;padding:1.1rem 1.3rem}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}
}


/* =========================================================
   PROTO LUMA — DISPLAY HOLOGRÁFICO VERTICAL
   Diseñado primero para una superficie 9:16.
   Mantiene la composición vertical incluso al cambiar de tamaño.
   ========================================================= */

:root{
  --proto-blue:#073A69;
  --proto-white:#FFFFFF;
  --proto-gutter:clamp(20px, 4.2vw, 110px);
}

/* La experiencia ocupa toda la superficie disponible */
html, body, #app{
  width:100%;
  min-height:100%;
}

body{
  min-height:100svh;
}

/* Evita que el contenido dependa de una resolución fija */
.view{
  width:100%;
  min-height:100svh;
}

/* Inicio: composición vertical estable */
#homeView{
  min-height:100svh;
  aspect-ratio:auto;
}

.home-content{
  min-height:100svh;
  width:min(100%, 1200px);
  margin:auto;
}

/* En una pantalla 9:16, el contenido respira verticalmente */
@media (min-aspect-ratio: 8/16) and (max-aspect-ratio: 10/16){
  .home-content{
    padding-top:clamp(35px, 6vh, 110px);
    padding-bottom:clamp(35px, 6vh, 110px);
  }

  .brand-logo{
    width:clamp(90px, 11vw, 150px);
    margin-bottom:clamp(25px, 4vh, 65px);
  }

  .welcome{
    font-size:clamp(42px, 6.2vw, 88px);
  }

  .welcome-small{
    font-size:clamp(38px, 5.5vw, 78px);
    margin-bottom:clamp(25px, 4vh, 60px);
  }

  .home-content h1{
    font-size:clamp(80px, 12vw, 180px);
    margin-bottom:clamp(35px, 7vh, 100px);
  }
}

/* Selección de niveles: en Proto Luma priorizamos lectura vertical */
#levelsView,
#detailView{
  padding-left:var(--proto-gutter);
  padding-right:var(--proto-gutter);
}

.levels-grid,
.section-header,
.detail-header,
.selector-photo,
.areas,
.video-placeholder{
  width:100%;
  max-width:1450px;
}

/* En pantallas verticales altas, 2 columnas permiten tarjetas grandes
   sin comprimir la tipografía */
@media (min-width:700px) and (max-aspect-ratio: 10/16){
  .levels-grid{
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:clamp(18px,2.5vw,34px);
  }

  .level-card{
    min-height:clamp(230px,24vh,340px);
  }

  .level-card.wide{
    grid-column:1/-1;
    min-height:clamp(190px,20vh,280px);
  }

  .selector-photo{
    margin-top:clamp(28px,4vh,55px);
  }
}

/* Pantalla extremadamente alta: escalado por altura */
@media (min-height:1200px) and (max-width:900px){
  .levels-grid{
    gap:22px;
  }

  .level-card{
    min-height:270px;
  }

  .level-card.wide{
    min-height:220px;
  }

  .areas{
    gap:clamp(65px,8vh,110px);
  }
}

/* Áreas: conservamos el patrón izquierda/derecha del mockup,
   pero sin romperse en una pantalla estrecha */
@media (min-width:800px) and (max-aspect-ratio: 10/16){
  .area{
    grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);
    gap:clamp(28px,4vw,70px);
  }

  .area-image{
    min-width:0;
  }

  .area-copy h3{
    font-size:clamp(42px,5vw,76px);
  }
}

/* Touchscreen / holográfico: objetivos táctiles amplios */
.primary-btn{
  min-height:64px;
  touch-action:manipulation;
}

.level-card,
.icon-btn{
  touch-action:manipulation;
  -webkit-tap-highlight-color:transparent;
}

/* El botón de regreso permanece accesible sin depender del mouse */
.back-btn{
  min-width:58px;
  min-height:58px;
}

/* Para pantallas muy estrechas */
@media (max-width:520px){
  .section-header,
  .detail-header{
    gap:16px;
  }

  h2{
    font-size:clamp(34px,10vw,54px);
  }

  .header-line{
    height:4px;
  }

  .level-card{
    min-height:205px;
    padding:22px;
  }

  .level-number{
    font-size:28px;
  }

  .level-name{
    font-size:17px;
  }

  .arrow{
    width:48px;
    height:48px;
    right:18px;
    bottom:18px;
  }
}

/* Si el dispositivo tiene poca altura, reducimos espacios sin
   cambiar la proporción ni generar scroll horizontal */
@media (max-height:800px){
  .home-content{
    padding-top:25px;
    padding-bottom:25px;
  }

  .brand-logo{
    margin-bottom:18px;
  }

  .welcome-small{
    margin-bottom:18px;
  }

  .home-content h1{
    margin-bottom:28px;
  }
}

/* Mantener legibilidad con escalado del sistema */
@media (min-resolution: 150dpi){
  .level-card,
  .area-copy,
  .detail-header p:not(.eyebrow){
    -webkit-font-smoothing:antialiased;
  }
}


/* =====================================================
   CUADRO DE INFORMACIÓN PARA TODAS LAS ÁREAS
   ===================================================== */

.area-copy {
  width: 100%;
  min-width: 0;
  height: 100%;
  min-height: 240px;
  padding: clamp(20px, 2.2vw, 36px);
  background: #DCECF9;
  color: #073A69;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  overflow-wrap: anywhere;
}

/* Identificador: ÁREA 1, ÁREA 2, ÁREA 3 */
.area-copy h3 {
  font-size: clamp(20px, 1.8vw, 30px);
  line-height: 1.1;
  font-weight: 700;
  margin: 0 0 8px;
  color: #073A69;
}

/* Nombre del área */
.area-copy h4 {
  font-size: clamp(30px, 3vw, 48px);
  line-height: 1.08;
  font-weight: 900;
  margin: 0 0 12px;
  color: #073A69;
  overflow-wrap: anywhere;
}

/* Descripción del área */
.area-copy p {
  font-size: clamp(15px, 1.25vw, 21px);
  line-height: 1.4;
  font-weight: 500;
  margin: 0;
  color: #315C80;
}

/* Imágenes y cuadros alineados */
.area {
  align-items: stretch;
  gap: clamp(16px, 1.5vw, 24px);
  min-height: 0;
}

.area-image {
  height: 100%;
  min-height: 240px;
  object-fit: cover;
}

/* Pantallas táctiles estrechas */
@media (max-width: 700px) {
  .area {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .area-copy {
    min-height: 0;
    padding: 24px;
  }

  .area-copy h3 {
    font-size: 22px;
  }

  .area-copy h4 {
    font-size: clamp(28px, 7vw, 38px);
  }

  .area-copy p {
    font-size: 16px;
  }

  .area-image {
    min-height: 0;
    height: auto;
    aspect-ratio: 1.45 / 1;
  }
}
/* =========================================================
   ESPACIOS EDITABLES: IMÁGENES Y VIDEO VERTICAL
   ========================================================= */
.home-bg{width:100%;height:100%;object-fit:cover;object-position:center}
.selector-photo{position:relative;min-height:180px;background:#f3f7fa;border:none}
.levels-photo-img{width:100%;height:auto;min-height:180px;display:block;object-fit:cover;border-radius:18px}
.image-slot{position:relative;width:100%;aspect-ratio:1.65/1;border-radius:15px;overflow:hidden;background:#f3f7fa;border:none}
.image-slot .area-image{width:100%;height:100%;display:block;object-fit:cover;border-radius:0;border:0}
.image-slot.empty .image-slot-label{display:flex}
.image-slot-label{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:#073A69;background:#f3f7fa;padding:20px;gap:8px;pointer-events:none}
.image-slot-label strong{font-size:clamp(15px,1.4vw,24px)}
.image-slot-label span{font-size:clamp(11px,1vw,17px);opacity:.65;font-weight:700}
.levels-image-label{display:none}
.selector-photo.empty .levels-photo-img{display:none}
.video-placeholder{min-height:0;padding:clamp(25px,4vw,60px);background:#073A69}
.video-frame{position:relative;width:min(100%,520px);aspect-ratio:9/16;background:#031d36;border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.25);display:grid;place-items:center}
.video-frame video{width:100%;height:100%;object-fit:contain;display:none;background:#000}
.video-empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:white;padding:30px;gap:10px;background:linear-gradient(180deg,#073A69,#052a4c)}
.video-empty span{font-size:14px;opacity:.7}
.video-frame.has-video video{display:block}
.video-frame.has-video .video-empty{display:none}
@media(max-width:700px){.video-frame{width:min(88vw,430px)}.image-slot{aspect-ratio:1.45/1}}


/* ======================================================
   FONDOS FOTOGRÁFICOS PARA LAS TARJETAS DE LOS 7 NIVELES
   Se conserva la distribución y la navegación existentes.
   ====================================================== */

.level-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #073A69;
  -webkit-tap-highlight-color: transparent;
}

.level-card .level-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  transition: transform .55s ease;
}

/* Capa azul semitransparente sobre cada fotografía */
.level-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background: rgba(7, 58, 105, .62);
  pointer-events: none;
}

/* Mantener títulos por encima de la imagen y la capa de color */
.level-card .level-number,
.level-card .level-name {
  position: relative;
  z-index: 1;
  color: #FFFFFF;
}

/* Se retira la decoración circular/flecha para que solo se toque la tarjeta */
.level-card::after,
.level-card .arrow {
  display: none !important;
  content: none !important;
}

.level-card:hover .level-bg,
.level-card:focus-visible .level-bg {
  transform: scale(1.04);
}

@media (prefers-reduced-motion: reduce) {
  .level-card .level-bg { transition: none; }
}


/* =========================================================
   FONDOS FOTOGRÁFICOS PARA TARJETAS DE NIVEL
   La foto es el fondo; la capa azul semitransparente va encima.
   El texto queda delante y no se desplaza por la imagen.
   ========================================================= */
.level-card{
  isolation:isolate;
  background-color:#073A69;
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
}
.level-card::before{
  content:"";
  position:absolute;
  inset:0;
  z-index:0;
  background:rgba(7,58,105,.58);
  pointer-events:none;
  transition:background .35s ease;
}
.level-card:hover::before{
  background:rgba(7,58,105,.48);
}
.level-card::after{
  z-index:0;
  pointer-events:none;
}
.level-card > .level-number,
.level-card > .level-name{
  position:relative;
  z-index:1;
}


/* =========================================================
   ACABADO FOTOGRÁFICO DE LAS TARJETAS DE NIVEL
   La imagen ocupa todo el cuadro; el azul y la tipografía
   son capas separadas para no alterar el color de las letras.
   ========================================================= */
.level-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #073A69;
  background-color: #073A69;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.level-card .level-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: block;
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
  user-select: none;
  transition: transform 650ms cubic-bezier(.22, 1, .36, 1);
}

/* Velo azul claro semitransparente, independiente del texto. */
.level-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(126, 190, 232, 0.43) 0%,
    rgba(44, 126, 190, 0.52) 48%,
    rgba(7, 58, 105, 0.62) 100%
  );
  pointer-events: none;
  transition: background 350ms ease;
}

/* El número y el nombre quedan nítidos, blancos y por encima del velo. */
.level-card > .level-number,
.level-card > .level-name {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
  opacity: 1;
  -webkit-text-fill-color: #FFFFFF;
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.18),
    0 2px 2px rgba(0, 17, 38, 0.82),
    0 5px 13px rgba(0, 0, 0, 0.35),
    0 0 13px rgba(255, 255, 255, 0.16);
}

.level-card > .level-number {
  border-bottom-color: rgba(255, 255, 255, 0.94);
}

.level-card:hover .level-bg,
.level-card:focus-visible .level-bg {
  transform: scale(1.055);
}

.level-card:hover::before,
.level-card:focus-visible::before {
  background: linear-gradient(
    135deg,
    rgba(126, 190, 232, 0.34) 0%,
    rgba(44, 126, 190, 0.44) 48%,
    rgba(7, 58, 105, 0.54) 100%
  );
}

.level-card:focus-visible {
  outline: 3px solid #FFFFFF;
  outline-offset: 4px;
}

.level-card.no-bg-image::before {
  background: linear-gradient(135deg, #2d6798, #073A69);
}

@media (prefers-reduced-motion: reduce) {
  .level-card .level-bg { transition: none; }
}

/* =========================================================
   BOTÓN REGRESAR FLOTANTE Y ADAPTABLE
   Centrado vertical en el borde izquierdo para encontrarlo
   fácilmente en pantallas táctiles, sin alterar el contenido.
   ========================================================= */
.back-btn {
  position: fixed;
  top: 50%;
  left: clamp(8px, 1.5vw, 24px);
  z-index: 30;
  width: clamp(48px, 4.5vw, 58px);
  height: clamp(48px, 4.5vw, 58px);
  min-width: 48px;
  min-height: 48px;
  padding: 0;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.48);
  border-radius: 50%;
  color: #FFFFFF;
  background: rgba(7, 58, 105, 0.88);
  box-shadow: 0 8px 24px rgba(3, 27, 49, 0.28),
              inset 0 1px 0 rgba(255, 255, 255, 0.16);
  -webkit-backdrop-filter: blur(9px);
  backdrop-filter: blur(9px);
  transform: translateY(-50%);
  transition: background 220ms ease, box-shadow 220ms ease,
              transform 220ms ease;
}

.back-btn:hover {
  background: rgba(7, 58, 105, 0.98);
  box-shadow: 0 12px 30px rgba(3, 27, 49, 0.34),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transform: translateY(-50%) translateX(3px) scale(1.04);
}

.back-btn:active {
  transform: translateY(-50%) scale(0.96);
}

.back-btn:focus-visible {
  outline: 3px solid #FFFFFF;
  outline-offset: 4px;
}

@media (max-width: 700px) {
  .back-btn {
    top: 50%;
    left: 8px;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    font-size: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .back-btn { transition: none; }
}

/* =========================================================
   AJUSTE FINO PARA PROTO LUMA EN FORMATO VERTICAL
   Reserva un carril fijo para el botón Regresar. El contenido
   se estrecha un poco, evitando que el botón tape fotos o texto.
   ========================================================= */
:root {
  --proto-back-left: clamp(8px, 1.4vw, 22px);
  --proto-back-size: clamp(48px, 4.5vw, 60px);
  --proto-back-gap: clamp(12px, 1.8vw, 24px);
}

/* Solo la pantalla de detalle necesita reservar espacio para Regresar. */
#detailView {
  padding-left: max(
    var(--proto-gutter),
    calc(var(--proto-back-left) + var(--proto-back-size) + var(--proto-back-gap))
  );
}

/* El botón conserva su centro vertical incluso durante el desplazamiento. */
#detailView .back-btn {
  position: fixed;
  top: 50%;
  left: var(--proto-back-left);
  width: var(--proto-back-size);
  height: var(--proto-back-size);
  min-width: 48px;
  min-height: 48px;
  transform: translateY(-50%);
}

#detailView .back-btn:hover {
  transform: translateY(-50%) translateX(3px) scale(1.04);
}

#detailView .back-btn:active {
  transform: translateY(-50%) scale(.96);
}

/* En pantallas estrechas ajustamos el margen sin apretar el texto de más. */
@media (max-width: 700px) {
  #detailView {
    padding-left: max(
      64px,
      calc(var(--proto-back-left) + var(--proto-back-size) + 10px)
    );
    padding-right: 14px;
  }

  #detailView .back-btn {
    left: 8px;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    font-size: 26px;
  }

  #detailView .areas {
    gap: 46px;
  }

  #detailView .area {
    gap: 14px;
  }

  #detailView .area-copy {
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  #detailView .back-btn {
    transition: none;
  }
}


/* =========================================================
   SEGUNDO.HTML INTEGRADO EN LA VISTA DE SELECCIÓN
   La pantalla principal conserva sus estilos originales.
   ========================================================= */
#levelsView{
  padding:0 !important;
  min-height:100svh;
  background:#080a0d;
  color:#fff;
}
#levelsView.active{display:block}
.interactive-levels{
  min-height:100svh;
  height:100svh;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  background:#080a0d;
  color:#fff;
  font-family:Arial,Helvetica,sans-serif;
}
#levelsView .topbar{
  position:relative;
  z-index:2;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  padding:12px 18px;
  background:rgba(0,0,0,.78);
}
#levelsView .proto-title{
  margin:0;
  font-size:clamp(14px,2vw,20px);
  font-weight:800;
  letter-spacing:.04em;
}
#levelsView .proto-hint{
  margin:4px 0 0;
  font-size:12px;
  opacity:.72;
  line-height:1.35;
}
#levelsView .reset{
  flex:0 0 auto;
  border:1px solid rgba(255,255,255,.6);
  color:#fff;
  background:transparent;
  border-radius:999px;
  padding:10px 14px;
  font-weight:700;
  cursor:pointer;
  touch-action:manipulation;
}
#levelsView .stage{
  flex:1;
  min-height:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:0;
}
#levelsView .stage {
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
}

#levelsView #building {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  flex: 1;
  min-width: 0;
  min-height: 0;
  border: 0;
}
#levelsView .status{
  position:fixed;
  z-index:3;
  bottom:12px;
  left:50%;
  transform:translateX(-50%);
  padding:9px 14px;
  border-radius:999px;
  background:rgba(0,0,0,.72);
  border:1px solid rgba(255,255,255,.2);
  color:#fff;
  font-size:12px;
  white-space:nowrap;
  pointer-events:none;
}
#levelsView #building:focus-visible,
#levelsView .reset:focus-visible{
  outline:3px solid #fff;
  outline-offset:3px;
}
@media(max-width:520px){
  #levelsView .topbar{padding:10px 12px}
  #levelsView .proto-hint{max-width:220px;line-height:1.3}
  #levelsView .reset{padding:9px 11px}
  #levelsView #building{width:100vw;max-height:calc(100svh - 76px)}
}
@media(max-height:500px) and (orientation:landscape){
  #levelsView .topbar{padding:6px 12px}
  #levelsView .proto-hint{display:none}
  #levelsView #building{width:auto;height:calc(100svh - 54px);max-height:calc(100svh - 54px)}
}
