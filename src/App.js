import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styling.css';
import './index.css';
import './App.css';



import NavBar from './components/nav/Navi';
import Introduction from './components/main/Introduction'
import About from './components/main/About'
import ContactMe from './components/main/ContactMe'
import Skills from './components/main/Skills'
import Projects from './components/project/Projects.jsx';


function App() {
  return (
    <div>
      <NavBar />
      <div className='App App-header'>
        <main>
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
