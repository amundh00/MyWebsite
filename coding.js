document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('bg-video');

    function attemptPlay() {
        video.play().then(() => {
            console.log('Video played successfully');
        }).catch((error) => {
            console.error('Error attempting to play video:', error);
        });
    }

    attemptPlay();

    video.addEventListener('play', () => {
        console.log('Video is playing');
    });

    video.addEventListener('pause', () => {
        console.log('Video is paused');
        attemptPlay();
    });
});
