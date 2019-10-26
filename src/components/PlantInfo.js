import React from 'react';
import SoilMoisture from './SoilMoisture';

function PlantInfo() {
  return (
    <div>
        <p>Soil moisture data will go here.</p>
        <table>
            <tbody>
                <tr>
                    <td>Plant 1:</td><td><SoilMoisture plant={1} /></td>
                </tr>
                <tr>
                    <td>Plant 2:</td><td><SoilMoisture plant={2} /></td>
                </tr>
                <tr>
                    <td>Plant 3:</td><td><SoilMoisture plant={3} /></td>
                </tr>
                <tr>
                    <td>Plant 4:</td><td><SoilMoisture plant={4} /></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default PlantInfo;