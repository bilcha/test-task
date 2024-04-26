import CatalogCard from 'components/CatalogCard/CatalogCard';
import styles from './Favorite.module.css';
import { useSelector } from 'react-redux';
import { selectorFavorite } from 'store/selectors';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const favorite = useSelector(selectorFavorite);

  return (
    <div className={styles.favoriteWrapper}>
      {favorite.length > 0 ? (
        favorite.map(item => <CatalogCard key={item._id} data={item} />)
      ) : (
        <h2 className={styles.message}>
          Currently you didn't add anything here. Go to
          <Link to={`/catalog`}> Catalog page </Link> to find perfact RV for
          you!
        </h2>
      )}
    </div>
  );
};

export default Favorite;
