import recipedata from "./recipe.json";

function RecipeName() {

  const recipeName = recipedata.map((recName) => (
    <li key={recName.name}>

      {recName.name}
    </li>

  ));

  return (
    <h1>
      {recipeName}
    </h1>
  );
}
export default RecipeName;

//import return the name of the recipe as a level 1 header