'use strict';

let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; // API URL

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const result = data.Results;
        const container = document.getElementById('vehicleContainer');
        
        result.forEach(vehicle => {
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('item');

            let brandName = document.createElement('div');
            brandName.classList.add('brand-name');
            brandName.textContent = vehicle.MakeName.toUpperCase(); 

            let vehicleType = document.createElement('div');
            vehicleType.classList.add('vehicle-type');
            vehicleType.textContent = `Vehicle Type: ${vehicle.VehicleTypeName}`; 

            itemDiv.appendChild(brandName);
            itemDiv.appendChild(vehicleType);

            container.appendChild(itemDiv);
        });
    });