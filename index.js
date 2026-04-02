const toggle = document.getElementById('theme-toggle');
const rootEl = document.documentElement;

const updateButton = () => {
  if (rootEl.classList.contains('light-mode')) {
    toggle.textContent = 'Modo escuro';
    toggle.setAttribute('aria-label', 'Ativar modo escuro');
  } else {
    toggle.textContent = 'Modo claro';
    toggle.setAttribute('aria-label', 'Ativar modo claro');
  }
};

const restoreTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light-mode') {
    rootEl.classList.add('light-mode');
  } else {
    rootEl.classList.remove('light-mode');
  }
  updateButton();
};

toggle.addEventListener('click', () => {
  rootEl.classList.toggle('light-mode');
  const active = rootEl.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
  localStorage.setItem('theme', active);
  updateButton();
});

restoreTheme();
