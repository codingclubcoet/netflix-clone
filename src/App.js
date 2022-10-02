import './App.css';
import React from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals, action, comedy, popular} from './urls';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix originals'/>
        <RowPost url={popular} title='Popular movies' isSmall/>
        <RowPost url={action} title='Action movies' isSmall/>
        <RowPost url={comedy} title='Comedy movies' isSmall/>
    </div>
  );
}

export default App;
