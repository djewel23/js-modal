'use strict';

const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const closeModalBtn =  document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

for( let i = 0; i < openModalBtns.length; i++){
  console.log(openModalBtns[i].textContent);
}

