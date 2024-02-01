

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'images' with your actual folder path
    const folderPath = 'images/bryllup';

    // Get a reference to the ul element
    const ul = document.getElementById('imageListBryllup');

    // Dummy data - you should fetch the list of images dynamically
    const imageArrayBryllup = [
        'Bryllup (16 of 125).jpg',
        'Bryllup (21 of 125).jpg',
        'Bryllup (29 of 125).jpg',
        'Bryllup (30 of 125).jpg',
        'Bryllup (34 of 125).jpg',
        'Bryllup (35 of 125).jpg',
        'Bryllup (70 of 125).jpg',
        'Bryllup (87 of 125).jpg',
        'Bryllup (88 of 125).jpg',
        'Bryllup (91 of 125).jpg',
        'Bryllup (107 of 125).jpg',
    ];

    const shuffledBryllupImageArray = shuffleArray(imageArrayBryllup);

    // Loop through the array of images and create list items
    shuffledBryllupImageArray.forEach(image => {
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

