 import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
 import { AiFillEdit , AiFillDelete } from 'react-icons/ai';
 import { MdDoneOutline } from 'react-icons/md';
 import './styles.css';
import TodoList from './TodoList';

 type Props  = {
   todo: Todo,
   todos: Todo[],
   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
 }

 const SingleTodo = ({todo,todos,setTodos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false); //keep the track is edit mode is on or not
    const [editTodo, setEditTodo] = useState<string>(todo.todo); // keep the value editor to do 


  const doneHandler = (id:number)=>{
     setTodos(
       todos.map((todo)=>
       todo.id === id ? { ...todo, isDone: !todo.isDone }:todo
   )) ; 
   }
  
  const deleteHandler = (id:number)=>{
    setTodos(todos.filter((todo)=> todo.id !== id));
  };

    
  const editHandler = (e: React.FormEvent , id:number) =>{
    e.preventDefault();
    setTodos(todos.map((todo)=>( todo.id === id ?{ ...todo,todo:editTodo } : todo )
    )) 
    setEdit(false);
  }
  
  useEffect (()=>{
    inputRef.current?.focus();
  },[edit]) //whenever edit is changes it will focus on that
   
  const inputRef = useRef<HTMLInputElement  >(null)
   return (
      <form className='singleTodoForm' onSubmit={(e)=>editHandler(e,todo.id)}>
       {
         edit ?(
              <input ref = {inputRef} value ={editTodo} onChange = {(event)=> setEditTodo(event.target.value)} className="todo_text_edit"  /> // VALUE IS EDIT.TODO JUST BECAUSE OF WHEN WE CLICK ON EDIT OUR PREVIOUS VALUE WILL NOT REMOVE 
         ):(
          todo.isDone ? (
            <s className="singleTodoSpan">{todo.todo}</s>
          ):(
            <span className="singleTodoSpan">{todo.todo}</span>
          )
         )
       }
       
  
         <span className="icon" onClick={()=>{
           if(!edit && !todo.isDone)  setEdit(!edit);
          }
        }> < AiFillEdit /></span> 
         <span className="icon" onClick={()=>deleteHandler(todo.id)}> < AiFillDelete /> </span>        
         <span className="icon" onClick={()=>doneHandler(todo.id)}> <MdDoneOutline/> </span>        

      </form>
        
   
   )
 }
 
 export default SingleTodo;
 