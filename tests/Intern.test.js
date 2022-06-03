const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("constructor", () => {
    it("should return an object containing name, id, email, and school", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const school = "school";

      const intern = new Intern(name, id, email, school);

      expect(intern.name).toBe("name");
      expect(intern.id).toBe("id");
      expect(intern.email).toBe("email");
      expect(intern.school).toBe("school");
    });
  });
  describe("getRole", () => {
    it("should return string of Intern", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const school = "school";

      const intern = new Intern(name, id, email, school);
      const output = intern.getRole();

      expect(output).toBe("Intern");
    });
  });
});
