import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { todoReducer } from './hooks/todoReducer'
import './TodoApp.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] ;
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);


    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
        
    }
    
    const handleDelete = (todoId) => {

        const actionDeleteTodo = {
            type: 'delete',
            payload: todoId
        }

        dispatch(actionDeleteTodo);
    }   

    const handleToggle = (todoId) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }


    return (
        <div>

            <h1>TODO APP ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className = 'col-7'>

                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    
                </div>

                <div className= 'col-5'>

                    <TodoAdd 
                        handleAddTodo ={handleAddTodo}
                    />

                </div>

            </div>

        </div>
    )
}
