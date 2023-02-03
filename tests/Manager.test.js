const Manager = require("../lib/Manager")

test("creates an manager object", () => {
    const manager = new Manager("Yen", 720, "yen720@gmail.com", 127);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
})

test("gets manager name", () => {
    const manager = new Manager("Yen", 720, "yen720@gmail.com", 127);

    expect(manager.getName()).toBe("Yen");
})

test("gets manager id", () => {
    const manager = new Manager("Yen", 720, "yen720@gmail.com", 127);

    expect(manager.getID()).toBe(720)
})

test("gets manager email", () => {
    const manager = new Manager("Yen", 720, "yen720@gmail.com", 127);

    expect(manager.getEmail()).toBe("yen720@gmail.com")
})

test("gets manager office", () => {
    const manager = new Manager("Yen", 720, "yenn720@gmail.com", 127);
    
    expect(manager.getOfficeNumber()).toBe(127)
})