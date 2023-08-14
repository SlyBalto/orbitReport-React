import satData from './satData'
import './styling.css'

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className='flex-container'>
      {/* automatically creates first 3 buttons */}
    {displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>

          {/* 'sat' is the orbit type (low, medium, high) */}
          {sat} Orbit
        </button>
        
      );
    })}

      {/* this version invokes setSat only when the button is pressed. */}

      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};  

export default Buttons;