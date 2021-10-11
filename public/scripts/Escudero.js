import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";

class Escudero extends Personaje {
  luchador;
  pelotismo;

  constructor(nombre, familia, edad, luchador, pelotismo) {
    super(nombre, familia, edad);
    this.comunicado = "Soy un loser";
    this.pelotismo = pelotismo;

    if (luchador instanceof Luchador) {
      this.luchador = luchador;
    }
  }
}

export default Escudero;
