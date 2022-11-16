import './App.scss';
import {useState} from "react"

import FormTodo from './components/Form-Todo/Form-Todo';
import TodoCart from './components/Todo-cart/TodoCart';
function App() {
  const[Mode,setMode]=useState('add');
  const[Form,setForm]=useState({Title:'',Description:''})
  const[Todos,setTodos]=useState([{
    id:1,
    Title:'Do homework',
    Description:'write a book',
    Done:false
  },
  {
    id:2,
    Title:'English class',
    Description:'10-12 oclock',
    Done:true
  },
  {
    id:3,
    Title:'website class',
    Description:'13-18 oclock',
    Done:true
  }
  ])

  return (
    <div className='App'>
     <FormTodo Form={Form} setForm={setForm} Todos={Todos} setTodos={setTodos} Mode={Mode} setMode={setMode}></FormTodo>
      {Todos.map(Todo =><TodoCart Todo={Todo} setTodos={setTodos}setMode={setMode} Todos={Todos} setForm={setForm}/>)}
    </div>
  );
}

export default App;
