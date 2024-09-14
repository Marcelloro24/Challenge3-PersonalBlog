const themeSwitcher = document.querySelector('#theme');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Function to update theme
const updateTheme = () => {
  if (mode === 'dark') {
    container.setAttribute('class', 'container dark');
    themeSwitcher.src = themeSwitcher.dataset.sun;
    themeSwitcher.dataset.status = 'sun';
  } else {
    container.setAttribute('class', 'container light');
    themeSwitcher.src = themeSwitcher.dataset.moon;
    themeSwitcher.dataset.status = 'moon';
  }
};

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  mode = mode === 'dark' ? 'light' : 'dark';
  updateTheme();
});

// Initial theme setup
updateTheme();

