import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './Root.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/index.tsx';
import Favourites from './pages/Favourites/index.tsx';
import ErrorBoundary from './components/Error/ErrorBoundary.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/movie-app'>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Root />}>
              <Route index element={<Home />} />
              <Route path='favourites' element={<Favourites />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
