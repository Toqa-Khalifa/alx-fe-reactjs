import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const validate = () => {
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setErrors("All fields are required.");
      return false;
    }
    const ingredientList = ingredients.split("\n").filter((i) => i.trim() !== "");
    if (ingredientList.length < 2) {
      setErrors("Please enter at least two ingredients.");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
    };

    console.log("New recipe submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-xl md:max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Add New Recipe</h2>

      {errors && (
        <p className="text-red-500 text-center mb-4 font-medium">{errors}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold md:text-lg">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 md:p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold md:text-lg">Ingredients</label>
          <textarea
            className="w-full p-2 md:p-3 border rounded h-28 md:h-36 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter one ingredient per line"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-semibold md:text-lg">Preparation Steps</label>
          <textarea
            className="w-full p-2 md:p-3 border rounded h-32 md:h-44 resize-none focus:outline-none focus:ring focus:ring-blue-300"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Enter steps, each on a new line"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 md:py-3 rounded hover:bg-blue-700 transition text-lg md:text-xl"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
