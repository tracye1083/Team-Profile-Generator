const Engineer = require('../lib/engineer')
describe('Engineer', () => {
    let engineer
    beforeEach(() => {
        engineer = new Engineer('Ada Lovelace', 36, 'ada@lovelace.com', 'lovelace15')
    })

    describe('github', () => {
        it('should return a github URL via getGithub()', () => {
            expect(engineer.getGithub()).toEqual('http://www.github.com/lovelace15')
        })

        it('can set GitHub account via constructor', () => {
            expect(engineer.github).toEqual('lovelace15')
        })
    })

    describe('getRole', () => {
        it('getRole() should return Engineer', () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toEqual('Engineer');
        })
    })
});