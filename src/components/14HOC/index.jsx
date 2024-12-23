// Higher Order Components are functions that take a component
// and return a new component with addition features or props. 

// HOCs are typically used for:

// Reusing code logic
// Handling cross-cutting concerns like authentication, data fetching, logging, etc.
// Manipulating props




const HOC = () => {
  // Higher-Order Component
  const withLogging = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
      console.log("Props:", props); // Log props
      return <WrappedComponent {...props} />;
    };
  };

  // Component to be wrapped
  // eslint-disable-next-line react/prop-types
  const SimpleComponent = ({ message }) => {
    return <h2>{message}</h2>;
  };

  // Enhanced Component
  const EnhancedComponent = withLogging(SimpleComponent);

  return (
    <div>
      <h1>HOC Example (Single File)</h1>
      <EnhancedComponent message="Hello, Mubasher!" />
    </div>
  );
};

export default HOC;
