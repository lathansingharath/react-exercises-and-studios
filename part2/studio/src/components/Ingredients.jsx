import recipedata from "./recipe.json";


function IngredientList() {

   return (
    <div>
      
      {recipedata.map((ingredList,id) => (
        <li key={id}>
        <h3>Ingredients</h3>

          {ingredList.ingredients.map((ingredList) => (
            <ul>
              <li>
                {ingredList}
              </li>
            </ul>

          )


          )}
        </li>
      ))}
      </div>
    
    );

    
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 