let imagen = [];
let dialogo;
let estado;
let indice;

//botones
let boton;

let botonUno; //caramelo
let botonDos; //manteca

let botonTres; //harina iz
let botonCuatro; //harina der

let botonCinco; //dulce iz
let botonSeis; //dulce der
let caminoDulce = 0; // 0 = ninguno, 1 = izquierdo, 2 = derecho


const TOTAL_IMAGENES = 19; 

function preload() {
    for (let i = 0; i < 19; i++) {
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

    if (estado == 0) {
       
    } else if (estado >= 1 && estado <= 3) {
      mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 4) {
      mostrarTexto(dialogo[indice], width / 2, height - 100);
        
        boton.hide();
        botonUno.show(); //CARAMELO
        botonDos.show(); //MANTECA
        
    } else if (estado == 5) {
        image(imagen[5], 0, 0); //ruta manteca
        
    } else if (estado == 7) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
        boton.hide();
        botonTres.show(); //HARINA
        botonCuatro.show(); //HARINA  
         
    } else if (estado == 6 || estado == 9 || estado == 12 ) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 8 || estado == 11 || estado == 12 || estado == 13) {
    
    } else if (estado == 10) {
    mostrarTexto(dialogo[indice], width / 2, height - 100);

    boton.hide();
    botonCinco.show();//dulce
    botonSeis.show(); //dulce

    
    } else if (estado == 14) {
        image(imagen[14], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 15) {
        image(imagen[15], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100); 
        //salto a la 17
        
    } else if (estado == 17) {
        image(imagen[17], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 18) {
        image(imagen[18], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    }
  
}

function avanzarHistoria() {
    
    //si estás en el estado 15 salta a 17
    if (estado === 15) {
        estado = 17; 
        indice = 17; //dialogo
    }
    // si estoy en la 11 y hay un camino elegido
    else if (estado === 11 && caminoDulce === 1) {
        estado = 12;   // izquierda a 12
        indice = 12;
        caminoDulce = 0; // reseteo
    }
    else if (estado === 11 && caminoDulce === 2) {
        estado = 13;   // derecha a 13
        indice = 13;
        caminoDulce = 0; // reseteo
    }
    
    // si llego a un final (12 o 13) reinicio
    else if (estado === 12 || estado === 13) {
        estado = 0;
        indice = 0;
    }
    else {
        //avance normal
        estado++;
        indice++;
    }

    //reinicio
    if (estado >= imagen.length) estado = 0;
    if (indice >= dialogo.length) indice = 0;

    //ocultar botones
    ocultarBotonesEspeciales();
    boton.show();
}
