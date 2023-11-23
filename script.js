// Array of background images
const backgroundImages = [
    'url(images/coffee.webp)',
    'url(images/coffee2.jpeg)',
    'url(images/facebook.png)',
    'url(images/twitter.png)',
    'url(images/university.jpg)',
    
];

// Function to change background image
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const imageUrl = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url('${imageUrl}')`;
}

// Change background image every 2 seconds
setInterval(changeBackgroundImage, 2000);
