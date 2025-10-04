let imagen = []; 
let Texto = [];
let indice;
let estado;

function preload() {
  // ✅ Cargamos las imágenes
  for (let i = 0; i < 13; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpg");
  }

  // ✅ Cargamos el texto SOLO UNA VEZ (fuera del for)
  Texto = loadStrings("data/panqueques.txt");

  // ✅ Inicializamos variables
  estado = 0; 
  indice = 0;
}

function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < imagen.length; i++) {
    imagen[i].resize(640, 480);
  }
}

function draw() {
  background(200);
  cargarEstado(estado);


  if (estado < Texto.length && Texto[estado]) { 
    mostrarTexto(Texto[estado]);  // 
  }
}

function cargarEstado(estado) {
  cargaOtraImagen(imagen[estado], { 
    x: width / 2, 
    y: height / 2, 
    ancho: 640, 
    alto: 480, 
    alinea: CENTER 
  });

  if (estado < imagen.length - 1) {
    dibujarBoton(width - 80, height - 60, 60, 40, "→");
  }
}

function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea);
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}

function dibujarBoton(x, y, w, h, texto) {
  rectMode(CENTER);
  fill(255, 0, 0, 180);
  rect(x, y, w, h, 10);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(32);
  text(texto, x, y);
}

function mousePressed() {
  let bx = width - 80;
  let by = height - 60;
  let bw = 60;
  let bh = 40;

  if (mouseX > bx - bw/2 && mouseX < bx + bw/2 &&
      mouseY > by - bh/2 && mouseY < by + bh/2) {
    if (estado < imagen.length - 1) {
      estado++; 
    }
  }
}

function mostrarTexto(texto) {
  push();
  fill(0, 0, 0, 150);
  let anchoCuadro = 600;
  let altoCuadro = 120;
  let margenInferior = 20;
  rectMode(CENTER);
  rect(width / 2, height - altoCuadro / 2 - margenInferior, anchoCuadro, altoCuadro, 20);

  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, 230, 340, 400, 400);
  pop();
}
