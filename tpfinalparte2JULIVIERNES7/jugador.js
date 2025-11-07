class Jugador {
    /**
     * Controla el rectángulo base del jugador y su movimiento.
     */
    constructor(width, height) {
        this.ancho = 100;
        this.alto = 20;
        this.velocidad = 5;
        this.x = width / 2; // Posición inicial X
        this.y = height - 30; // Posición Y fija (base del juego)
    }

    Moverplato() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.velocidad;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.velocidad;
        }
        
        // Lógica de limitación de bordes sin usar constrain()
        const limiteIzquierdo = this.ancho / 2;
        const limiteDerecho = width - this.ancho / 2;

        if (this.x < limiteIzquierdo) {
            this.x = limiteIzquierdo;
        }
        if (this.x > limiteDerecho) {
            this.x = limiteDerecho;
        }
    }
}
