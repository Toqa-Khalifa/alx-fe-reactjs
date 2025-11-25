import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom'; 
import FavoriteButton from './FavoriteButton'; 

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes match your search results.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>The list</h2>
      {filteredRecipes.map(recipe => (
        <div 
          key={recipe.id} 
          style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          
          <Link 
            to={`/recipes/${recipe.id}`} 
            style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
          >
            <h4>{recipe.title}</h4>
            <p style={{ margin: 0 }}>{recipe.description.substring(0, 50)}...</p>
          </Link>
          
          <FavoriteButton recipeId={recipe.id} /> 
        </div>
      ))}
    </div>
  );
};

export default RecipeList;