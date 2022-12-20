import React, {useState} from 'react';
import './App.css';
import ChoosePanel from './components/ChoosePanel';
import Header from './components/Header';
import RollDice from './components/RollDice';

function App() {
  const [numberDices, setNumberDices] = useState(1);
  
  return (
    <div className="App">
      <Header />
      <ChoosePanel setNumberDices={setNumberDices}/>
      <RollDice numberDices={numberDices}/>
    </div>
  );
}

export default App;
