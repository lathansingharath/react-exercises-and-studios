import bike from "../data.json";
import { useState } from "react";



export default function MyProjects () {
    const [index, setIndex] = useState(0);
    let bikeData = bike;
    let bikeModel = bikeData.projects[index].model;

    const handleClick = () => {
        if (index < bike.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }

    }


    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <p>{bike.projects[index].model}</p>
        </div>
        

    );
}