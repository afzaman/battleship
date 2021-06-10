import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import GameOver from "./GameOver"

const Routes = () => {

  const [playerName, updatePlayerName] = useState("")
  const [winner, updateWinner] = useState("")

  const handleChange = e => {
    e.preventDefault()
    updatePlayerName(e.target.value)
  }

  const handleWin = e => {
    updateWinner(e)
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route 
          path="/battleship" exact
          component={() => <Home playerName={playerName} handleChange={handleChange}/>}          
        />

        <Route 
          path="/game"exact 
          component={() => <App playerName={playerName} winner={winner} handleWin={handleWin}/>}
        />

        <Route 
          path="/gameover"exact 
          component={() => <GameOver playerName={playerName} winner={winner}/>}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;