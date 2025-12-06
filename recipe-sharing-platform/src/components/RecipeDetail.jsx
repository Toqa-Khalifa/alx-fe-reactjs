import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-700 mb-6">{recipe.summary}</p>

      {/* INGREDIENTS */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* INSTRUCTIONS */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
