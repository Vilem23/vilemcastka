const bubblesContainer = document.querySelector('.bubbles');

// Pole obrázků pro bubliny
const bubbleImages = ['index/icn/icn1.png', 'index/icn/icn2.png', 'index/icn/icn3.png'];

// Parametry
const spawnRate = 0.5; // Kolik bublin se spawne každou sekundu
const spawnInterval = 500; // Interval v milisekundách (1 sekunda)

function createBubble() {
  const img = document.createElement('img');

  img.src = bubbleImages[Math.floor(Math.random() * bubbleImages.length)];
  img.classList.add('bubble-img');

  const size = Math.random() * 20 + 10;
  img.style.height = `${size}px`;
  img.style.left = `${Math.random() * 100}%`;

  const rotateX = Math.random() * 360;
  const rotateY = Math.random() * 360;
  const rotateZ = Math.random() * 360;
  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;

  img.style.animationDuration = `${5 + Math.random() * 5}s`;
  img.style.animationDelay = `${Math.random()}s`;

  bubblesContainer.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 10000);
}

// Funkce pro generování bublin na základě spawn rate
function spawnBubbles() {
  for (let i = 0; i < spawnRate; i++) {
    createBubble();
  }
}

// Spustíme generování bublin každou sekundu
setInterval(spawnBubbles, spawnInterval);

// 🔽 Zvětšení tlačítka "MÉ PORTFOLIO"
const portfolioBtn = document.querySelector('.portfolio-btn');

setTimeout(() => {
  portfolioBtn.classList.add('enlarged');

  setTimeout(() => {
    portfolioBtn.classList.remove('enlarged');
  }, 2000); // Po 3 sekundách odstraní zvětšení

}, 7000); // Po 5 sekundách přidá zvětšení

const scrollBtn = document.querySelector('.scroll-btn');

// Funkce pro přidání třídy "bouncing" k tlačítku a spuštění animace
function triggerBounce() {
// Přidáme třídu, která spustí animaci
scrollBtn.classList.add('bouncing1');
// Po 1 sekundě (délce animace) odstraníme třídu, aby se animace nemohla opakovat
setTimeout(() => {
scrollBtn.classList.remove('bouncing1');
}, 1000);  // 1000ms = 1 sekunda
}

// Spustí funkci triggerBounce každých 5 sekund
setInterval(triggerBounce, 5000);

window.addEventListener('load', function () {
  document.getElementById('main').classList.add('visible');
});

window.addEventListener('scroll', () => {
const sections = document.querySelectorAll('section');
const navButtons = document.querySelectorAll('.nav button');

let currentSectionId = '';

sections.forEach(section => {
const rect = section.getBoundingClientRect();
if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
  currentSectionId = section.id;
}
});

navButtons.forEach(btn => {
if (btn.dataset.section === currentSectionId) {
  btn.classList.add('active');
} else {
  btn.classList.remove('active');
}
});
});

const scrollContainer = document.querySelector('.scroll-container');
const items = document.querySelectorAll('.scroll-items');

// Observer to auto-check the centered item
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('input').checked = true;
    }
  });
}, {
  root: scrollContainer,
  rootMargin: '-51% 0px -49% 0px'
});

items.forEach(item => observer.observe(item));

// Start on 3rd item
items[2].scrollIntoView({ block: "center", behavior: "instant" });



const scrollMenu = document.getElementById('scrollmenu');
const mainImage = document.getElementById('main-image');

scrollMenu.addEventListener('scroll', () => {
  const scrollLeft = scrollMenu.scrollLeft;
  const scrollWidth = scrollMenu.scrollWidth - scrollMenu.clientWidth;
  const scrollRatio = scrollLeft / scrollWidth;

  if (scrollRatio < 0.3) {
    mainImage.src = 'index/projekts/bg/1.webp';
  } else if (scrollRatio < 0.8) {
    mainImage.src = 'index/projekts/bg/2.webp';
  } else if (scrollRatio < 1.2) {
    mainImage.src = 'index/projekts/bg/3.jpeg';
  }
});