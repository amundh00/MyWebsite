

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'images' with your actual folder path
    const folderPath = 'images/products';

    // Get a reference to the ul element
    const ul = document.getElementById('imageListProduct');

    // Dummy data - you should fetch the list of images dynamically
    const imageArrayProduct = [
        'G Wag (1 of 12).jpg',
        'G Wag (2 of 12).jpg',
        'G Wag (3 of 12).jpg',
        'G Wag (4 of 12).jpg',
        'G Wag (5 of 12).jpg',
        'G Wag (6 of 12).jpg',
        'G Wag (7 of 12).jpg',
        'G Wag (8 of 12).jpg',
        'G Wag (9 of 12).jpg',
        'G Wag (10 of 12).jpg',
        'G Wag (11 of 12).jpg',
        'G Wag (12 of 12).jpg',
        'Mikke (7 of 25).jpg',
        'Mikke (9 of 25).jpg',
        'Mikke (11 of 25).jpg',
        'Mikke (19 of 25).jpg',
        'Mikke (21 of 25).jpg',
        'Mikke (22 of 25).jpg',
        'Mikke (23 of 25).jpg',
        'P1100353.jpg',
    ];

    const shuffledProductImageArray = shuffleArray(imageArrayProduct);

    // Loop through the array of images and create list items
    shuffledProductImageArray.forEach(image => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `${folderPath}/${image}`;
        img.alt = image;
        li.appendChild(img);
        ul.appendChild(li);
    });
});

function shuffleArray(array) {
    // Loop through the array in reverse order
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at positions i and j in the array
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return the shuffled array
    return array;
}

