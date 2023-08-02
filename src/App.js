import React from 'react';
import PriceAlertForm from './components/email';
import axios from 'axios';
import path from 'path'; // This import is causing the error


function App() {
  return (
    <div className="App">
      <PriceAlertForm />
    </div>
  );
}

export default App;
