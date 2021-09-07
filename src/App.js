import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Kalispera to the Poker Group :-)</h1>
        <h2>Memo makes love to Pete</h2>
        <h2>Memo makes love to Mitsos also</h2>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);