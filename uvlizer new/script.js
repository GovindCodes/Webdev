// Toggle the menu on small screens when clicking the menu button
function toggleNav() {
    var x = document.getElementById("nav-bar-small");  
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {navScroll()};
  function navScroll() {
    var nav = document.getElementById("nav-bar");
    var scroll = document.documentElement.scrollTop;
    nav.style.backgroundColor = "rgba(256, 256, 256, " + Math.min(scroll / 100, 1) + ")";
    nav.style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, " + 0.16 * Math.min(scroll / 100, 1) + "), 0 2px 10px 0 rgba(0, 0, 0, " + 0.12 * Math.min(scroll / 100, 1) + ")";
  }