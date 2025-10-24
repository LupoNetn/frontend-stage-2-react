import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedLayout from './components/ProtectedLayout';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import TicketsDetail from './pages/TicketsDetail';

const App = () => {
  const router = createBrowserRouter([
    { 
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'auth/login', element: <Login /> },
        { path: 'auth/signup', element: <Signup /> },
      ],
    },
    {
      path: '/app',
      element: <ProtectedLayout />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'tickets', element: <Tickets /> },         
        { path: 'tickets/:id', element: <TicketsDetail /> } 
      ],
    },
    { path: '*', element: <div>404 Not Found</div> },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
