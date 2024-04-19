import FavoriteIcon from 'img/FavoriteIcon';
import styles from './CatalogCard.module.css';
import noImage from 'img/no_image.png';
import RatingLocation from 'components/RatingLocation/RatingLocation';
import { useState } from 'react';
import CategoryPin from 'components/CategoryPin/CategoryPin';

const CatalogCard = ({ data }) => {
  const [iconStyle, setIconStyle] = useState('defaultStyle');
  const addToFavoriteHandler = e => {
    debugger;
    setIconStyle(prev =>
      prev === 'defaultStyle' ? 'selectedStyle' : 'defaultStyle'
    );
  };
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

            <button className={styles.favIcon} onClick={addToFavoriteHandler}>
              <FavoriteIcon styleValue={iconStyle} />
            </button>
          </div>
        </div>
        <RatingLocation data={data} />
        <p className={styles.cardDescription}>{data.description}</p>
        <div className={styles.categoryPinsWrapper}>
          {data.details &&
            Object.keys(data.details).map((key, val) => {
              if (val > 0) {
                return <CategoryPin name={key} quantity={val} key={key} />;
              }
            })}
        </div>
        <button className={styles.cardBtn}>Show more</button>
      </div>
    </div>
  );
};

export default CatalogCard;
