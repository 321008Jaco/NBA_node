import React from 'react';

const DropdownTwo = ({ options, onSelectWeapon }) => {
  const handleOptionChange = (event) => {
    const selectedWeapon = event.target.value;
    onSelectWeapon(selectedWeapon);
  };

  return (
    <div>
      <h2>Select a weapon:</h2>
      <select onChange={handleOptionChange}>
        <option value="">Select a weapon</option>
        {/* Map over the options to display each weapon */}
        {options.map((weapon) => (
          <option key={weapon.id} value={weapon.id}>
            {weapon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownTwo;


