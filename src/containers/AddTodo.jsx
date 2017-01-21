import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddTodo } from '../components';
import { addTodo } from '../redux/modules/todos';

const AddTodoContainer = connect(
  null,
  dispatch => bindActionCreators({ addTodo }, dispatch),
)(AddTodo);

export default AddTodoContainer;
