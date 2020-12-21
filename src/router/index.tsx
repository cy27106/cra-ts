import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Todo from "../components/Todo"
import About from "../components/About"

function RouterConfig() {
  return (
      <Router>
        <Link to={"/"}>todo</Link> | <Link to="/about">about</Link>
        <Route path="/" exact>
          <Todo />
        </Route>
        <Route path="/about" component={About} />
      </Router>
  );
}

export default RouterConfig
