import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { CatalogPage } from '../../pages/CatalogPage';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { ProductPage } from '../../pages/ProductPage';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/produto/:slug" element={<ProductPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}