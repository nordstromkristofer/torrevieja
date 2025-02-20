import React from 'react';
import Header from '../header';
import "./todo.css"




function Todo() {
  return (
    <div className="Todo">
      <div className='filler'></div>
      <Header />
      <div className='todobox'></div>
    </div>
  );
}

export default Todo;