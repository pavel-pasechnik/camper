import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Adverts = lazy(() => import('../../pages/Adverts/Adverts.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites.jsx'));
const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Layout = lazy(() => import('../Layout/Layout.jsx'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound.jsx'));

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/adverts' element={<Adverts />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
