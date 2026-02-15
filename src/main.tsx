import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from './pages/HomePage/HomePage.tsx';
import TimestampPage from './pages/TimestampPage/TimestampPage.tsx';
import JsonPage from './pages/JsonPage/JsonPage.tsx';
import App from './App.tsx';
import { PagesPath } from './consts/pages-path.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: PagesPath.home,
      element: <HomePage />,
      id: 'home',
    }, {
      path: PagesPath.timestamp,
      element: <TimestampPage />,
      id: 'timestamp'
    }, {
      path: PagesPath.json,
      element: <JsonPage />,
      id: 'json'
    }]
  },
]);

createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
 
)
