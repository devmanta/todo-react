import { useState } from 'react';
import styles from './AddTodo.module.css';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onCreate }) {
  const [content, setContent] = useState('');

  const handleOnChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim().length) {
      return;
    }

    onCreate({ id: uuidv4(), content, status: 'active' });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={content}
        onChange={handleOnChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
