const aboutSpan = document.querySelector('.about');
const jobSpan = document.querySelector('.job');
const informationElements = document.querySelectorAll('.information');
const doesElements = document.querySelectorAll('.does');
        
aboutSpan.addEventListener('mouseenter', () => {
    informationElements.forEach(element => {
    element.style.color = 'red';
    });
});
jobSpan.addEventListener('mouseenter', () => {
    doesElements.forEach(element => {
    element.style.color = 'red';
    });
});

aboutSpan.addEventListener('mouseleave', () => {
informationElements.forEach(element => {
    element.style.color = 'white';
    });
});
jobSpan.addEventListener('mouseleave', () => {
doesElements.forEach(element => {
    element.style.color = 'white';
    });
});