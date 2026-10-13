/*
=========================================================
BINAES / PROTO LUMA
SCRIPT PRINCIPAL

Aquí puedes cambiar:
1. Imagen principal de inicio.
2. Imagen de selección de niveles.
3. Las 21 imágenes de las áreas.
4. Los 7 videos verticales.

NO es necesario modificar la lógica de navegación.
=========================================================
*/


/* ======================================================
   CONFIGURACIÓN GENERAL
   ====================================================== */

const CONFIG = {

    // ==================================================
    // CAMBIAR IMAGEN: PANTALLA PRINCIPAL / INICIO
    // ==================================================
    homeImage: "assets/intro.jpg",


    // ==================================================
    // CAMBIAR IMAGEN: PANTALLA SELECCIÓN DE NIVELES
    // ==================================================
    levelsImage: "assets/down.png",

    // Fondos de tarjetas: assets/IMAGEN-N1-FONDO-AQUI.jpg hasta N7.


    // ==================================================
    // TIMER DE INACTIVIDAD
    // 30 segundos
    // ==================================================
    inactivitySeconds: 30
};



/* ======================================================
   NIVELES
   ======================================================

   Cada nivel tiene:

   - id
   - nombre
   - descripción
   - video
   - 3 áreas
   - cada área tiene su propia imagen

   TOTAL:
   7 niveles
   21 imágenes
   7 videos
   ====================================================== */


