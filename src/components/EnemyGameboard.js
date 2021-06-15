import React from 'react'

function EnemyGameboard(props) {

  const {
    player,
    handleClick
  } = props

  return (
    <div>
      <h1>{player.name}'s Waters</h1>
      <div className="board">
        {player.gameBoard.board.map((cell, index) => 
          <button
            type="submit"
            className="cell" 
            key={Math.random()}
            onClick={handleClick.bind(this, player, index)}
            shot={cell.isShot.toString()}
            shotShip={cell.isShot && cell.hasShip ? "true" : "false"}
          >
          </button>)}
      </div>
    </div>
    
  );
}

export default EnemyGameboard;