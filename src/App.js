import React, { useState } from 'react';
import './App.css';


const App = () => {
 const [todo,setTodo]= useState("");
 const [todos,setTodos]=useState([]);
 const [editId,setEditId]=useState(0);

 //used for saving the todos
 const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(editId);
   //used for saving the edited data
   if(editId){
    const editTodo=todos.find((i)=>i.id ===editId);
    const updatedTodos=todos.map((t)=>(
      t.id===editTodo.id
      ?(t={id:t.id,todo}):{id:t.id,todo:t.todo}
    ))
    setTodos(updatedTodos);
    setEditId(0);
    setTodo("");
    return;
   }


   if(todo!==""){
    setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
    setTodo("");
   }
   console.log(todos);
 };

 //used for handling delete Functionality

 const handleDelete=(id)=>{
  const deleteTodo=todos.filter((to)=>
  to.id!=id);
    setTodos([...deleteTodo]);
   
  
 }

 //used for handling the edit functionality
 const handleEdit=(id)=>{
    const editTodo=todos.find((i)=>
    i.id===id);
    setTodo(editTodo.todo);
    setEditId(id);
 }

 

 
  return (
    <div className='App'>
    
    <div className="container">
      <h1>To Do list App</h1>
      <form action=""  className='todoForm'
      onSubmit={handleSubmit}
      >
        <input type="text" 
          onChange={(e)=>setTodo(e.target.value)}
          value={todo}
        />
        <button
        type='submit'>{editId? "Edit":"Go"}</button>
      </form>

      <ul className='allTodos'>
      {
        todos.map((t)=>(
          <li className='singleTodo'>
        <span className='todoText'
        key={t.id}>{t.todo}</span>
        <button
        onClick={()=>{handleEdit(t.id)}}>Edit</button>
        <button
        onClick={()=>{handleDelete(t.id)}}>Delete</button>
        </li>
        ))
      }
       
      </ul>
    </div>
    </div>
  )
}

export default App
