import create from 'zustand';

const generateId = () => Date.now();

const useRecipeStore = create(set => ({
  recipes: [
    { id: 101, title: 'Refreshing Fruit Salad', description: 'A delicious mix of seasonal fruits with a touch of honey.' },
    { id: 102, title: 'Spicy Lentil Soup', description: 'Red lentils, cumin, carrots, and onions, served hot.' },
      ],
  
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, { ...newRecipe, id: generateId() }]
  })),

  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id 
        ? { ...recipe, ...updatedRecipe } 
        : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;