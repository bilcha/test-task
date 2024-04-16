import RatingIcon from 'img/FavoriteIcon';
import styles from './CatalogCard.module.css';

const CatalogCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrapper}>
        <img className={styles.cardImg} alt="Camper" />
        {/*  src="${item.imgURL}" alt="${item.name}" */}
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.cardHeader}>
          <h1>Mavericks</h1>
          <div className={styles.cardHeaderPrice}>
            <p className={styles.price}>&euro; 80000</p>
            <RatingIcon />
          </div>
        </div>
        <p>Rating</p>
        <p>Description</p>
        <div>PROPS</div>
        <button className={styles.cardBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CatalogCard;
