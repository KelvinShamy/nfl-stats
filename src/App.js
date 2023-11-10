import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div className="font">
        <h1>App Test Component</h1>
        <div>Current Date:</div>
        <div>{ new Date().toDateString() }</div>
    </div>
  )
};
