const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}


refs.input.addEventListener('input', onInputChange);


// refs.text.style.fontSize = "100px";

function onInputChange() {
    refs.text.style.fontSize = `${refs.input.value}px`;
};
