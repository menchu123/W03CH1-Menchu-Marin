import Personaje from "./Personaje.js";

class Rey extends Personaje {
  anosReinado;

  constructor(nombre, familia, edad, anosReinado) {
    super(nombre, familia, edad);
    this.anosReinado = anosReinado;
    this.comunicado = "Vais a morir todos! ";
  }
}

export default Rey;
