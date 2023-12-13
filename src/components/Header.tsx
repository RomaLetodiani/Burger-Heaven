import logo from '@/assets/images/logo.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { headerLis } from './shared/const';
const Header = () => {
  return (
    <header className="max-w-7xl mx-auto text-white py-5 flex justify-between items-center">
      <div>
        <img className="w-24 invert" src={logo} alt="Burger Haven" />
      </div>
      <nav>
        <ul className="flex text-xl font-bold gap-12">
          {headerLis.map((item) => (
            <li
              className={`${item.id === 1 && 'text-[#ef6f1a]'} cursor-pointer`}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex text-xl gap-8">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </header>
  );
};

export default Header;
