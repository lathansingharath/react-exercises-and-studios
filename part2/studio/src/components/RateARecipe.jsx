let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {//put props as paremeter
 let rate = props.rating;//testing;
 
  function GiveRating (){
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  return props.rating >= 1 && props.rating <= 5 ? <GiveRating/> : <h1>Null</h1>;
  
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
