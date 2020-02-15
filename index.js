import React from 'react';
import ReactDOM from 'react-dom';

// Native version
// const h1 = document.createElement('h1');
// h1.classList.add('title');
// h1.textContent = 'Привет, я Вася';

// document.getElementById('root').appendChild(h1);

// React version
// const span = React.createElement('span', {}, 'Тик-так');
// const h1 = React.createElement('h1', {
//     className: 'title',
//     id: 'title',
//     'data-hello': 'title',
// }, span);

// const p = React.createElement('p', { className: 'text' }, 'Мне 24, я профессиональный верстальщик!');

// const div = React.createElement('div', {}, [h1, p]);

const aLi2 = React.createElement('a', { className: 'header__link', href: '/collaboration' }, 'Резюме');
const li2 = React.createElement('li', { className: 'header__item' }, aLi2);
const aLi1 = React.createElement('a', { className: 'header__link', href: '/blog' }, 'Блог');
const li1 = React.createElement('li', { className: 'header__item' }, aLi1);
const ul = React.createElement('ul', { className: 'header__list' }, [li1, li2]);
const a = React.createElement('a', {
    className: 'header__logo active',
    'aria-current': 'page',
    href: '/'
}, 'Безуглый');
const nav = React.createElement('nav', { className: 'page-header__nav' }, [a, ul]);
const div = React.createElement('div', { className: 'page-layout__container' }, nav);
const header = React.createElement('header', { className: 'header header_closed' }, div);

ReactDOM.render(header, document.getElementById('root'));