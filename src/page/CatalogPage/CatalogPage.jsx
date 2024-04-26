import Catalog from 'components/Catalog/Catalog';
import styles from './CatalogPage.module.css';
import SearchForm from 'components/SearchForm/SearchForm';

const CatalogPage = () => {
  return (
    <div className={styles.flexWrapper}>
      <SearchForm />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
