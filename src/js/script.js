const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const btnAction = document.querySelector('#add-button');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

btnAction.addEventListener('click', () => {
  console.log('clicou');
});