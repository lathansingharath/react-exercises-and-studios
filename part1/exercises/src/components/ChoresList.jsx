import classes from "./ChoresList.module.css";
export default function ChoresList () {
   return (
      <div>
         <p className = {classes.choresHeading}>Lance's Chores</p>
         <ul>
            <li className={classes.choresText}>Take trash out</li>
            <li className={classes.choresText}>Washing dishes</li>
            <li className={classes.choresText}>vacuuming</li>

         
         </ul>


      </div>
   
 
   );
}