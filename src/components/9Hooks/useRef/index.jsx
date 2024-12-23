// Refs are used to access the DOM directly or to
// reference a React element. They provide a way to
// interact with the underlying DOM nodes in React

// How to Create and Use Refs
// Creating a Ref:
// Use the useRef hook in functional components or React.createRef() in class components to create a ref.

// Assigning the Ref:
// Attach the ref to a DOM element using the ref attribute.

// Accessing the Ref:
// The ref.current property gives access to the DOM node or the component instance.


import { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null); // Step 1: Create a ref

  const handleFocus = () => {
    inputRef.current.focus(); // Step 3: Access the DOM node
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default InputFocus;

