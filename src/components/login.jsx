import React from 'react';

function Login({ openModal }) {
  return (
    <div className="flex-auto items-center justify-end flex">
      <button
        onClick={() => openModal('registerIsOpen')}
        className="mr-3 rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
      >
        Signup
      </button>
      <button
        onClick={() => openModal('loginIsOpen')}
        className="px-3 rounded bg-gray-100 hover:bg-gray-200 py-1 border transform duration-500 hover:scale-125"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
