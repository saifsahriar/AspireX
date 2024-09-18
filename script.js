const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

// event listener

// Event listener for the arrow keys
document.addEventListener('keydown', function(e) {
  const items = document.querySelectorAll('.item');
  
  // Check for right arrow key (Key code: 39)
  if (e.key === 'ArrowRight') {
    slider.append(items[0]); // Move to next slide
  }

  // Check for left arrow key (Key code: 37)
  if (e.key === 'ArrowLeft') {
    slider.prepend(items[items.length - 1]); // Move to previous slide
  }
});