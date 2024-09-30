document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('formGarden');
    const clearListButton = document.getElementById('clerLis');
    const tableBody = document.getElementById('bodCon');
    const flowerSelect = document.getElementById('selImg');
    let isEditing = false;
    let editIndex = null;

    const priceRanges = {
        'alstroemerias': { min: 10, max: 20 },
        'gardenias': { min: 15, max: 25 },
        'orchids': { min: 18, max: 30 },
        'peonies': { min: 12, max: 22 },
        'roses': { min: 10, max: 25 },
        'sunflowers': { min: 8, max: 15 },
        'tulips': { min: 14, max: 24 }
    };

    const images = {
        'alstroemerias': './images/alstroemerias.jpg',
        'gardenias': './images/gardenias.jpg',
        'orchids': './images/orchids.jpg',
        'peonies': './images/peonies.jpg',
        'roses': './images/roses.jpg',
        'sunflowers': './images/sunflowers.jpg',
        'tulips': './images/tulips.jpg'
    };

    function getRandomPrice(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function updateUI() {
        let gardenData = JSON.parse(localStorage.getItem('gardenData')) || [];
        tableBody.innerHTML = gardenData.map((item, index) => `
            <tr>
                <td><button onclick="deleteItem(${index})">X</button></td>
                <td><img src="${item.img}" alt="${item.name}" width="50" height="50"></td>
                <td>${item.name}</td>
                <td>${item.season}</td>
                <td>$${item.price}</td>
                <td><button onclick="editItem(${index})">Edit</button></td>
            </tr>
        `).join('');
    }

    window.deleteItem = function(index) {
        let gardenData = JSON.parse(localStorage.getItem('gardenData'));
        gardenData.splice(index, 1);
        localStorage.setItem('gardenData', JSON.stringify(gardenData));
        updateUI();
    };

    window.editItem = function(index) {
        let gardenData = JSON.parse(localStorage.getItem('gardenData'));
        let item = gardenData[index];
        document.getElementById('nameInp').value = item.name;
        document.getElementById('selImg').value = item.img.replace('images/', '').replace('.jpg', '');
        document.getElementById('sesonInp').value = item.season;
        isEditing = true;
        editIndex = index;
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('nameInp').value;
        let img = flowerSelect.value;
        let season = document.getElementById('sesonInp').value;

        // Get random price based on the selected flower
        const priceRange = priceRanges[img];
        const randomPrice = getRandomPrice(priceRange.min, priceRange.max);

        const itemData = {
            name: name,
            img: images[img],
            season: season,
            price: randomPrice
        };

        if (isEditing) {
            updateItem(editIndex, itemData);
        } else {
            addToLocalStorage(itemData);
        }
        form.reset();
        isEditing = false;
        editIndex = null;
    });

    clearListButton.addEventListener('click', function() {
        localStorage.removeItem('gardenData');
        updateUI();
    });

    function updateItem(index, item) {
        let gardenData = JSON.parse(localStorage.getItem('gardenData'));
        gardenData[index] = item;
        localStorage.setItem('gardenData', JSON.stringify(gardenData));
        updateUI();
    }

    function addToLocalStorage(obj) {
        let gardenData = JSON.parse(localStorage.getItem('gardenData')) || [];
        gardenData.push(obj);
        localStorage.setItem('gardenData', JSON.stringify(gardenData));
        updateUI();
    }

    updateUI(); 
});
