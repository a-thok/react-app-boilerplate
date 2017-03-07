import React, { PureComponent, PropTypes } from 'react';
import TodoItem from './TodoItem';
import style from './todoList.css';

// 优先继承PureComponent，这样的组件性能更好
class TodoList extends PureComponent {
  // 详细、正确地定义propTypes
  // 这能帮助捕获简单的错误，且能一眼清晰地看出此组件所接收的全部props（包括actions）
  static propTypes = {
    requests: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  }

  get isEmpty() {
    const { requests, todos } = this.props;
    return requests <= 0 && todos.length <= 0;
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={this.isEmpty ? style.msg : style.msgHidden}>暂无条目</div>
        <ul className={style.list}>
          {this.props.todos.map(todo => (
            // 使用独一无二且恒常的值作为key，避免使用index，除非确实没有其它合适的值可用
            <TodoItem
              key={todo.time} {...todo}
              toggleTodo={this.props.toggleTodo}
              removeTodo={this.props.removeTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// 在文件的最后一行导出组件
export default TodoList;
