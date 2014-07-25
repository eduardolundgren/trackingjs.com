(function() {
  'use strict';

  var active = 'active',
    layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink');

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
