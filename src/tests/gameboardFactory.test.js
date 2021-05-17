const Gameboard = require('../factories/gameboardFactory');
const Ship = require('../factories/shipFactory');


describe('Gameboard functions correctly', () =>{
    let testBoard
    let testPatrol
    let testCarrier
    
    beforeEach(() => {
        testBoard = new Gameboard()
        testPatrol = new Ship('patrol', 2)
        testCarrier = new Ship('carrier', 5)
    })

    test('Gameboard is the right size', () => {
        expect(testBoard.board.length).toBe(64)
    });

    test('Gameboard starts empty', () => {
        const isEmpty = (cell) => cell = {hasShip: false, isShot: false}
        expect(testBoard.board.every(isEmpty)).toBe(true)
    });

    test('Can create a properly sized ship array', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "horizontal")
        expect(patrolShipArray.length).toBe(2)
    });

    test('Can legally place a ship horizontally', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "horizontal")
        testBoard.placeShip(patrolShipArray)
        expect(testBoard.board[0].hasShip && testBoard.board[1].hasShip).toBe(true)
    });

    test('Can legally place a ship vertically', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "vertical")
        testBoard.placeShip(patrolShipArray)
        expect(testBoard.board[0].hasShip && testBoard.board[8].hasShip).toBe(true)
    });

    test('Can identify a legally placed horizontal ship', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 6, "horizontal")
        expect(testBoard.checkPlacement(patrolShipArray)).toBe(true)
    });

    test('Can identify an ilegally placed horizontal ship', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 7, "horizontal")
        expect(testBoard.checkPlacement(patrolShipArray)).toBe(false)
    });

    test('Can identify a legally placed vertical ship', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 7, "vertical")
        expect(testBoard.checkPlacement(patrolShipArray)).toBe(true)
    });

    test('Can identify an ilegally placed vertical ship', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 56, "vertical")
        expect(testBoard.checkPlacement(patrolShipArray)).toBe(false)
    });

    test('Can identify an ship collision', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "vertical")
        testBoard.placeShip(patrolShipArray)
        const carrierShipArray = testBoard.shipArray(testCarrier, 0, "vertical")
        expect(testBoard.checkPlacement(carrierShipArray)).toBe(false)
    });

    test('Can receive an attack', () => {
        testBoard.receiveAttack(0)
        expect(testBoard.board[0].isShot).toBe(true)
    });

    test('Can receive an successful attack', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "horizontal")
        testBoard.placeShip(patrolShipArray)
        testBoard.receiveAttack(1)
        expect(testBoard.didShotHit(1)).toBe(true)
    });

    test('Can identify if all ships are sunk', () => {
        const patrolShipArray = testBoard.shipArray(testPatrol, 0, "horizontal")
        testBoard.placeShip(patrolShipArray)
        testBoard.receiveAttack(0)
        testBoard.receiveAttack(1)
        expect(testBoard.allSunk()).toBe(true)
    });

    test('Can identify if all ships are not sunk', () => {
        const carrierShipArray = testBoard.shipArray(testCarrier, 0, "horizontal")
        testBoard.placeShip(carrierShipArray)
        testBoard.receiveAttack(0)
        testBoard.receiveAttack(1)
        expect(testBoard.allSunk()).toBe(false)
    });
    
       
})




