import Favorites from './pages/Favorites'
import Home from './pages/Home'
import RecipeScreen from './pages/RecipeScreen'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import { RecipeProvider } from './contexts/RecipeContext'
import "./css/App.css"

function App() {

  return (
    <RecipeProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/recipe/:id" element={<RecipeScreen />} />
        </Routes>
      </main>
    </RecipeProvider>
    
  )
}


export default App
