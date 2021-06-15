import Player from './factories/playerFactory'
import EnemyGameboard from './components/EnemyGameboard'
import PlayerGameboard from './components/PlayerGameboard'
import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function App(props) {

  const {handleWin} = props
  
  const [player] = useState(new Player("Player"))
  const [enemy] = useState(new Player("Enemy"))
  const [key, updateKey] = useState(0)

  let enemySunk = enemy.gameBoard.allSunk()
  let playerSunk = player.gameBoard.allSunk()

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `gameover`; 
    history.push(path);
  }

  if (enemySunk === true){
    handleWin("Player")
    routeChange()
  }

  if (playerSunk === true){
    handleWin("Enemy")
    routeChange()
  }

  function handleClick(target, location){
    if (target.gameBoard.checkAttack(location) === true){
      enemy.receiveAttack(location)
      let randomShot = player.receiveRandomAttack()
      player.receiveAttack(randomShot)
      rerender()
    }
  }

  function rerender(){
    updateKey(Math.random())
  }

  return (
    
    <div>
      <div className="title">Fast Battleship</div>
      <div className="game-board">
        
        <div className="player-board">
          <PlayerGameboard 
            player={player} 
            key = {key}
            handleClick={handleClick}/>
        </div>
        <div className="ai-board">
          <EnemyGameboard 
            player={enemy}
            key = {0}
            handleClick={handleClick}/>
        </div>
      </div>
    </div>
    
  );
}

export default App;