function handleButtonClick(index) {
  const cards = document.querySelectorAll('.destination-card');
  cards.forEach((card) => {
    card.classList.remove('scale');
  });

  const selectedCard = document.getElementById(`card-${index}`);
  if (selectedCard) {
    selectedCard.classList.add('scale');
  }

  const buttons = document.querySelectorAll('.indicator-btn');
  buttons.forEach((button) => {
    button.classList.remove('active');
  });

  buttons[index].classList.add('active');
}


function handleScrollLeft() {
  console.log("Left button clicked!"); 
  const container = document.querySelector('.scroll-cards');
  if (container) {
    container.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }
}

function handleScrollRight() {
  const container = document.querySelector('.scroll-cards');
  if (container) {
    container.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-left");
  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      },
      { threshold: 0.5 }
  );

  elements.forEach((el) => observer.observe(el));
});

AOS.init({
  duration: 800, 
  offset: 100,  
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); 
    } else {
      entry.target.classList.remove('animate'); 
    }
  });
});

const cards = document.querySelectorAll('.service-card');

cards.forEach((card) => observer.observe(card));

