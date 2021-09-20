const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);


function onInputBlur() {


    if (input.value.length !== Number(input.dataset.length))
    {
        input.classList.remove('valid');
        input.classList.add('invalid');

    }
    else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
};


// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

