import { createReducer, makeActionCreator, ajax } from '../../utils';
import * as actions from './requests';
import api from '../../api';

// const FETCH = 'TODOS/FETCH';
const RECEIVE = 'TODOS/RECEIVE';
const ADD = 'TODOS/ADD';
const TOGGLE = 'TODOS/CHECK';
const REMOVE = 'TODOS/REMOVE';

export default createReducer([], {
  [RECEIVE]: (state, action) => (
    [...state, ...action.payload]
  ),

  [ADD]: (state, action) => (
    [...state, action.payload]
  ),

  [TOGGLE]: (state, action) => (
    state.map((todo) => {
      if (todo.time === action.payload) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  ),

  [REMOVE]: (state, action) => (
    state.filter(todo => todo.time !== action.payload)
  ),
});

export const receiveTodos = makeActionCreator(RECEIVE);

export const addTodo = makeActionCreator(ADD);

export const toggleTodo = makeActionCreator(TOGGLE);

export const removeTodo = makeActionCreator(REMOVE);

// 使用async函数控制异步流程
// 异步action里必须派发request的相关事件
// 通过return关键字显式地结束异步action
export const fetchTodos = () => async (dispatch) => {
  dispatch(actions.startRequest());

  // 在async函数内使用try...catch捕获错误
  try {
    // 应该把api写入一个单独的文件里，便于管理，这里只负责引用
    const data = await ajax.get(api.getTodos);
    if (data.success) {
      dispatch(receiveTodos(data.result));

      return dispatch(actions.successRequest());
    }
  } catch (err) {
    console.log(err);
  }

  return dispatch(actions.failRequest());
};
