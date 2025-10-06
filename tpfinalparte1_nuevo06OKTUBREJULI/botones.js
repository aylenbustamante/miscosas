function crearBotones() {
    
    //boton avance
    boton = createButton("▶");
    boton.position(width - 120, height - 60);
    boton.size(100,40);
    boton.style("color", "white");
    boton.style("background-color", "rgba(255, 0, 0, 0.5)");
    //PRESTAR ATENCION ASIGNAMOS la nueva función que maneja el salto de 15 a 17
    boton.mousePressed(avanzarHistoria); 
    boton.show();
    
    //botón caramelo
    botonUno = createButton("CARAMELO");
    botonUno.position(width/2 - 100, height - 60);
    botonUno.size(100,40);
    botonUno.style("color", "white");
    botonUno.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonUno.mousePressed(() => {
        // SALTO a la imagen 14  (AVERIGUAR COMO 
        estado = 14;
        indice = 14;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonUno.hide();

    //botón manteca
    botonDos = createButton("MANTECA");
    botonDos.position(width/2 + 10, height - 60);
    botonDos.size(100,40);
    botonDos.style("color", "white");
    botonDos.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonDos.mousePressed(() => {
        //inicia la rama en la imagen 5
        estado = 5;
        indice = 5;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonDos.hide();
    
    //boton harina izquierda
    botonTres = createButton("HARINA");
    botonTres.position(width/2 - 100, height - 60);
    botonTres.size(100,40);
    botonTres.style("color", "white");
    botonTres.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonTres.mousePressed(() => {
        //a la 8
        estado = 8;
        indice = 8;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonTres.hide();
    
    //boton harina derecha
    botonCuatro = createButton("HARINA");
    botonCuatro.position(width/2 + 10, height - 60);
    botonCuatro.size(100,40);
    botonCuatro.style("color", "white");
    botonCuatro.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonCuatro.mousePressed(() => {
        //a la 8
        estado = 8;
        indice = 8;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonCuatro.hide();
    
   // botón dulce izquierda
   botonCinco = createButton("DULCE");
   botonCinco.position(width/2 - 100, height - 60);
   botonCinco.size(100,40);
   botonCinco.style("color", "white");
   botonCinco.style("background-color", "rgba(255, 0, 0, 0.5)");
   botonCinco.mousePressed(() => {
        //primero voy a 11
        estado = 11;
        indice = 11;
        caminoDulce = 1; //marca que fue el izquierdo
        ocultarBotonesEspeciales();
        boton.show();
   });
   botonCinco.hide();

   // botón dulce derecha
   botonSeis = createButton("DULCE");
   botonSeis.position(width/2 + 10, height - 60);
   botonSeis.size(100,40);
   botonSeis.style("color", "white");
   botonSeis.style("background-color", "rgba(255, 0, 0, 0.5)");
   botonSeis.mousePressed(() => {
        // primero voy a 11
        estado = 11;
        indice = 11;
        caminoDulce = 2; // marca que fue el derecho
        ocultarBotonesEspeciales();
        boton.show();
   });
   botonSeis.hide();
}

function ocultarBotonesEspeciales() {
    botonUno.hide();
    botonDos.hide();
    botonTres.hide();
    botonCuatro.hide();
    botonCinco.hide();
    botonSeis.hide();
}
