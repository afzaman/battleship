import React, { useState } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Home from "./Home"

const Routes = () => {

  const [playerName, updatePlayerName] = useState("")

  const handleChange = e => {
    e.preventDefault()
    updatePlayerName(e.target.value)
    console.log(e.target.value)
  }

  return (
    <BrowserRouter>
      <Switch>

        <Route 
          path="/battleship" exact 
          component={Home}
          component={() => <Home playerName={playerName} handleChange={handleChange}/>}          
        />

        <Route 
          path="/game"exact 
          component={() => <App playerName={playerName}/>}
        />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;