const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("constructor", () => {
    it("should return an object containing name, id, email, and office", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const office = "office";

      const manager = new Manager(name, id, email, office);

      expect(manager.name).toBe("name");
      expect(manager.id).toBe("id");
      expect(manager.email).toBe("email");
      expect(manager.office).toBe("office");
    });
  });
  describe("getRole", () => {
    it("should return string of Manager", () => {
      const name = "name";
      const id = "id";
      const email = "email";
      const office = "office";

      const manager = new Manager(name, id, email, office);
      const output = manager.getRole();

      expect(output).toBe("Manager");
    });
  });
});
