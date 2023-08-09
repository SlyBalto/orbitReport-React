import './styling.css'

const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Launch Date</th>
          <th>Operational</th>
        </tr>
      </thead>
      
        <tbody>
          {/* interates through 'sat' object array, takes each object's data, and 
          places them into corresponding locations using index from .map() */}
          {sat.map((sat, index) => (
            <tr key={index}>
              <td>{sat.name}</td>
              <td>{sat.type}</td>
              <td>{sat.launchDate}</td>
              <td>{sat.operational ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}

        
        
        </tbody>
      </table>
  );
};
// TODO: <th> for: Name, Type of Satellite, Launch Date, Status
export default Table;