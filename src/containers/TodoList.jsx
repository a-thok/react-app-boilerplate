import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { TodoList } from '../components';
import { toggleTodo, removeTodo } from '../redux/modules/todos';

const getRequests = state => state.requests;
const getTodos = state => state.todos;

const selector = createSelector([getRequests, getTodos], (requests, todos) => ({
  requests,
  todos,
}));

const TodoListContainer = connect(
  selector,
  dispatch => bindActionCreators({ toggleTodo, removeTodo }, dispatch),
)(TodoList);

export default TodoListContainer;
