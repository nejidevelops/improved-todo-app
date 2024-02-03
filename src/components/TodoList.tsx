import React from 'react'
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function TodoList() {
  return (
    <>
      <ul>
        <li>
          <div className="activity-name">
            Todo 1
          </div>
          <div className="activity-actions">
            <FaPencilAlt />
            <FaTrash />
          </div>
        </li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </>
  )
}

export default TodoList