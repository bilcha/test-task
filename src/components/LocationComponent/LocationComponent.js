import MapPin from 'img/Map-pin';
import styles from './LocationComponent.module.css';

const LocationComponent = ({ localisation }) => {
  return (
    <div className={styles.flexWrapper}>
      <MapPin styleValue="default" />
      <p>{localisation}</p>
    </div>
  );
};

export default LocationComponent;
