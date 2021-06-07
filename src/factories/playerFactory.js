import Gameboard from './gameboardFactory';
import ships from '../helpers/ships'

class Player {
    constructor(name){
        this.name = name
        this.ships = ships
        this.gameBoard = new Gameboard()

        for (let i = 0; i < ships.length; i++){
            const shipArray = this.gameBoard.shipArray(ships[i], i, "vertical")
            this.gameBoard.placeShip(ships[i], shipArray)
          }
    }

    receiveAttack(location){
        this.gameBoard.receiveAttack(location)
        return this
    }

    receiveRandomAttack(){
        let availableShots = []
        this.gameBoard.board.forEach((cell, index) => {
            if (cell.isShot === false){
                availableShots.push(index)
            }
        })
        let randCoord = Math.floor(Math.random() * availableShots.length)
        return availableShots[randCoord]
    }
}
// module.exports = Player

export default Player