import React from 'react';

import { Backdrop } from './backDrop';

function RegisterModal() {
  return (
    <>
      <Backdrop />
      <div className={'modal shadow-md'}>
        <div class="pt-6 flex flex-col">
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
              id="password"
              type="password"
              placeholder="********"
            />
            <p class="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div class="mb-6">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Confirm Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
              id="password"
              type="password"
              placeholder="*******"
            />
            <p class="text-red text-xs italic">Please confirm your password.</p>
          </div>
          <div class="flex items-center justify-start flex-wrap">
            <button
              class="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
              type="button"
            >
              Create Account
            </button>
            <button
              class="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-max"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterModal;
