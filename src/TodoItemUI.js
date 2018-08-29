import React from 'react';
import { List, Icon } from 'antd';

const TodoItemUI = ({ list, handleItemDelete }) => (
  <List
    bordered
    dataSource={list}
    renderItem={(item, index) => (
      <List.Item
        actions={[
          <Icon
            type="close"
            onClick={() => {
              handleItemDelete(index);
            }}
          />
        ]}
      >
        {item}
      </List.Item>
    )}
    style={{ marginTop: 15, width: '30%' }}
  />
);

export default TodoItemUI;
