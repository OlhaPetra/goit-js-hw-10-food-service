import cardDishTpl from './templates/templates.hbs';
import menu from './menu.json';
import { darkblue } from 'color-name';

/* Шаблонизатор */
const menuItems = document.querySelector('.menu');
menuItems.insertAdjacentHTML('beforeend', cardDishTpl(menu));

/* Переключатель темы */
const bodyTheme = document.querySelector('body');
const switchToggle = document.querySelector('#theme-switch-toggle');


bodyTheme.classList.add('light-theme');

switchToggle.addEventListener('change', onCheckbox);

body.classList.add(localStorage.getItem('currentTheme'));


function onCheckbox(event) {
    event.preventDefault();
    if (this.checked) {
        bodyTheme.classList.add('dark-theme');
        bodyTheme.classList.remove('light-theme');
        localStorage.setItem('currentTheme', 'dark-theme')
        
    } else {
        bodyTheme.classList.add('light-theme');
        bodyTheme.classList.remove('dark-theme');
        localStorage.setItem('currentTheme', 'light-theme')
    }
}