import React from 'react'
import "./style.css";
export const Header = () => {
  return (
    <div className='header'>
      <div>Home</div>
      <div>
        <input type='text' placeholder='Search'/>
      </div>
    </div>
  );
}
