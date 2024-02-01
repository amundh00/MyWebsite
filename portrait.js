

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'images' with your actual folder path
    const folderPath = 'images/portraits';

    // Get a reference to the ul element
    const ul = document.getElementById('imageListPortrait');

    // Dummy data - you should fetch the list of images dynamically
    const imageArray = [
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

    // Loop through the array of images and create list items
    imageArray.forEach(image => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = `${folderPath}/${image}`;
        img.alt = image;
        li.appendChild(img);
        ul.appendChild(li);
    });
});

