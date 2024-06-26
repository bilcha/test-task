import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navLink}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
