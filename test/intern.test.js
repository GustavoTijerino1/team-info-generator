const Intern = require('../classes/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an Intern objectwith inputs of user.", () => {
            const obj = new Intern("Jiren", 5, "Jiren@gmail.com", "SMU");

            expect(obj instanceof Intern).toEqual(true);
        })
    })

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const school = "SMU";
            const intern = new Intern("Jiren", 5, "Jiren@gmail.com", school);
            
            expect(intern.getSchool()).toEqual(school);
        })
    })

    describe("getRole", () => {
        it("should return the role of Intern", () => {
            const intern = new Intern("Jiren", 5, "Jiren@gmail.com", "SMU");
            
            expect(intern.getRole()).toEqual("Intern");
        })
    })

})