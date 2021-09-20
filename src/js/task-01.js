const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);


const nameOfCategory = document.querySelectorAll("h2").forEach(elem => console.log(`Категория: ${elem.textContent}`, `Количество элементов: ${elem.nextElementSibling.children.length}`));

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента(тега h2)
//  и количество элементов в категории(всех вложенных в него элементов li).

// Категория: Животные
// Количество элементов: 4

