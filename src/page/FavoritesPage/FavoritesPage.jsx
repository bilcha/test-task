import Favorite from 'components/Favorite/Favorite';
import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Favorite />
    </div>
  );
};

export default FavoritesPage;
