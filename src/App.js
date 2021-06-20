import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const t=new Date();
  const [time,setTime]=useState(t.toString());


  setTimeout(()=>{
    setTime(new Date().toString());
  },1000)

  return (
    <div className="App">
      <Header  value={time}/>
    </div>
  );
}

export default App;
