import Component from "./Component.js";

describe("Given a Component constructor", () => {
  describe("When creating a new object and giving it a section tag parent, a class 'potato' and a 'p' tag", () => {
    test("Then it creates a 'p' element with a class 'potato' inside a section tag", () => {
      const section = document.createElement("section");
      const className = "potato";
      const tag = "p";

      // eslint-disable-next-line no-unused-vars
      const newComponent = new Component(section, className, tag);
      const isTherePotato = section.querySelector("p.potato");

      expect(isTherePotato).not.toBeNull();
    });
  });

  describe("When creating a new object and giving it a div tag parent, a class 'juan-y-medio' and an 'img' tag", () => {
    test("Then it creates an 'img' element with a class 'juan-y-medio' inside a div tag", () => {
      const div = document.createElement("div");
      const className = "juan-y-medio";
      const tag = "img";

      // eslint-disable-next-line no-unused-vars
      const newComponent = new Component(div, className, tag);
      const isThereYMedio = div.querySelector("img.juan-y-medio");

      expect(isThereYMedio).not.toBeNull();
    });
  });
});

export default Component;
