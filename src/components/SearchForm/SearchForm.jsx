import styles from './SearchForm.module.css';
import SearchField from 'components/SearchField/SearchField';
import VehicleType from 'components/VehicleType/VehicleType';
import VehicleEquipment from 'components/VehicleEquipment/VehicleEquipment';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <SearchField />
      <p className={styles.filtersLabel}>Filters</p>
      <h2 className={styles.searchHeader}>Vehicle equipment</h2>
      <VehicleEquipment />

      <h2 className={styles.searchHeader}>Vehicle type</h2>
      <VehicleType />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default SearchForm;
