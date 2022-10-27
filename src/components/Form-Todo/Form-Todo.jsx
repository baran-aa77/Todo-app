import React from 'react'

const FormTodo = ({Form,setForm,Todos,setTodos,Mode,setMode}) => {
  const handleChange=(e)=>{
    setForm({...Form,[e.target.name]:e.target.value})
      }
      const handlesubmit=(e)=>{
        e.preventDefault();
        if(Mode==='add'){
          setTodos([...Todos,{id:Math.floor(Math.random()*1000),Title:Form.Title,Description:Form.Description,Done:false}]);
    setForm({
      Title:'',
      Description:''
    })
        }
        else{
          setTodos(Todos.map(todo=>todo.id===Form.id?Form:todo))
          setMode('add')
          setForm({
            Title:'',
            Description:''
          })
        }
       
    
      }
  return (
<div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
 <div> <h2>Todo App</h2></div>
<form onSubmit={handlesubmit}>
  <input type={'text'} name={'Title'} value={Form.Title} onChange={handleChange} placeholder='Title'></input>
  <input type={'text'} name={'Description'} value={Form.Description} onChange={handleChange} placeholder='Description'></input>
  <button type={'submit'} style={{backgroundColor:'#82CD47'}}>{Mode==='add'?'Add Todo':'Update Todo'}</button>
</form>

      </div>
  )
}

export default FormTodo
