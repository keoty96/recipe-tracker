"use client";
import { useState } from "react";

interface RecipeForm {
  nameOfDish: string;
  ingredients: string;
  directions: string;
}

export default function AddRecipe() {
  const [form, setForm] = useState<RecipeForm>({
    nameOfDish: "",
    ingredients: "",
    directions: "",
  });

  const handleOnChange = (field: keyof RecipeForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recipe submitted:", form);
    setForm({
      nameOfDish: "",
      ingredients: "",
      directions: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add a Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name-of-dish"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name of Dish
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.nameOfDish}
            type="text"
            id="name-of-dish"
            onChange={(e) => handleOnChange("nameOfDish", e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="ingredients"
            value={form.ingredients}
            placeholder="List ingredients here..."
            onChange={(e) => handleOnChange("ingredients", e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="directions"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Directions
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="directions"
            value={form.directions}
            onChange={(e) => handleOnChange("directions", e.target.value)}
            placeholder="Step-by-step directions..."
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
