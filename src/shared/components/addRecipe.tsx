"use client";
import { useState } from "react";
import { Plus, Clock, Users, ChefHat } from 'lucide-react';
import DisplayRecipes from "./displayRecipes";

interface RecipeFormData {
  title: string;
  ingredients: string;
  instructions: string;
}

interface Recipe {
  id:string,
  title: string;
  ingredients: string[];
  instructions: string[];
  createdAt: Date;
}

export default function AddRecipe() {

  const [recipes, setRecipe] = useState<Recipe[]>([]);
  const [show, setShow] = useState(false);

  const [form, setForm] = useState<RecipeFormData>({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Recipe submitted:", form);

    if(!form.title.trim()) {
      alert("Please add a Recipe Title")
      return;
    }

    const newRecipe: Recipe = {
      id: Date.now().toString(),
      title: form.title.trim(),
      ingredients: form.ingredients.split('\n').filter(ingredient => ingredient.trim() !== ''),
      instructions: form.instructions.split('\n').filter(instruction => instruction.trim() !== ''),
      createdAt: new Date()
    }

    setRecipe(prev => [newRecipe, ...prev])

    setShow(true);

    // reset form
    setForm({
      title: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Add New Recipe
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipe Name
                </label>
                <input
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={form.title}
                  type="text"
                  name="title"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="ingredients"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Ingredients
                </label>
                <textarea
                  name="ingredients"
                  value={form.ingredients}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="2 cups flour&#10;1 cup sugar&#10;3 eggs"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="instructions"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Directions
                </label>
                <textarea
                  name="instructions"
                  value={form.instructions}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Preheat oven to 350°F&#10;Mix dry ingredients&#10;Add wet ingredients"
                  required
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Save Recipe
                </button>
                {/* <button
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>

          <DisplayRecipes recipes={recipes} />


        </div>
      </div>
    </div>
  );
}
