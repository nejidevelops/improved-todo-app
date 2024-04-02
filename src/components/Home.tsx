import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Demo from './Demo'

function Home() {
  return (
    <>
      <Demo/>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default Home