import React, { PureComponent, PropTypes } from 'react';
import Nav from './Nav';
import style from './app.css';

class App extends PureComponent {
  componentWillMount() {
    // 避免在组件中直接做api请求，以保持组件简洁易读，api请求已放置到action中
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className={style.app}>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};

export default App;
