import satData from './satData'
import './styling.css'

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className='flex-container'>
      {/* automatically creates buttons */}
    {displaySats.map((sat, id) => {
      return (
        <button onClick={() => filterByType(sat)} key={id}>
        
          {sat} Orbit
        </button>
        
      );
    })}

      {/* this version invokes setSat immeadiately. some sources say this is not preferred, 
      since it sets the state right as the component renders instead of just on the click.
            <button onClick={setSat(satData)}>All Orbits</button>*/}

      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};  

export default Buttons;