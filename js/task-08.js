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
