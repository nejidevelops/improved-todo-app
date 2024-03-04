import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

function TodoList({ todos }: { todos: string[] }) {
  return (
    <>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>
            <div className="activity-name">
              {todo}
            </div>
            <div className="activity-actions">
              <FaPencilAlt />
              <FaTrash />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
