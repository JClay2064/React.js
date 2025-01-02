import { useState } from 'react';

const UseStateObject = () => {
  
  {/* setting up state values */}
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'reading books'
  });
  
  {/* handler function  to change the state values */}
  const displayPerson = () => {
  setPerson({name: 'john', age: 25, hobby: 'coding'});
 }
  
  {/* rendering the state values */}
  return(
   <>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>{person.hobby}</h2>
    <button className='btn' onClick={displayPerson}>change person</button>
  </>
  )
};
export default UseStateObject;