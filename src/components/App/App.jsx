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
    filter: 'all',
  }

  onFilterSelect = (newState) => {
    this.setState(() => {
      return { filter: newState }
    })
  }

  clearCompleted = () => {
    this.setState(({ tasks }) => {
      return { tasks: tasks.filter((task) => task.state !== 'completed') }
    })
  }

  onInputSubmit = (e) => {
    if (e.code === 'Enter' && e.target.value.trim() !== '') {
      this.setState(({ tasks }) => {
        const newTask = {
          name: e.target.value,
          state: undefined,
          date: 'created 5 minutes ago',
          id: Math.floor(Math.random() * 1000),
        }
        e.target.value = ''
        return { tasks: [...tasks, newTask] }
      })
    }
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
          const newState = checked ? { state: 'completed' } : { state: undefined }
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
          <NewTaskForm onEnterUp={(e) => this.onInputSubmit(e)} />
        </header>
        <section className="main">
          <TaskList
            data={this.state.tasks}
            filterState={this.state.filter}
            onDeleted={(id) => this.deleteItem(id)}
            onCheck={(id, checked) => this.completeItem(id, checked)}
          />
          <Footer
            filterState={this.state.filter}
            tasksState={this.state.tasks}
            onSelect={(newState) => this.onFilterSelect(newState)}
            onClearClick={() => this.clearCompleted()}
          />
        </section>
      </section>
    )
  }
}
