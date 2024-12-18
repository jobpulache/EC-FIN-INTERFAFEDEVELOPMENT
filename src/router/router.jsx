import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { productsLoader } from '../services/loaders/productsLoader';
import FormNewProduct from '../components/FormNewProduct';
import newProductAction from '../services/actions/newProductAction';
import ProductDetails from '../components/ProductDetails';
import { productDetailsLoader } from '../services/loaders/productDetailsLoader';
import Products from '../pages/Products';
import Customers from '../pages/Customers';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />,
        loader: productsLoader,
        children: [
          { path: '/products/create-product', element: <FormNewProduct />, action: newProductAction },
          { path: '/products/:id', element: <ProductDetails />, loader: productDetailsLoader}
        ],
      },
      {
        path: '/customers',
        element: <Customers />
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: <NotFound />
  }
]);