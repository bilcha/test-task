import SearchForm from 'components/SearchForm/SearchForm';
import styles from './HomePage.module.css';
import Catalog from 'components/Catalog/Catalog';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCamperDataThunk } from 'store/campersData/thunk';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamperDataThunk(1));
  }, [dispatch]);
  return (
    <div className={styles.flexWrapper}>
      <SearchForm />
      <Catalog />
    </div>
  );
};

export default HomePage;
