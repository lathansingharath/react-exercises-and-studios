import "./styling.css";
import recipedata from "./recipe.json";

function AuthorInfo() {
  const recipeAuthor = recipedata.map((aName) => (
    <div key={aName.author}>
      {aName.author}      
    </div>    
  ));

  const recipeAuthorImage = recipedata.map((authImage) => (
    <div key={authImage.author}>
      <img src={authImage.authorImage} alt={authImage.author} className="authorImage"/>
    </div>
  ));

  const recipeWebsite = recipedata.map((recipeSite) => (
    <div key={recipeSite.author}>
      <a>{recipeSite.website}</a>


    </div>

  ))

 

   return (

    <div>
      
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 