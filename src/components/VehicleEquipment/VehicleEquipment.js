import styles from './VehicleEquipment.module.css';
import EquipmentCheckbox from 'components/EquipmentCheckbox/EquipmentCheckbox';
import TvIcon from 'components/EquipmentIcons/TvIcon.js';
import ShowerIcon from 'components/EquipmentIcons/ShowerIcon';
import KitchenIcon from 'components/EquipmentIcons/KitchenIcon';
import AutomaticIcon from 'components/EquipmentIcons/AutomaticIcon';
import ACIcon from 'components/EquipmentIcons/ACIcon';

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
