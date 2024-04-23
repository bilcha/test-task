import FavoriteIcon from 'img/FavoriteIcon';
import styles from './CatalogCard.module.css';
import noImage from 'img/no_image.png';
import RatingLocation from 'components/RatingLocation/RatingLocation';
import CategoryPin from 'components/CategoryPin/CategoryPin';
import { useDispatch, useSelector } from 'react-redux';
import { addSelectedCamper } from 'store/campersData/actionFile';
import { addToFavorite, removeFavorite } from 'store/favorite/slice';
import { selectorFavorite } from 'store/selectors';

const CatalogCard = ({ data }) => {
  const dispatch = useDispatch();

  const favorite = useSelector(selectorFavorite);

  const checkIfFavorite = () => {
    const isDatainFav = favorite.some(item => item._id === data._id);
    return isDatainFav ? 'selectedStyle' : 'defaultStyle';
  };
  const handleSelectCamper = data => {
    dispatch(addSelectedCamper(data));
  };

  const favoriteDataHandler = data => {
    if (favorite.includes(data)) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <div className={styles.card} id={data._id}>
      <div className={styles.cardImgWrapper}>
        {data.gallery && data.gallery.length > 0 ? (
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

            <button
              className={styles.favIcon}
              onClick={() => favoriteDataHandler(data)}
            >
              <FavoriteIcon styleValue={checkIfFavorite()} />
            </button>
          </div>
        </div>
        <RatingLocation data={data} />
        <p className={styles.cardDescription}>{data.description}</p>
        <div className={styles.categoryPinsWrapper}>
          {Object.keys(data.details).map((key, val) => {
            let componentData = null;
            if (val > 0) {
              componentData = (
                <CategoryPin nameData={key} quantity={val} key={key} />
              );
            }
            return componentData;
          })}
        </div>
        <button
          className={styles.cardBtn}
          onClick={() => handleSelectCamper(data)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CatalogCard;
