//Aylen Bustamante 

let imagen = [];
let Textos = [];
let sound;
let estado;

// Botones
let BotonInicio = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "Inicio",    
  cambio: 1,         
  colorFondo: [100, 200, 255], 
  colorTexto: [0],      
};

let BotonSiguiente = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "Siguiente",  
  cambio: 1,            
  colorFondo: [100, 200, 255], 
  colorTexto: [0],      
};

let BotonSi = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "Sí",        
  cambio: 1,            
  colorFondo: [100, 200, 255], 
  colorTexto: [0],      
};

let BotonNo = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "No",        
  cambio: 0,            
  colorFondo: [255, 100, 100], 
  colorTexto: [0],      
};

let BotonReiniciar = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "Reiniciar",  
  cambio: 0,            
  colorFondo: [255, 200, 200], 
  colorTexto: [0],      
};

let BotonCreditos = {
  x: 0,              
  y: 0,              
  w: 120,            
  h: 70,             
  texto: "Créditos",  
  cambio: 0,            
  colorFondo: [200, 200, 255], 
  colorTexto: [0],      
};


function preload() {
  for (let i = 0; i < 27; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpeg");
  }
  sound = loadSound("data/sound.mp3");
  Textos = loadStrings("data/pikachu.txt");
  console.log(Textos.length);
}

function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 27; i++) {
    imagen[i].resize(width, height);
  }

  estado = 0;
}

function draw() {
  background(200);
  cargarEstado(estado);

  fill(0, 0, 255);
  textSize(20);

  if (estado < Textos.length && Textos[estado]) {
    mostrarTexto(Textos[estado], width / 2, 120);
  }

 if (estado === 0) {
    BotonInicio.x = width / 2 - 60;
    BotonInicio.y = height / 2 + 40;
    dibujarBoton(BotonInicio);
  }

  
  if (estado === 1 || estado === 2 || estado === 4 || estado === 5 || estado === 6 || estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || estado === 15 || estado === 17 || estado === 18 || estado === 19 || estado === 21 || estado === 22 || estado === 23 || estado === 24) {
    BotonSiguiente.x = width / 2 - 60;
    BotonSiguiente.y = height - 50;
    dibujarBoton(BotonSiguiente);
  }

 
  if (estado === 3 || estado === 7 || estado === 11 || estado === 16) {
    BotonSi.x = width / 3 - 60;
    BotonSi.y = height - 50;
    BotonNo.x = 2 * width / 3 - 60;
    BotonNo.y = height - 50;
    dibujarBoton(BotonSi);
    dibujarBoton(BotonNo);
  }

  
 if (estado === 12 || estado === 20 || estado === 25 || estado === 26) {
  BotonReiniciar.x = 30;       
  BotonReiniciar.y = height - 50;  
  dibujarBoton(BotonReiniciar);
}

  
  if (estado === 0 || estado === 26) {
    BotonCreditos.x = width - 140;
    BotonCreditos.y = height - 50;
    dibujarBoton(BotonCreditos);
  }
}

function cargarEstado(estado) {
  cargaOtraImagen(imagen[estado], { x: width / 2, y: height / 2, ancho: width, alto: height, alinea: CENTER });

}

function mousePressed() {
  // INICIO
  if (estado === 0 && mouseX >= BotonInicio.x && mouseX <= BotonInicio.x + BotonInicio.w &&
      mouseY >= BotonInicio.y && mouseY <= BotonInicio.y + BotonInicio.h) {
    estado = 1;
  }

  // SIGUIENTE
  if ((estado === 1 || estado === 2 || estado === 4 || estado === 5 || estado === 6 || 
       estado === 8 || estado === 9 || estado === 10 || estado === 13 || estado === 14 || 
       estado === 15 || estado === 17 || estado === 18 || estado === 19 || estado === 21 || 
       estado === 22 || estado === 23 || estado === 24) &&
      mouseX >= BotonSiguiente.x && mouseX <= BotonSiguiente.x + BotonSiguiente.w &&
      mouseY >= BotonSiguiente.y && mouseY <= BotonSiguiente.y + BotonSiguiente.h) {
    estado += BotonSiguiente.cambio;
  }

  // SI
  if ((estado === 3 || estado === 7 || estado === 11 || estado === 16) &&
      mouseX >= BotonSi.x && mouseX <= BotonSi.x + BotonSi.w &&
      mouseY >= BotonSi.y && mouseY <= BotonSi.y + BotonSi.h) {
    if (estado === 3) estado = 4;
    else if (estado === 7) estado = 8;
    else if (estado === 11) estado = 13;
    else if (estado === 16) estado = 17;
    
  }

  // NO
  if ((estado === 3 || estado === 6 || estado === 7 || estado === 11 || estado === 16) &&
      mouseX >= BotonNo.x && mouseX <= BotonNo.x + BotonNo.w &&
      mouseY >= BotonNo.y && mouseY <= BotonNo.y + BotonNo.h) {
    if (estado === 3) estado = 6;
    else if (estado === 6) estado = 7;
    else if (estado === 7) estado = 11;
    else if (estado === 11) estado = 12; 
    else if (estado === 16) estado = 21;
    
  }

  // REINICIO
  if (estado === 12 || estado === 20 || estado === 25 || estado === 26) {
    if (mouseX >= BotonReiniciar.x && mouseX <= BotonReiniciar.x + BotonReiniciar.w &&
        mouseY >= BotonReiniciar.y && mouseY <= BotonReiniciar.y + BotonReiniciar.h) {
      estado = 0;
      return;
      
    }
  }

  // CRED
  if (estado === 0 || estado === 26) {
    if (mouseX >= BotonCreditos.x && mouseX <= BotonCreditos.x + BotonCreditos.w &&
        mouseY >= BotonCreditos.y && mouseY <= BotonCreditos.y + BotonCreditos.h) {
      estado = 26; 
    }
  }

  if (!sound.isPlaying()) {
    sound.play(); 
  }
}
