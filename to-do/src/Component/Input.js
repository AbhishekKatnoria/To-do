import React,{useState} from 'react';


export default function Input() {

  return (
    <>
    <h1>To-Do</h1>
     <form className='Todo-form'>
     <input type="text" placeholder='Add Something' className='todo-input' />
      <button type="submit"className='todo-btn' >Submit</button>
     </form>
  
   
    </>
  )
}
