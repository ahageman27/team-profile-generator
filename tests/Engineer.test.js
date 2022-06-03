const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("constructor", () => {
    it("should return an object containing name, id, email, and GitHub", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const github = "github";

      const engineer = new Engineer(name, id, email, github);

      expect(engineer.name).toBe("name");
      expect(engineer.id).toBe("id");
      expect(engineer.email).toBe("email");
      expect(engineer.github).toBe("github");
    });
  });
  describe("getRole", () => {
    it("should return string of Engineer", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const github = "github";

      const engineer = new Engineer(name, id, email, github);
      const output = engineer.getRole();

      expect(output).toBe("Engineer");
    });
  });
});
