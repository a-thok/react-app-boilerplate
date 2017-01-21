import React from 'react';
import { browserHistory } from 'react-router';
import style from './addTodo.css';

class AddTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  // 除constructor、生命周期方法以及getter、setter外，组件上的其它方法应同意使用箭头函数定义
  // 使用箭头函数比显式地调用bind更简洁
  // 所有方法强制使用箭头函数定义，即所有方法强制绑定this，以避免因因遗忘绑定而出错
  changeContent = event => this.setState({
    content: event.target.value,
  })

  submit = (event) => {
    event.preventDefault();
    const { content } = this.state;

    this.setState({
      content: '',
    });

    this.props.addTodo({
      content,
      time: Date.now(),
      completed: false,
    });

    browserHistory.push('/todolist');
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.submit}>
        <input
          className={style.input} type="text" value={this.state.content}
          onChange={this.changeContent}
        />
        <button className={style.button}>提交</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: React.PropTypes.func.isRequired,
};

export default AddTodo;
