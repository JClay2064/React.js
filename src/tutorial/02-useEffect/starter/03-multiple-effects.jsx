import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

// useEffect is a hook that allows us to perform side effects in our components 
// it takes a callback function and an array of dependencies
// if the dependencies array is empty, the callback function will run on every render
// if the dependencies array is not empty, the callback function will run when the value of the dependency changes
   useEffect(() => {
     console.log('hello from first useEffect');
   }, [value]);

   useEffect(() => {
     console.log('hello from second useEffect');
   }, [secondValue]);




  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
