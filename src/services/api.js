const API_KEY = "f879a883dbed434ebaedf9a3c3f51b19";
const BASE_URL = "https://api.spoonacular.com";

export const getPopularRecipes = async () => {
    const response = await fetch(`${BASE_URL}/recipes/random?number=12&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.recipes; 
};

export const searchRecipes = async (query) => {
  const response = await fetch(
    `${BASE_URL}/recipes/complexSearch?query=${encodeURIComponent(query)}&number=12&apiKey=${API_KEY}`
  );
  const data = await response.json();
  console.log("Search API response:", data);  // <-- Add this line
  return Array.isArray(data.results) ? data.results : [];
};

