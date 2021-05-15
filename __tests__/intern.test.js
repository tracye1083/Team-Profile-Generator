const Intern = require("../lib/intern")

describe('Intern', () => {
    let intern
    beforeEach(() => {
        intern = new Intern('Little Timmy', 123, 'timmy@email.org', 'UNH')
    })

    describe("getRole", () => {
        it('should return the string "Intern"', () => {
            expect(intern.getRole()).toEqual('Intern')
        })
    })

    describe("getSchool", () => {
        it('should return UNH when getSchool() is run', () => {
            expect(intern.getSchool()).toEqual('UNH')
        })

        it('should set school via constructor', () => {
            expect(intern.school).toEqual('UNH')
        })
    })
})