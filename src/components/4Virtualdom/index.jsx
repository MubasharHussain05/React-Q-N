// The Virtual DOM is lightweight copy of actual DOM in memory.
// React uses it to improve performance by updating only the change parts 
// of the Actual DOM.

// How the Virtual DOM Works:
// 1 Render UI to Virtual DOM: 
//When you build a React component, React renders the UI to the virtual DOM first.

// 2 State or Props Change: 
//When the state or props of a component change, React creates a new virtual DOM with the updated state.

// 3 Diffing: 
//React compares the new virtual DOM with the previous virtual DOM. It identifies the differences through a process called reconciliation.

// 4 Efficient Real DOM Updates: 
//React only updates the parts of the real DOM that have actually changed, rather than re-rendering the entire UI. This makes the updates faster and more efficient, especially in large applications.



import { useState } from 'react';

const Virtual = () => {
    const [count,setCount]=useState(0)
    return (
        <div>
             <h1>Count: {count}</h1>
             <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Virtual;

// behind the seen

// VirtualDOM = {
//     type: 'div',
//     props: { children: [
//       { type: 'h1', props: { children: 'Count: 0' }},
//       { type: 'button', props: { onClick: incrementFunction, children: 'Increment' }}
//     ]}
//   }
  
