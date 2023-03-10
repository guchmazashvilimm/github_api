
import React from 'react';
import Profile from './components/Profile';
import "./App.css";
import img from "./G-mark.png";

function App() {

  return (
  <>
  <div className='App'>
    <header className='header'>
      <img src={img} className="g-logo" alt="github-logo"/>
    </header>
    <Profile/>
  </div>
  </>
  )
}
export default App;

