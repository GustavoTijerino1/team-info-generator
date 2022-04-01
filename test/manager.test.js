const Manager = require('../classes/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return a Manager object with inputs of user.", () => {
            const obj = new Manager("Broly", 01, "Broly@gmail.com", 101);

            expect(obj instanceof Manager).toEqual(true);
        })
    })

    describe("getRole", () => {
        it("should return the role of Manager", () => {
            const manager = new Manager("Broly", 01, "Broly@gmail.com", 101);
            
            expect(manager.getRole()).toEqual("Manager");
        })
    })

})