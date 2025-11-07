class Pantalla {
    
    estilizarBoton(boton) {
    boton.style("padding", "1px 10px");
    boton.style("font-size", "16px");
    boton.style("border-radius", "20px");
    boton.style("background", "rgba(255, 0, 0, 0.5)");
    boton.style("color", "white");
    boton.style("border", "2px solid rgba(52, 152, 191, 1)");
    boton.style("font-weight", "bold");
    boton.style("cursor", "pointer");
}

    constructor(width, height) {
        this.width = width;
        this.height = height;

        //imagenes
        this.imagenInicio = null;
        this.imagenCreditos = null;
        this.imagenInstrucciones = null;
        
        //botones
        this.botonJugar = createButton('๋ ࣭ ⭑JUGAR⋆˚꩜｡');
        this.estilizarBoton(this.botonJugar);
        
        this.botonCreditos = createButton('CRÉDITOS⋆ 𐙚 ̊.');
        this.estilizarBoton(this.botonCreditos);

        this.botonComenzar = createButton('⚊ • . ˚COMENZAR ᯓ★ ˖ ۫ ִ');
        this.estilizarBoton(this.botonComenzar);
        
        this.botonVolver = createButton('╰┈➤VOLVER⋆˚꩜｡');
        this.estilizarBoton(this.botonVolver);
        
        this.botonReiniciar = this.crearBotonReiniciar();
        this.estilizarBoton(this.botonReiniciar);
        
  
        //ocultaos
        this.ocultarTodos();
    }
    
        setImagenInicio(img) {
        this.imagenInicio = img;
    }
        
        setImagenCreditos(img) {
        this.imagenCreditos = img;
    }
        setImagenInstrucciones(img) {
        this.imagenInstrucciones = img;
    }

    ocultarTodos() {
        this.botonJugar.hide();
        this.botonCreditos.hide();
        this.botonComenzar.hide();
        this.botonVolver.hide();
        this.botonReiniciar.hide();
    }

    crearBotonReiniciar() {
        const boton = createButton('── Reiniciar Juego! 𓂃 ࣪˖ ִֶָ');
        boton.position(this.width / 2 - 90, this.height / 2 + 50);
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

    //PANTALLAS

    mostrarPantallaInicio() {
        background(220);
        if (this.imagenInicio) {
            imageMode(CENTER);
            image(this.imagenInicio, this.width / 2, this.height / 2, this.width, this.height);
        }

        this.botonJugar.show();
        this.botonJugar.position(this.width / 2 - 60, this.height / 2 + 60);
        this.botonJugar.mousePressed(() => {
            estado.estadoJuego = 'INSTRUCCIONES';
            this.ocultarTodos();
        });

        this.botonCreditos.show();
        this.botonCreditos.position(30, this.height - 60);
        this.botonCreditos.mousePressed(() => {
            estado.estadoJuego = 'CREDITOS';
            this.ocultarTodos();
        });
    }

   mostrarInstrucciones() {
    background(240);
    if (this.imagenInstrucciones) {
        imageMode(CENTER);
        image(this.imagenInstrucciones, this.width / 2, this.height / 2, this.width, this.height);
    }

      this.dibujarCuadroInferior();
      
      fill(255);                 
      textSize(16);
      textAlign(CENTER, CENTER);
      
      text(
          "Usá las flechas para mover el plato y atrapá los panqueques\n" +
          "𖦹 Usá las flechas para mover el plato y atrapá los panqueques\n" +
          "𖦹 Evitá los panqueques rojos",
          this.width / 2, 
          this.height -170
        );

    
    this.botonComenzar.show();
    this.botonComenzar.position(this.width / 2 - 95, this.height - 80);
    this.botonComenzar.mousePressed(() => {
        estado.estadoJuego = 'JUGANDO';
        this.ocultarTodos();
        
        if (!musica.isPlaying()) {
        musica.loop(); 
        }
    });
}
        mostrarCreditos() {
        background(0);
        imageMode(CENTER);
        if (this.imagenCreditos) {
            image(this.imagenCreditos, this.width / 2, this.height / 2, this.width, this.height);
        }
        
        fill(255);
        textSize(20);
        textAlign(TOP, TOP);
        text(
             "Hecho con ❤ por:\n" +
             "Aylen Bustamante 118978/1\n"+
             "Aragón Julieta 118959/8",
             this.width / 10, this.height / 10 
        );
        
        this.botonVolver.show();
        this.botonVolver.position(this.width / 2 - 40, this.height - 80);
        this.botonVolver.mousePressed(() => {
            estado.estadoJuego = 'INICIO';
            this.ocultarTodos();
        });
    }
       
      dibujarCuadroInferior() {
      fill(34, 139, 34);   
      rectMode(CENTER);
  
      const ancho = this.width * 0.80;  
      const alto = 120;
      const x = this.width / 2;
      const y = this.height - 160;
  
      rect(x, y, ancho, alto, 20);
    }

    //DIBUJO PRINCIPAL
    dibujar() {
        if (estado.estadoJuego === 'INICIO') {
            this.mostrarPantallaInicio();
            return;
        }

        if (estado.estadoJuego === 'INSTRUCCIONES') {
            this.mostrarInstrucciones();
            return;
        }

        if (estado.estadoJuego === 'CREDITOS') {
            this.mostrarCreditos();
            return;
        }

        //juego normal
        background(220);
        this.dibujarJugador();
        this.dibujarTorreApilada();
        this.dibujarPanquequeCayendo();
        this.dibujarContador();

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

    //
    dibujarJugador() {
        fill(50);
        rectMode(CENTER);
        rect(jugador.x, jugador.y, jugador.ancho, jugador.alto);
    }

    dibujarTorreApilada() {
        const xPos = jugador.x;
        const yBase = jugador.y - jugador.alto / 2;
        for (let i = 0; i < estado.pilaPanqueques.length; i++) {
            const p = estado.pilaPanqueques[i];
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
        text("Panqueques: " + estado.pilaPanqueques.length + " / " + estado.MAX_PANQUEQUES, 10, 30);
    }

    PantallaGanaste() {
        fill(0, 0, 0, 150);
        rect(this.width / 2, this.height / 2, this.width, this.height);
        fill(255, 255, 0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("¡GANASTE! Juntaste todos tus panqueques!", this.width / 2, this.height / 2 - 20);
    }

    PantallaPerdiste() {
        fill(0, 0, 0, 150);
        rect(this.width / 2, this.height / 2, this.width, this.height);
        fill(255, 50, 50);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("¡PERDISTE! Tocaste un panqueque rojo boludin", this.width / 2, this.height / 2 - 20);
    }
}
