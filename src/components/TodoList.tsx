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
        <li>
          <div className="activity-name">
            Todo 2
          </div>
          <div className="activity-actions">
            <FaPencilAlt />
            <FaTrash />
          </div>
        </li>
        <li>
          <div className="activity-name">
            Todo 3
          </div>
          <div className="activity-actions">
            <FaPencilAlt />
            <FaTrash />
          </div>
        </li>
      </ul>
    </>
  )
}

export default TodoList