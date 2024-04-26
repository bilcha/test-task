import styles from './SearchForm.module.css';
import SearchField from 'components/SearchField/SearchField';
import VehicleType from 'components/VehicleType/VehicleType';
import VehicleEquipment from 'components/VehicleEquipment/VehicleEquipment';
import Button from 'components/Button/Button';

const SearchForm = () => {
  const searchBtnHandler = e => {
    e.preventDefault();
  };
  return (
    <form className={styles.searchForm} onSubmit={searchBtnHandler}>
      <SearchField />
      <p className={styles.filtersLabel}>Filters</p>
      <h2 className={styles.searchHeader}>Vehicle equipment</h2>
      <VehicleEquipment />

      <h2 className={styles.searchHeader}>Vehicle type</h2>
      <VehicleType />
      <Button text={'Search'}></Button>
    </form>
  );
};

export default SearchForm;
