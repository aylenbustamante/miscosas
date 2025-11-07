class Estado {
    /**
     * Maneja el estado del juego (puntuación, límites, control de flujo).
     */
    constructor(maxPanqueques, width, height) {
        this.MAX_PANQUEQUES = maxPanqueques;
        this.estadoJuego = 'JUGANDO'; // 'JUGANDO', 'GANADO', 'PERDIDO'
        this.pilaPanqueques = []; // Array para almacenar los panqueques apilados (solo color/tipo)
        this.alturaTotal = 0;
        this.jugadorY = height - 30;
    }

    reset() {
        this.pilaPanqueques = [];
        this.estadoJuego = 'JUGANDO';
        this.alturaTotal = 0;
    }

    apilar(color) {
        this.pilaPanqueques.push({ color: color });
        this.alturaTotal += panqueques.alto;

        if (this.pilaPanqueques.length >= this.MAX_PANQUEQUES) {
            this.estadoJuego = 'GANADO';
        }
    }

    perder() {
        this.estadoJuego = 'PERDIDO';
    }

    ganar() {
        this.estadoJuego = 'GANADO';
    }
}
