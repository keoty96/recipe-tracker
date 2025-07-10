export default function AddRecipe () {
    return(
        <div>
            <h2>Add a Recipe</h2>
            <form>
                <div>
                    <label htmlFor="name-of-dish">Name of Dish</label>
                    <input type="text" id="name-of-dish" /> 
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients"></textarea> 
                </div>
                <div>
                    <label htmlFor="directions">Directions</label>
                    <textarea id="directions"></textarea> 
                </div>
            </form>      
        </div>
    )
}