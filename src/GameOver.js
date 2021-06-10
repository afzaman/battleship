import React from 'react'
import { useHistory } from "react-router-dom";

function GameOver(props) {

  const {winner} = props

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `game`; 
    history.push(path);
  }


  return (
    
    <div>
        {winner} wins!
        <button onClick={routeChange}>Play Again?</button>
    </div>
    
  );
}

export default GameOver;