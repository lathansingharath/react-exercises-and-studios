import styles from './Description.module.css';
import React from 'react';


function RecipeAuthor() {
    const authorLink = "https://www.allrecipes.com/4-ingredient-air-fryer-pepper-poppers-recipe-8584965";
    const authorPhoto = "https://www.allrecipes.com/thmb/3dmIwmd4TXjrnYsyqU3HRAxNZnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/NicoleRussellSoupLovingNicole-9607577801804bd09ea93bbdb7fcae6d.jpg";
    const authorName = "Nicole Russell";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );

}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>4 Ingredient Air Fryer Pepper Poppers</h1>
                    <p>These 4 ingredient air fryer pepper poppers have all the flavors you love in a popper but without the heat.</p>
                </div>
                <RecipeAuthor/>
            </div>
        );
    }
}

export default RecipeDescription;
