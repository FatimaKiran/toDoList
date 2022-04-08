import React, { useRef } from 'react'
import './styles.css';

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleSubmit:  (event :React.FormEvent ) => void;  
}


const UserInput = ({ todo , setTodo , handleSubmit}: Props) => {
 
  return (
      <form className='input' onSubmit={ (event)=> handleSubmit(event)  }>
          <input  type='input' placeholder='Enter Your task'
           className='inputUser' value = {todo} onChange={(event)=>setTodo(event.target.value) }/>

          <button className='button'>Add</button>
      </form>
  )
}

export default UserInput

