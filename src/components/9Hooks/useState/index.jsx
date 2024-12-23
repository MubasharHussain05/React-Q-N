// State?
// State is an internal data store that belong to a specific Component.
// It can be change our time. 

import { useState } from 'react';

function Counter() {
  // Declare a state variable called 'count', initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;




