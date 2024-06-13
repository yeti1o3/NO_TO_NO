import './App.css';
import React from 'react';
import { useState } from 'react';
import Content from './Content';
import img0 from './images/first.gif';
import img1 from './images/angry_turn.jpeg';
import img2 from './images/pokepoke.gif'
import img3 from './images/roundround.gif'
import img4 from './images/puuung-hug.gif';
import img5 from './images/if-only-this-was-us-hug.gif'
import img6 from './images/letmedrive.gif'
import img7 from './images/punsch-boxing.gif'
import img8 from './images/milk-and-mocha-cute.gif'
import img9 from './images/mudoh.gif'
import img10 from './images/cute-cat.gif'
function App() {
  const obj={
    0:{image:img0,text:"always gonna love me 🥺",yes:"always always 😁",no:"Dont even try 😏"},
    1:{image:img1,text:"not gonna look at me like this 🥺",yes:"never never 😁",no:"even more dengerously 🙂"},
    2:{image:img2,text:"let me do this 😁",yes:"yup yup 🤭",no:"try saying no 😏"},
    3:{image:img3,text:"and this too 🤭",yes:"yup yup this too 🤭",no:"nope 🙂"},
    4:{image:img4,text:"74 time a week 😍",yes:"done done 75 time 😙",no:"2 times 😃"},
    5:{image:img5,text:"alway always okk 🥺",yes:"always always 😁",no:"sometime 🙁"},
    6:{image:img6,text:"now comes the danger zone 💀",yes:"ready ready 😎",no:"yeah ready 😫"},
    7:{image:img7,text:"im nazuk nazuk 🥺",yes:"only with 10000000000 kisses 😚",no:"gonna do 😏"},
    8:{image:img8,text:"no way thats allowed 🙂",yes:"not allowed i agree 🫰",no:"hahaha absolutley allowed 😉"},
    9:{image:img9,text:"no tawa policy okk 👉👈",yes:"no tawa 👍",no:"hahaha my main weapone 😏"},
    10:{image:img10,text:"all youres 😁",yes:"all mine all mine ❣️😍",no:"u can have side chick (but gonna die)💀"}




  }
  const[position,setPosition]=useState({top:'47%',left:'58%'});
  const[clickCount,setClickCount]=useState(0);
  function handleMouseEnter()
  {
    const randomTop=Math.floor(Math.random()*(window.innerHeight-50))+'px';
    const randomLeft=Math.floor(Math.random()*(window.innerWidth-150))+'px';
    setPosition({top:randomTop,left:randomLeft})
  }
  function handleYes()
  {
    setClickCount(clickCount+1);
    setPosition({top:'47%',left:'50%'});
  }
  if(clickCount<11)
  {
    return (
      <div className="App">
        <Content img={obj[clickCount].image} text={obj[clickCount].text}/>
        <button className='yes-button'
        onClick={handleYes}>
          {obj[clickCount].yes}
        </button>
        <button
        className='moving-button '
        style={{top:position.top,left:position.left}}
        onMouseEnter={handleMouseEnter}
        > {obj[clickCount].no} </button>
      </div>
    );
  }
  return (
    <div>
      finished
    </div>
  )

}

export default App;
