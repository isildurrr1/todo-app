import React from 'react'
import Footer from '../Footer/Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const App = () => {
  const tasks = [
    { name: 'Completed task', state: 'completed', date: 'created 17 seconds ago' },
    { name: 'Editing task', state: 'editing', date: 'created 5 minutes ago' },
    { name: 'Active task', state: undefined, date: 'created 5 minutes ago' },
  ]
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList data={tasks} />
        <Footer />
      </section>
    </section>
  )
}

export default App