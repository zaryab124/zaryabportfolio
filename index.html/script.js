// Smooth scroll on nav click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
  });
  function showPopup(message) {
    document.getElementById('popup-text').textContent = message;
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
    