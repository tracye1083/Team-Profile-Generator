const Manager = require("../lib/manager")

describe('Manager', () => {
    let manager
    beforeEach(() => {
        manager = new Manager('Queen Bee', 123, 'qbee@thehive.com', 42)
    })

    describe('officeNumber', () => {
        it('should set office number via constructor', () => {
            expect(manager.officeNumber).toEqual(42);
        })

        it('getOfficeNumber should return an office number', () => {
            expect(manager.getOfficeNumber()).toEqual(42);
        })
    })

    describe('getRole', () => {
        it('should return "Manager"', () => {
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})