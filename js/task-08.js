const refs = {
    input: document.querySelector('input'),
    createBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxWrapper: document.querySelector('#boxes'),
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

let divWidth = 30;
let divHeight = 30;

function createBoxes(number) {
    for (let i = 0; i < number; i += 1) {
        const divEl = document.createElement('div');
        divEl.style.width = `${divWidth}px`;
        divEl.style.height = `${divHeight}px`;
        divEl.style.backgroundColor = `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;

        refs.boxWrapper.append(divEl);

        divWidth += 10;
        divHeight += 10;
    }

};

function destroyBoxes() {
    refs.boxWrapper.innerHTML = ''; 
};
 
refs.createBtn.addEventListener('click', () => {createBoxes(refs.input.value)});

refs.destroyBtn.addEventListener('click', () => {destroyBoxes()});





// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число.Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
