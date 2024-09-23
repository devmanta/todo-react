import { useDarkMode } from '../../hooks/useDarkMode';
import styles from './Header.module.css';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode}>
        {darkMode ? <MdDarkMode /> : <MdLightMode />}
      </button>
      <ul className={styles.filters}>
        {filters.map((f, idx) => (
          <li key={idx}>
            <button
              onClick={() => onFilterChange(f)}
              className={`${styles.filter} ${filter === f && styles.selected}`}
            >
              {f}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
