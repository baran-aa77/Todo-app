import React from 'react'
import Doneimage from '../../Image/Done.png'
import NotDoneimage from '../../Image/NotDone.png'
const TodoCart = ({Todo,setMode,setForm,Todos,setTodos}) => {
    const handledelete=(id)=>{
        setTodos(Todos.filter(todo=>todo.id!==id))
          }
          const handlecheck=(id)=>{
            setTodos(Todos.map(Todo=>Todo.id===id?{...Todo,Done:!Todo.Done}:Todo))
          }
          
          const handleupdate=(Todo)=>{
            setMode('update')
        setForm(Todo)
          }
  return (
    <div style={{border:'1px solid orange', display:'flex',alignItems:'center',margin:'10px'}}>
        
    <div style={Todo.Done?{display:'block'}:{display:'none'}}><img src={Doneimage} width='150'/></div>
    <div style={Todo.Done?{display:'none'}:{display:'block'}}><img src={NotDoneimage} width='150'/></div>
    <div>
    <div>Title:{Todo.Title}</div>
    <div>Description:{Todo.Description}</div>
      <div onClick={()=>handlecheck(Todo.id)}>Done:{Todo.Done?'Yes':'No'}</div>
      <input type="checkbox" onChange={()=>handlecheck(Todo.id)}/>
    <button onClick={()=>handledelete(Todo.id)}>Delete</button>
    <button onClick={()=>handleupdate(Todo)}>Update</button>
    </div>

    </div>
  )
}

export default TodoCart
