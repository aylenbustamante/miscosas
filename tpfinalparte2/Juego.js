class Juego { 
  constructor() {
    this.enemigos = [];
    this.objetos = [];
    this.personaje = new Jugador();
    this.escenario = new Escenario();
    this.crearEnemigos(); 
    this.miObjeto = new Objeto("compuesto R", 100, 150);
  }

  crearEnemigos() {
    this.enemigos.push(new Enemigo(50, 100));  
    this.enemigos.push(new Enemigo(200, 150)); 
    this.enemigos.push(new Enemigo(300, 200));
    this.enemigos.push(new Enemigo(400, 250)); 
    this.enemigos.push(new Enemigo(500, 300)); 
  }

  iniciar() {
    this.objetos.push(this.miObjeto);
  }

  dibujar() {
    this.escenario.mostrar();
    this.personaje.dibujar();

    for (let i = 0; i < this.enemigos.length; i++) {
      let enemigo = this.enemigos[i];
      enemigo.dibujar();
      enemigo.patrullar();
      if (enemigo.detectar(this.personaje)) {
        this.personaje.vida -= 1;
      }
    }

    for (let i = 0; i < this.objetos.length; i++) {
      let objeto = this.objetos[i];
      objeto.mostrar();
    }
  }
}
