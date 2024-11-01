



function Cuadro(pantalla) {
  image(imagen1, 0, 0, 400, 400);

  if (pantalla === 1) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        let esPar = (c / 20) % 2 === 0; 
        let colores;

        if (esPar) {
          colores = colorCuadro(c, 1, true); 
          fill(colores);
          rect(600, 199, c, c);
        } else {
          colores = colorCuadro(c, 1, false);
          fill(colores);
          rect(600, 191, c, c);
        }
      }
    }
  } else if (pantalla === 2) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        let esPar = (c / 20) % 2 === 0; 
        let colores;

        if (esPar) {
          colores = colorCuadro(c, 2, true);
          fill(colores);
          rect(600, 199, c, c);
        } else {
          let posX = 600;
          let posY = 192;

          push();
          translate(posX, posY);
          rotate(map(mouseX, 400, 20, 1, PI));

          colores = colorCuadro(c, 2, false);
          fill(colores);
          rect(0, 0, c, c); 
          pop();
        }
      }
    }
 } else if (pantalla === 3) {
    for (let c = 400; c >= 20; c -= 20) {
      for (let i = 0; i < 10; i++) {
        let esPar = (c / 20) % 2 === 0; 
        let colores;

        if (esPar) {
          colores = colorCuadro(c, 3, true);
          fill(colores);
          rect(600, 199, c, c);
        } else {
          colores = colorCuadro(c, 3, false);
          fill(colores);
          rect(600, 191, c, c);
        }
      }
    }
  }
}

function colorCuadro(c, pantalla, esPar) {
  let rojo, verde, azul;

  if (pantalla === 1) {
    if (esPar) {
      rojo = map(c, 400, 20, 50, 254);
      verde = map(c, 400, 20, 37, 189);
      azul = map(c, 400, 20, 0, 40);
    } else {
      rojo = map(c, 420, 20, 135, 70);
      verde = map(c, 420, 20, 141, 59);
      azul = map(c, 430, 20, 163, 50);
    }
  } else if (pantalla === 2) {
    if (esPar) {
      rojo = map(c, 400, 20, 125, 117);
      verde = map(c, 400, 20, 140, 107);
      azul = map(c, 400, 20, 144, 234);
    } else {
      rojo = map(c, 400, 20, 65, 255);
      verde = map(c, 400, 20, 60, 98);
      azul = map(c, 400, 20, 70, 229);
    }
  } else if (pantalla === 3) {
    if (esPar) {
      rojo = random(100, 255);
      verde = map(c, 420, 20, 140, 99);
      azul = random(100, 255);
    } else {
      rojo = map(c, 420, 20, 0, 240);
      verde = map(c, 420, 20, 0, 122);
      azul = map(c, 420, 20, 0, 166);
    }
  }

  return color(rojo, verde, azul);
}

function reiniciar() {
  Pantalla = 1;
}
