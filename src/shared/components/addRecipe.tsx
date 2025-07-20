"use client";
import { useState } from "react";
import { Plus, Clock, Users, ChefHat } from 'lucide-react';

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

          {/* Recipes Display */}
        <div className="space-y-4">
          {recipes.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <ChefHat className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes yet!</h3>
              <p className="text-gray-500">Click "Add Recipe" to get started with your first recipe.</p>
            </div>
          ) : (
            recipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                    {/* {recipe.description && (
                      <p className="text-gray-600 mb-3">{recipe.description}</p>
                    )} */}
                    {/* <div className="flex gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{recipe.prepTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{recipe.servings} servings</span>
                      </div>
                    </div> */}
                  </div>
                  <span className="text-xs text-gray-400">
                    Added {recipe.createdAt.toLocaleDateString()}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Ingredients</h4>
                    <ul className="space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          • {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Instructions</h4>
                    <ol className="space-y-1">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          {index + 1}. {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>


        </div>
      </div>
    </div>
  );
}
