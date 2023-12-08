import { useState } from 'react';
import { burgers } from './shared/const';
import Burger from './Burger';

const Hero = () => {
  const [selectedBurger, setSelectedBurger] = useState(burgers[2]);
  return (
    <div>
      <div>
        <div>
          <h1>The Ultimate Burger Haven</h1>
          <p>
            Welcome to our Burger Paradise, where every bite is a journey into
            flavor perfection! indulge a symphony of premium ingredients.
            expertly crafted patties, and mouthwatering sauces.
          </p>
          <div>
            <button>Order Now</button>
            <button>View Menu</button>
          </div>
        </div>
        <div>
          <img src={selectedBurger.img} alt={selectedBurger.name} />
        </div>
      </div>
      <div>
        {burgers.map((burger) => (
          <Burger
            key={burger.id}
            {...burger}
            onClick={() => setSelectedBurger(burger)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
