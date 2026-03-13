import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { ROUTES } from './paths';
import { CartPage } from '../../pages/CartPage';
import { CatalogPage } from '../../pages/CatalogPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { ProductPage } from '../../pages/ProductPage';
import { SearchPage } from '../../pages/SearchPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.catalog} element={<CatalogPage />} />
        <Route path={ROUTES.product} element={<ProductPage />} />
        <Route path={ROUTES.favorites} element={<FavoritesPage />} />
        <Route path={ROUTES.cart} element={<CartPage />} />
        <Route path={ROUTES.search} element={<SearchPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}