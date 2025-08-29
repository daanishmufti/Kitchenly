import { useState, useEffect } from 'react';
import './favouritefoods.css';

const foods = [
  { img: 'https://media.istockphoto.com/id/1496319304/photo/mutton-varuval-dry-or-lamb-pepper-served-in-dish-isolated-on-background-top-view-of-desi.jpg?s=612x612&w=0&k=20&c=rsOEqrV8RmqodyrDulFjRNuiPB-m6QMD0XKukZjxgaY=', title: 'Mutton Varuval' },
  { img: 'https://dailytimes.com.pk/assets/uploads/2019/11/03/mutton-nihari.jpg', title: 'Mutton Nihari' },
  { img: 'https://desitadkabellevue.com/images/masala-food.jpg', title: 'Masala Daal' },
  { img: 'https://www.tasteatlas.com/Images/Dishes/7053f1036e63478db68ce8ba7583b39e.jpg', title: 'Butter Paratha' },
  { img: 'https://www.tastingtable.com/img/gallery/20-traditional-pakistani-dishes-everyone-needs-to-try-once/lamb-kofta-salan-1674666910.jpg', title: 'Kofta Salan' },
];

const Favouritefoods = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % foods.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

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