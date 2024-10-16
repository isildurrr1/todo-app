import React, { Component } from 'react'

import Footer from '../Footer/Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

export default class App extends Component {
  state = {
    tasks: [],
    filter: undefined,
  }

  editTask = (id, result) => {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return Object.assign(task, { editing: result })
        }
        return task
      })
      return { tasks: newTasks }
    })
  }

  saveEditedTask = (id, e) => {
    if (e.code === 'Enter' && e.target.value.trim() !== '') {
      this.setState(({ tasks }) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            return Object.assign(task, { name: e.target.value, editing: false })
          }
          return task
        })
        return { tasks: newTasks }
      })
    } else if (e.code === 'Escape') {
      this.editTask(id, false)
    }
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

  onInputSubmit = (formData) => {
    if (formData.task.value.trim() !== '') {
      this.setState(({ tasks }) => {
        const creationDate = new Date()
        const newTask = {
          name: formData.task.value,
          state: undefined,
          editing: false,
          date: creationDate,
          min: Number(formData.min.value),
          sec: Number(formData.sec.value),
          id: Math.floor(Math.random() * 1000),
        }
        formData.reset()
        return tasks.length === 0 ? { tasks: [newTask] } : { tasks: [...tasks, newTask] }
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

  startTimer = async (id) => {
    const minId = setInterval(() => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            if (task.min === 0) {
              clearInterval(minId)
            } else {
              return Object.assign(task, { min: task.min - 0.5 })
            }
          }
          return task
        })
        return { tasks: newTasks }
      })
    }, 60000)
    const secId = setInterval(() => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.map((task) => {
          if (task.id === id) {
            if (task.sec === 0) {
              clearInterval(secId)
            } else {
              return Object.assign(task, { sec: task.sec - 0.5 })
            }
          }
          return task
        })
        return { tasks: newTasks }
      })
    }, 1000)
  }

  // eslint-disable-next-line class-methods-use-this
  stopTimer = (id) => {
    // eslint-disable-next-line no-console
    console.log(id)
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
            onEdit={(id, result) => this.editTask(id, result)}
            onSaveEdit={(id, e) => this.saveEditedTask(id, e)}
            onDeleted={(id) => this.deleteItem(id)}
            onCheck={(id, checked) => this.completeItem(id, checked)}
            onStartTimer={(id) => this.startTimer(id)}
            onStopTimer={(id) => this.stopTimer(id)}
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
