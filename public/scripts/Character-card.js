import Component from "./Component";

class CharacterCard extends Component {
  personaje;

  constructor(parentElement, { nombre, familia, edad, vivo, imagen }) {
    super(parentElement, "character col", "li");

    this.personaje = {
      nombre,
      familia,
      edad,
      vivo,
      imagen,
    };

    this.generateHTML();
  }

  generateHTML() {
    const { nombre, familia, edad, vivo, imagen } = this.personaje;
    const html = `<li class="character col">
          <div class="card character__card">
            <img
              src="img/${imagen}.jpg"
              alt="${nombre} ${familia}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${nombre} ${familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li class="character__age">Edad: ${edad} años</li>
                  <li>
                    Estado:
                    ${
                      vivo
                        ? '<i class="fas fa-thumbs-up"></i>'
                        : '<iclass="fas fa-thumbs-down"></i>'
                    }
                    
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled charactar__dataList">
                  <li class="anos">Años de reinado: X</li>
                  <li class="arma">Arma: XXX</li>
                  <li class="destreza">Destreza: X</li>
                  <li class="peloteo">Peloteo: X</li>
                  <li class="asesora">Asesora a: X</li>
                  <li class="sirve">Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`;
    this.element.innerHTML = html;
  }
}

export default CharacterCard;
