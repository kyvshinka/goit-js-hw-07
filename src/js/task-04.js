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


// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
