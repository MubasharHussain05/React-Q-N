// Controlled Components are components where the form data is control by react state.
// The input elements receive their current value from the state and have their value
// update through a callback function.

import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState('');

  // Update state when the input value changes
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <div>
      <h2>Controlled Input Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name} // The value is controlled by the state
            onChange={handleInputChange} // The state updates when the input changes
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
