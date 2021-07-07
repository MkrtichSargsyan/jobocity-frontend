import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import DescriptionPage from "./pages/description.page";
import Logo from "./components/logo";
import Footer from "./components/footer";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="md:px-24 px-4">
          <Logo />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/description/:id" component={DescriptionPage} />
            {/* <Route component={notFound} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
