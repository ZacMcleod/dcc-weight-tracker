import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntryChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';

function App() {

  const[entries, setEntries] = useState([{weight: 155, date: '7-13-2023'}, {weight: 157, date: '7-14-2023'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      <EntryChartTracker parentEntries={entries}/>
    </div>
  );
}

export default App;
