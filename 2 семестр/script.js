let body = document.childNodes[1].lastChild;

// document.childNodes возвращает список элементов (в первом случае doctype и html)
// node.firstChild возвращает первый дочерний узел (текстовый)
// node.lastChild возвращает последний дочерний узел (текстовый)

// node.nextSibling - следующий брат (текстовый)
// node.previousSibling - предыдущий брат (текстовый)

// .firstElementChild - по элементу
// .lastElementChild - по элементу
// .nextElementSibling - по элементу
// .previousElementSibling - по элементу

// let paragraph = body.firstChild.nextSibling.nextSibling.nextSibling;
let paragraph = body.childNodes[3];
console.log(paragraph);
let span = paragraph.childNodes[1];
span.innerText = "Получилось?";
console.log(span);