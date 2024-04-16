import styles from './EquipmentCheckbox.module.css';

const EquipmentCheckbox = ({ iconType, equipment }) => {
  return (
    <>
      <input
        type="checkbox"
        name="equipmentType"
        id={equipment}
        className={styles.equipmentType}
        value={equipment}
      />
      <label htmlFor={equipment} className={styles.label}>
        {iconType}
        <span>{equipment}</span>
      </label>
    </>
  );
};

export default EquipmentCheckbox;
