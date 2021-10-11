import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;

  constructor(nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.comunicado = "Primero pego y luego pregunto";
    this.arma = arma;
    if (destreza >= 0 && destreza <= 10) {
      this.destreza = destreza;
    }
  }
}
export default Luchador;
