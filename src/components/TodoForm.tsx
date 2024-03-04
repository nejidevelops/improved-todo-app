import React, { useState } from 'react';

function TodoForm({ onAddTodo }: { onAddTodo: (todo: string) => void }) {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      onAddTodo(todo);
      setTodo("");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='Enter a todo activity' />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TodoForm;
