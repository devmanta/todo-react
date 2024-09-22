import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, status, content } = todo;
  const handleOnChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? 'completed' : 'active' });
  };

  const handleOnDelete = () => {
    onDelete(id);
  };

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleOnChange}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.content}>
        {content}
      </label>
      <span className={styles.icon}>
        <button onClick={handleOnDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </div>
  );
}
