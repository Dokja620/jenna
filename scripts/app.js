// About her texts animation
const aboutSpan = document.querySelector('.about');
const jobSpan = document.querySelector('.job');
const informationElements = document.querySelectorAll('.information');
const doesElements = document.querySelectorAll('.does');

function toggleActiveClass(elements) {
  elements.forEach(element => {
    element.classList.toggle('active');
  });
}

aboutSpan.addEventListener('mouseenter', () => {
  toggleActiveClass(informationElements);
});

jobSpan.addEventListener('mouseenter', () => {
  toggleActiveClass(doesElements);
});

aboutSpan.addEventListener('mouseleave', () => {
  toggleActiveClass(informationElements);
});

jobSpan.addEventListener('mouseleave', () => {
  toggleActiveClass(doesElements);
});

