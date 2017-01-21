import React from 'react';
import style from './todoList.css';

function Todo({ time, content, completed, toggleTodo, removeTodo } = {}) {
  return (
    <li className={style.item}>
      <input
        className={`${style.toggle} fa`} type="checkbox" onChange={() => toggleTodo(time)}
      />
      <p className={completed ? style.contentCompleted : style.content}>
        {content}
      </p>
      <button className={style.remove} onClick={() => removeTodo(time)}>
        <i className="fa fa-remove" />
      </button>
    </li>
  );
}

export default Todo;
