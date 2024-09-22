import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header className={styles.header}>
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
