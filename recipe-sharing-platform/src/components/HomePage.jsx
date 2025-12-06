import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>

            <p className="text-gray-600">{recipe.summary}</p>

<Link
  to={`/recipe/${recipe.id}`}
  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
>
  View Recipe
</Link>
<Link
  to="/add-recipe"
  className="inline-block bg-green-600 text-white px-4 py-2 rounded mb-6"
>
  Add New Recipe
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
