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
        testPlayer1.shoot(testPlayer2.gameBoard, 0)

        expect(testPlayer2.gameBoard.board[0].isShot).toBe(true)
    });
    test('Player cant shoot the same cell twice', () => {
        testPlayer1.shoot(testPlayer2.gameBoard, 0)
        testPlayer1.shoot(testPlayer2.gameBoard, 0)

        expect(testPlayer2.gameBoard.board[0].isShot).toBe(true)
    }); 
})




