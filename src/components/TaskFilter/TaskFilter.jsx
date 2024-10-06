import React, { Component } from 'react'

export default class TaskFilter extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    )
  }
}
