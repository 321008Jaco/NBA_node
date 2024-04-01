import React from 'react';

const DropdownOne = ({ onSelectOption }) => {
  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    onSelectOption(selectedOption);
  };

  return (
    <div>
      <h2>Select an option:</h2>
      <select onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="bosses">Bosses</option>
        <option value="creatures">Creatures</option>
        <option value="weapons">Weapons</option>
      </select>
    </div>
  );
};

export default DropdownOne;


