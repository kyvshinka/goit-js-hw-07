const counterValue = document.querySelector('#value');
let newValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener('click', counterDecrement);
refs.incrementBtn.addEventListener('click', counterIncrement);


function counterDecrement() {
    newValue -= 1;
    counterValue.textContent = newValue;
};

function counterIncrement() {
    newValue += 1;
    counterValue.textContent = newValue;
};
