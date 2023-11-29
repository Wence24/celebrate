window.onload = function() {
  alert("Before ye unseal the container, let the music play forth. Once the melodies fill the air, retrieve the ancient scroll. When the scroll is in hand, give a hearty knock upon the door, announcing your presence.");
  // You can customize the alert message as needed
};

function navigateToMainPage() {
  const openingPage = document.getElementById('opening-page');
  const mainPage = document.getElementById('main-page');

  openingPage.style.display = 'none';
  
  openingPage.style.overflow = 'hidden';
  mainPage.style.display = 'block';
}

// Add the following click event listener for closing the popup
document.querySelector('.close-button').addEventListener('click', closeDescription);

// Modify your showDescription function to handle the popup display
function showDescription(title, description) {
  const imageDescription = document.getElementById('image-description');
  const popupContainer = document.querySelector('.popup-container');
  const smallImages = document.querySelectorAll('.small-image');

  // Add the class to lower the opacity of small images
  smallImages.forEach(image => {
      image.classList.add('lower-opacity');
  });

  imageDescription.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
  popupContainer.style.display = 'flex';

  // Add the following line to disable scrolling when the popup is open
  disableScroll();
}

function closeDescription() {
  const popupContainer = document.querySelector('.popup-container');
  const smallImages = document.querySelectorAll('.small-image');

  // Remove the class to restore the opacity of small images
  smallImages.forEach(image => {
      image.classList.remove('lower-opacity');
  });

  popupContainer.style.display = 'none';
}


function enableScroll() {
  // Enable scrolling by resetting overflow and body height
  document.body.style.overflow = '';
  document.body.style.height = '';
}
document.getElementById('door-button').addEventListener('click', openDoor);

function openDoor() {
  if (!musicPlayed) {
    alert("Hear the melody first, noble princess! Let the music weave its tale before venturing forth.");
    return;
  }
  if (!doorClickable) {
    alert("Kindly bide your time, noble princess! The gateway shall open when it deems fit for your grace.");
    return;
  }
// Change the background image of the page
document.body.style.backgroundImage = 'url("land.png")'; // Replace with your new image path
document.body.style.backgroundSize = 'cover'; // Adjust to your preference
// Create a flash element
const flash = document.createElement('div');
flash.classList.add('flash');
document.body.appendChild(flash);

// Add the animation class to initiate the animation
flash.classList.add('flash-animation');


  // Pause opening page music
  document.getElementById('opening-music').pause();

  // Show main page after a delay with a smooth transition
  setTimeout(() => {
    document.getElementById('opening-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';

    enableScroll();
    
    // Play main page music
    document.getElementById('main-music').play();

    // Remove the flash element after the transition duration
    setTimeout(() => {
      flash.remove();
      backgroundImage.remove();
    }, 400); // Transition duration: 0.2 seconds
  }, 800); // Delay: 0.3 seconds
}

// Function to create and append hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  heart.style.left = randomX + 'px';
  heart.style.top = randomY + 'px';
  
  document.body.appendChild(heart);
}

let musicPlayed = false;
let doorClickable = true;

function playOpeningMusic() {
  // Play opening music
  document.getElementById('opening-music').play();
  musicPlayed = true;
// Disable the play music button
document.getElementById('play-music-button').style.display = 'none';
doorClickable = false;

  // Hide the button after clicking
  const playMusicButton = document.getElementById('play-music-button');
  playMusicButton.style.opacity = '0';
  playMusicButton.disabled = true; // Optional: Disable the button to prevent multiple clicks

    // Disable the play music button for 5 seconds
    document.getElementById('play-music-button').style.display = 'none';
    doorClickable = false;
    setTimeout(() => {
      document.getElementById('play-music-button').style.display = 'block';
      doorClickable = true;
    }, 5000); // 5 seconds
}
// Loop with a delay between iterations
let counter = 0;
const totalHearts = 100;
const delay = 100; // Delay in milliseconds

function loop() {
  if (counter < totalHearts) {
    createHeart();
    counter++;
    setTimeout(loop, delay);
  }
}

// Start the loop
loop();