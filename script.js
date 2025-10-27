document.querySelectorAll('.member h2').forEach(header => {
  header.addEventListener('click', () => {
    const bio = header.parentElement.querySelector('.bio');
    bio.style.display = bio.style.display === 'none' ? 'block' : 'none';
  });
});M