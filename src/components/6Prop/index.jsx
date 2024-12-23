// Prop?
// Props are properties pass to components from its parents
// and they are immutable.Props are external data store.



// A functional component that receives 'name' as a prop





const Prop = () => {
  const handleClick = (name) => {
    alert(`Hello, ${name}!`);
  };

  // eslint-disable-next-line react/prop-types
  const Greeting = ({ name, age, onButtonClick }) => {
    return (
      <div>
        <h2>Hello, {name}!</h2>
        <p>You are {age} years old.</p>
        <button onClick={() => onButtonClick(name)}>Say Hello</button>
      </div>
    );
  };

  return (
    <div>
      <h1>React Props Example</h1>
      <Greeting name="Mubasher" age={25} onButtonClick={handleClick} />
    </div>
  );
};

export default Prop;





