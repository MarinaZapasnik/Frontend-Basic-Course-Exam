//Вопрос:

//Что нужно написать вместо XXX, чтобы в консоль выводилось сообщение вида: "Приглашение №1: Привет, Мистер Вискас! Приходи на вечеринку, будет весело!" для каждого питомца в массиве?



const pets = [
  { name: "Мистер Вискас", type: "кот" },
  { name: "Страйдер", type: "собака" },
  { name: "Бамбл", type: "жабка" },
  { name: "Черепаха Ниндзя", type: "черепаха" }
]
console.log("Отправляем приглашения на вечеринку для питомцев!")
pets.forEach((XXX) => {
  const invitationNumber = index + 1; // Нумерация начинается с 1
  const message = `Приглашение №${invitationNumber}: Привет, ${pet.name}! Приходи на вечеринку, будет весело!`
  console.log(message)
});
console.log("Все приглашения отправлены, ждем гостей!")