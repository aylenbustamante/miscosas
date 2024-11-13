function cargaOtraImagen(imag, medidas) {
  imageMode(medidas.alinea);
  image(imag, medidas.x, medidas.y, medidas.ancho, medidas.alto);
}

function mostrarTexto(texto, x, y) {
  push();
  fill(0, 0, 0, 150);
  let anchoCuadro = 615;
  let altoCuadro = 200;
  rect(x - anchoCuadro / 2, y - altoCuadro / 2 - 15, anchoCuadro, altoCuadro, 100);

  fill(255);
  textSize(25);
  textAlign(CENTER,TOP);

  let limiteTexto = 580;
  let a = width / 2 - 300;
  let b = 30;
  text(texto, a, b, limiteTexto);
  pop();
}

function dibujarBoton(boton) {
  fill(boton.colorFondo);
  rect(boton.x, boton.y, boton.w, boton.h, 10); 
push();
  fill(boton.colorTexto); 
  textSize(18); 
  textAlign(CENTER, CENTER);
  text(boton.texto, boton.x + boton.w / 2, boton.y + boton.h / 2); 
  pop();
}
