import { FaSortDown } from 'react-icons/fa';

type Props = {
  img: string;
  name: string;
  onClick: () => void;
};

const Burger = ({ img, name, onClick }: Props) => {
  return (
    <div onClick={onClick} className="relative">
      <span className="absolute top-0 right-0">
        <FaSortDown />
      </span>
      <img src={img} alt={name} />
    </div>
  );
};

export default Burger;
