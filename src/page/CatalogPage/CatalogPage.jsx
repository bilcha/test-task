import Catalog from 'components/Catalog/Catalog';
import styles from './CatalogPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCamperDataThunk } from 'store/campersData/thunk';
import SearchForm from 'components/SearchForm/SearchForm';

const CatalogPage = () => {
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

export default CatalogPage;
