import MainLayout from 'layouts/MainLayout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorSelectedCamp } from 'store/selectors';
import Modal from './Modal/Modal';
import { removeSelectedCamper } from 'store/campersData/actionFile';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const CatalogPage = lazy(() => import('page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('page/FavoritesPage/FavoritesPage'));

const App = () => {
  const selectedCamper = useSelector(selectorSelectedCamp);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedCamper) {
      setIsModalOpen(true);
    }
  }, [selectedCamper]);
  const closePopup = () => {
    setIsModalOpen(false);
    dispatch(removeSelectedCamper());
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />

          <Route path="favorites" element={<FavoritesPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};
export default App;
