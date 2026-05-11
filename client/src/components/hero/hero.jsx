import React, { useState , useEffect } from 'react';
import './hero.css';

const recipes = [
  {
    img: "https://axeilbolupfqpqkjaetz.supabase.co/storage/v1/object/public/recipe-images/hero-chicken-karahi.jpg",
    title: "Chicken Karahi",
    cardTitle: "Chicken Karahi",
  },
  {
    img: "https://media.cnn.com/api/v1/images/stellar/prod/181019132031-16-pakistan-food-kheer.jpg?q=w_1110,c_fill",
    title: "Special Kheer",
    cardTitle: "Special Kheer"
  },
  {
    img: "https://t3.ftcdn.net/jpg/12/98/59/58/240_F_1298595805_UQdzxC1nUjiLCjQWGGPNd3hR8D7PQTKD.jpg",
    title: "Spicy chicken biryani",
    cardTitle: "Spicy chicken biryani"
  }
];

const Hero = () => {
  const [selected, setSelected] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    let next = 0;
    let i = 0;

    while(i < recipes.length)
    {
      if(i === selected)
      {
        next = (i + 1) % recipes.length;
        break;
      }
      i++;
    }

    setSelected(next);
  }, 3000);

  return () => clearInterval(interval);
}, [selected]);

  const getindice = () => {
    const result = [];
    for(let i = 0; i <= 2; i++)
    {
      if(i !== selected)
        {
            result.push(i);
        }
    }
    return result;
  };
  const [small1, small2] = getindice();

const renderBackgrounds = () => {
  return recipes.map((recipe, index) => {
    let className = 'hero-bg';
    if(index === selected)
    {
      className += ' active';
    }

    return (
      <div
        key={index}
        className={className}
        style={{ backgroundImage: `url(${recipe.img})` }}
      />
    );
  });
};
  return (
    <section className="hero-vibe">
      {renderBackgrounds()}
      <div className="hero-left">
        <h1 className="hero-main-title">Craving some<br />delicious meals</h1>
        <h2 className="hero-sub-title">Feeling the cooking vibe</h2>
        <p className="hero-highlight">You've come to the right place for some tasty recipes</p>
        <p className="hero-desc">Just see what we have for you</p>
        <div className="hero-btns">
          <button className="hero-btn primary">Get Started</button>
          <button className="hero-btn secondary">Explore recipes</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={recipes[selected].img} className="hero-main-img" style={{transition: 'all 0.5s'}} />
        <div className="hero-card hero-card-top" onClick={() => setSelected(small1)} style={{cursor: 'pointer'}}>
          <img src={recipes[small1].img} className="hero-card-img" />
          <span className="hero-card-title">{recipes[small1].cardTitle}</span>
        </div>
        <div className="hero-card hero-card-bottom" onClick={() => setSelected(small2)} style={{cursor: 'pointer'}}>
          <img src={recipes[small2].img} className="hero-card-img" />
          <span className="hero-card-title">{recipes[small2].cardTitle}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;