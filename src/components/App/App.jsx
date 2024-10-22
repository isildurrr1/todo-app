import React, { useState } from 'react'

import Footer from '../Footer/Footer'
import TaskList from '../TaskList/TaskList'
import NewTaskForm from '../NewTaskForm/NewTaskForm'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState(undefined)

  const editTask = (id, result) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return Object.assign(task, { editing: result })
      }
      return task
    })
    setTasks(newTasks)
  }

  const saveEditedTask = (id, e) => {
    if (e.code === 'Enter' && e.target.value.trim() !== '') {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return Object.assign(task, { name: e.target.value, editing: false })
        }
        return task
      })
      setTasks(newTasks)
    } else if (e.code === 'Escape') {
      editTask(id, false)
    }
  }

  const onFilterSelect = (newState) => {
    setFilter(newState)
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => task.state !== 'completed'))
  }

  const onInputSubmit = (formData) => {
    if (formData.task.value.trim() !== '') {
      const creationDate = new Date()
      const newTask = {
        name: formData.task.value,
        state: undefined,
        editing: false,
        date: creationDate,
        min: Number(formData.min.value),
        sec: Number(formData.sec.value),
        timerId: undefined,
        id: Math.floor(Math.random() * 1000),
      }
      formData.reset()
      setTasks([...tasks, newTask])
    }
  }

  const deleteItem = (id) => {
    const index = tasks.findIndex((el) => el.id === id)
    const newTasks = tasks.toSpliced(index, 1)
    setTasks(newTasks)
  }

  const completeItem = (id, checked) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        const newState = checked ? { state: 'completed', min: 0, sec: 0 } : { state: undefined }
        return Object.assign(task, newState)
      }
      return task
    })
    setTasks(newTasks)
  }

  const startTimer = (id) => {
    const task = tasks.find((el) => el.id === id)
    if (task && task.timerId === undefined) {
      const intId = setInterval(() => {
        setTasks((prevTasks) => {
          return prevTasks.map((element) => {
            if (element.id === id) {
              let newSec = element.sec - 1
              let newMin = element.min

              if (newSec < 0) {
                newSec = 59
                newMin -= 1
              }

              if (newMin < 0) {
                clearInterval(intId)
                return { ...element, sec: 0, min: 0, timerId: undefined, state: 'completed' }
              }

              return { ...element, sec: newSec, min: newMin, timerId: intId }
            }
            return element
          })
        })
      }, 1000)

      setTasks((prevTasks) =>
        prevTasks.map((element) => {
          if (element.id === id) {
            return { ...element, timerId: intId }
          }
          return element
        })
      )
    }
  }

  const stopTimer = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((element) => {
        if (element.id === id) {
          clearInterval(element.timerId)
          return { ...element, timerId: undefined }
        }
        return element
      })
    )
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onEnterUp={(e) => onInputSubmit(e)} />
      </header>
      <section className="main">
        <TaskList
          data={tasks}
          filterState={filter}
          onEdit={(id, result) => editTask(id, result)}
          onSaveEdit={(id, e) => saveEditedTask(id, e)}
          onDeleted={(id) => deleteItem(id)}
          onCheck={(id, checked) => completeItem(id, checked)}
          onStartTimer={(id) => startTimer(id)}
          onStopTimer={(id) => stopTimer(id)}
        />
        <Footer
          filterState={filter}
          tasksState={tasks}
          onSelect={(newState) => onFilterSelect(newState)}
          onClearClick={() => clearCompleted()}
        />
      </section>
    </section>
  )
}

export default App
