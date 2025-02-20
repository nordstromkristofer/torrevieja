import React from 'react';

import './/Calendar.css';
import Header from '../header/header'
import BookingCalendar from './BookingCalendar/BookingCalendar';

function Calendar() {
  return (
    <div className="Calendar">
      <div className='filler'></div>
      <Header />
      <BookingCalendar />
    </div>
  );
}

export default Calendar;
