import './styles.css';

function Button() {
   function onLearnMore() {
      alert("Woah, you're at the ocean");


   }

   return ( 
         <button onClick={onLearnMore}>
            Click away
         </button>
   );
}

export default Button;