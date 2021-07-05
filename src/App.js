import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from './pages/main.page'


export class App extends Component {
  render() {
    return (
      <div className="md:px-24 px-4">
         <Switch>
          <Route exact path="/" component={MainPage}/>
          {/* <Route exact path="/description/:id" component={Description} /> */}
          {/* <Route component={notFound} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
