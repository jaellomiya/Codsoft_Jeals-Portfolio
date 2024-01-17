document.getElementById('about').addEventListener('click', function() {
  let aboutSection = document.getElementById('about-section');
  aboutSection.classList.toggle('hidden');

  let About = document.getElementById('about');
  About.style.animation = 'slideInLeft 1s forwards';

  let Script = document.getElementById('script');
  Script.style.animation = 'slideInRight 1s forwards';
});
