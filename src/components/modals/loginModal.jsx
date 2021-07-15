import React, { Component } from 'react'

import { Backdrop } from './backDrop';

function LoginModal({closeModal}) {
  return (
    <>
      <Backdrop />
      <div className={'modal shadow-md'}>
        <div className="pt-6 flex flex-col">
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
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
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
              id="password"
              type="password"
              placeholder="********"
            />
            <p className="text-red text-xs italic">Please type your password.</p>
          </div>
          <div className="flex items-center justify-start">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
              type="button"
            >
              Log In
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
      </div>
    </>
  );
}

export default LoginModal;



// class loginModal extends Component {


//   render() {
//     return (
//       <>
//       <Backdrop />
//       <div className={'modal shadow-md'}>
//         <div className="pt-6 flex flex-col">
//           <div className="mb-4">
//             <label
//               className="block text-grey-darker text-sm font-bold mb-2"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800"
//               id="username"
//               type="text"
//               placeholder="Username"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-grey-darker text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-800 mb-3"
//               id="password"
//               type="password"
//               placeholder="********"
//             />
//             <p className="text-red text-xs italic">Please type your password.</p>
//           </div>
//           <div className="flex items-center justify-start">
//             <button
//               onClick = {}
//               className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mr-2 rounded w-max"
//               type="button"
//             >
//               Log In
//             </button>
//             <button
//               onClick={closeModal}
//               className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-max"
//               type="button"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//     )
//   }
// }

// export default loginModal
