//COMISION 5
// 118978/1 - AYLEN BUSTAMANTE

let imagen1;
let Pantalla = 1;

function setup() {
  createCanvas(800, 400);
  imagen1 = loadImage("data/imagen1.jpg");
  rectMode(CENTER);
  //tam = width/cant;
}

function draw() {
  background(124, 140, 144);
  Cuadro(Pantalla);
}

function mousePressed() {
  cambioDePantalla();
}

function cambioDePantalla() {
  Pantalla++;
  if (Pantalla > 3) {
    Pantalla = 3;
  }
}
function keyPressed() {
  if (key == 'r' || key == 'R') {   
    reiniciar();
  }
}
