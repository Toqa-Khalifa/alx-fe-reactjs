import React from 'react';
import { useRecipeStore } from '../stores/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes.length) return <p>No recipes yet — add one!</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: 8, marginBottom: 8 }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
