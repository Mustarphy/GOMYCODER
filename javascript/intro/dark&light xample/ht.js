
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

let isDarkMode = false;

modeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
});