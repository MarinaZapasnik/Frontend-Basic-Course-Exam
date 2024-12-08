//Функция findElementIndex определяет индекс элемента в массиве или сообщает, что элемент не найден.

//Что нужно написать вместо XXX, чтобы функция работала?



function findElementIndex(array, element) {
  const index = array.indexOf(element);
  if (index === XXX) {
    return 'элемент не найден'
  } else {
    return {index
  }
}
const technologies = ["HTML", "CSS", "JavaScript"]
console.log(findElementIndex(technologies, "CSS")) // должно вернуть 1
console.log(findElementIndex(technologies, "Node.js")) // должно вернуть 'элемент не найден'