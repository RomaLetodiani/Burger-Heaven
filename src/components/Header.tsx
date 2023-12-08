import logo from '@/assets/images/logo.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { headerLis } from './shared/const';
const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Burger Haven" />
      </div>
      <nav>
        <ul>
          {headerLis.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </nav>
      <div>
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </header>
  );
};

export default Header;
