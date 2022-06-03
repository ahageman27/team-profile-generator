const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("constructor", () => {
    it("should return an object containing name, id, and email", () => {
      const name = "name";
      const id = "id";
      const email = "email";

      const employee = new Employee(name, id, email);

      expect(employee.name).toBe("name");
      expect(employee.id).toBe("id");
      expect(employee.email).toBe("email");
    });
  });
  describe("getName", () => {
    it("shoule return email", () => {
      const name = "name";
      const id = "id";
      const email = "email";

      const employee = new Employee(name, id, email);
      const output = employee.getName();

      expect(output).toBe("name");
    });
  });
  describe("getId", () => {
    it("shoule return id", () => {
      const name = "name";
      const id = "id";
      const email = "email";

      const employee = new Employee(name, id, email);
      const output = employee.getId();

      expect(output).toBe("id");
    });
  });
  describe("getEmail", () => {
    it("shoule return email", () => {
      const name = "name";
      const id = "id";
      const email = "email";

      const employee = new Employee(name, id, email);
      const output = employee.getEmail();

      expect(output).toBe("email");
    });
  });
  describe("getRole", () => {
    it("should return string of Employee", () => {
      const name = "name";
      const id = "id";
      const email = "email";

      const employee = new Employee(name, id, email);
      const output = employee.getRole();

      expect(output).toBe("Employee");
    });
  });
});
