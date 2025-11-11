class Panqueques {
   
    constructor(width) {
        this.ancho = 80;
        this.alto = 10;
        this.velocidad = 3;
        this.x = 0;
        this.y = 0;
        this.actual = {};
        this.width = width;
    }

    reiniciar() {
        this.x = random(this.ancho / 2, this.width - this.ancho / 2);
        this.y = -this.alto;
        this.velocidad += 0.05; 

        //las probabilidades de q sea rojo 
        if (random() < 0.20) { 
            this.actual.tipo = 'ROJO';
            this.actual.color = color(255, 50, 50); // Rojo brillante
        } else {
            this.actual.tipo = 'NORMAL';
            this.actual.color = color(random(200, 255), random(100, 150), 50); // Colores naranjas
        }
    }

    manejarCaida() {
        this.y += this.velocidad;
    }

    verificarColision(jugadorX) {
        
        const alturaTorre = estado.pilaPanqueques.length * this.alto;
        const alturaColisionY = jugador.y - jugador.alto / 2 - alturaTorre;

        if (this.y >= alturaColisionY) {
            // 2. Verifica Colisión horizontal con la posición actual del jugador
            if (this.x > jugadorX - this.ancho / 2 && this.x < jugadorX + this.ancho / 2) {
                // torre ganador
                if (this.actual.tipo === 'ROJO') {
                    estado.perder();
                } else {
                    estado.apilar(this.actual.color);
                    this.reiniciar();
                }
                return true;
            } else {
                // Fallo (cayó fuera del área de la torre)
                this.reiniciar(); 
                return false;
            }
        }
        
        // 3. Panqueque se sale por abajo de la pantalla
        if (this.y > height + this.alto) {
            this.reiniciar();
            return false;
        }
        return false;
    }
}
