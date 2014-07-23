(function() {
  'use strict';

  var active = 'active',
    layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink'),
    items = document.querySelectorAll('#menu a'),
    url = window.location.href;

  // Active menu class
  for (var i = 0; i < items.length; i++) {
    if (url === items[i].href) {
      if (items[i].classList.contains('pure-menu-heading')) {
        items[i].classList.add('home-menu-selected');
      }
      else {
        items[i].parentNode.classList.add('pure-menu-selected');
      }
    }
  }

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length;

    for (var i = 0; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }

    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  menuLink.addEventListener('click', function(e) {
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);

    e.preventDefault();
  });
}());
