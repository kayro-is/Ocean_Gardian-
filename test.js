document.addEventListener('DOMContentLoaded', function() {
    var img = document.getElementById('map');
    var loupe = document.getElementById('loupe');
  
    img.addEventListener('mousemove', function(e) {
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left; // X position within the element.
      var y = e.clientY - rect.top;  // Y position within the element.
      loupe.style.display = 'block';
      loupe.style.left = x - (loupe.offsetWidth / 2) + 'px';
      loupe.style.top = y - (loupe.offsetHeight / 2) + 'px';
      
      // Mise à jour du fond pour simuler le zoom
      loupe.style.backgroundPosition = "-" + (x * 2) + "px -" + (y * 2) + "px";
    });
  
    img.addEventListener('mouseleave', function() {
      loupe.style.display = 'none'; // Cache la loupe lorsque la souris quitte l'image
    });
  });
  