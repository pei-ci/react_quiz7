import React,{useState} from 'react';
import Form from './form';
import TodoList from './todoList';

function TodoApp(){
  // USE STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return(
    <div>
      <header>
        <h1>my Todo List </h1>
      </header>
      <Form 
        todos={todos} setTodos={setTodos} 
        setInputText={setInputText} 
        inputText={inputText}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
      />
     <footer align='center'> <text >reference: https://www.youtube.com/watch?v=pCA4qpQDZD8</text></footer>
    </div>
  );
};
export default TodoApp;