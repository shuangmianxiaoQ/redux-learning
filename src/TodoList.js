import React, { Component } from 'react';
// import axios from 'axios';
import TodoListUi from './TodoListUi';
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  // initListAction,
  // getTodoList
  getInitListAction
} from './store/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // getState()方法用于获取store中存储的state
    this.state = store.getState();
    // console.log(this.state);
    // subscribe()用于设置监听函数，一旦state发生变化，就会自动执行该函数
    store.subscribe(this.handleStoreChange);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <TodoListUi
        inputValue={inputValue}
        onInputChange={this.onInputChange}
        handleBtnClick={this.handleBtnClick}
      />
    );
  }

  componentDidMount() {
    /* axios
      .get('https://my-json-server.typicode.com/typicode/demo/posts')
      .then(res => {
        const data = res.data.map(item => item.title);
        const action = initListAction(data);
        store.dispatch(action);
      }); */

    /* const action = getTodoList();
    // console.log(action); // redux-thunk使得action可以返回一个函数
    store.dispatch(action); */

    const action = getInitListAction();
    store.dispatch(action);
  }

  onInputChange = e => {
    // action表示组件发出通知，state将要要发生变化
    const action = getInputChangeAction(e.target.value);
    // dispatch方法可将通知发给store
    store.dispatch(action);
  };

  handleBtnClick = () => {
    const action = getAddItemAction();
    store.dispatch(action);
  };

  handleStoreChange = () => {
    this.setState(() => store.getState());
  };
}

export default TodoList;
