import logo from '../images/logo.png';
import Login from './login';

const Header = () => (
  <div className="cursor-pointer flex">
    <img src={logo} alt="Logo" className="logo" />
    <Login />
  </div>
);

export default Header;
