import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import DescriptionPage from "./pages/description.page";
import Header from "./components/header";
import Footer from "./components/footer";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="md:px-24 px-4">
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/description/:id" component={DescriptionPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
