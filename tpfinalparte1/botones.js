function crearBotones() {
  
  boton = createButton("▶");
  boton.position(width - 120, height - 60);
  boton.size(100,40);
  boton.style("color", "white");
  boton.style("background-color", "rgba(255, 0, 0, 0.5)");
  boton.mousePressed(() => {
    estado++;
    indice++;
    if (estado >= imagen.length) estado = 0;
    if (indice >= dialogo.length) indice = 0;
    ocultarBotonesEspeciales();
    boton.show();
  });
  boton.show();
  
  //boton caramelo
  botonUno = createButton("CARAMELO");
  botonUno.position(width/2 - 100, height - 60);
  botonUno.size(100,40);
  botonUno.style("color", "white");
  botonUno.style("background-color", "rgba(255, 0, 0, 0.5)");
  botonUno.mousePressed(() => {
    estado = 5;
    indice = 5;
    ocultarBotonesEspeciales();
    boton.show();
  });
  botonUno.hide();

  //mnnteca
  botonDos = createButton("MANTECA");
  botonDos.position(width/2 + 10, height - 60);
  botonDos.size(100,40);
  botonDos.style("color", "white");
  botonDos.style("background-color", "rgba(255, 0, 0, 0.5)");
  botonDos.mousePressed(() => {
    //tdavia no esta
  });
  botonDos.hide();
}

function ocultarBotonesEspeciales() {
  botonUno.hide();
  botonDos.hide();
}
