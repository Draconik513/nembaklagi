document.addEventListener('DOMContentLoaded', function() {
  // Add loaded class to body after a short delay
  setTimeout(function() {
    document.body.classList.remove('not-loaded');
    document.body.classList.add('loaded');
  }, 500);
  
  // Add stars to night background
  createStars();
  
  // Initialize scroll handler
  window.addEventListener('scroll', handleScroll);
  
  // Initialize music control
  initMusicControl();
});

function createStars() {
  const night = document.querySelector('.night');
  const starsCount = 200;
  
  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 0.5 + 0.1;
    
    // Random opacity
    const opacity = Math.random() * 0.7 + 0.3;
    
    // Random animation duration
    const duration = Math.random() * 5 + 5;
    
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.width = `${size}vmin`;
    star.style.height = `${size}vmin`;
    star.style.opacity = opacity;
    star.style.animationDuration = `${duration}s`;
    
    night.appendChild(star);
  }
}

// Scroll handler for showing proposal section
function handleScroll() {
  const proposalSection = document.querySelector('.proposal-section');
  const scrollPosition = window.scrollY;
  const flowerSectionHeight = document.querySelector('.flower-section').offsetHeight;
  
  if (scrollPosition > flowerSectionHeight * 0.7) {
    proposalSection.classList.add('visible');
  } else {
    proposalSection.classList.remove('visible');
  }
}

// Scroll to proposal section
document.querySelector('.scroll-down').addEventListener('click', () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

// No button effect
const noButton = document.querySelector('.no-button');
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Yes button effect
document.querySelector('.yes-button').addEventListener('click', () => {
  const proposalSection = document.querySelector('.proposal-section');
  proposalSection.innerHTML = `
    <div class="ring">
      <div class="ring-inner">💍</div>
    </div>
    <h1 class="proposal-text">I Love You! 💖</h1>
    <p style="font-size: 1.5rem;">You've made me the happiest person in the world!</p>
  `;
  
  // Add confetti effect
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
});

function createConfetti() {
  const confetti = document.createElement('div');
  confetti.style.position = 'absolute';
  confetti.style.width = '10px';
  confetti.style.height = '10px';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  confetti.style.borderRadius = '50%';
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.top = '-10px';
  confetti.style.opacity = '0.8';
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
  document.querySelector('.proposal-section').appendChild(confetti);
  
  const animationDuration = Math.random() * 3 + 2;
  
  confetti.animate([
    { top: '-10px', opacity: 1 },
    { top: `${Math.random() * 100}%`, opacity: 0.8 },
    { top: '100%', opacity: 0 }
  ], {
    duration: animationDuration * 1000,
    easing: 'cubic-bezier(0.1, 0.8, 0.9, 1)'
  });
  
  setTimeout(() => {
    confetti.remove();
  }, animationDuration * 1000);
}

// Music Control
function initMusicControl() {
  const musicControl = document.getElementById('musicControl');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;
  
  musicControl.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      musicControl.classList.remove('playing');
      musicControl.querySelector('.music-icon').textContent = '🎵';
    } else {
      bgMusic.play();
      musicControl.classList.add('playing');
      musicControl.querySelector('.music-icon').textContent = '🔊';
    }
    isPlaying = !isPlaying;
  });
}