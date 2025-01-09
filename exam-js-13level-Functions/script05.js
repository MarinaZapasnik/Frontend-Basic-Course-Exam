//Вопрос:

//Что надо написать вместо XXX, чтобы создать новый массив на основе массива scientists?



const scientists = [
  { firstName: "Альберт", lastName: "Эйнштейн", years: "1879-1955", mainWork: "Теория относительности" },
  { firstName: "Исаак", lastName: "Ньютон", years: "1643-1727", mainWork: "Классическая механика" },
  { firstName: "Мария", lastName: "Кюри", years: "1867-1934", mainWork: "Исследование радиоактивности" },
  { firstName: "Галилео", lastName: "Галилей", years: "1564-1642", mainWork: "Совершенствование телескопа" }
]
// Преобразуем список ученых в массив с объединенными именами
const scientistProfiles = scientists.XXX(scientist => {
  return {
    name: `${scientist.firstName} ${scientist.lastName}`,
    years: scientist.years,
    mainWork: scientist.mainWork
  }
})
console.log("Профили ученых:", scientistProfiles)