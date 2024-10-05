import React from 'react'

const Task = ({ name, state, date }) => {
  return (
    <li className={state}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{name}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {state === 'editing' ? <input type="text" className="edit" value={name} /> : <></>}
    </li>
  )
}

export default Task