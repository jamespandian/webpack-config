import {useState} from "react";
const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
  };

  const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 1,
  };


  const Receipes = () =>{

    const [receipt , setReceipe ] = useState(elvenShieldRecipe);

 
    return (
        <div>
            <button onClick={()=> setReceipe(elvenShieldRecipe)}>elvenShieldRecipe</button>
            <button onClick={()=> setReceipe(elvenGauntletsRecipe)}>elvenGauntletsRecipe</button>
            <ul>
           
            {Object.keys(receipt).map((item,i) => (
        <li key={i}>
            {item}:{receipt[item]}
        </li>
    ))}

    
 

            </ul>
        </div>

    )

  }

  export default Receipes;