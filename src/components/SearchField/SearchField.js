import MapPin from 'img/Map-pin';
import styles from './SearchField.module.css';

const SearchField = () => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.locationLabel} htmlFor="location">
        Location
      </label>
      <input
        id="location"
        className={`${styles.inputField} inputField`}
        placeholder="City"
        type="text"
      />
      <MapPin styleValue="inputProp" />
    </div>
  );
};

export default SearchField;
