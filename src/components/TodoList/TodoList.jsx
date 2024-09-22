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

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  return (
    <>
      <section>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </ul>
      </section>
      <AddTodo onCreate={onCreate} />
    </>
  );
}
