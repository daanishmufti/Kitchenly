import { useState, useEffect } from 'react';
import './favouritefoods.css';
import { supabase } from '../../lib/supabase';

const Favouritefoods = () => {
  const [foods, setFoods] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchFoods = async () => {
      const { data, error } = await supabase
        .from('favourite_foods')
        .select('id, title, image')
        .order('id')
      if (!error && data) {
        setFoods(data.map(f => ({ img: f.image, title: f.title })));
      }
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    if (foods.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % foods.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [foods.length]);

  if (foods.length === 0) return null;

  const renderImage = () => {
    if(foods[current].img)
    {
      return <img src={foods[current].img} className="favouritefoods-img" />;
    }
    else
    {
      return (
        <div className="favouritefoods-placeholder">
          <span role="img" aria-label="food"></span>
        </div>
      );
    }
  };

  const renderDots = () => {
    const dots = [];
    for(let idx = 0; idx < foods.length; idx++)
    {
      dots.push(
        <span
          key={idx}
          className={`favouritefoods-dot${idx === current ? ' active' : ''}`}
        />
      );
    }
    return <div className="favouritefoods-dots">{dots}</div>;
  };

  const renderTitle = () => (
    <div className="favouritefoods-title">
      {foods[current].title || 'Food Title'}
    </div>
  );

  return (
    <div className="favouritefoods-container">
      <div className="favouritefoods-card">
        {renderImage()}
        {renderDots()}
        {renderTitle()}
      </div>
    </div>
  );
};

export default Favouritefoods;