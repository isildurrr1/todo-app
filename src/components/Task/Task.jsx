import React, { Component } from 'react'

export default class Task extends Component {
  render() {
    const { name, state, date, id, onDeleted, onCheck } = this.props
    return (
      <li className={state}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={(e) => onCheck(id, e.target.checked)}
            defaultChecked={state === 'completed'}
          />
          <label>
            <span className="description">{name}</span>
            <span className="created">{date}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
        </div>
        {state === 'editing' ? <input type="text" className="edit" value={name} /> : <></>}
      </li>
    )
  }
}
