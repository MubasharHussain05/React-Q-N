// forwardRef is used to forward refs through
// components, allowing parent components to
// interact with the child's DOM node.


import { useRef, forwardRef, useImperativeHandle } from "react";

// Child Component
const InputComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} placeholder="Enter text here..." />;
});

// Parent Component
const App = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Call the focus method exposed by the child
  };

  return (
    <div>
      <h1>Simple forwardRef Example</h1>
      <InputComponent ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default App;
