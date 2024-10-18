
document.addEventListener("DOMContentLoaded", function() {
  var slideIndex = 0;
  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("carousel-item");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
      setTimeout(carousel, 5000); // Cambia imagen cada 5 segundos
  }
});

  
  
  
document.getElementById('hamburger').addEventListener('click', function () {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('header__nav--open'); // Alternar clase para mostrar/ocultar el menú
});



