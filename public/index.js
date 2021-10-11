import Asesor from "./Asesor.js";
import Escudero from "./Escudero.js";
import Luchador from "./Luchador.js";
import Personaje from "./Personaje.js";
import Rey from "./Rey.js";

const joffrey = new Rey("Joffrey", Personaje.familia.arryn, 17, 2);
const jaime = new Luchador("Jaime", Personaje.familia.stark, 30, "AK-47", 7);
const daenerys = new Luchador("Daenerys", Personaje.familia.stark, 20, "AK", 7);
const tyrion = new Asesor("Tyirion", Personaje.familia.stark, 28, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.stark, 28, jaime, 7);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];
console.log(personajes);

const comunicados = personajes
  .filter((personaje) => personaje instanceof Luchador)
  .map((personaje) => personaje.comunicar());

console.log(joffrey.serie);
comunicados.forEach((mensaje) => console.log(mensaje));
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
jaime.morir();
tyrion.morir();
console.log(`Jaime vivo ? ${jaime.vivo}`);
console.log(`Tyirion vivo ? ${tyrion.vivo}`);
