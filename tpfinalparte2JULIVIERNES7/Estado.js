class Estado {
    
    constructor(maxPanqueques, width, height) {
        this.MAX_PANQUEQUES = maxPanqueques;
        this.estadoJuego = 'JUGANDO'; // 'JUGANDO', 'GANADO', 'PERDIDO'
        this.pilaPanqueques = []; 
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
