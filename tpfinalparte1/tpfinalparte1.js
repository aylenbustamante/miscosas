let imagen = [];
let dialogo;
let estado;
let indice;

//botones
let boton; 
let botonUno;
let botonDos;

function preload() {
  for (let i = 0; i < 13; i++) {
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

  if (estado == 0) {
    image(imagen[0], 0, 0);
    
  } else if (estado == 1) {
    image(imagen[1], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 2) {
    image(imagen[2], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 3) {
    image(imagen[3], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 4) {
    image(imagen[4], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
    //botones especiales
    boton.hide();
    botonUno.show();
    botonDos.show();
    
  } else if (estado == 5) {
    image(imagen[5], 0, 0);
    
  } else if (estado == 6) {
    image(imagen[6], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 7) {
    image(imagen[7], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 8) {
    image(imagen[8], 0, 0);
       
  } else if (estado == 9) {
    image(imagen[9], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
    
  } else if (estado == 10) {
    image(imagen[10], 0, 0);
    mostrarTexto(dialogo[indice], width / 2, height - 100);
  
  } else if (estado == 11) {
    image(imagen[11], 0, 0);
    
  } else if (estado == 12) {
    image(imagen[12], 0, 0);
  
  } else if (estado == 13) {
    image(imagen[13], 0, 0);
  } 
}

function mousePressed() {
  //solo para ocultar/mostrar botones
  ocultarBotonesEspeciales();
  boton.show();
}
