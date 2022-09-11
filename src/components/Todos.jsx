import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Todos = () => {
    const [todos, setTodos] = useState([])
    const addBtnRef = useRef()

    function handleAddTodo(e) {
        const todo = addBtnRef.current.value
        if (todo === '') return;
        setTodos(prevTodo => {
            return [...prevTodo, { id: uuidv4(), todo: todo, completed: false }]
        })
        addBtnRef.current.value = null;
    }


    function toggleTodos(id) {
        const todoCopy = [...todos]
        const todo = todoCopy.find(todo => todo.id === id)
        todo.completed = !todo.completed;
        setTodos(todoCopy)
    }

    function btnClearTodos() {
        const unfinishedTodos = todos.filter(todo => !todo.completed)
        setTodos(unfinishedTodos)
    }



    return (
        <div className='todoContainer'>
            <p>Add and manage todos </p>

            {todos.map(todo => {
                return <label>
                    <input type="checkbox" checked={todo.completed}
                        onChange={() => toggleTodos(todo.id)} />
                    {todo.todo}
                </label>
            })}



            <div className='formContainer'>
                <form className='form'>
                    <span>Todo: </span>
                    <input className="formInput" type="text" name="todo" ref={addBtnRef} />

                </form>
                <div className='todoBtns'>

                    <button className='todoBtn todoBtnAdd' onClick={handleAddTodo}>Add Todo</button>
                    <button className='todoBtn todoBtnClear'
                        onClick={btnClearTodos}>Clear finished todos</button>
                </div>
                <div className='todosLeft'>Unfinished todos : <span style={{ color: todos.filter(todo => todo.completed == false).length > 5 ? 'red' : todos.filter(todo => todo.completed == false).length > 2 ? 'blueviolet' : 'aqua' }}>
                    {todos.filter(todo => todo.completed == false).length}
                </span>
                </div>

            </div>
        </div >
    );
}

export default Todos;
