import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { App } from '../components';
import { fetchTodos } from '../redux/modules/todos';


const AppContainer = connect(
  null,
  dispatch => bindActionCreators({ fetchTodos }, dispatch),
)(App);

export default AppContainer;
