import React, { useState } from 'react';
import UserInput from './components/UserInput';
import './App.css';
import { Todo } from './model';
import TodoList from './components/TodoList';
const App: React.FC= ()=> {

  const [todo , setTodo] = useState<string>(""); // type should br string
  const [todos , setTodos] = useState<Todo[]>([]);
  
  const handleSubmit = (event :React.FormEvent ): void =>{
    event.preventDefault();
    if (todo) {
      setTodos([...todos,{ id:Date.now() , todo:todo,isDone:false}])
      setTodo("");  
    }
    
  }

  console.log(todo);
  console.log(todos);
   
  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <UserInput todo={todo} setTodo ={setTodo} handleSubmit={handleSubmit}/>

     <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
 
export default App;
