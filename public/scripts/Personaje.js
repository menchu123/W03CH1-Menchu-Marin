class Personaje {
  nombre;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  comunicado = "Yo soy un personaje indefinido :(";

  static familia = {
    lannister: "Lannister",
    stark: "Stark",
    targaryen: "Targaryen",
    blackwater: "Blackwater",
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
