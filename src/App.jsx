import React, { useEffect, useState } from 'react';
import Recipe from './componenets/recipe';
import  Axios  from 'axios';

const App =() => {
const APP_KEY = '29542b9a'
const APP_ID = '3d7626799ff090bfcff81f0ceab3f056'

const [query, setQuery] = useState('chicken')
const [search, setSearch] = useState('');
const [recipes, setRecipes] = useState([])
useEffect(()=>{
  getRecipe()
})

const getRecipe = () =>{
  Axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_KEY}&app_key=${APP_ID}`)
.then((res)=>{
  //console.log(res.data);
  setRecipes(res.data.hits)
})
}

const updateSerach = (event) => {
setSearch(event.target.value)
}

const getSerach = e => {
e.preventDefault()
setQuery(search)
}
return(
  <>
    <form onSubmit={getSerach} className="serach-form">
      <input type="text"className="search-bar" onChange={updateSerach} value={search} />
      <button className="search-button" type="submit">Search</button>
    </form>
{recipes.map(recipe =>(
  <Recipe key={recipe.recipe.lanel} title = {recipe.recipe.lanel}calories = {recipe.recipe.calories}image = {recipe.recipe.image}
  ingredients ={recipe.recipe.ingredients}/>
))}
  </>
)
}
export default App;
