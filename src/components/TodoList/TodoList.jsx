import { useState } from 'react';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  const onCreate = (newTodo) => {
    newTodo.content = newTodo.content.trim();
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
    localStorage.setItem(
      'todos',
      JSON.stringify(todos.filter((todo) => todo.id !== targetId))
    );
  };

  const onUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
    localStorage.setItem(
      'todos',
      JSON.stringify(
        todos.map((todo) => (todo.id === updated.id ? updated : todo))
      )
    );
  };

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filteredTodos.map((todo) => (
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

function getFilteredTodos(todos, filter) {
  if (filter === 'all') {
    return todos;
  }

  return todos.filter((todo) => todo.status === filter);
}
