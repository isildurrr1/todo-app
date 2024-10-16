import React, { Component } from 'react'
import { formatDistanceStrict } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends Component {
  static defaultProps = {
    name: '',
    state: undefined,
    editing: false,
    date: {},
    id: undefined,
    min: 0,
    sec: 0,
    onEdit: () => {},
    onSaveEdit: () => {},
    onDeleted: () => {},
    onCheck: () => {},
  }

  render() {
    const { name, state, editing, date, id, min, sec, onEdit, onSaveEdit, onDeleted, onCheck } = this.props
    return (
      <li className={`${state} ${editing ? 'editing' : ''}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onChange={(e) => onCheck(id, e.target.checked)}
            defaultChecked={state === 'completed'}
          />
          <label>
            <span className="title">{name}</span>
            {min !== '' || sec !== '' ? (
              <span className="description">
                <button className="icon icon-play" />
                <button className="icon icon-pause" />
                {`${min === '' ? 0 : min}:${sec === '' ? 0 : sec}`}
              </span>
            ) : (
              <></>
            )}
            <span className="description">{`created ${formatDistanceStrict(new Date(), date)} ago`}</span>
          </label>
          <button className="icon icon-edit" onClick={() => onEdit(id, true)}></button>
          <button className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
        </div>
        {editing ? (
          <input
            type="text"
            className="edit"
            defaultValue={name}
            autoFocus
            onBlur={() => onEdit(id, false)}
            onKeyDown={(e) => onSaveEdit(id, e)}
          />
        ) : (
          <></>
        )}
      </li>
    )
  }
}

Task.propTypes = {
  name: PropTypes.string,
  state: PropTypes.string,
  editing: PropTypes.bool,
  date: PropTypes.object,
  id: PropTypes.number,
  onEdit: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onDeleted: PropTypes.func,
  onCheck: PropTypes.func,
}
