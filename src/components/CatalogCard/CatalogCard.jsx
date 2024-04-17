import FavoriteIcon from 'img/FavoriteIcon';
import styles from './CatalogCard.module.css';
import noImage from 'img/no_image.png';
import RatingLocation from 'components/RatingLocation/RatingLocation';

const CatalogCard = ({ data }) => {
  return (
    <div className={styles.card} id={data._id}>
      <div className={styles.cardImgWrapper}>
        {data.gallery.length > 0 ? (
          <img
            className={styles.cardImg}
            src={data.gallery[0]}
            alt={data.form}
          />
        ) : (
          <img className={styles.cardImg} src={noImage} alt="Placeholder" />
        )}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardHeader}>
          <h1>{data.name}</h1>
          <div className={styles.cardHeaderPrice}>
            <p className={styles.price}>&euro; {data.price.toFixed(2)}</p>
            <FavoriteIcon />
          </div>
        </div>
        <RatingLocation data={data} />
        <p className={styles.cardDescription}>{data.description}</p>
        <div>PROPS</div>
        <button className={styles.cardBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CatalogCard;
