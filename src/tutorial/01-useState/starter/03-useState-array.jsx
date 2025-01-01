import {data} from '../../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  
  const clearAllItems = () => {
    setPeople([]);
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={clearAllItems}>clear items</button>
    </div>
  )
};

export default UseStateArray;


