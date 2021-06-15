class Gameboard {
    constructor(){
        this.board = []
        for (let i = 0; i < 64; i++){
            this.board.push({hasShip: false, ship: {}, isShot: false})
        }
    }
    placeShip(ship, shipArray){
        for (let i = 0; i < shipArray.length; i++){
            this.board[shipArray[i]].hasShip = true
            this.board[shipArray[i]].ship = ship
        }
    }

	shipArray(ship, location, orientation) {
		let locationArray = [];
		for (let i = 0; i < ship.length; i++) {
            if (orientation === "horizontal"){
                locationArray.push(location + i)
            }
			if (orientation === "vertical"){
                locationArray.push(location + i * 8)
            }
		}
		return locationArray;
	}

    checkPlacement(shipArray){
        const collisionCells = [7, 15, 23, 31, 39, 47, 55, 63]
        if (collisionCells.some((cell) => 
            {return [cell, cell + 1].every((edge) => 
                shipArray.includes(edge)
            )}
        )){
            return false
        } else if (shipArray.some(cell => !this.board[cell])) {
            return false
        } else if (shipArray.some(cell => this.board[cell].hasShip)){
            return false
        }
        else {
            return true
        }
    }

    receiveAttack(location){
        if (this.board[location].isShot === false){
            this.board[location].isShot = true
        } else return false
    }

    checkAttack(location){
        if (this.board[location].isShot === false){
            return true
        } else return false
    }

    didShotHit(location){
        return this.board[location].hasShip
    }

    allSunk(){
        const ships = this.board.filter(cell => cell.hasShip)
        if (ships.every(cell => cell.isShot)){
            return true
        } else {
            return false
        }
    }

}
export default Gameboard