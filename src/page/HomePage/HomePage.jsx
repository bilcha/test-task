import SearchForm from 'components/SearchForm/SearchForm';
import styles from './HomePage.module.css';
import Catalog from 'components/Catalog/Catalog';

const HomePage = () => {
  return (
    <div className={styles.flexWrapper}>
      <SearchForm />
      <Catalog />
    </div>
  );
};

export default HomePage;
