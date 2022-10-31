import React from 'react'
import { ITodo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({todos}: {todos: Array<ITodo>}) {
    return (
        <div>
            {todos.map((todo: ITodo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isActive={todo.isActive}
                    />
                );
            })}
        </div>
    );
}

export default TodoList