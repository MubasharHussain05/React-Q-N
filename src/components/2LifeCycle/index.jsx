// What is react component Lifecycle method?
// React components have several lifecycle method:
// constructor(), render(), componentDidMount() and shouldComponentUpdate(). To fetch data 
// use componentDidMount() for class component or useEffect() hook in functional components
// to perform side effects, including data feting after the render

import { useState, useEffect } from "react";

export const Lifecycle = () => {
  const [count, setCount] = useState(0);

  // ComponentDidMount and ComponentWillUnmount
  useEffect(() => {
    console.log("useEffect: Component mounted.");
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 1000);

    return () => {
      console.log("useEffect Cleanup: Component unmounted.");
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // ComponentDidUpdate
  useEffect(() => {
    console.log("useEffect: Component updated (count changed).");
  }, [count]); // Runs only when `count` changes

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};


