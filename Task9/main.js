     let apiURL = "https://pokeapi.co/api/v2/pokemon?limit=50";

     fetch(apiURL)
         .then(response => response.json())
         .then(data => {
             const pokemonList = data.results;

             pokemonList.forEach(pokemon => {
                 fetch(pokemon.url)
                     .then(response => response.json())
                     .then(pokemonData => {

                        const pokemonCard = document.createElement('div');
                         pokemonCard.classList.add('pokemon-container');

                         let pokemonName = document.createElement('div');
                         pokemonName.classList.add('pokemon-name');
                         pokemonName.textContent = pokemonData.name.toUpperCase();

                         let pokemonImg = document.createElement('img');
                         pokemonImg.src = pokemonData.sprites.front_default;

                         let abilitiesList = document.createElement('ul');
                         abilitiesList.classList.add('abilities');
                         pokemonData.abilities.forEach(ability => {
                             let li = document.createElement('li');
                             li.textContent = ability.ability.name;
                             abilitiesList.appendChild(li);
                         });

                         pokemonCard.appendChild(pokemonImg);
                         pokemonCard.appendChild(pokemonName);
                         pokemonCard.appendChild(abilitiesList);

                         document.getElementById('pokemon-list').appendChild(pokemonCard);
                     });
             });
         })
         .catch(error => {
             console.error("Error fetching Pokémon data:", error);
         });