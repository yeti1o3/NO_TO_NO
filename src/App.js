import './App.css';
import React from 'react';
import { useState } from 'react';
function App() {
  const[position,setPosition]=useState({top:'50%',left:'50%'});
  function handleMouseEnter()
  {
    const randomTop=Math.floor(Math.random()*(window.innerHeight-50))+'px';
    const randomLeft=Math.floor(Math.random()*(window.innerWidth-150))+'px';
    setPosition({top:randomTop,left:randomLeft})
  }
  return (
    <div className="App">
      <button
      className='moving-button'
      style={{top:position.top,left:position.left}}
      onMouseEnter={handleMouseEnter}
      > NO </button>
    </div>
  );
}

export default App;
