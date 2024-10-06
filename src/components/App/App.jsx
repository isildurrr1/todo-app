import React, { Component } from 'react'

import Footer from '../Footer/Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

export default class App extends Component {
  state = {
    tasks: [
      { name: 'Completed task', state: 'completed', date: 'created 17 seconds ago', id: 1 },
      { name: 'Editing task', state: undefined, date: 'created 5 minutes ago', id: 2 },
      { name: 'Active task', state: undefined, date: 'created 5 minutes ago', id: 3 },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((el) => el.id === id)
      const newTasks = tasks.toSpliced(index, 1)
      return { tasks: newTasks }
    })
  }

  completeItem = (id, checked) => {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          const newState = checked ? { state: 'completed' } : { state: '' }
          return Object.assign(task, newState)
        }
        return task
      })
      return { tasks: newTasks }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            data={this.state.tasks}
            onDeleted={(id) => this.deleteItem(id)}
            onCheck={(id, checked) => this.completeItem(id, checked)}
          />
          <Footer />
        </section>
      </section>
    )
  }
}
