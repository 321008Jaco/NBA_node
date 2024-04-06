import React from 'react';
import { Radar } from 'react-chartjs-2';

const CompareRadar = ({ selectedWeaponLeft, selectedWeaponRight }) => {
  if (!selectedWeaponLeft || !selectedWeaponRight) {
    return <div>Please select weapons to compare</div>;
  }

  const weaponLabels = selectedWeaponLeft.attack.map(attack => attack.name);
  const leftData = selectedWeaponLeft.attack.map(attack => attack.amount);
  const rightData = selectedWeaponRight.attack.map(attack => attack.amount);

  const data = {
    labels: weaponLabels,
    datasets: [
      {
        label: selectedWeaponLeft.name,
        data: leftData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: selectedWeaponRight.name,
        data: rightData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Radar Chart</h2>
      <Radar data={data} />
    </div>
  );
};

export default CompareRadar;