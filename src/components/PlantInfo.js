import React from 'react';
import SoilMoisture from './SoilMoisture';

function PlantInfo() {
  return (
    <div>
        <p>Soil moisture data will go here.</p>
        <table>
            <tbody>
                <tr>
                    <td>Plant 1:</td><tr><SoilMoisture plant={1} /></tr>
                </tr>
                <tr>
                    <td>Plant 2:</td><tr><SoilMoisture plant={2} /></tr>
                </tr>
                <tr>
                    <td>Plant 3:</td><tr><SoilMoisture plant={3} /></tr>
                </tr>
                <tr>
                    <td>Plant 4:</td><tr><SoilMoisture plant={4} /></tr>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

export default PlantInfo;