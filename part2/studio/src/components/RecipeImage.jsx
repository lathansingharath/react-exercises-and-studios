import recipedata from "./recipe.json";
import "./styling.css";


function RecipeImage() {

  const recipeImage = recipedata.map((recImage) =>(
    <div key={recImage.name}>
      <img src={recImage.recipeImage} alt={recImage.name} className="recipeImage"/>
      

    </div>

  ));

   return (
    <div>

      {recipeImage}

    </div>


   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 