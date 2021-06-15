import Gameboard from './gameboardFactory';
import ships from '../helpers/ships'

class Player {
    constructor(name){
        this.name = name
        this.ships = ships
        this.gameBoard = new Gameboard()

        for (let i = 0; i < ships.length; i++){
            
            let randCoord
            let randOrient
            let randOrientNum = Math.floor(Math.random() * 2)

            let avialableSpaces = []
            this.gameBoard.board.forEach((cell, index) => {
                if (cell.hasShip === false){
                    avialableSpaces.push(index)
                }
            })

            let shipArray = this.gameBoard.shipArray(ships[i], randCoord, randOrient)
            
            do {
                randCoord = Math.floor(Math.random() * avialableSpaces.length)
                randOrient = Math.floor(Math.random() * 2)
                if (randOrientNum === 0){
                    randOrient = "horizontal"
                }else{
                    randOrient = "vertical"
                }
                shipArray = this.gameBoard.shipArray(ships[i], randCoord, randOrient)
            }
            while (this.gameBoard.checkPlacement(shipArray) === false)

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