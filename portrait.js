

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'images' with your actual folder path
    const folderPath = 'images/Portraits';

    // Get a reference to the ul element
    const ul = document.getElementById('imageListPortrait');

    // Dummy data - you should fetch the list of images dynamically
    const imageArrayPortrait = [
        'HW (2 of 9).jpg',
        'HW (7 of 9).jpg',
        'HW (8 of 9).jpg',
        'IMG_2600.jpg',
        'IMG_2602.jpg',
        'TuvaBlomsterEng (7 of 49).jpg',
        'TuvaBlomsterEng (12 of 49).jpg',
        'TuvaBlomsterEng (17 of 49).jpg',
        'TuvaBlomsterEng (18 of 49).jpg',
        'TuvaBlomsterEng (19 of 49).jpg',
        'TuvaBlomsterEng (38 of 49).jpg',
        'TuvaBlomsterEng (46 of 49).jpg',
        'TuvaBlomsterEng (49 of 49).jpg',
        'tuvada (3 of 9).jpg',
        'tuvada (4 of 9).jpg',
    ];

    const shuffledPortraitImageArray = shuffleArray(imageArrayPortrait);

    // Loop through the array of images and create list items
    shuffledPortraitImageArray.forEach(image => {
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



