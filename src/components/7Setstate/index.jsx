// setState is use to update the state of a components
// and trigger a re-render

import { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const increment = () => {
    setCount(count + 1); // This updates the 'count' state
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
