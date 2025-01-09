//Вопрос:

//Перед вами форма для добавления задач в список.

//Что нужно написать вместо XXX, чтобы новая задача добавлялась в НАЧАЛО списка?



document.body.innerHTML = `
  <form>
    <input type="text" id="task-input" placeholder="Введите задачу">
    <button type="submit">Добавить задачу!</button>
  </form>
  <ul id="task-container"></ul>
`
const form = document.querySelector('form')
const taskContainer = document.getElementById('task-container')
const input = document.getElementById('task-input')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const taskText = input.value.trim()
  if (taskText) {
    const task = document.createElement('li')
    task.textContent = taskText
    XXX
    input.value = ''
    input.focus()
  } else {
    alert('Пожалуйста, введите текст задачи!')
  }
})