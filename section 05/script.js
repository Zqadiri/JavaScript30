'use strict';

const model = document.querySelector('.modal'); // ! hidden modal
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

// ! select an element a selector that match multiple element only the first  will get selected
console.log(btnOpenModel);

for (let i = 0; i < btnOpenModel.length; i++) {
  btnOpenModel[i].addEventListener('click', function () {
    model.classList.remove('hidden'); //! the dot is only for the selector
    overlay.classList.remove('hidden');
  });
}

/*
btnCloseModel.addEventListener('click', function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
})

overlay.addEventListener('click', function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');
})
*/

//! do that instead

const closeModel = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

//! keyboard events = global event (listen on the whole document)

document.addEventListener('keydown', function (e) { //! Event object containt info about the event
//   console.log(('key pressed'));
//   console.log(e);
    if (e.key === 'Escape')
        if (!model.classList.contains('hidden'))
            closeModel();
});
