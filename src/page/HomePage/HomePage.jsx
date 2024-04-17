import SearchForm from 'components/SearchForm/SearchForm';
import styles from './HomePage.module.css';
import Catalog from 'components/Catalog/Catalog';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperDataThunk } from 'store/campersData/thunk';
import { selectError, selectIsLoading } from 'store/selectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getCamperDataThunk(1));
  }, [dispatch]);
  return (
    <div className={styles.flexWrapper}>
      <SearchForm />
      {isLoading && <h2>Loading.... </h2>}
      {error && <h2>{error}</h2>}
      {!error && !isLoading && <Catalog />}
    </div>
  );
};

export default HomePage;
