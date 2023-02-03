const Intern = require("../lib/Intern")

test("creates an intern object", () => {
    const intern = new Intern("Yen", 720, "yen720@gmail.com", "UH");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets intern name", () => {
    const intern = new Intern("Yen", 720, "yen720@gmail.com", "UH");

    expect(intern.getName()).toBe("Yen");
})

test("gets intern id", () => {
    const intern = new Intern("Yen", 720, "yen720@gmail.com", "UH");

    expect(intern.getID()).toBe(720)
})

test("gets intern email", () => {
    const intern = new Intern("Yen", 720, "yen720@gmail.com", "UH");

    expect(intern.getEmail()).toBe("yen720@gmail.com")
})

test("gets intern github", () => {
    const intern = new Intern("Yen", 720, "yenn720@gmail.com", "UH");
    
    expect(intern.getSchool()).toBe("UH")
})