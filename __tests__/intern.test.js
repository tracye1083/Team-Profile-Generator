const Intern = require("../lib/intern")

describe('Intern', () => {
    let intern
    beforeEach(() => {
        intern = new Intern('Little Timmy', 123, 'timmy@email.org', 'UNH')
    })

    describe("getRole", () => {
        it('should return "Intern"', () => {
            expect(intern.getRole()).toEqual('Intern')
        })
    })

    describe("getSchool", () => {
        it('Can get school via getSchool()', () => {
            expect(intern.getSchool()).toEqual('UNH')
        })

        it('Can set school via constructor', () => {
            expect(intern.school).toEqual('UNH')
        })
    })
})