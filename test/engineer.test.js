const Engineer = require('../classes/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an Engineer object with inputs of user.", () => {
            const obj = new Engineer("Gus", 5, "Gus@gmail.com", "GusT1");

            expect(obj instanceof Engineer).toEqual(true);
        })
    })

    describe("getGithub", () => {
        it("should return the engineer's GitHub username", () => {
            const github = "GusT1"
            const engineer = new Engineer("Gus", 5, "Gus@gmail.com", github);
            
            expect(engineer.getGithub()).toEqual(github);
        })
    })

    describe("getRole", () => {
        it("should return the role of Engineer", () => {
            const engineer = new Engineer("Gus", 5, "Gus@gmail.com", "GusT1");
            
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

})