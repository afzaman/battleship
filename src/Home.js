import React from 'react'
import { useHistory } from "react-router-dom";


function Home(props) {

  const {
    playerName,
    handleChange
  } = props

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `game`; 
    history.push(path);
  }

  // function writePlayerName(e){
  //   updatePlayerName(e.target.value)
  //   console.log(e.target.value)
  // }
  
  return (
    
    <div>
      <label>Enter Player Name: </label>
      <input type="text" value={playerName} onChange={handleChange}/>
      <button onClick={routeChange}>Start</button>
    </div>
    
  );
}

export default Home;