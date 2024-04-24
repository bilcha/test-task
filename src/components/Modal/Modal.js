import { useDispatch } from 'react-redux';
import styles from './Modal.module.css';
import { removeSelectedCamper } from 'store/campersData/actionFile';
import { Outlet } from 'react-router-dom';
import ModalContent from 'components/ModalContent/ModalContent';

const Modal = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(removeSelectedCamper());
  };
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <ModalContent />
      <Outlet />
    </div>
  );
};

export default Modal;
