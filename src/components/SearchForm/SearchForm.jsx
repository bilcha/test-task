import styles from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <label htmlFor="location">Location</label>
      <input
        id="location"
        className={styles.inputField}
        placeholder="City"
        type="text"
      />

      <h2>Vehicle equipment</h2>
      <h2>Vehicle type</h2>
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default SearchForm;
