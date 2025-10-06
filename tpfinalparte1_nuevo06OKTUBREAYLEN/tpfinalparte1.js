let imagen = [];
let dialogo;
let estado;
let indice;

//botones
let boton;

let botonUno; //CaramelO
let botonDos; //MantecA

let botonTres; //harina iz
let botonCuatro; //harina der 

let botonCinco; //jarab dulce iz (En estado 10)
let botonSeis; //jarab dulce der (En estado 10)

let botonSiete;//Boton Experimento
let botonCreditos;

let caminoDulce = 0; // 0 = ninguno, 1 = izquierdo, 2 = derecho




function preload() {
    for (let i = 0; i < 20; i++) {
        imagen[i] = loadImage("data/imagen" + i + ".jpg");
    }
    dialogo = loadStrings("data/panqueques.txt");
}

function setup() {
    createCanvas(640, 480);
    estado = 0;
    indice = 0;
    
    for (let i = 0; i < imagen.length; i++) {
        imagen[i].resize(640, 480);
    }
    
    crearBotones();
}

function draw() {
    background(200);

    if (estado >= 0 && estado < imagen.length) {
        image(imagen[estado], 0, 0);
    }

    // Lógica de texto y botones especiales
    if (estado == 0) {
      botonCreditos.show();
        
    } else if (estado >= 1 && estado <= 3) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 4) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
        boton.hide();
        botonUno.show(); //CARAMELO
        botonDos.show(); //MANTECA
        
    } else if (estado == 5) {
        // ruta manteca
        
    } else if (estado == 7) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
        boton.hide();
        botonTres.show(); //HARINA
        botonCuatro.show(); //HARINA  
        
    } else if (estado == 6 || estado == 9 || estado == 12 ) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
      
        } else if ( estado == 13) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        botonCreditos.show();
    
    } else if (estado == 10) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);

        boton.hide();
        botonCinco.show();//jarab dulce
        botonSeis.show(); //jrb dulce

    // --- RUTA CARAMELO BAD ENDING --- 
    } else if (estado == 14) {
        image(imagen[14], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 15) {
       
        image(imagen[15], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100); 
        
      } else if (estado == 16) {
        // DESICION DE EXP Y MANTECA
        image(imagen[16], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
        boton.hide(); 
        botonDos.show();   
        botonSiete.show(); 
        

    } else if (estado == 17) {
        image(imagen[17], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 18) {
        image(imagen[18], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        botonCreditos.show();
        
    } else if (estado == 19) {
  image(imagen[19], 0, 0); // ahora sí muestra la última imagen
  mostrarTexto(dialogo[indice], width / 2, height - 100);
  boton.show();

        
        }
        
    
}


function avanzarHistoria() {
    
 
    if (estado === 11 && caminoDulce === 1) {
        estado = 12;    
        indice = 12;
        caminoDulce = 0; // reseteo
    }
    else if (estado === 11 && caminoDulce === 2) {
        estado = 13;   
        indice = 13;
        caminoDulce = 0; // reseteo
    }
    
    
    else if (estado === 12 || estado === 13 || estado === 18 || estado === 19) { 
        estado = 0;
        indice = 0;
    }
    else {
        
        estado++;
        indice++;
    }

    
    if (estado >= imagen.length) estado = 0;
    if (indice >= dialogo.length) indice = 0;

    // ocultar botones
    ocultarBotonesEspeciales();
    boton.show();
}
