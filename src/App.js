import './App.css';
import React from 'react';
import { useState } from 'react';
import img from './gaalpookie.gif';

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
      <div className='image'>
        <img src={img} alt='gaal-pookie'/>
      </div>
      <div className='text'>
        You love me naa 🥺
      </div>
      <button className='yes-button'>
        YUP 😁
      </button>
      <button
      className='moving-button '
      style={{top:position.top,left:position.left}}
      onMouseEnter={handleMouseEnter}
      > NO 😱 </button>
    </div>
  );
}

export default App;
