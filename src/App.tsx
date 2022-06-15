import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputFiled from './components/InputFileds';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC =()=>{

  const[todo, setTodo] = useState < string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  
  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }

  return (
    <div className="App">
    <span className='heading'>Taskify</span>
    <InputFiled todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
