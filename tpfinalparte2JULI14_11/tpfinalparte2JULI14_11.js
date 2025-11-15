let estado;
let jugador;
let panqueques;
let pantalla;
//img
let imagenInicio;
let imagenCreditos;
let imagenInstrucciones;
let imagenFondo;
let imagenPlato;
//musica
let musica;

function preload() {
    imagenInicio = loadImage("data/inicio.jpg");
    imagenCreditos = loadImage("data/creditos.jpg");
    imagenInstrucciones = loadImage("data/instrucciones.png");
    imagenFondo = loadImage("data/fondo.jpg");
    imagenPlato = loadImage("data/plato.png");
    musica = loadSound("data/musica.mp3");
}

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);

    estado = new Estado(10, width, height);
    estado.estadoJuego = 'INICIO';
    
    jugador = new Jugador(width, height, imagenPlato);
    panqueques = new Panqueques(width);
    pantalla = new Pantalla(width, height);

    pantalla.setImagenInicio(imagenInicio);
    pantalla.setImagenCreditos(imagenCreditos);
    pantalla.setImagenInstrucciones(imagenInstrucciones);
    pantalla.setImagenFondo(imagenFondo);

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

function keyPressed() {
    if (estado.estadoJuego === 'CREDITOS') {
        estado.estadoJuego = 'INICIO';
    }
}
