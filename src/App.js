import './App.css';
import Main from './components/Main'
import Projects from './components/project/Projects';
import NavBar from './components/nav/Navi';

function App() {
  return (
    <div>
      <NavBar />
      <div className='App App-header'>
        <Main/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
