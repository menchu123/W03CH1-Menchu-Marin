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

const addCharacterName = (personaje) => {
  const characterName = document.querySelector(".character__name");
  characterName.textContent = `${personaje.nombre} ${personaje.familia}`;
};

const addCharacterAge = (personaje) => {
  const characterAge = document.querySelector(".character__age");
  characterAge.textContent = `Edad: ${personaje.edad}`;
};

const isCharacterAlive = (personaje) => {
  const alive = document.querySelector(".fa-thumbs-up");
  const dead = document.querySelector(".fa-thumbs-down");

  if (personaje.vivo) {
    dead.style.display = "none";
  } else {
    alive.style.display = "none";
  }
};

console.log(bronn.luchador);

const addCharacterData = (personaje) => {
  const anosList = document.querySelector(".anos");
  const armaList = document.querySelector(".arma");
  const destrezaList = document.querySelector(".destreza");
  const peloteoList = document.querySelector(".peloteo");
  const asesoraList = document.querySelector(".asesora");
  const sirveList = document.querySelector(".sirve");
  if (personaje.hasOwnProperty("anosReinado") === false) {
    anosList.textContent = "";
  } else {
    anosList.textContent = `Años de reinado: ${personaje.anosReinado}`;
  }
  if (personaje.hasOwnProperty("arma") === false) {
    armaList.textContent = "";
  } else {
    armaList.textContent = `Arma: ${personaje.arma}`;
  }
  if (personaje.hasOwnProperty("destreza") === false) {
    destrezaList.textContent = "";
  } else {
    destrezaList.textContent = `Destreza: ${personaje.destreza}`;
  }
  if (personaje.hasOwnProperty("pelotismo") === false) {
    peloteoList.textContent = "";
  } else {
    peloteoList.textContent = `Pelotismo: ${personaje.pelotismo}`;
  }
  if (personaje.hasOwnProperty("asesorado") === false) {
    asesoraList.textContent = "";
  } else {
    asesoraList.textContent = `Asesora a: ${personaje.asesorado.nombre}`;
  }
  if (personaje.hasOwnProperty("luchador") === false) {
    sirveList.textContent = "";
  } else {
    sirveList.textContent = `Sirve a: ${personaje.luchador.nombre}`;
  }
};

console.log(tyrion instanceof Rey);

const characterCardAdd = (array) => {
  for (const character of array) {
    const newCharacter = characterCard.cloneNode(true);
    characterList.appendChild(newCharacter);

    addCharacterPhoto(`img/${character.nombre}.jpg`);
    addCharacterName(character);
    addCharacterAge(character);
    isCharacterAlive(character);
    addCharacterData(character);
  }
};

characterCardAdd(personajes);
// characterCard.style.display = "none"
