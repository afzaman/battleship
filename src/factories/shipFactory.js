class Ship {
    constructor(name, length){
        this.name = name,
        this.length = length,
        this.hits = 0
        this.sunk = false
    }

    hit(){
        this.hits ++
        this.isSunk()
    }
    isSunk(){
        if (this.hits < this.length) {
            this.sunk = false
        }else {
            this.sunk = true
        }
    }

}
module.exports = Ship