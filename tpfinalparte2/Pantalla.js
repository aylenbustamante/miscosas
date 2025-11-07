class Pantalla {
    /**
     * Dibuja todos los elementos del juego y los mensajes de estado.
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.botonReiniciar = this.crearBoton();
    }

    crearBoton() {
        const boton = createButton('Reiniciar Juego');
        boton.position(this.width / 2 - 50, this.height / 2 + 50);
        boton.mousePressed(() => this.resetGame()); 
        boton.hide();
        return boton;
    }

    resetGame() {
        estado.reset();
        panqueques.velocidad = 3;
        panqueques.reiniciar();
        this.botonReiniciar.hide();
    }

    dibujar() {
        background(220); // Fondo

        // Llamadas a métodos de dibujo (estos son los que faltaban en la definición de la clase)
        this.dibujarJugador();
        this.dibujarTorreApilada(); 
        this.dibujarPanquequeCayendo();
        this.dibujarContador();
        
        // Mensajes de estado
        if (estado.estadoJuego === 'GANADO') {
            this.PantallaGanaste();
            this.botonReiniciar.show();
        } else if (estado.estadoJuego === 'PERDIDO') {
            this.PantallaPerdiste();
            this.botonReiniciar.show();
        } else {
            this.botonReiniciar.hide();
        }
    }

    // --- Métodos de Dibujo Añadidos ---

    dibujarJugador() {
        fill(50); // Rectángulo gris oscuro
        rectMode(CENTER);
        rect(jugador.x, jugador.y, jugador.ancho, jugador.alto);
    }

    dibujarTorreApilada() {
        const xPos = jugador.x; 
        const yBase = jugador.y - jugador.alto / 2; // Parte superior del rectángulo

        for (let i = 0; i < estado.pilaPanqueques.length; i++) {
            const p = estado.pilaPanqueques[i];
            
            // Calcula la posición Y apilándolo
            const yPos = yBase - (i * panqueques.alto); 
            
            fill(p.color); 
            ellipse(xPos, yPos - panqueques.alto / 2, panqueques.ancho, panqueques.alto); 
        }
    }

    dibujarPanquequeCayendo() {
        if (panqueques.actual.color) {
            fill(panqueques.actual.color); 
            ellipse(panqueques.x, panqueques.y, panqueques.ancho, panqueques.alto);
        }
    }

    dibujarContador() {
        fill(0);
        textSize(24);
        textAlign(LEFT);
        
        let textoPanqueques = "Panqueques: " + estado.pilaPanqueques.length + " / " + estado.MAX_PANQUEQUES;
        text(textoPanqueques, 10, 30);
    }

   PantallaGanaste() {
        fill(0, 0, 0, 150); 
        rect(this.width / 2, this.height / 2, this.width, this.height);
        
        fill(255, 255, 0); 
        textSize(40);
        textAlign(CENTER, CENTER);
        text("¡GANASTE! Juntaste todos tus panqueques!", this.width / 2, this.height / 2 - 20);
    }

    PantallaPerdiste() {
        fill(0, 0, 0, 150); 
        rect(this.width / 2, this.height / 2, this.width, this.height);
        
        fill(255, 50, 50); 
        textSize(40);
        textAlign(CENTER, CENTER);
        text("¡PERDISTE! Tocaste un panqueque rojo boludin", this.width / 2, this.height / 2 - 20);
    }
}
