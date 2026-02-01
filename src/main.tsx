import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './assets/pages/Home/Home.tsx';
import Timestamp from './assets/pages/Timestamp/Timestamp.tsx';
import JsonPage from './assets/pages/JsonPage/JsonPage.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      element: <Home />,
    }, {
      path: "timestamp",
      element: <Timestamp />,
    }, {
      path: "json",
      element: <JsonPage />,
    }]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
