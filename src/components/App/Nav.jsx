import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './app.css';

class Nav extends Component {
  static links = [
    { path: '/todoList', name: '待办事项表' },
    { path: '/addtodo', name: '添加事项' },
  ];

  render() {
    return (
      <nav className={style.nav}>
        {Nav.links.map(link => (
          <Link to={link.path} className={style.link} activeClassName="active">{link.name}</Link>
        ))}
      </nav>
    );
  }
}

export default Nav;
