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
