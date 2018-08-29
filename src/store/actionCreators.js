// import axios from 'axios';
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST,
  GET_INIT_LIST
} from './actionTypes';

export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: INIT_LIST,
  data
});

// 利用redux-thunk中间件，将异步请求或业务放在actionCreators中管理，也便于自动化测试
/* export const getTodoList = () => {
  return dispatch => {
    axios
      .get('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(res => {
        const data = res.data.map(item => item.title);
        const action = initListAction(data);
        dispatch(action);
      });
  };
}; */

export const getInitListAction = data => ({
  type: GET_INIT_LIST
});
