import { Plus, Clock, Users, ChefHat } from 'lucide-react';

interface Recipe {
  id:string,
  title: string;
  ingredients: string[];
  instructions: string[];
  createdAt: Date;
}

export default function DisplayRecipes({recipes}: {recipes:Recipe[]}) {
    return (
        <>
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
        </>
    )
}