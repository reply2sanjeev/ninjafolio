import React from 'react';
import './App.css';
import Picture from './components/Loader/HomeNinja.gif'
const Loading = () => {
  return (
    <div className="hello">
      <img src={Picture}/>
    </div>
  );
}

export default Loading;
