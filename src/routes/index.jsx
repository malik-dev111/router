import {createBrowserRouter} from 'react-router-dom'
import AboutPage from "../pages/AboutPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from '../pages/ErrorPage'
import SigupPage from '../pages/SigupPage'
import BlogsPage from '../pages/BlogsPage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  
  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path:"/sigup",
    element:<SigupPage/>,
  },
  {
    path:"/blog",
    element:<BlogsPage/>,
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
]);