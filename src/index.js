import cardDishTpl from './templates/templates.hbs';
import menu from './menu.json';

/* Шаблонизатор */
const menuItems = document.querySelector('.menu');
menuItems.insertAdjacentHTML('beforeend', cardDishTpl(menu));

/* Переключатель темы */
const bodyTheme = document.querySelector('body');
const switchToggle = document.getElementById('theme-switch-toggle');

bodyTheme.classList.add(
    localStorage.getItem('theme') === null ? 'light-theme' : localStorage.getItem('theme'),
);

switchToggle.addEventListener('change', onCheckbox);

function onCheckbox(e) {
    if (e.target.checked) {
        bodyTheme.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme')
        return        
    }
    
        bodyTheme.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme')
}

function check() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        switchToggle.checked = true;
    } else {
        switchToggle.checked = false;
     }    
}

check()