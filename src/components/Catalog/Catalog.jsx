import styles from './Catalog.module.css';
import CatalogCard from 'components/CatalogCard/CatalogCard';
import { useSelector } from 'react-redux';
import { campersData } from 'store/selectors';

const Catalog = () => {
  const data = useSelector(campersData);
  return (
    <div className={styles.cardWrapper}>
      {data.map(item => (
        <CatalogCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default Catalog;
