import logo from '../images/logo.png';
import Login from './login';
import { connect } from 'react-redux';
import LoginModal from './modals/loginModal';
import RegisterModal from './modals/registerModal';

import { openModal, closeModal } from '../store/actions/';

const Header = ({openModal,registerIsOpen,loginIsOpen}) => (
  <>
    {loginIsOpen && <LoginModal/>}
    {registerIsOpen && <RegisterModal/>}
    <div className="cursor-pointer flex">
      <img src={logo} alt="Logo" className="logo" />
      <Login openModal={openModal}/>
    </div>
  </>
);

const mapStateToProps = (state) => {
  return {
    loginIsOpen: state.modalReducer.loginIsOpen,
    registerIsOpen: state.modalReducer.registerIsOpen,
  };
};

export default connect(mapStateToProps, { openModal, closeModal })(Header);
