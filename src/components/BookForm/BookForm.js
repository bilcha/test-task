import InputField from 'components/InputField/InputField';
import styles from './BookForm.module.css';
import TextareaField from 'components/TextareaField/TextareaField';
import Button from 'components/Button/Button';

const BookForm = () => {
  const handleButtonClick = e => {
    e.preventDefault();
  };
  return (
    <div className={styles.formWrapper}>
      <div>
        <h2 className={styles.formHeader}>Book your campervan now</h2>
        <p className={styles.formMoto}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={styles.inputsWrap}>
        <InputField placeholder={'Name'} fieldName={'name'} />
        <InputField placeholder={'Email'} fieldName={'email'} />
        <InputField placeholder={'Booking Date'} fieldName={'calendar'} />
        <TextareaField placeholder={'Comment'} fieldName={'comment'} />
      </div>
      <Button text={'Send'} onClick={handleButtonClick}></Button>
    </div>
  );
};

export default BookForm;
