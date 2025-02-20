import React from 'react';
import pic from "./pics/cl_sign_fasad_01_2015.webp"
import Header from './header/header';

import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className='filler'></div>

      <Header />
      {/*       <div className="Home-header">
        <div className='logocontainer'>
          <a className='casadelcatarina' href="/">Casa del Catarina</a>

        </div>
        <div className='calendarlink'></div> <a className='calendar' href="/calendar">Bokning via kalender</a>
      </div> */}
      <div className='homewrapper'>
        <div className='pics'> <img src={pic} className='pic'></img></div>
        <div className='maintext'> <h1>Text1</h1> <p>blablablabla</p></div>
      </div>
    </div >
  );
}

export default Home;
