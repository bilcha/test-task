import styles from './VehicleEquipment.module.css';
import EquipmentCheckbox from 'components/EquipmentCheckbox/EquipmentCheckbox';
import TvIcon from 'components/Icons/TvIcon.js';
import ShowerIcon from 'components/Icons/ShowerIcon';
import KitchenIcon from 'components/Icons/KitchenIcon';
import AutomaticIcon from 'components/Icons/AutomaticIcon';
import ACIcon from 'components/Icons/ACIcon';

const VehicleEquipment = () => {
  return (
    <div className={styles.equipmentWrapper}>
      <EquipmentCheckbox iconType={<ACIcon />} equipment="AC" />
      <EquipmentCheckbox iconType={<AutomaticIcon />} equipment="Automatic" />
      <EquipmentCheckbox iconType={<KitchenIcon />} equipment="Kitchen" />
      <EquipmentCheckbox iconType={<TvIcon />} equipment="TV" />
      <EquipmentCheckbox iconType={<ShowerIcon />} equipment="Shower/WC" />
    </div>
  );
};

export default VehicleEquipment;
