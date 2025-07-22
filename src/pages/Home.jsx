import RecipeCard from "../components/RecipeCard"
import { useState, useEffect } from "react"
import { searchRecipes, getPopularRecipes } from "../services/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularRecipes = async () => {
            try {
                const popularRecipes = await getPopularRecipes()
                setRecipes(popularRecipes)
            } catch (err) {
                console.log(err)
                setError("Failed to load recipes...")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularRecipes()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchRecipes(searchQuery)
            setRecipes(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search recipes...")
        } finally {
            setLoading(false)
        }


        setSearchQuery("");
        
    }

    return (
    <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for recipes..." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>

        {error && <div className="error-message">{error}</div>}
        
        {loading ? <div className="loading">Loading...</div> : 
         <div className="recipes-grid">
            {(recipes || []).map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
        </div>

        }
    </div>
    );
}

export default Home



