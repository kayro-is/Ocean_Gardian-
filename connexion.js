document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-btn').addEventListener('click', function() {
      var form = document.getElementById('connexionForm');
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });
  });
  