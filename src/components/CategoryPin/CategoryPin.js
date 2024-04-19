import styles from './CategoryPin.module.css';

import { ReactComponent as AC } from '../../img/svg/ac.svg';
import { ReactComponent as Beds } from '../../img/svg/beds.svg';
import { ReactComponent as CD } from '../../img/svg/cd.svg';
import { ReactComponent as Freezer } from '../../img/svg/freezer.svg';
import { ReactComponent as Gas } from '../../img/svg/gas.svg';
import { ReactComponent as Hob } from '../../img/svg/hob.svg';
import { ReactComponent as Kitchen } from '../../img/svg/kitchen.svg';
import { ReactComponent as Microwave } from '../../img/svg/microwave.svg';
import { ReactComponent as Petrol } from '../../img/svg/petrol.svg';
import { ReactComponent as Radio } from '../../img/svg/radio.svg';
import { ReactComponent as Shower } from '../../img/svg/shower.svg';
import { ReactComponent as Toilet } from '../../img/svg/toilet.svg';
import { ReactComponent as TV } from '../../img/svg/tv.svg';
import { ReactComponent as Water } from '../../img/svg/water.svg';

const CategoryPin = ({ nameData, quantity }) => {
  const dataPin = {
    airConditioner: { name: 'AC', component: <AC /> },
    kitchen: { name: 'Kitchen', component: <Kitchen /> },
    beds: { name: 'Beds', component: <Beds /> },
    TV: { name: 'TV', component: <TV /> },
    CD: { name: 'CD', component: <CD /> },
    radio: { name: 'Radio', component: <Radio /> },
    shower: { name: 'Shower', component: <Shower /> },
    toilet: { name: 'Toilet', component: <Toilet /> },
    freezer: { name: 'Freezer', component: <Freezer /> },
    hob: { name: 'Hob', component: <Hob /> },
    microwave: { name: 'Microwave', component: <Microwave /> },
    gas: { name: 'Gas', component: <Gas /> },
    water: { name: 'Water', component: <Water /> },
    petrol: { name: 'Petrol', component: <Petrol /> },
  };

  return (
    <div className={styles.pinWrapper}>
      {dataPin[nameData] && dataPin[nameData].component}
      {quantity > 1 && <p>{quantity}</p>}
      <p>{dataPin[nameData].name}</p>
    </div>
  );
};

export default CategoryPin;
