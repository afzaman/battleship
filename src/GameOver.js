import React from 'react'
import { useHistory } from "react-router-dom";

function GameOver(props) {

  const {winner} = props

  const history = useHistory();

  const routeChange = () =>{ 
    let path = ``; 
    history.push(path);
  }


  return (
    
    <div>

        <div className="title">{winner} wins!</div>
        
        <br/>

        <span className="play-again-container">
          <button onClick={routeChange} className="play-again">Play Again?</button>
        </span>

    </div>
    
  );
}

export default GameOver;