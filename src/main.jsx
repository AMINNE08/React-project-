import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from '../MainLayout';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/services/Services';
import LandingPage from './pages/landing_page/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path :"home",
        element :<LandingPage></LandingPage>,
      },
      {
        path :"about",
        element :<AboutUs></AboutUs>,
      },
      {
        path :"services",
        element :<Services></Services>,
      }

    ]
  },
]);


   



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
