const refs = {
    input: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
 };


refs.input.addEventListener('input', nameChange);

function nameChange(event) {
    if (refs.input.value === "") {
        refs.nameOutput.textContent = "незнакомец";
    }
    else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
};

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.