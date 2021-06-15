import React from 'react'

function Gameboard(props) {

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
          >
            {cell.ship.name}
          </button>)}
      </div>
    </div>
    
  );
}

export default Gameboard;