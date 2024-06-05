import "./App.css"
import {useState} from 'react';
import Componente1 from "./assets/Componentes/Componente1";
import Componente2 from "./assets/Componentes/Componente2";
import Componente3 from "./assets/Componentes/Componente3";
import Componente4 from "./assets/Componentes/Componente4";


function App() {

  return (
    <>
    <Componente1/>
    <Componente2/>
    <Componente3/>
    <Componente4/>
    </>
    
    
  );




/* COMPONENTE 4 **********************************************************************************
  const [todos, setTodos] = useState(createTodos);

  function handleAdd() {
    setTodos((prevTodos)=>{
      return [
        ...prevTodos,
        {id: 12,
         content: "my todo",
         completed: false,
        },
      ];
    });
  }

  
  return (
    <div className="App">
        <h1>Code with David</h1>
        {todos.map(todo=>(
          <p key={todo.id}>{todo.content}</p>
        ))}
      <button onClick={handleAdd}>add todo</button>        
    </div>
      
  );*/

}


export default App;
