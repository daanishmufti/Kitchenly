import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './categories.css'
import { supabase } from '../../lib/supabase'

const categoriesData = [
  { id: 1, name: 'Meat'},
  { id: 2, name: 'Veggie'},
  { id: 3, name: 'Dessert'},
  { id: 4, name: 'Oriental'},
  { id: 5, name: 'Bakery' },
  { id: 6, name: 'Drinks'},
]

const Categories = () => {
  const [foodsData, setFoodsData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [order, setOrder] = useState('asc')
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase
        .from('recipes')
        .select('id, name, category, image')
      if (!error && data) {
        setFoodsData(data.map(r => ({ id: r.id, name: r.name, category: r.category, img: r.image })))
      }
    }
    fetchRecipes()
  }, [])

  const filteredFoods = foodsData
    .filter(food => (selectedCategory === 'All' || food.category === selectedCategory))
    .filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleFoodCardClick = (foodId) => {
    navigate(`/recipie/${foodId}`);
  };

  const renderCategoryButtons = () => (
    <div className="categories-bar">
      {selectedCategory === 'All' ? (
        <button className="category-btn active" onClick={() => handleCategorySelect('All')}>All</button>
      ) : (
        <button className="category-btn" onClick={() => handleCategorySelect('All')}>All</button>
      )}
      {categoriesData.map(cat => (
        selectedCategory === cat.name ? (
          <button
            key={cat.id}
            className="category-btn active"
            onClick={() => handleCategorySelect(cat.name)}
          >
            {cat.name}
          </button>
        ) : (
          <button
            key={cat.id}
            className="category-btn"
            onClick={() => handleCategorySelect(cat.name)}
          >
            {cat.name}
          </button>
        )
      ))}
    </div>
  );

  const renderSearchAndOrder = () => (
    <div className="categories-search-order">
      <input
        type="text"
        className="categories-search"
        placeholder="Search food..."
        value={search}
        onChange={handleSearchChange}
      />
      <select className="categories-order" value={order} onChange={handleOrderChange}>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );

  const renderFoodCards = () => (
    <div className="categories-list">
      {filteredFoods.map(food => (
        <div 
          className="category-card" 
          key={food.id} 
          onClick={() => handleFoodCardClick(food.id)} 
          style={{ cursor: 'pointer' }}
        >
          <img src={food.img} className="category-img" alt={food.name} />
          <div className="category-name">{food.name}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="categories-container">
      <h2 className="categories-title">Categories</h2>
      {renderCategoryButtons()}
      {renderSearchAndOrder()}
      {renderFoodCards()}
    </div>
  )
}

export default Categories;