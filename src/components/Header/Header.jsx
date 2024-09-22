import styles from './Header.module.css';

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((f, idx) => (
          <li key={idx} onClick={() => onFilterChange(f)}>
            {f}
          </li>
        ))}
      </ul>
    </header>
  );
}
