import React from 'react'

function PlayerGameboard(props) {

  const {
    player
  } = props

  return (
    <div>
      <h1>Player's Waters</h1>
      <div className="board">
        {player.gameBoard.board.map((cell, index) => 
          <button
            type="submit"
            className="cell" 
            key={Math.random()}
            shot={cell.isShot.toString()}
            ship={cell.hasShip.toString()}
            shotShip={cell.isShot && cell.hasShip ? "true" : "false"}
          >
          </button>)}
      </div>
    </div>
    
  );
}

export default PlayerGameboard;