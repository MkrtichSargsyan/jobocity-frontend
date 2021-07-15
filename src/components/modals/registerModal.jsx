import React, { Component } from 'react';
import axios from 'axios';
import { Backdrop } from './backDrop';

class registerModal extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
    error: false,
  };

  handleChange(title, event) {
    this.setState({
      [title]: event.target.value,
    });
  }

  async handleSubmit(event) {
    const { saveToken, saveUser } = this.props;
    event.preventDefault();

    let data = {
      username: `${this.state.username}`,
      password: `${this.state.password}`,
    };
    let config = {
      method: 'post',
      url: 'http://localhost:3000/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password.length > 5
    ) {
      try {
        const authPromise = await axios(config);
        const authData = authPromise.data;
        saveToken(authData.token);
        saveUser(authData.user);
        console.log(authData);
      } catch (error) {
        console.log(error);
      }
    } else {
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
                Please choose a password.
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                onChange={(e) => this.handleChange('confirmPassword', e)}
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
                id="confirmPassword"
                type="password"
                placeholder="*******"
              />
              <p className="text-red text-xs italic">
                Please confirm your password.
              </p>
            </div>
            <div className="flex items-center justify-start flex-wrap">
              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
              >
                Create Account
              </button>
              <button
                onClick={closeModal}
                className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-max"
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

export default registerModal;