const levels = [

    /* ==================================================
       NIVEL 1
       ================================================== */

    {
        id: 1,

        name: "AUDITORIO Y RECEPCIÓN",

        description:
        "EL NIVEL 1 ESTÁ DEDICADO A LA POBLACIÓN EN GENERAL, LA CULTURA Y EL COMERCIO EDITORIAL. ES LA PRINCIPAL PUERTA DE ENTRADA DEL EDIFICIO Y FUNCIONA COMO UN ESPACIO PÚBLICO ABIERTO, INCLUSIVO Y DINÁMICO QUE DA LA BIENVENIDA A TODOS LOS VISITANTES.",


        // ==================================================
        // VIDEO VERTICAL — NIVEL 1
        // ==================================================

        video: "assets/VIDEO-NIVEL-1-AQUI.mp4",


        areas: [

            {
                title: "LOBBY Y RECEPCIÓN",

                text:
                "PUNTO DE BIENVENIDA Y CONTROL DIGITAL DONDE SE TRAMITA LA “LLAVE DEL SABER” PARA ACCEDER A LOS SERVICIOS.",

                // ==========================================
                // IMAGEN 1 / NIVEL 1
                // ==========================================

                image:
                "N1/lobby.jpg"
            },


            {
                title: "AUDITORIO",

                text:
                "ESPACIO DE VANGUARDIA CON CAPACIDAD PARA 350 PERSONAS, DISEÑADO PARA CONFERENCIAS, EVENTOS CULTURALES Y ARTES ESCÉNICAS.",

                // ==========================================
                // IMAGEN 2 / NIVEL 1
                // ==========================================

                image:
                "N1/audi1.jpg"
            },


            {
                title: "BIBLIOTECA CAFÉ",

                text:
                "ÁREA DE DESCANSO Y CO-WORKING QUE COMBINA EL CAFÉ GOURMET SALVADOREÑO CON CONECTIVIDAD DE ALTA VELOCIDAD.",

                // ==========================================
                // IMAGEN 3 / NIVEL 1
                // ==========================================

                image:
                "N1/cafe.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 2
       ================================================== */

    {
        id: 2,

        name: "PRIMERA INFANCIA",

        description:
        "EL NIVEL 2 ESTÁ DEDICADO POR ENTERO A LA PRIMERA INFANCIA, ATENDIENDO DE MANERA ESPECIALIZADA A BEBÉS Y NIÑEZ DE 0 A 7 AÑOS DE EDAD. ES UN ESPACIO INTERACTIVO Y LÚDICO DISEÑADO PARA ESTIMULAR EL DESARROLLO INTEGRAL Y EL AMOR TEMPRANO POR LA LECTURA EN UN ENTORNO SEGURO JUNTO A SUS FAMILIAS.",


        // VIDEO VERTICAL — NIVEL 2

        video:
        "assets/VIDEO-NIVEL-2-AQUI.mp4",


        areas: [

            {
                title: "PSICOMOTRIZ",

                text:
                "ESPACIO ESPECIALMENTE DISEÑADO PARA QUE LA PRIMERA INFANCIA DESARROLLE SUS HABILIDADES FÍSICAS, EL EQUILIBRIO Y LA COORDINACIÓN MOTORA MEDIANTE EL MOVIMIENTO LIBRE Y SEGURO.",

                // IMAGEN 4

                image:
                "N2/motriz.jpg"
            },


            {
                title: "LECTURA TRILINGÜE",

                text:
                "CUENTA CON MÁS DE 6,000 LIBROS ADAPTADOS PARA LOS MÁS PEQUEÑOS EN ESPAÑOL, INGLÉS Y NÁHUATL.",

                // IMAGEN 5

                image:
                "N2/lectura.jpg"
            },


            {
                title: "ENFOQUE LÚDICO",

                text:
                "EL JUEGO ES EL EJE TRANSVERSAL DEL NIVEL PARA APRENDER DE FORMA DIVERTIDA. LOS NIÑOS APRENDEN JUGANDO MIENTRAS DESARROLLAN SUS HABILIDADES EN CONJUNTO.",

                // IMAGEN 6

                image:
                "N2/ludico.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 3
       ================================================== */

    {
        id: 3,

        name: "NIÑEZ Y ADOLESCENCIA",

        description:
        "EL NIVEL 3 ESTÁ DEDICADO POR COMPLETO A LA NIÑEZ DE 8 A 12 AÑOS. ES UN ENTORNO DINÁMICO Y SEGURO QUE FUSIONA LA LITERATURA CON LA TECNOLOGÍA, DISEÑADO PARA MOTIVAR LA CURIOSIDAD, EL HÁBITO DE LA LECTURA Y EL APRENDIZAJE LÚDICO EN LA ETAPA ESCOLAR.",


        // VIDEO VERTICAL — NIVEL 3

        video:
        "assets/VIDEO-NIVEL-3-AQUI.mp4",


        areas: [

            {
                title: "SALA INCLUSIVA Y ZONA BRAILLE",

                text:
                "ESPACIOS ADAPTADOS PARA ASEGURAR LA ACCESIBILIDAD, INCLUYENDO RECURSOS PARA NIÑEZ CON DISCAPACIDAD VISUAL.",

                // IMAGEN 7

                image:
                "N3/braille.jpg"
            },


            {
                title: "ZONA GAMER",

                text:
                "ES UN ESPACIO DISEÑADO PARA COMBINAR EL SANO ESPARCIMIENTO TECNOLÓGICO CON EL FOMENTO A LA LECTURA DE LA NIÑEZ Y PREADOLESCENTES.",

                // IMAGEN 8

                image:
                "N3/zgamer.jpg"
            },


            {
                title: "COLECCIÓN DE LIBROS",

                text:
                "CUENTA CON APROXIMADAMENTE 26,000 LIBROS ORIENTADOS A LA LECTURA, EL APRENDIZAJE Y LA AVENTURA PARA ESTE RANGO DE EDAD.",

                // IMAGEN 9

                image:
                "N3/recepción.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 4
       ================================================== */

    {
        id: 4,

        name: "JUVENTUD",

        description:
        "ESPACIO PENSADO PARA LA JUVENTUD, EL ENCUENTRO, EL APRENDIZAJE, LA CREACIÓN Y EL DESARROLLO DE NUEVAS IDEAS.",


        // VIDEO VERTICAL — NIVEL 4

        video:
        "assets/VIDEO-NIVEL-4-AQUI.mp4",


        areas: [

            {
                title: "Zonas tematicas",

                text:
                "ES EL ESPACIO MAS VISUAL E INMERSIVO DEL PISO. ESTA DISEÑADO PARA LOS FANATICOS DE LA CIENCIA FICCION Y LA LITERATURA FANTASTICA.",

                // IMAGEN 10

                image:
                "N4/N4 Zona Starwar.jpg"
            },


            {
                title: "ZONA DE COMICS Y MANGA",

                text:
                "AREA DE ARTE SECUENCIAL Y NOVELAS GRAFICAS.DONDE LAS ESTANTERIAS RESGUARDAN MILES DE TOMOS DE LAS SERIES DE ANIMACION JAPONESA MAS FAMOSAS",

                // IMAGEN 11

                image:
                "N4/comic.jpg"
            },


            {
                title: "LECTURA Y COLECCIONES",

                text:
                "ZONA DE ENTRETENIMIENTO, QUE SE DIVIDE EN DOS: ESPACIO JUVENIL Y DE CO-WORKING Y TAMBIEN DE RESGUARDO DEL FONDO ANTIGUO.",

                // IMAGEN 12

                image:
                "N4/colec.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 5
       ================================================== */

    {
        id: 5,

        name: "COLECCIÓN GENERAL E INVESTIGACIÓN",

        description:
        "UN NIVEL ORIENTADO A LA CONSULTA, INVESTIGACIÓN, ESTUDIO Y ACCESO A COLECCIONES ESPECIALIZADAS.",


        // VIDEO VERTICAL — NIVEL 5

        video:
        "assets/VIDEO-NIVEL-5-AQUI.mp4",


        areas: [

            {
                title: "ZONAS DE ESTUDIO",

                text:
                "ES EL ESPACIO MAS VISUAL E INMERSIVO DEL PISO.ESTA DISEÑADO PARA LOS FANATICOS DE LA CIENCIA FICCION Y LA LITERATURA FANTASTICA",

                // IMAGEN 13

                image:
                "N5/estudio.jpg"
            },


            {
                title: "SALA CLASICA Y VISTAS",

                text:
                "DISPONE DE UNA SALA CLASICA CON AUTORES RECONOCIDOS, UN DISEÑO ARQUITECTONICO ESPACIAL Y VISTAS HACIA LA PLAZA GERARDO BARRIOS EN EL CENTRO HISTORICO.",

                // IMAGEN 14

                image:
                "N5/N5 Sala Lectura VIP.jpg"
            },


            {
                title: "ARCHIVO GENERAL DE LA NACION",

                text:
                "CONSTITUYE LA MAYOR EXHIBICION DE LIBROS EN ESTANTERIA ABIERTA DE TODO EL EDIFICIO.ESTA PENSADA COMO EL NUCLEO DEL APRENDIZAJE, LA INVESTIGACION Y EL DESCUBRIEMIENTO DENTRO DEL NIVEL.",

                // IMAGEN 15

                image:
                "N5/N5 General.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 6
       ================================================== */

    {
        id: 6,

        name: "TECNOLOGÍA E INNOVACIÓN",

        description:
        "UN ENTORNO PARA EXPLORAR TECNOLOGÍAS, CREATIVIDAD, INNOVACIÓN Y NUEVAS FORMAS DE APRENDER.",


        // VIDEO VERTICAL — NIVEL 6

        video:
        "assets/VIDEO-NIVEL-6-AQUI.mp4",


        areas: [

            {
                title: "LABORATORIO DE PROTOTIPADO",

                text:
                "ES UN LABORATORIO DE CO-CREATIVIDAD Y FABRICACION DIGITAL DISEÑADO PARA QUE ESTUDIANTES,EMPRENDEDORES Y ENTUSIASTAS DE LA TECNOLOGIA MATERIALICEN SUS IDEAS EN OBJETOS REALES",

                // IMAGEN 16

                image:
                "N6/proto.jpg"
            },


            {
                title: "LABORATORIO DE REALIDAD VIRTUAL",

                text:
                "ES UN ESPACIO INMERSIVO DE ULTIMA GENERACION PARA DEMOCRATIZAR EL ACCESO A LA TECNOLOGIA AVANZADA A TRAVES DE SIMULADORES",

                // IMAGEN 17

                image:
                "N6/virtual.jpg"
            },


            {
                title: "LABORATORIO DE ROBOTICA",

                text:
                "ESPACIO RESERVADO PARA EL CONTENIDO DEL ÁREA.",

                // IMAGEN 18

                image:
                "N6/robo.jpg"
            }

        ]
    },



    /* ==================================================
       NIVEL 7
       ================================================== */

    {
        id: 7,

        name: "ARTE, CULTURA Y GASTRONOMÍA",

        description:
        "UN NIVEL DEDICADO A LAS EXPRESIONES ARTÍSTICAS, EL PATRIMONIO CULTURAL, LA GASTRONOMÍA Y LAS EXPERIENCIAS CREATIVAS.",


        // VIDEO VERTICAL — NIVEL 7

        video:
        "assets/VIDEO-NIVEL-7-AQUI.mp4",


        areas: [

            {
                title: "GALERIA DE ARTE Y EXPOSICIONES",

                text:
                "CUENTA CON UN AREA PARA EXHIBICIONES TEMPORALES Y VISUALES DE ARTISTAS SALAVADOREÑOS(COMO MUESTRAS DE PINTURA Y ARTE URBANO).",

                // IMAGEN 19

                image:
                "N7/arte.jpg"
            },


            {
                title: "AUDITORIO",

                text:
                "UN ESPACIO MODERNO Y COMODO CON CAPACIDAD PARA 150 PERSONAS, IDEAL PARA CONFERENCIAS PROYECCIONES Y EVENTOS CULTURALES",

                // IMAGEN 20

                image:
                "N7/auditorio.jpg"
            },


            {
                title: "TERRAZAS Y VISTAS",

                text:
                "ZONA DE ENTRETENIMIENTO, QUE SE DIVIDE EN DOS:ESPACIO JUVENIL Y DE CO-WORKING Y TAMBIEN DE RESGUARDO DEL FONDO ANTIGUO",

                // IMAGEN 21

                image:
                "N7/terraza.jpg"
            }

        ]
    }

];



/* ======================================================
   ELEMENTOS DE LAS PANTALLAS
   ====================================================== */

const views = {

    home:
    document.getElementById("homeView"),

    levels:
    document.getElementById("levelsView"),

    detail:
    document.getElementById("detailView")

};


const transitionLayer =
document.getElementById("transitionLayer");


let inactivityTimer = null;

let currentView = "home";



/* ======================================================
   TRANSICIÓN ENTRE PANTALLAS
   ====================================================== */

function transitionTo(callback) {

    transitionLayer.classList.remove("go");

    void transitionLayer.offsetWidth;

    transitionLayer.classList.add("go");


    setTimeout(() => {

        callback();

    }, 360);


    setTimeout(() => {

        transitionLayer.classList.remove("go");

    }, 760);

}



/* ======================================================
   MOSTRAR PANTALLA
   ====================================================== */

function showView(name) {

    Object.values(views).forEach(view => {

        view.classList.remove("active");

    });


    views[name].classList.add("active");


    currentView = name;


    window.scrollTo({

        top: 0,

        behavior: "instant"

    });


    setTimeout(() => {

        initReveal();

    }, 50);


    resetInactivityTimer();

}



/* ======================================================
   ANIMACIONES AL HACER SCROLL
   ====================================================== */

function initReveal() {

    const items =
        document.querySelectorAll(
            ".active .reveal, .active .area"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.10
            }

        );


    items.forEach(item => {

        observer.observe(item);

    });

}



/* ======================================================
   TIMER DE INACTIVIDAD
   ======================================================

   Después de 30 segundos sin interacción:

   NIVEL / SELECCIÓN
          ↓
   TRANSICIÓN
          ↓
   INICIO

   El timer se reinicia cuando el usuario:

   - toca
   - hace click
   - mueve el dedo
   - mueve el mouse
   - hace scroll
   - presiona una tecla

   ====================================================== */

function resetInactivityTimer() {

    clearTimeout(inactivityTimer);


    inactivityTimer =
        setTimeout(() => {

            if (currentView !== "home") {

                transitionTo(() => {

                    showView("home");

                });

            }

        }, CONFIG.inactivitySeconds * 1000);

}



/* ======================================================
   EVENTOS DE INTERACCIÓN TOUCH
   ====================================================== */

[
    "touchstart",
    "touchmove",
    "pointerdown",
    "pointermove",
    "click",
    "wheel",
    "scroll",
    "keydown"

].forEach(eventName => {

    window.addEventListener(

        eventName,

        resetInactivityTimer,

        {
            passive: true
        }

    );

});



/* ======================================================
   IMAGEN PRINCIPAL
   ====================================================== */

function applyImage(id, src) {

    const element =
        document.getElementById(id);


    if (!element) {

        return;

    }


    element.src = src;


    element.onerror = () => {

        element.style.display = "none";

    };

}


applyImage(
    "homeImage",
    CONFIG.homeImage
);



/* ======================================================
   IMAGEN SELECCIÓN DE NIVELES
   ====================================================== */

applyImage(
    "levelsImage",
    CONFIG.levelsImage
);



/* ======================================================
   CREAR TARJETAS DE LOS 7 NIVELES
   ====================================================== */

function renderLevels() {

    const grid =
        document.getElementById("levelsGrid");


    grid.innerHTML = levels.map(

        (level, index) => {

            return `

                <article
                    class="level-card ${
                        index === 6 ? "wide" : ""
                    } reveal"
                    tabindex="0"
                    role="button"
                    aria-label="Abrir nivel ${level.id}: ${level.name}"
                    data-level="${level.id}"
                >
                    <img
                        class="level-bg"
                        src="assets/IMAGEN-N${level.id}-FONDO-AQUI.jpg"
                        alt=""
                        aria-hidden="true"
                        draggable="false"
                    >

                    <div class="level-number">
                        NIVEL ${level.id}
                    </div>

                    <div class="level-name">
                        ${level.name}
                    </div>

                </article>

            `;

        }

    ).join("");


    /* ==============================================
       EVENTOS DE LAS TARJETAS
       ============================================== */

    grid
        .querySelectorAll(".level-card")
        .forEach(card => {


            // La fotografía es una capa independiente detrás del texto.
            // Si falta el archivo, la tarjeta conserva su fondo azul sólido.
            const backgroundImage = card.querySelector(".level-bg");
            if (backgroundImage) {
                const hideMissingBackground = () => {
                    backgroundImage.remove();
                    card.classList.add("no-bg-image");
                };
                backgroundImage.addEventListener("error", hideMissingBackground, { once: true });
                if (backgroundImage.complete && backgroundImage.naturalWidth === 0) {
                    hideMissingBackground();
                }
            }

            const openLevelFromCard = () => {

                openLevel(
                    Number(card.dataset.level)
                );

            };


            card.addEventListener(
                "click",
                openLevelFromCard
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        openLevelFromCard();

                    }

                }
            );

        });

}



/* ======================================================
   ABRIR UN NIVEL
   ====================================================== */

function openLevel(id) {


    const level =
        levels.find(
            item => item.id === id
        );


    if (!level) {

        return;

    }



    /* ==================================================
       INFORMACIÓN PRINCIPAL DEL NIVEL
       ================================================== */

    document.getElementById(
        "detailEyebrow"
    ).textContent =
        `NIVEL ${level.id}`;


    document.getElementById(
        "detailTitle"
    ).textContent =
        `NIVEL ${level.id}`;


    document.getElementById(
        "detailDescription"
    ).textContent =
        level.description;



    /* ==================================================
       CREAR LAS 3 ÁREAS DEL NIVEL
       ================================================== */

    const areasContainer =
        document.getElementById(
            "areasContainer"
        );


    areasContainer.innerHTML =
        level.areas.map(

            (area, index) => {

                return `

                    <article class="area reveal">


                        <!-- =========================
                             IMAGEN DEL ÁREA
                             ========================= -->

                        <div class="image-slot">

                            <img
                                class="area-image"
                                src="${area.image}"
                                alt="${area.title}"
                            >


                            <div class="image-slot-label">

                                
                            </div>

                        </div>



                        <!-- =========================
                             INFORMACIÓN DEL ÁREA
                             ========================= -->

                        <div class="area-copy">

                            <h3>
                                ÁREA ${index + 1}
                            </h3>


                            <h4>
                                ${area.title}
                            </h4>


                            <p>
                                ${area.text}
                            </p>

                        </div>


                    </article>

                `;

            }

        ).join("");



    /* ==================================================
       SI UNA IMAGEN NO EXISTE
       MOSTRAR EL ESPACIO RESERVADO
       ================================================== */

    document
        .querySelectorAll(".area-image")
        .forEach(image => {


            image.onerror = () => {

                image.style.display =
                    "none";


                image.parentElement.classList.add(
                    "empty"
                );

            };

        });



    /* ==================================================
       VIDEO VERTICAL
       ================================================== */

    const video =
        document.getElementById(
            "levelVideo"
        );


    const videoFrame =
        video.closest(
            ".video-frame"
        );


    const videoSource =
        document.getElementById(
            "levelVideoSource"
        );


    video.pause();


    videoSource.src =
        level.video;


    document.getElementById(
        "videoFileLabel"
    ).textContent =
        `VIDEO VERTICAL — NIVEL ${level.id}`;


    videoFrame.classList.remove(
        "has-video"
    );


    video.onloadeddata = () => {

        videoFrame.classList.add(
            "has-video"
        );

    };


    video.onerror = () => {

        videoFrame.classList.remove(
            "has-video"
        );

    };


    video.load();



    /* ==================================================
       CAMBIO DE PANTALLA
       ================================================== */

    transitionTo(() => {

        showView("detail");

    });

}



/* ======================================================
   BOTÓN "BIENVENIDOS / CONTINUAR"
   ====================================================== */

document
    .getElementById("startBtn")
    .addEventListener(
        "click",
        () => {

            transitionTo(() => {

                showView("levels");

            });

        }
    );



/* ======================================================
   BOTÓN REGRESAR
   ====================================================== */

document
    .getElementById("backBtn")
    .addEventListener(
        "click",
        () => {

            transitionTo(() => {

                showView("levels");

            });

        }
    );



/* ======================================================
   INICIAR LA INTERFAZ
   ====================================================== */

renderLevels();


showView("home");