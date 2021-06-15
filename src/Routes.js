import React, { useState } from "react"
import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import GameOver from "./GameOver"

const Routes = () => {

  const [winner, updateWinner] = useState("")

  const handleWin = e => {
    updateWinner(e)
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route 
          path="/" exact 
          component={() => <App winner={winner} handleWin={handleWin}/>}
        />

        <Route 
          path="/gameover"exact 
          component={() => <GameOver winner={winner}/>}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;