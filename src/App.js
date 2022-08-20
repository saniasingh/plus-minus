import React, { useState } from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';

function App() {
 const [count, setCount] = useState(0);

function Increase() {
   setCount(count + 1);
};

function Decrease() {
  setCount(count - 1);
};


return (	
  <div className='App'>
    <h1>{count}</h1>
 <button type="button" className="btn btn-warning btn-lg btn-block" onClick={Increase} >➕</button>
 <button type="button" className="btn btn-warning btn-lg btn-block" onClick={Decrease} >➖</button>

  </div>
);
}

export default App;
