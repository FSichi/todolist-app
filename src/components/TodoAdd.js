import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo  }) => {

    const [ {description}, handleInputChange, reset ] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 0){
            return ;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr />
            
            <form onSubmit= {handleSubmit}>

                <input 
                    type = 'text'
                    name= 'description'
                    className = 'form-control'
                    placeholder= 'Quiero Hacer...'
                    value = {description}
                    autoComplete = 'off'
                    onChange={ handleInputChange }
                />

                <button
                    type = 'submit'
                    className = 'btn btn-outline-primary mt-1 w-100'
                >
                    Agregar
                </button>


            </form>   
        </>
    )
}
