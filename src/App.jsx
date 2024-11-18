
import './App.css'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import ServicePage from './pages/Service';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <ServicePage />,
    },
    {
      path: "/portfolio",
      element: <PortfolioPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);
  return (
    <div >
    <RouterProvider router={router} />

    </div>
  )
}

export default App
