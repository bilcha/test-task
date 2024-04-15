import MainLayout from 'layouts/MainLayout/MainLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const CatalogPage = lazy(() => import('page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('page/FavoritesPage/FavoritesPage'));

const App = () => {
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
    </>
  );
};
export default App;
