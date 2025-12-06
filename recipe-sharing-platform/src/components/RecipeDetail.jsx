import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // get id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe detail:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 text-gray-700 space-y-3">
          <li>Step 1: Example instruction...</li>
          <li>Step 2: Example instruction...</li>
          <li>Step 3: Example instruction...</li>
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
