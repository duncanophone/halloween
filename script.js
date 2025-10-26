document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class 'sound-button'
    const buttons = document.querySelectorAll('.sound-button');
    
    // Create an object to manage audio playback
    const audioPlayers = {};

    buttons.forEach(button => {
        // Get the sound file name from the data-sound attribute
        const soundFile = button.getAttribute('data-sound');

        // Initialize a new Audio object for this sound
        // We use a property on audioPlayers to store a reference to the Audio object
        audioPlayers[soundFile] = new Audio(soundFile);

        button.addEventListener('click', () => {
            const player = audioPlayers[soundFile];
            
            // Check if the file is the backing track (since it has "backing" in the name)
            if (soundFile.includes('backing')) {
                // For backing track, toggle play/pause
                if (player.paused) {
                    player.play();
                    button.textContent = "Pause Backing Music"; // Change button text
                } else {
                    player.pause();
                    button.textContent = "Play Backing Music"; // Change button text back
                }
            } else {
                // For all other sounds (like the treat sound), just play from the start
                player.currentTime = 0; // Rewind to the beginning
                player.play();
            }
        });
    });
});