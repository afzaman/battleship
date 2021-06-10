import Player from './factories/playerFactory'
import Gameboard from './components/Gameboard'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function App(props) {

  const {playerName, handleWin} = props
  
  const [player] = useState(new Player(playerName))
  const [enemy] = useState(new Player("enemy"))
  const [key, updateKey] = useState(0)
  const [gameLog, updateGameLog] = useState("")

  let enemySunk = enemy.gameBoard.allSunk()
  let playerSunk = player.gameBoard.allSunk()

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `gameover`; 
    history.push(path);
  }

  if (enemySunk === true){
    handleWin(playerName)
    routeChange()
  }

  if (playerSunk === true){
    handleWin("enemy")
    routeChange()
  }

  function handleClick(target, location){
    if (target.gameBoard.checkAttack(location) === true){
      enemy.receiveAttack(location)
      let randomShot = player.receiveRandomAttack()
      player.receiveAttack(randomShot)
      updateGameLog((prevLog) => "\n" + "Enemy was Attacked at " + location + "\n" + prevLog + "\n")
      updateGameLog((prevLog) => "Player was Attacked at " + randomShot + "\n" + prevLog)
      rerender()
    }
  }

  function rerender(){
    updateKey(Math.random())
  }

  return (
    
    <div>
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
      </div>
      <div>{gameLog}</div>
    </div>
    
  );
}

export default App;