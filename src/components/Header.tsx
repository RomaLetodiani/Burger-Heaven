import logo from '@/assets/images/logo.png';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { headerLis } from './shared/const';
const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-5 md:px-10 text-white py-5 flex justify-between items-center">
      <div>
        <img className="w-24 invert" src={logo} alt="Burger Haven" />
      </div>
      <nav>
        <ul className="flex sm:text-xl font-bold gap-4 md:gap-12">
          {headerLis.map((item) => (
            <li
              className={`${item.id === 1 && 'text-[#ff944c]'} cursor-pointer`}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden text-xl gap-8 md:flex">
        <FaFacebookSquare />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </header>
  );
};

export default Header;
