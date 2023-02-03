const Employee = require("../lib/Employee")

test("creates an employee object", () => {
    const employee = new Employee("Yen", 720, "yen720@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee name", () => {
    const employee = new Employee("Yen", 720, "yen720@gmail.com");

    expect(employee.getName()).toBe("Yen");
})

test("gets employee id", () => {
    const employee = new Employee("Yen", 720, "yen720@gmail.com");

    expect(employee.getID()).toBe(720)
})

test("gets employee email", () => {
    const employee = new Employee("Yen", 720, "yen720@gmail.com");

    expect(employee.getEmail()).toBe("yen720@gmail.com")
})