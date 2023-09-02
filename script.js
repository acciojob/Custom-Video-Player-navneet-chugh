/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
// Play/pause the video
function togglePlay() {
    if (video.paused) {
        video.play();
        toggleButton.textContent = '❚ ❚';
    } else {
        video.pause();
        toggleButton.textContent = '►';
    }
}

// Update the progress bar
function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Skip ahead or backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Set volume and playback rate
function handleSliderUpdate() {
    video[this.name] = this.value;
}

// Add event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', () => toggleButton.textContent = '❚ ❚');
video.addEventListener('pause', () => toggleButton.textContent = '►');
video.addEventListener('timeupdate', updateProgressBar);

toggleButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

volumeSlider.addEventListener('input', handleSliderUpdate);
playbackRateSlider.addEventListener('input', handleSliderUpdate);

// Initialize progress bar
video.addEventListener('loadedmetadata', updateProgressBar);
