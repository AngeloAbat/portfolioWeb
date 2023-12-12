import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './public/css/style.css'
import './public/css/animation.css'

import reportWebVitals from './reportWebVitals';

import SimpleClient from './public/simple';
import Err404 from './public/Err404'
import Resume from './public/sections/resume'; 
// import Private from './private/Private';
// import Tables from './private/sections/tables';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Err404/>
  },
  {
    path: '/',
    element: <SimpleClient/>
  },
  {
    path: '/resume',
    element: <Resume/>
  },
  // {
  //   path: '/homeworks',
  //   element: <Private/>
  // },
  // {
  //   path: '/homeworks/tables',
  //   element: <Tables/>
  // }
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
