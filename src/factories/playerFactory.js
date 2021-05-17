import Gameboard from './gameboardFactory';

class Player {
    constructor(){
        this.ships = []
        this.gameBoard = new Gameboard()
    }
    shoot(opponentBoard, location){
        if (opponentBoard.board[location].isShot === false)
        opponentBoard.receiveAttack(location)
    }
}
module.exports = Player