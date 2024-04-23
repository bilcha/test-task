import Catalog from 'components/Catalog/Catalog';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div className={styles.catalogPageWrapper}>
      <Catalog />
    </div>
  );
};

export default CatalogPage;
