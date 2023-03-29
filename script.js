'use strict';

// Declared variables
const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const closeModalBtn =  document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal');

// Open modal function
const openModal = function(){
  modalWindow.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
};

// Close modal function
const closeModal = function(){
  modalWindow.classList.add('hidden');
  modalOverlay.classList.add('hidden');
};

// For Loop to cycle through each of the "open" buttons. Includes event listener.
for( let i = 0; i < openModalBtns.length; i++){
  openModalBtns[i].addEventListener('click', openModal);
}

// Hide modal window when "X" is clicked
closeModalBtn.addEventListener('click', closeModal);

// Hide modal window when click occurs on overlay
modalOverlay.addEventListener('click', closeModal);

// Hide modal window when ESC is pressed down
document.addEventListener('keydown', function(event){
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')){
    closeModal();
  };
});
