import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      In here we are getting data about gentrification, some basic data needed is the state code
      florida is 12
      <ul>
        <li>florida state code: 12</li>
        <li>example query https://api.census.gov/data/2018/acs/acsse?get=NAME,K200001_001E&for=state:12&key=YOUR_KEY_HERE</li>
      </ul>
    </div>
  );
}

export default App;
