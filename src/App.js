import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  var d = new Date();
var datetext = d.toTimeString();
datetext = datetext.split(' ')[0];
  const [time,setTime]=useState(datetext.toString());


  setTimeout(()=>{
    d = new Date();
datetext = d.toTimeString();
datetext = datetext.split(' ')[0];
    setTime(datetext.toString());
  },1000)

  return (
    <div className="App">
      <Header  value={time}/>
    </div>
  );
}

export default App;
