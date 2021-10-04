const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);


const nameOfCategory = document.querySelectorAll("h2").forEach(elem => console.log(`Категория: ${elem.textContent}`, `Количество элементов: ${elem.nextElementSibling.children.length}`));

