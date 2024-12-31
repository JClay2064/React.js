import { useState } from "react";

const UseStateBasics = () => {
  const [count ,setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  };
  
  return (
  <div>
    <h4>You clicked {count} times</h4>
    <button type='button' className='btn' onClick={handleClick}>click me</button>
  </div>
  )
};

export default UseStateBasics;
git add src/tutorial/01-useState/starter/02-useState-basics.jsx
git add src/index.css
git add package.json
git add package-lock.json  
git add README.md
git add .gitignore