// keys are use to uniquely identify and differniate between component in React.
// They help react which item have change added or remove 
export  const keys=()=>{
    const items = ['Apple', 'Banana', 'Cherry'];
    
    
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
    }
    