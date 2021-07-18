import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Backdrop } from './backDrop';

class loginModal extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  handleChange(title, event) {
    this.setState({
      [title]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const { saveToken, saveUser } = this.props;

    let data = {
      username: `${this.state.username}`,
      password: `${this.state.password}`,
    };
    let config = {
      method: 'post',
      url: 'http://localhost:3000/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const authPromise = await axios(config);
      const authData = authPromise.data;
      console.log(authData.token);
      window.localStorage.setItem('token', authData.token);
      saveToken(authData.token);

      let result = jwtDecode(authData.token);
      saveUser(result);

      this.props.closeModal();
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const { closeModal } = this.props;

    return (
      <>
        <Backdrop />    
        <form
          className={'modal shadow-md'}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          {this.state.error && <div className="text-red-600">Invalid data</div>}
          <div className="pt-6 flex flex-col">
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={(e) => this.handleChange('username', e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={(e) => this.handleChange('password', e)}
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
                id="password"
                type="password"
                placeholder="********"
              />
              <p className="text-red text-xs italic">
                Please type your password.
              </p>
            </div>
            <div className="flex items-center justify-start">
              <button
                className="bg-blue-800 text-xs hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
                type="submit"
              >
                Log In
              </button>
              <button
                onClick={closeModal}
                className="bg-red-800 text-xs hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-max"
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default loginModal;
