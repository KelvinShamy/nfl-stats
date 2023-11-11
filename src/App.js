import React from 'react';
import TeamDisplayContainer from './components/TeamDisplayContainer.jsx';
import './App.scss';

export default function App() {
  return (
    <div className="font">
        <h1 className="column-items-center">Compare NFL Teams</h1>
        <TeamDisplayContainer />
    </div>
  );
};
