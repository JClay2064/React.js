# React - Advanced Concepts

## React Course

[My React Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

## Support

Find the Content Useful? [You can always buy me a coffee](https://www.buymeacoffee.com/johnsmilga)

## Run App

- if you get an error, run the commands separately

```sh
npm install && npm run dev
```

- http://localhost:5173/

Rest of the content in the TUTORIAL.md

## Corresponding/Matching Projects

#### useState

### Code examples

#### useState-basics.jsx (counter)
```
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
```

### useState-array.jsx (name removal)
```
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
```

1. Birthday Reminder

#### useEffect and Conditional Rendering

2. Tours
3. Reviews
4. Accordion
5. Menu
6. Tabs
7. Slider







#### Forms

8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef

11. Navbar

#### useContext

12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext

14. Cart

#### React Router

15. Cocktails
