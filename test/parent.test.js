const Employee = require('../classes/parent');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an Employee object with inputs of user.", () => {
            const obj = new Employee("Goku", 00, "Goku@gmail.com");

            expect(obj instanceof Employee).toEqual(true);
        })
    })

    describe("getName", () => {
        it("should return the employee's name", () => {
            const name = "Goku"
            const employee = new Employee(name, 00, "Goku@gmail.com");
            
            expect(employee.getName()).toEqual(name);
        })
    })

    describe("getId", () => {
        it("should return the employee's Id", () => {
            const id =00;
            const employee = new Employee("Goku", id, "Goku@gmail.com");
            
            expect(employee.getId()).toEqual(id);
        })
    })

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            const email = "Goku@gmail.com";
            const employee = new Employee("Goku", 00, email);
            
            expect(employee.getEmail()).toEqual(email);
        })
    })

    describe("getRole", () => {
        it("should return the employee's role", () => {
            const employee = new Employee("Goku", 00, "Goku@gmail.com");
            
            expect(employee.getRole()).toEqual("Employee");
        })
    })

})