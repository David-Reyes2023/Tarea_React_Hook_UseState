import { useState } from "react";

/*export default */ function Componente1 (){

const [counter, setCounter] = useState(0);
 
function handleIncrement() {
    setCounter(counter +1);
}
  
  return (
    <div className="App">
        <h1>Code with David</h1>
        <h1>{counter}</h1>
        <button 
        onClick = {handleIncrement}>Increment</button>
    </div>
      
  );
}

export default Componente1;
/*Export default puede ir al final o al lado del function principal*/