import cardDishTpl from './templates/templates.hbs';
import menu from './menu.json';

const menuItems = document.querySelector('.menu');
menuItems.insertAdjacentHTML('beforeend', cardDishTpl(menu));
