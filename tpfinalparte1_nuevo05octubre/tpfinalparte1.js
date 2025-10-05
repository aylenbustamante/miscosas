let imagen = [];
let dialogo;
let estado;
let indice;

//botones
let boton; 
let botonUno;
let botonDos;


const TOTAL_IMAGENES = 19; 

function preload() {
    for (let i = 0; i < 19; i++) {
        imagen[i] = loadImage("data/imagen" + i + ".jpg");
    }
    dialogo = loadStrings("data/panqueques.txt");
}

function setup() {
    createCanvas(640, 480);
    estado = 0;
    indice = 0;
    
    for (let i = 0; i < imagen.length; i++) {
        imagen[i].resize(640, 480);
    }
    
    crearBotones();
}

function draw() {
    background(200);

    // Muestra la imagen si el estado es válido
    if (estado >= 0 && estado < imagen.length) {
        image(imagen[estado], 0, 0);
    }

   
    if (estado == 0) {
       
    } else if (estado >= 1 && estado <= 3) {
       
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 4) {
        
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
       
        boton.hide();
        botonUno.show(); // CARAMELO
        botonDos.show(); // MANTECA
        
    } else if (estado == 5) {
        image(imagen[5], 0, 0); // La ruta MANTECA comienza aquí
        
        } else if (estado == 7) {
        
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
       
        boton.hide();
        botonUno.show(); // CARAMELO
        botonDos.show(); // MANTECA  
         //Pantalla con textos
    } else if (estado == 6 || estado == 9 || estado == 10 || estado == 12 ) {
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 8 || estado == 11 || estado == 12 || estado == 13) {
       

    // --- NUEVOS ESTADOS PARA LA RUTA CARAMELO ---
    } else if (estado == 14) {
        image(imagen[14], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 15) {
        image(imagen[15], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100); 
        // El botón '▶' en este estado activará el salto a 17.
        
    } else if (estado == 17) {
        image(imagen[17], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    } else if (estado == 18) {
        image(imagen[18], 0, 0);
        mostrarTexto(dialogo[indice], width / 2, height - 100);
        
    }
    // Nota: El estado 16 es omitido por la lógica de salto en avanzarHistoria()
}

// ¡Esta función reemplaza tu función mousePressed() global anterior!
// Contiene la lógica central de avance, incluyendo el salto de imagen.
function avanzarHistoria() {
    
    // LÓGICA DE SALTO ESPECÍFICO: Si estás en el estado 15, salta a 17.
    if (estado === 15) {
        estado = 17; // Salta la imagen 16
        indice = 17; // Ajusta el índice de diálogo
        
    } else {
        // Avance normal en el resto de la historia
        estado++;
        indice++;
    }

    // Reinicio de historia si llega al final
    if (estado >= imagen.length) estado = 0;
    if (indice >= dialogo.length) indice = 0;

    // Asegura que los botones especiales se oculten después de la decisión
    ocultarBotonesEspeciales();
    boton.show();
}
