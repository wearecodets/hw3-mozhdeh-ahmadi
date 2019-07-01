const accordions = document.querySelectorAll('.accordion');
const activeClass = 'accordion--active';

function expand(item) {
  if (item.classList.contains(activeClass)) {
    item.classList.remove(activeClass);
  } else {
    accordions.forEach(i => i.classList.remove(activeClass));
    item.classList.add(activeClass);
  }
}

accordions.forEach(function(item) {
  item.addEventListener('click', function() {
    expand(item);
  });
});
