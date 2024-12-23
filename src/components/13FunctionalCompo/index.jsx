// What is Functioal components?
// Functional components and are simpler often with hooks.


// Functional components in React are simpler components defined as JavaScript functions, 
// and they can accept props as arguments and return JSX (or null). Before the introduction of React hooks, 
// functional components were used primarily for presenting UI, while class components were used for more complex tasks, 
// like handling state and lifecycle methods.

// With the introduction of hooks in React 16.8, functional components can now manage state, handle side effects, 
// and use other React features, which were once exclusive to class components.

import  { useState } from "react";

const Counter = () => {
  // useState Hook: Manage local state
  const [count, setCount] = useState(0);

  // Event handler to update state
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
