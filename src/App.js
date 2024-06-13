import './App.css';
import React from 'react';
import { useState } from 'react';
import Content from './Content';
import img0 from './images/first.gif';
import img1 from './images/angry_turn.jpeg';
import img2 from './images/9d8e81eaee48212903d2c60526001f0b.gif'
import img3 from './images/roundround.gif'
import img4 from './images/puuung-hug.gif';
import img5 from './images/if-only-this-was-us-hug.gif'
import img6 from './images/letmedrive.gif'
import img7 from './images/punsch-boxing.gif'
import img8 from './images/milk-and-mocha-cute.gif'
import img9 from './images/mudoh.gif'
import img10 from './images/cute-cat.gif'
import img11 from './images/icegif-583.gif'
import LastPage from './LastPage';
function App() {
  const obj={
    0:{image:img0,text:"always gonna love me 🥺",yes:"always always 😁",no:"Dont even try to find no 😏",b:true},
    1:{image:img1,text:"not gonna look at me like this 🥺",yes:"never never 😁",no:"even more dengerously 🙂",b:true},
    2:{image:img2,text:"let me do this 😁",yes:"yup yup 🤭",no:"try saying no 😏",b:true},
    3:{image:img3,text:"and this too 🤭",yes:"yup yup this too 🤭",no:"nope 🙂",b:true},
    4:{image:img4,text:"74 time a week 😍",yes:"done done 75 time 😙",no:"2 times 😃",b:true},
    5:{image:img5,text:"alway always okk 🥺",yes:"always always 😁",no:"sometime 🙁",b:true},
    6:{image:img6,text:"now comes the danger zone 💀",yes:"ready ready 😎",no:"yeah ready 😫",b:false},
    7:{image:img7,text:"im nazuk nazuk 🥺",yes:"only with 10000000000 kisses 😚",no:"gonna do 😏",b:false},
    8:{image:img8,text:" ghussa fir bhi thik tha but ye , no way thats allowed 🙂",yes:"not allowed i agree 🫰",no:"hahaha absolutley allowed 😉",b:false},
    9:{image:img9,text:" NO nope u cant choose it no tawa policy okk 👉👈 i know u gonna choose don't yaa",yes:"no tawa 👍",no:"hahaha my main weapone 😏",b:false},
    10:{image:img10,text:"all youres 😁",yes:"all mine all mine ❣️😍",no:"u can have side chick (but gonna die)💀",b:false},
    11:{image:img11,text:"will u be my girlfriend i love you ❤️",yes:"yes yes yes",no:"no no no",b:false }
}
  const[position,setPosition]=useState({top:'50%',left:'58%'});
  const[clickCount,setClickCount]=useState(0);
  const[nope,setNope]=useState("")
  
  function handleMouseEnter()
  {
    if(clickCount===11)
      {
        setNope("yes yes yes");
      }
    console.log("not working")
    const randomTop=Math.floor(Math.random()*(window.innerHeight-50))+'px';
    const randomLeft=Math.floor(Math.random()*(window.innerWidth-150))+'px';
    setPosition({top:randomTop,left:randomLeft})
    
  }
  function handleMouseLeave()
  {
    setNope("");
  }
  function handleYes()
  {
    setClickCount(clickCount+1);
    setPosition({top:'47%',left:'50%'});
  }
  function handleNO()
  {
    setClickCount(clickCount+1);
  }
  if(clickCount<12)
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
        style={obj[clickCount].b?{top:position.top,left:position.left}:{top:'47%',left:'49%'}}
        onClick={handleNO}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        > {nope || obj[clickCount].no} </button>
      </div>
    );
  }
  return (
    <LastPage/>
  )

}

export default App;
