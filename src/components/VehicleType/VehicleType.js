import VehicleTypeItem from 'components/VehicleTypeItem/VehicleTypeItem.js';
import VanIcon from 'components/VehicleTypeIcons/VanIcon.js';
import AlcoveIcon from 'components/VehicleTypeIcons/AlcoveIcon.js';
import FullyInegratedVanIcon from 'components/VehicleTypeIcons/FullyInegratedVanIcon';
import styles from './VehicleType.module.css';

const VehicleType = () => {
  return (
    <div className={styles.radioWrapper}>
      <VehicleTypeItem iconType={<VanIcon />} type="Van" key="van" />
      <VehicleTypeItem
        iconType={<FullyInegratedVanIcon />}
        type="Fully Integrated"
        key="camper"
      />
      <VehicleTypeItem iconType={<AlcoveIcon />} type="Alcove" key="alcove" />
    </div>
  );
};

export default VehicleType;
