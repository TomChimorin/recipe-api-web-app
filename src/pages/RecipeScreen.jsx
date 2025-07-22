import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecipeContext } from "../contexts/RecipeContext";
import "../css/RecipeScreen.css";

function RecipeScreen() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isFavorite, addToFavorites, removeFromFavorites } = useRecipeContext();
  const favorite = recipe ? isFavorite(recipe.id) : false;

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(recipe.id);
    else addToFavorites(recipe);
  }

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=f879a883dbed434ebaedf9a3c3f51b19`
        );
        if (!response.ok) throw new Error("Failed to fetch recipe details");
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div className="recipe-card">
      <h1>{recipe.title}</h1>

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

      <p>Ready in {recipe.readyInMinutes} minutes</p>
      <p>Servings: {recipe.servings}</p>

      <div
        className="recipe-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <h2>Ingredients</h2>
      <ul>
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      {recipe.instructions ? (
        <div
          dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          style={{ whiteSpace: "pre-line" }}
        />
      ) : (
        <p>No instructions available.</p>
      )}
    </div>
  );
}

export default RecipeScreen;
