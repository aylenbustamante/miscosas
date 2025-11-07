
let estado;
let jugador;
let panqueques;
let pantalla;


function setup() {
    createCanvas(600, 400); 
    rectMode(CENTER); 
    
    // Inicialización de todas las clases
    estado = new Estado(10, width, height); 
    jugador = new Jugador(width, height);
    panqueques = new Panqueques(width);
    pantalla = new Pantalla(width, height);

    panqueques.reiniciar(); 
}

function draw() {
    if (estado.estadoJuego === 'JUGANDO') {
        jugador.Moverplato(); 
        panqueques.manejarCaida();
        panqueques.verificarColision(jugador.x);
    }
    
    pantalla.dibujar();
}
