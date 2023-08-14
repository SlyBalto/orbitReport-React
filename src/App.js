import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, { useState } from 'react';
import satData from './components/satData' /* list of satellites and their info */


/* Freecodecamp.org says: State allows us to manage changing data in an application. 
 It's defined as an object where we define key-value pairs specifying various data
we want to track in the application. */

function App() {
  // sat holds the current value of the state with a key and value.
  // setSat(new value) is used to update the state (sat).
  const [sat, setSat] = useState(satData);

  // new Set creates new array of unique orbit types. removes duplicates.
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  // arrow function show only satellites that match the current type. first three buttons utilize this.
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    // updates state and re-renders only what's changed.
    setSat(displaySats);
  }

  return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
