import logo from '../images/logo.png';
import Login from './login';
import { connect } from 'react-redux';
import LoginModal from './modals/loginModal';
import RegisterModal from './modals/registerModal';
import Flash from './flash'

import { openModal, closeModal, saveToken, saveUser } from '../store/actions/';

const signOut = (saveUser) => {
  localStorage.removeItem('token');
  saveUser(null);
};

const Header = ({
  openModal,
  closeModal,
  saveToken,
  saveUser,
  registerIsOpen,
  loginIsOpen,
  flashIsOpen,
  username,
}) => (
  <>
  {flashIsOpen && <Flash closeModal={closeModal}/>}
    {loginIsOpen && (
      <LoginModal
        closeModal={closeModal}
        saveToken={saveToken}
        saveUser={saveUser}
      />
    )}
    {registerIsOpen && (
      <RegisterModal
        closeModal={closeModal}
        saveToken={saveToken}
        saveUser={saveUser}
      />
    )}
    <div className="flex">
      <img src={logo} alt="Logo" className="logo" />
      {username ? (
        <div className="flex-auto items-center justify-end flex">
          {username}
          <button
            onClick={() => signOut(saveUser)}
            className="ml-6 cursor-pointer rounded bg-gray-100 hover:bg-gray-200 px-3 py-1 border transform duration-500 hover:scale-125"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Login openModal={openModal} />
      )}
    </div>
  </>
);

const mapStateToProps = (state) => {
  return {
    loginIsOpen: state.modalReducer.loginIsOpen,
    registerIsOpen: state.modalReducer.registerIsOpen,
    flashIsOpen:state.modalReducer.flashIsOpen
  };
};

export default connect(mapStateToProps, {
  openModal,
  closeModal,
  saveToken,
  saveUser,
})(Header);
