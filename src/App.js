import Player from './factories/playerFactory'
import Gameboard from './components/Gameboard'
import React, {useState} from 'react'

function App() {
  
  const [player, updatePlayer] = useState(new Player("human"))
  const [enemy, updateEnemy] = useState(new Player("enemy"))
  const [key, updateKey] = useState(0)
  const [gameLog, updateGameLog] = useState("")

  let enemySunk = enemy.gameBoard.allSunk()
  let playerSunk = player.gameBoard.allSunk()


  function handleClick(target, location){
    if (target.gameBoard.checkAttack(location) === true){
      enemy.receiveAttack(location)
      let randomShot = player.receiveRandomAttack()
      player.receiveAttack(randomShot)
      updateGameLog((prevLog) => "Enemy Attacked at " + location + "\n" + prevLog)
      updateGameLog((prevLog) => "Player Attacked at " + randomShot + "\n" + prevLog)
      rerender()
    }
  }

  function rerender(){
    updateKey(Math.random())
  }

  return (
    <div className="game-board">
      <div className="player-board">
        <Gameboard 
          player={player} 
          key = {key}
          handleClick={handleClick}/>
          <h1>All Sunk? : {playerSunk.toString()}</h1>
      </div>
      <div className="ai-board">
        <Gameboard 
          player={enemy}
          key = {0}
          handleClick={handleClick}/>
          <h1>All Sunk? : {enemySunk.toString()}</h1>
      </div>
      <div>{gameLog}</div>
    </div>
  );
}

export default App;