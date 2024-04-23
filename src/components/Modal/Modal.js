import styles from './Modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
