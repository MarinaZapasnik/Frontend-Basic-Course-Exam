//Вопрос:

//Что нужно написать вместо XXX, чтобы в переменной rainButton была ссылка на кнопку? Поиск необходимо сделать по id. 



document.body.innerHTML = `
  <div>
    <button id="rain-button">Add rain 💧</button>
  </div>
`
const rainButton = XXX
rainButton.addEventListener('click', () => {
  console.log('Rain added! ☔️')
})