import { FaSortDown } from 'react-icons/fa';

type Props = {
  img: string;
  name: string;
  onClick: () => void;
  selectedBurger: {
    id: number;
    name: string;
  };
};

const Burger = ({ img, name, onClick, selectedBurger }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-1 relative max-w-[120px] flex justify-center items-center rounded-xl transition-all border ${
        selectedBurger.name === name && 'border-[#ff944c] mx-5 scale-125'
      }`}
    >
      <span
        className={`absolute ${
          selectedBurger.name === name ? 'md:opacity-100' : 'opacity-0'
        } transition-all text-[#ff944c] opacity-0 text-3xl -top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <FaSortDown />
      </span>
      <img className="w-full" src={img} alt={name} />
    </div>
  );
};

export default Burger;
