import React from 'react';

const FetchWeaponById = ({ weapons }) => {
  if (!weapons) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Select a weapon:</h2>
      <select>
        <option value="">Select a weapon</option>
        {weapons.map((weapon) => (
          <option key={weapon.id} value={weapon.id}>
            {weapon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FetchWeaponById;





