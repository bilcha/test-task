import CatalogCard from 'components/CatalogCard/CatalogCard';
import styles from './Favorite.module.css';
import { useSelector } from 'react-redux';
import { selectorFavorite } from 'store/selectors';

const Favorite = () => {
  const favorite = useSelector(selectorFavorite);

  return (
    <div className={styles.favoriteWrapper}>
      {favorite.map(item => (
        <CatalogCard key={item._id} data={item} />
      ))}
    </div>
  );
};

export default Favorite;
