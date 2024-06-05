import { useState } from "react";

export default function Componente2() {
const [counter, setCounter] = useState(0);
function handleIncrement() {
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
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