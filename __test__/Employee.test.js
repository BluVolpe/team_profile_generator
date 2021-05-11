const { it, expect, describe } = require("@jest/globals")
const Employee = require("../lib/Employee")

describe("Employee", () => {
    
    it("should create an employee with the name 'Bob'", () => {
        const bob = new Employee("Bob", 1, "bob@email.com")
        expect(bob.getName()).toBe('Bob');
    });

});