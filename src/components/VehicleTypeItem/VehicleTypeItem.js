import styles from './VehicleTypeItem.module.css';

const VehicleTypeItem = ({ iconType, type }) => {
  return (
    <>
      <input
        type="radio"
        name="camperType"
        id={type}
        className={styles.vehicleType}
        value={type}
      />
      <label htmlFor={type} className={styles.label}>
        {iconType}
        <span>{type}</span>
      </label>
    </>
  );
};

export default VehicleTypeItem;
