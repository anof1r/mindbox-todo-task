import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setTodo } from '../../store/reducers/todoReducer';
import './InputTodosStyle.scss'

function InputTodos() {
    const dispatch = useDispatch()
    const [value, setValue] = useState("");

    return (
        <input
            className="todo-input"
            placeholder="What needs to be done?"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            onKeyDown={(e) => {
                const trimmedValue = value.trim()
                if (e.key === "Enter" && trimmedValue !== "") {
                    dispatch(setTodo(value));
                    setValue("");
                }
            }}
        />
    )
}

export default InputTodos