import './App.css';
import Navbar from '../src/components/Nvabar/Navbar';
import MintForm from './components/MintForm/MintForm';
import {Routes,Route,NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <div className={'main-container'}>
          <MintForm/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
