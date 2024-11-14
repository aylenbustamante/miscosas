let jugador;
let escenario;
let enemigos = [];
let objetos = [];

function setup() {
  createCanvas(640, 480);
  jugador = new Jugador();
  escenario = new Escenario();
   juego = new Juego();


  objetos.push(new Objeto("compuesto R", random(width), random(height)));
}

function draw() {
  background(220);
  escenario.mostrar();
  jugador.dibujar();
  juego.dibujar();
  

  for (let i = 0; i < enemigos.length; i++) {
    let enemigo = enemigos[i];
    enemigo.dibujar();
    enemigo.patrullar();
    if (enemigo.detectar(jugador)) {
      jugador.vida -= 1;
    }
  }
  
 
  for (let i = 0; i < objetos.length; i++) {
    let objeto = objetos[i];
    objeto.mostrar();
    if (jugador.recolectar(objeto)) {
    
    }
  }
  

  if (jugador.vida <= 0) {
    noLoop();
  }
}
