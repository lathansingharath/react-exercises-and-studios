import { useState } from 'react';

export default function BoardAssignment () {

   const boards = [ 
      {
         label: "fridge",
         value:  "dinner"
      },

   {
      label: "microwave",
      value:   "breakfast"
   },
   {
      label:   "lunchbox",
      value:   "lunch"
   }

   ];

   const [boardName,setName] = useState("no board yet")

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((lab,index) => (

            <option key={index} value={lab.value}> {lab.label} </option>
            


         ))}
   
         

      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
