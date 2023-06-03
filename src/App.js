import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='blackContainer'>
     <h1 className='heading'>BrightLine</h1>
     <h1 className='subheading'>THE DIGITAL<br/> POWER OF<br/> ADVERTISING IS<br/>
      IN YOUR HANDS</h1>
     <h1 className='paragraph'>We create memorable and compelling<br/>
      websites that help our clients stand
      out in<br/> their industry. Our conceptual approach<br/>
       allows us to create unique
      solutions that<br/> meet the needs and goals of each client.
     </h1>
     <button id='btn1'>Start Advertising Now</button>
      </div>
      <div className='div2'>
      <nav className='nav-bar'>
      <button id='btn2'>Hello&#128075;</button>
      <a>Services</a>
      <a>Cases</a>
      <a>Team</a>
      <a>Contacts</a>
       <div id='tilted'>
        <div>
        <h1 id='top-left'>YOUR CONVERSION</h1>
        <h1 id='top-right'>BrightLine</h1>
        </div>
        
        <div id='span1'>We do not promise this figure,<br/> but we promise you 30%</div>
        <img src={require('./line-chart.png')} className='pic'/>
        <div id='span1'>+99,9%</div>
       </div>
    </nav>
      </div>
    </div>

    
  );
}

export default App;
