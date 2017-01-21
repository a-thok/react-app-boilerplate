import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as ctns from './containers';

const routes = (
  <Route path="/" component={ctns.App}>
    <IndexRoute component={ctns.TodoList} />
    <Route path="todolist" component={ctns.TodoList} />
    <Route path="addtodo" component={ctns.AddTodo} />
  </Route>
);

export default routes;
