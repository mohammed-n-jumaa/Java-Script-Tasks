'use strict';

let apiURL = "https://restcountries.com/v3.1/all"; // API URL

fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const result = data;
        const container = document.getElementById('countriesContainer');
        
        console.log("Fetched data:", result);  
        
        result.forEach(country => {
            if (country.coatOfArms && country.coatOfArms.png) {

                let countryCard = document.createElement('div');
                countryCard.classList.add('country-card');

                let img = document.createElement('img');
                img.src = country.coatOfArms.png;
                img.alt = `${country.name.common} Coat of Arms`;
                countryCard.appendChild(img);

                let countryName = document.createElement('h2');
                countryName.textContent = country.name.common;
                countryCard.appendChild(countryName);

                let coatLabel = document.createElement('p');
                coatLabel.textContent = "Coat of Arms:";
                countryCard.appendChild(coatLabel);

                container.appendChild(countryCard);
            } else {
                console.log(`No coat of arms found for ${country.name.common}`);
            }
        });
    })
    .catch(error => console.log('Error fetching data:', error));
