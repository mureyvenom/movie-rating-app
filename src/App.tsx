import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import MovieDetails from './pages/movie-details';

const Homepage = lazy(() => import('./pages/homepage'));

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
