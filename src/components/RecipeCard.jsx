import { Link } from "react-router-dom"
import { useRecipeContext } from "../contexts/RecipeContext"
import "../css/RecipeCard.css"

function RecipeCard({ recipe }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useRecipeContext()
  const favorite = isFavorite(recipe.id)

  console.log(recipe)

  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(recipe.id)
    else addToFavorites(recipe)
  }

  return (
    <div className="recipe-card">
      <div className="recipe-poster">
        <img src={recipe.image} alt={recipe.title} />
        <div className="recipe-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="recipe-info">
        <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h3>{recipe.title}</h3>
        </Link>
        <p>Ready in {recipe.readyInMinutes} minutes</p>
      </div>
    </div>
  )
  
}

export default RecipeCard
