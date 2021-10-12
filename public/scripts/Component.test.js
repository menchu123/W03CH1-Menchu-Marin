import Component from "./Component.js";

describe("Given a Component class", () => {
  describe("When creating a new object and giving it a section tag parent, a class 'potato' and a 'p' tag", () => {
    test("Then it creates a 'p' element with a class 'potato' inside a section tag", () => {
      const section = document.createElement("section");
      const className = "potato";
      const tag = "p";

      const newComponent = new Component(section, "potato", "p");
      const isTherePotato = section.querySelector("p.potato");

      expect(isTherePotato).not.toBeNull();
    });
  });
});

export default Component;
