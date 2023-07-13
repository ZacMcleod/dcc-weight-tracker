import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const[entries, setEntries] = useState([{weight: 155, date: '7-13-2023'}, {weight: 157, date: '7-14-2023'}])

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
