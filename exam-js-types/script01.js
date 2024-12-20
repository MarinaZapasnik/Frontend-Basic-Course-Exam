////Вопрос:

//getExtension - функция, которая принимает полное имя файла в качестве аргумента и возвращает его расширение.

//Что необходимо написать вместо XXX, чтобы она корректно работала?



function getExtension(filename) {
  const dotIndex = filename.lastIndexOf(".") // метод lastIndexOf возвращает индекс последнего вхождения указанного значения
  
  return XXX
}
console.log(getExtension("example.pdf")) // Должно вывести "pdf"
console.log(getExtension("archive.tar.gz")) // Должно вывести "gz"