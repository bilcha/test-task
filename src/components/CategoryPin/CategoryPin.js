import styles from './CategoryPin.module.css';

import { ReactComponent as Logo } from '../../img/test.svg';

const CategoryPin = ({ name, quantity }) => {
  return (
    <div className={styles.pinWrapper}>
      <Logo />
      {quantity > 1 && <p>{quantity}</p>}
      <p>{name}</p>
    </div>
  );
};

export default CategoryPin;
