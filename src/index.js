import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolarSys from './components/solar/mainSolar';

import App from './App';
import Err404 from './components/404';
import reportWebVitals from './reportWebVitals';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  
  {
    path: '/old',
    element: <App/>
  },
  {
    path: '*',
    element: <Err404/>
  },
  {
    path: '/solar',
    element: <SolarSys/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
