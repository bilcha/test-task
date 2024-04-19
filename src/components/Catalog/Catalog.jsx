import styles from './Catalog.module.css';
import CatalogCard from 'components/CatalogCard/CatalogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperDataThunk } from 'store/campersData/thunk';
import {
  campersData,
  selectError,
  selectIsLoading,
  selectorPage,
} from 'store/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  let currentPage = useSelector(selectorPage);

  const loadMoreHandler = () => {
    // dispatch(handlePageCount());
    dispatch(getCamperDataThunk(currentPage));
  };
  const data = useSelector(campersData);

  return (
    <div className={styles.cardWrapper}>
      {data.map(item => (
        <CatalogCard key={item._id} data={item} />
      ))}
      {isLoading && <h2>Loading.... </h2>}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <button className={styles.buttonStyle} onClick={loadMoreHandler}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Catalog;
