import { useState } from "react";



function createTodos(){
    const todos = [];
  
    for(let i = 0; i<10; i++) {
      todos.push({
        id: i,
        content: "auto generated todo",
        completed: false,
      });
    }
  
    return todos;
  }

export default function Componente4 () {
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
      
  );
}
