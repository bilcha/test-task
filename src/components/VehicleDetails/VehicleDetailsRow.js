import styles from './VehicleDetails.module.css';

const VehicleDetailsRow = ({ name, data }) => {
  return (
    <div className={styles.rowWrap}>
      <p>{name}</p>
      <p>{data}</p>
    </div>
  );
};

export default VehicleDetailsRow;
