//Вопрос:

//Какое значение будет в переменной num после выполнения этого кода?



let num = 0
if (undefined) {
  num = 1
} else if ('') {
  num = 2
} else if (0) {
  num = 3
} else if ({}) {
  num = 4
} else if (false) {
  num = 5
} else {
  num = 6
}