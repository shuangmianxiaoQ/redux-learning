import React from 'react';
import { Input, Button } from 'antd';
import TodoItem from './TodoItem';

const TodoListUI = ({ inputValue, onInputChange, handleBtnClick }) => (
  <div style={{ margin: 15 }}>
    <Input
      value={inputValue}
      placeholder="Todo Info"
      style={{ width: '20%', marginRight: 15 }}
      onChange={onInputChange}
    />
    <Button type="primary" onClick={handleBtnClick}>
      提交
    </Button>
    <TodoItem />
  </div>
);

export default TodoListUI;
