import React from 'react';

import './/Calendar.css';
import Header from '../header/header'
import BookingCalendar from './BookingCalendar/BookingCalendar';

function Calendar() {
  return (
    <div className="Calendar">
      <div className='filler'></div>
      <Header />
      <div className='calendarwrapper'>      <BookingCalendar /></div>

    </div>
  );
}

export default Calendar;
