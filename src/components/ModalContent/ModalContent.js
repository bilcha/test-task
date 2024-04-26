import { useDispatch, useSelector } from 'react-redux';
import noImage from 'img/no_image.png';
import styles from './ModalContent.module.css';
import { removeSelectedCamper } from 'store/campersData/actionFile';
import { ReactComponent as CloseIcon } from '../../img/svg/closeIcon.svg';
import { selectorSelectedCamp } from 'store/selectors';
import RatingLocation from 'components/RatingLocation/RatingLocation';
import { useState } from 'react';
import BookForm from 'components/BookForm/BookForm';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';

const ModalContent = () => {
  const [activeButton, setActiveButton] = useState(null);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(removeSelectedCamper());
  };
  let selectedCamper = useSelector(selectorSelectedCamp);
  const showDetails = text => {
    setActiveButton(prev => (prev === text ? null : text));
  };

  const getGalleryItems = gallery => {
    if (gallery.length > 0) {
      const galleryLayout = gallery.map((el, index) => (
        <div className={styles.imgWrapper} key={index}>
          <img className={styles.cardImg} src={el} alt="Camper" />
        </div>
      ));
      return galleryLayout;
    } else {
      return (
        <div className={styles.imgWrapper}>
          <img className={styles.cardImg} src={noImage} alt="Placeholder" />
        </div>
      );
    }
  };

  return (
    selectedCamper && (
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.headerWrapper}>
          <h1>{selectedCamper.name}</h1>
          <button className={styles.closeBtn} onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        <RatingLocation data={selectedCamper} />
        <p className={styles.price}>&euro; {selectedCamper.price.toFixed(2)}</p>
        <div className={styles.modalScroll}>
          <div className={styles.galleryWrapper}>
            {getGalleryItems(selectedCamper.gallery)}
          </div>
          <p className={styles.camperDescription}>
            {selectedCamper.description}
          </p>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.modalDetailBtn} ${
                activeButton === 'Features' && styles.activeBtn
              }`}
              onClick={() => showDetails('Features')}
            >
              Features
            </button>
            <button
              className={`${styles.modalDetailBtn} ${
                activeButton === 'Reviews' && styles.activeBtn
              }`}
              onClick={() => showDetails('Reviews')}
            >
              Reviews
            </button>
          </div>
          {activeButton && (
            <div className={styles.detailsWrapper} details={selectedCamper}>
              {activeButton === 'Features' && (
                <Features data={selectedCamper} />
              )}
              {activeButton === 'Reviews' && (
                <Reviews data={selectedCamper.reviews} />
              )}
              <BookForm />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default ModalContent;
