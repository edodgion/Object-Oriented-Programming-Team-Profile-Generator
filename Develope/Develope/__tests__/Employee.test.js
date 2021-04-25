const Letter = require("../lib/Epmloyee");

describe("Employee class", () => {
  it("", () => {
    expect(new Employee().name()).toBe("");
  });

  it("getName returns name", () => {
    expect(getName()).toBe("");
  });

  describe("guess", () => {
    it("Correct guess returns true", () => {
      expect(new Letter("j").guess("j")).toBe(true);
    });

    it("Incorrect guess returns false", () => {
      expect(new Letter("j").guess("l")).toBe(false);
    });
  });

  describe("getRole", () => {
    it("returns character", () => {
      expect(new Letter("l").getSolution()).toBe("l");
    });
  });
});
