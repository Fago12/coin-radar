import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import {
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  Hompage,
  News,
} from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Hompage />} />
      <Route path='cryptocurrencies' element={<Cryptocurrencies />} />
      <Route path='exchanges' element={<Exchanges />} />
      <Route path='crypto/:coinId' element={<CryptoDetails />} />
      <Route path='news' element={<News />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
