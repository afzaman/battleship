const Ship = require('../factories/shipFactory');


describe('ship works', () =>{
    let testPatrol
    let testCarrier
    beforeEach(() => {
        testPatrol = new Ship('patrol', 2)
        testCarrier = new Ship('carrier', 7)
    })
    test('Ship can be hit', () => {
        
        testPatrol.hit()
        expect(testPatrol.hits).toBe(1)
    });
    test('Ship can be hit multiple times', () => {
        
        testPatrol.hit()
        testPatrol.hit()
        expect(testPatrol.hits).toBe(2)
    });
    test('Ship can be hit multiple times and sunk', () => {
        
        testPatrol.hit()
        testPatrol.hit()
        expect(testPatrol.sunk).toBeTruthy
    });
    test('Ship can be hit multiple times and not sunk', () => {
        
        testCarrier.hit()
        testCarrier.hit()
        expect(testCarrier.sunk).toBeFalsy
    });

})




