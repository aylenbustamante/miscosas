class Enemigo {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.miColor = color(255, 0, 0);
    this.vida = 1;
  }

  dibujar() {
    fill(this.miColor);
    ellipse(this.posX, this.posY, 30, 30);
  }

 patrullar() {
  this.posX += random(-0.5, 0.5); 
  this.posY += random(-0.5, 0.5); 
  
  
  this.posX = constrain(this.posX, 0, width);
  this.posY = constrain(this.posY, 0, height);
}

  detectar(jugador) {
    let distancia = dist(this.posX, this.posY, jugador.posX, jugador.posY);
    return distancia < 30; 
  }
}
