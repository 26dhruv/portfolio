
import './App.css'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/About';
import ServicePage from './pages/Service';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import EditPage from './pages/EditProfile';
import LogInPage from './pages/LogIn';
import SignUpPage from './pages/SignUp';

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
      element: <AboutPage />,
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
    {
      path: "/edit",
      element: <EditPage />,
    },
    {
      path: "/log-in",
      element: <LogInPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
  ]);
  return (
    <div className='bg-white' >
    <RouterProvider router={router} />

    </div>
  )
}

export default App
