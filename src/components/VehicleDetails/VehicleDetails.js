import styles from './VehicleDetails.module.css';
import VehicleDetailsRow from './VehicleDetailsRow';

const VehicleDetails = ({ data }) => {
  return (
    <div>
      <h2 className={styles.header}>Vehicle details</h2>
      <div className={styles.details}>
        {data.form && <VehicleDetailsRow name={'Form'} data={data.form} />}
        {data.length && (
          <VehicleDetailsRow name={'Length'} data={data.length} />
        )}
        {data.width && <VehicleDetailsRow name={'Width'} data={data.width} />}
        {data.height && (
          <VehicleDetailsRow name={'Height'} data={data.height} />
        )}
        {data.tank && <VehicleDetailsRow name={'Tank'} data={data.tank} />}
        {data.consumption && (
          <VehicleDetailsRow name={'Consumption'} data={data.consumption} />
        )}
      </div>
    </div>
  );
};

export default VehicleDetails;
