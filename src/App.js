import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';


import NavBar from './components/nav/Navi';
import Err404 from './components/404';
import Introduction from './components/main/Introduction'
import About from './components/main/About'
import ContactMe from './components/main/ContactMe'
import Skills from './components/main/Skills'
import Projects from './components/project/Projects.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/Introduction',
//     element: <Introduction/>
//   },
//   {
//     path: '*',
//     element: <Err404/>
//   },
//   {
//     path: '/AboutMe',
//     element: <About/>
//   },
//   {
//     path: '/Skills',
//     element: <Skills/>
//   },
//   {
//     path: '/Portfolio',
//     element: <Projects/>
//   },
//   {
//     path: '/Contact',
//     element: <ContactMe/>
//   }
// ])

function App() {
  return (
    <div>
      <NavBar />
      <div className='App App-header'>
        <main>
          {/* <RouterProvider router={router} /> */}
          <Introduction/>
          <About/>
          <Skills/>
          <Projects/>
          <ContactMe/>
        </main>
      </div>
    </div>
  );
}

export default App;
