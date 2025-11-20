
function checkVisibility() {
  const items = document.querySelectorAll('.fade-in-item'); 
  const windowHeight = window.innerHeight; 
  const offset = 150; 
  items.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top; 
    if (itemPosition < windowHeight - offset) {
      item.classList.add('visible'); 
    }
  });
}


window.addEventListener('scroll', checkVisibility);


document.addEventListener('DOMContentLoaded', checkVisibility);
