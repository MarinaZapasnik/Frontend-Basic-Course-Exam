//Вопрос:
//Что надо написать вместо XXX, чтобы отменить таймер, который устанавливается при нажатии на кнопку "Показать сообщение через 3 секунды"?

document.body.innerHTML = `
  <button id="start-button">Показать сообщение через 3 секунды</button>
  <button id="cancel-button">Отменить показ сообщения</button>
  <div id="message-output"></div>
`
const startButton = document.getElementById('start-button')
const cancelButton = document.getElementById('cancel-button')
const messageOutput = document.getElementById('message-output')
let timerId
startButton.addEventListener('click', () => {
  messageOutput.textContent =
    'Сообщение появится через 3 секунды...'
  timerId = setTimeout(() => {
    messageOutput.textContent = 'Вот и сообщение!'
  }, 3000)
})
cancelButton.addEventListener('click', () => {
  XXX
  messageOutput.textContent =
    'Показ сообщения отменён.'
})