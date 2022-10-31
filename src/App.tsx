import React, { useState } from 'react';
import './App.scss';
import InputTodos from './components/InputTodos/InputTodos';
import TodoList from './components/TodoList/TodoList';
import { useSelector } from 'react-redux'
import Footer from './components/Footer/Footer';
import { ITodo, ITodoState } from './types/todo';

function App() {
  const [filter, setFilter] = useState('')
  const todos = useSelector((state: ITodoState) => state.todos)
  const activeItems = todos.filter((todo: ITodo) => todo.isActive !== false)

  const viewItems = todos.filter((todo: ITodo) => {
    if (filter === 'active') {
      return todo.isActive
    } else if (filter === 'finished') {
      return !todo.isActive
    }
    return true
  })

  return (
    <>
      <header className="header__title">todos</header>
      <div className="content-wrapper">
        <InputTodos />
        <TodoList todos={viewItems} />
        <Footer
          itemsCount={activeItems.length}
          setOnlyActive={() => setFilter('active')}
          setOnlyFinished={() => setFilter('finished')}
          setAll={() => setFilter('')} />
      </div>
    </>
  );
}

export default App;
