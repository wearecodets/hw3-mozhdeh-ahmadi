const accordions = document.querySelectorAll('.accordion');
const activeClass = 'accordion--active';

accordions.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.classList.contains(activeClass)) {
      // I'm currently active, so just close myself.
      item.classList.remove(activeClass);
    } else {
      // I'm not active, so close the other first.
      accordions.forEach(function(others) {
        others.classList.remove(activeClass);
      });
      // Then activate myself.
      item.classList.add(activeClass);
    }
  });
});
