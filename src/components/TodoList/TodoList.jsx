import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 123,
      content: '마늘이랑 놀기',
      status: 'active',
    },
    {
      id: 456,
      content: '마늘이랑 산책하기',
      status: 'active',
    },
  ]);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}
