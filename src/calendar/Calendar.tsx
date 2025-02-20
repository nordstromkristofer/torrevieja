import React from 'react';

import './/Calendar.css';
import Header from '../header/header'
import CalendarObject from './calendarobject/Calendar';

function Calendar() {
  return (
    <div className="Calendar">
      <div className='filler'></div>
      <Header />
      <CalendarObject />
    </div>
  );
}

export default Calendar;
