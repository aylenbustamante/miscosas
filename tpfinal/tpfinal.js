let pantallaActual = 0; // Pantalla actual
let pantallas = []; // Arreglo para almacenar las pantallas

function setup() {
  createCanvas(640, 480);
  
  // Definir pantallas en un arreglo de objetos
  pantallas = [
    { texto: "Pikachu te ha llamado para resolver un caso relacionado con tu padre que está desaparecido.", opciones: [1] },
    { texto: "Pikachu y tú están en la ruta bajo la tormenta. Pikachu está conduciendo y te pide que le digas en qué dirección debe doblar.", opciones: [2, 3] },
    { texto: "Elige una dirección para girar.", opciones: [4, 5] }, // Girar a la derecha o izquierda
    { texto: "Tienen un accidente, un Pokémon de agua los rescata y los lleva a la ciudad.", opciones: [4] }, // Continuar a la misma pantalla
    { texto: "Ambos caminos los llevan al mismo lugar: llegan a una ciudad extraña y presencian dos edificios.", opciones: [6, 7] }, // Ir al edificio rojo o azul
    { texto: "Al girar a la izquierda, tienen un accidente. Un Pokémon de agua los rescata y los lleva a la ciudad.", opciones: [6, 7] } // Ir al edificio rojo o azul
  ];
}

function draw() {
  background(255);
  mostrarPantalla(pantallaActual);
}

function mostrarPantalla(indice) {
  // Mostrar texto
  textAlign(LEFT);
  textSize(16);
  text(pantallas[indice].texto, 20, 40, width - 40, height - 80); // Ajustar para el texto
  
  // Crear botones para opciones
  for (let i = 0; i < pantallas[indice].opciones.length; i++) {
    let indiceOpcion = pantallas[indice].opciones[i];
    let boton = createButton(`Ir a pantalla ${indiceOpcion}`);
    boton.position(20, 120 + i * 30);
    boton.mousePressed(() => {
      pantallaActual = indiceOpcion;
      boton.remove(); // Eliminar botón después de hacer clic
    });
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    pantallaActual = 0; // Volver al inicio
  }
}
