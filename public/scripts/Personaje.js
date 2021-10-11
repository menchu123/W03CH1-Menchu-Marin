class Personaje {
  nombre;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  comunicado = "Yo soy un personaje indefinido :(";

  static familia = {
    arryn: "casa arryn",
    stark: "casa stark",
    targaryan: "casa targaryan",
  };

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  morir() {
    this.vivo = false;
  }

  comunicar() {
    return this.comunicado;
  }
}

export default Personaje;
