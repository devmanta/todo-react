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
    <div>
      <input
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{content}</label>
      <button onClick={handleOnDelete}>
        <FaTrashAlt />
      </button>
    </div>
  );
}
