import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main.page';
import DescriptionPage from './pages/description.page';
import Header from './components/header';
import Footer from './components/footer';
import { connect } from 'react-redux';

import { saveUser } from './store/actions';

export class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      let jwt = window.localStorage.getItem('token');
      let result = jwtDecode(jwt);
      this.props.saveUser(result);
    }
  }

  render() {
    const { user } = this.props;
    const username = user ? user.username : '';
    return (
      <div>
        <div className="md:px-24 px-4">
          <Header username={username} />
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

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, {
  saveUser,
})(App);
