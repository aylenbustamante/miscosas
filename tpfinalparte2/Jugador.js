class Jugador {
  constructor() {
    this.posX = width / 2;
    this.posY = height / 2;
    this.miColor = color(255, 225, 0);
    this.vida = 3;
    this.objeto = new Objeto();
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

  mover() {
   
  }

  recolectar(objeto) {
    let distancia = dist(this.posX, this.posY, objeto.x, objeto.y);
    if (distancia < 20) {
      this.objeto = objeto;
      return true;
    }
    return false;
  }
}
