import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './recipiedetails.css'
import recipeData from '../../data/recipeData'

const Recipiedetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if(id && recipeData[id])
    {
      setRecipe(recipeData[id]);
    }
  }, [id]);

  if(!recipe)
  {
    return <div className="recipe-loading">Recipe not found</div>;
  }

  return (
    <div className="recipe-details-container">
      <div className="recipe-header">
        <img src={recipe.image} className="recipe-image" />
        <div className="recipe-info">
          <h1 className="recipe-title">{recipe.name}</h1>
          <div className="recipe-meta">
            <span className="recipe-category">{recipe.category}</span>
            <span className="recipe-time">Cook time: {recipe.cookTime}</span>
            <span className="recipe-difficulty">Difficulty: {recipe.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <div className="video-section">
          <h2>Video Tutorial</h2>
          <div className="video-container">
            <iframe
              src={recipe.videoLink}
              title={`${recipe.name} Tutorial`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="recipe-video"
            ></iframe>
          </div>
        </div>

        <div className="ingredients-instructions-grid">
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="instruction-step">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipiedetails;