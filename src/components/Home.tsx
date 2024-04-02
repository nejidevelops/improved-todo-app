import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Demo from './Demo'
import Example from './Example'

function Home() {
  return (
    <>
      <Example />
      <Demo/>
      <TodoForm />
      <TodoList />
    </>
  )
}

export default Home