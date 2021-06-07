const Player = require('../factories/playerFactory');
const Gameboard = require('../factories/gameboardFactory');



describe('Player functions correctly', () =>{
    let testPlayer1
    let testPlayer2
    
    beforeEach(() => {
        testPlayer1 = new Player()
        testPlayer2 = new Player()
    })

    test('Player can shoot', () => {
        let result = testPlayer1.receiveAttack(0)
        expect(result[0].isShot).toBe(true)
    });
})




