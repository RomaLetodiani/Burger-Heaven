import { useState } from 'react';
import { burgers } from './shared/const';
import Burger from './Burger';

const Hero = () => {
  const [selectedBurger, setSelectedBurger] = useState(burgers[2]);
  return (
    <div className="max-w-7xl mx-auto px-8 md:pl-16">
      <div className="flex flex-col-reverse min-[1000px]:flex-row justify-between items-center gap-5">
        <div className="md:w-1/2 text-white max-[1000px]:text-center">
          <h1 className="text-3xl md:text-5xl min-[1000px]:text-7xl uppercase font-bold">
            The Ultimate Burger Haven
          </h1>
          <p className="my-5">
            Welcome to our Burger Paradise, where every bite is a journey into
            flavor perfection! indulge a symphony of premium ingredients.
            expertly crafted patties, and mouthwatering sauces.
          </p>
          <div className="flex gap-5 max-[1000px]:justify-center max-[1000px]:items-center ">
            <button className="bg-[#ef6f1a] hover:bg-[#e47125] shadow-lg shadow-[#ef6f1a84] font-bold text-lg py-4 px-10 rounded-xl">
              Order Now
            </button>
            <button className="hover:border-[#ff944c] transition-all hover:text-white text-[#ff944c] border-transparent border-2 font-bold text-lg py-4 px-10 rounded-xl">
              View Menu
            </button>
          </div>
        </div>
        <div className="flex-1 ">
          <img
            className="w-full aspect-square max-h-[445px]"
            src={selectedBurger.img}
            alt={selectedBurger.name}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-5 max-[1000px]:justify-center mt-12 md:mt-5">
        {burgers.map((burger) => (
          <Burger
            key={burger.id}
            {...burger}
            selectedBurger={selectedBurger}
            onClick={() => setSelectedBurger(burger)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
