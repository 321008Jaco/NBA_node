import React from 'react';

const Dropdown = ({ options, onSelect }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSelect(selectedValue);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  );
};

export default Dropdown;
