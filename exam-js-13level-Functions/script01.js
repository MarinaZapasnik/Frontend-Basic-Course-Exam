//Вопрос:

//Что необходимо написать вместо XXX, чтобы остортировать массив фильмов по рейтингу в порядку убыванания?



const movies = [
  { title: "Назад в будущее", rating: 8.5 },
  { title: "Начало", rating: 8.8 },
  { title: "Матрица", rating: 8.8 },
  { title: "Паразиты", rating: 8.6 },
  { title: "Тёмный рыцарь", rating: 9.0 }
]
const sortedMovies = movies.sort((a, b) => {
  if (XXX) {
    return 1
  } else if (a.rating === b.rating) {
    return 0
  } else {
    return -1
  }
})
console.log("Фильмы, отсортированные по рейтингу:", sortedMovies)