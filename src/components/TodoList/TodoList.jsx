import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '마늘이랑 놀기',
      status: 'active',
    },
    {
      id: 2,
      content: '마늘이랑 산책하기',
      status: 'active',
    },
  ]);

  const onCreate = (newTodo) => {
    newTodo.content = newTodo.content.trim();
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </section>
      <AddTodo onCreate={onCreate} />
    </>
  );
}
