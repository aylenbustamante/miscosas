let colores = color1(c, 1);

function Cuadro(pantalla) {
  image(imagen1, 0, 0, 400, 400);
  let rojo = 0;
  let verde = 0;
  let azul = 0;

  if (pantalla === 1) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0) {
          fill(rojo, verde, azul);
          rojo = map(c, 400, 20, 50, 254);
          verde = map(c, 400, 20, 37, 189);
          azul = map(c, 400, 20, 0, 40);
          rect(600, 199, c, c);
        } else {
          fill(rojo, verde, azul);
          rojo = map(c, 420, 20, 135, 70);
          verde = map(c, 420, 20, 141, 59);
          azul = map(c, 430, 20, 163, 50);
          rect(600, 191, c, c);
        }
      }
    }
  } else if (pantalla === 2) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0) {
           let colores = color1(c, 2);
          fill(colores.rojo, colores.verde, colores.azul);
          rect(600, 199, c, c);
        } else {
          let posX = 600;
          let posY = 192;

          push();
          translate(posX, posY);
          rotate(map(mouseX, 400, 20, 1, PI));

          let colores = color1(c, 2);
          fill(colores.rojo, colores.verde, colores.azul);
          
          rect(0, 0, c, c); // Dibuja el rectángulo en la posición rotada
          pop();
        }
      }
    }
  } else if (pantalla === 3) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        if ((c / 20) % 2 === 0) {
          fill(rojo, verde, azul);
          rojo = random(100, 255);
          verde = map(c, 420, 20, 140, 99);
          azul = random(100, 255);
          rect(600, 199, c, c);
        } else {
          fill(rojo, verde, azul);
          rojo = map(c, 420, 20, 0, 240);
          verde = map(c, 420, 20, 0, 122);
          azul = map(c, 420, 20, 0, 166);
          rect(600, 191, c, c);
        }
      }
    }
  }
}


function color1(c, pantalla) {
  let rojo, verde, azul;

  if (pantalla === 1) {
    rojo = map(c, 400, 20, 50, 254);
    verde = map(c, 400, 20, 37, 189);
    azul = map(c, 400, 20, 0, 40);
  } else if (pantalla === 2) {
    rojo = map(c, 400, 20, 65, 255);
    verde = map(c, 400, 20, 60, 98);
    azul = map(c, 400, 20, 70, 229);
  }

  return { rojo, verde, azul };
}

function reiniciar() {
  Pantalla = 1;
}
