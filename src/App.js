import React from 'react';

export default function App() {
  return (
    <div>
        <h1>App Test Component</h1>
        <div>Current Date:</div>
        <div>{ new Date().toDateString() }</div>
    </div>
  )
};
