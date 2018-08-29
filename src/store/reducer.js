import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

// reducer可以接受state，但绝不能修改state
// Reducer必须是纯函数，给的固定的输入，就一定有固定的输出，而且不会有副作用
export default (state = defaultState, action) => {
  // console.log(state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    // 只有Store能修改自己的内容，所以不能直接在Reducer中修改state
    // 对state先进行深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.inputValue === '') {
      newState.list = [...state.list];
    } else {
      newState.list = [...state.list, state.inputValue];
      newState.inputValue = '';
    }
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
