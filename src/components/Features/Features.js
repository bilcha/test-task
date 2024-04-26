import VehicleFeatures from 'components/VehicleFeatures/VehicleFeatures';
import styles from './Features.module.css';
import VehicleDetails from 'components/VehicleDetails/VehicleDetails';

const Features = ({ data }) => {
  return (
    <div className={styles.featuresWrapper}>
      <VehicleFeatures data={data.details} />
      <VehicleDetails data={data} />
    </div>
  );
};

export default Features;
