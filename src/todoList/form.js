import React from 'react';


const Form = ({todos, setTodos, inputText, setInputText}) =>{
    const inputTextHander = (event) => {
        //console.log(event.target.value);
        setInputText(event.target.value);
    };
    const submitTodoHandler =  (event) => {
        console.log(inputText);
        event.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000 },
        ]);
        setInputText("");
    };


    return(
        <form>
            <input value={inputText} onChange={inputTextHander} type='text' className='todo-input' />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
};

export default Form;