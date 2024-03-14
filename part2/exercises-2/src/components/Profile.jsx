import './styles.css';
import Button from './Button';
import oceans from "./oceans.json";



function Profile()
{
   let listItem = oceans.map(ocean =>
      <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
         <h1> {ocean.name}</h1>
         <h3> 
            <ul>
               <li>{ocean.fact1}</li>
               <li>{ocean.fact2}</li>
               <li>{ocean.fact3}</li>
               <Button />
            </ul>
         </h3>
         <img className="img" src={ocean.image} alt={ocean.name}/>


      </div>
      
      );
   return(
      
         <ul>
            {listItem}
         </ul>
         
        
   );
}

export default Profile;