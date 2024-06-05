import { useState } from "react";
export default function Componente3 () {
const [person, setPerson] = useState({
  name: "Alberto",
  age: 28,
  color: "red",
});

function handleIncrement() {
  setPerson({
    ...person,
    name:"David",
  });
}
  
  return (
    <div className="App">
        <h1>Code with David</h1>
        <h1>{person.name}</h1>
        <button 
        onClick = {handleIncrement}>Increment</button>
    </div>
      
  );
}