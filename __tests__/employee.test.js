const Employee = require("../lib/employee")

describe('Employee', () => {
    let employee
    beforeEach(() => {
        employee = new Employee('Grace Hopper', 1907, 'ghopper@COBOL.net')
    })

    it('can instantiate Employee instance', () => {
        const employee = new Employee()
        expect(employee).toBeTruthy();
    })

    it('can set name, id, and e-mail via constructor arguments', () => {
        expect(employee.name).toEqual('Grace Hopper');
        expect(employee.id).toEqual(1907);
        expect(employee.email).toEqual('ghopper@COBOL.net')
    })

    it('can get name via getName() function', () => {
        expect(employee.getName()).toEqual('Grace Hopper');
    })

    it('can get id via getId() function', () => {
        expect(employee.getId()).toEqual(1907);
    })

    it('can get email via getEmail() function', () => {
        expect(employee.getEmail()).toEqual('ghopper@COBOL.net')
    })

    it('getRole() should return "Employee"', () => {
        const employee = new Employee();
        expect(employee.getRole()).toEqual('Employee')
    })
});