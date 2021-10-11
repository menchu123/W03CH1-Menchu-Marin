import Asesor from "./scripts/Asesor.js";
import Escudero from "./scripts/Escudero.js";
import Luchador from "./scripts/Luchador.js";
import Personaje from "./scripts/Personaje.js";
import Rey from "./scripts/Rey.js";

const joffrey = new Rey("Joffrey", Personaje.familia.lannister, 15, 1);
const jamie = new Luchador(
  "Jamie",
  Personaje.familia.lannister,
  32,
  "Fake hand",
  6
);
const daenerys = new Luchador(
  "Daenerys",
  Personaje.familia.targaryen,
  19,
  "Dragons",
  9
);
const tyrion = new Asesor("Tyrion", Personaje.familia.lannister, 24, daenerys);
const bronn = new Escudero("Bronn", Personaje.familia.blackwater, 36, jamie, 2);

const personajes = [joffrey, jamie, daenerys, tyrion, bronn];

const characterList = document.querySelector(".characters-list");
const characterCard = document.querySelector(".character");

const addCharacterPhoto = (img) => {
  const characterPhoto = document.querySelector(".character__picture");
  characterPhoto.src = img;
};

const characterCardAdd = (array) => {
  for (const character of array) {
    const newCharacter = characterCard.cloneNode(true);
    characterList.appendChild(newCharacter);

    addCharacterPhoto(`img/${character.nombre}.jpg`);
  }
};

characterCardAdd(personajes);
// characterCard.style.display = "none";
