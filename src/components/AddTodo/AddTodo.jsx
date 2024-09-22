import { useRef, useState } from 'react';
import styles from './AddTodo.module.css';

export default function AddTodo({ onCreate }) {
  const [content, setContent] = useState('');
  let ref = useRef(3);

  const handleOnChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim().length) {
      return;
    }

    onCreate({ id: ref.current++, content, status: 'active' });
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
