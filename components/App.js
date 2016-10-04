import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../container/VisibileTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
