import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Home() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Home;
