//Функция findMax принимает массив чисел и возвращает максимальное значение.

//Что нужно написать вместо XXX, чтобы функция корректно работала?



function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined
  }
  let max = numbers[0]  // Предполагаем, что максимальное значение - это первый элемент массива
  for (let i = 1; i < numbers.length; i++) {
    if (XXX) {
      max = numbers[i]
    }
  }
  return max
}