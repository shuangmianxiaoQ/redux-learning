import React, { Component } from 'react';
import TodoItemUI from './TodoItemUI';
import store from './store';
import { getDeleteItemAction } from './store/actionCreators';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    const { list } = this.state;
    return <TodoItemUI list={list} handleItemDelete={this.handleItemDelete} />;
  }

  handleItemDelete = index => {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  };

  handleStoreChange = () => {
    this.setState(() => store.getState());
  };
}

export default TodoItem;
