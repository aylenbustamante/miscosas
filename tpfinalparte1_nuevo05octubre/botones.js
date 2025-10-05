function crearBotones() {
    
    // Botón de avance general (▶)
    boton = createButton("▶");
    boton.position(width - 120, height - 60);
    boton.size(100,40);
    boton.style("color", "white");
    boton.style("background-color", "rgba(255, 0, 0, 0.5)");
    // PRESTAR ATENCION ¡ASIGNAMOS la nueva función que maneja el salto de 15 a 17!
    boton.mousePressed(avanzarHistoria); 
    boton.show();
    
    // Botón Caramelo (Ruta Bifurcada a 14)
    botonUno = createButton("CARAMELO");
    botonUno.position(width/2 - 100, height - 60);
    botonUno.size(100,40);
    botonUno.style("color", "white");
    botonUno.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonUno.mousePressed(() => {
        // SALTO CLAVE: Inicia la rama en la imagen 14  (AVERIGUAR COMO 
        estado = 14;
        indice = 14;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonUno.hide();

    // Botón Manteca (Ruta a 5)
    botonDos = createButton("MANTECA");
    botonDos.position(width/2 + 10, height - 60);
    botonDos.size(100,40);
    botonDos.style("color", "white");
    botonDos.style("background-color", "rgba(255, 0, 0, 0.5)");
    botonDos.mousePressed(() => {
        // Inicia la rama en la imagen 5 (tu flujo original)
        estado = 5;
        indice = 5;
        ocultarBotonesEspeciales();
        boton.show();
    });
    botonDos.hide();
}

function ocultarBotonesEspeciales() {
    botonUno.hide();
    botonDos.hide();
}
