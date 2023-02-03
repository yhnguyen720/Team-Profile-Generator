const Engineer = require("../lib/Engineer")

test("creates an engineer object", () => {
    const engineer = new Engineer("Yen", 720, "yen720@gmail.com", "yen720");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("gets engineer name", () => {
    const engineer = new Engineer("Yen", 720, "yen720@gmail.com", "yen720");

    expect(engineer.getName()).toBe("Yen");
})

test("gets engineer id", () => {
    const engineer = new Engineer("Yen", 720, "yen720@gmail.com", "yen720");

    expect(engineer.getID()).toBe(720)
})

test("gets engineer email", () => {
    const engineer = new Engineer("Yen", 720, "yen720@gmail.com", "yen720");

    expect(engineer.getEmail()).toBe("yen720@gmail.com")
})

test("gets engineer github", () => {
    const engineer = new Engineer("Yen", 720, "yenn720@gmail.com", "yen720");
    
    expect(engineer.getGithub()).toBe("yen720")
})