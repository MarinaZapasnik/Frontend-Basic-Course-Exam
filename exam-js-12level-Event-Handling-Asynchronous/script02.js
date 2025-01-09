//Вопрос:

//Что необходимо написать вместо ХХХ, чтобы при клике на любую кнопку в консоль выводился текст этой кнопки?



document.body.innerHTML = `
  <div class="container">
    <button>HTML</button>
    <button>CSS</button>
    <button>JS</button>
    <button>React</button>
  </div>
`
const container = document.querySelector('.container')
const buttons = document.querySelectorAll('button')
const button = document.querySelector('button')
XXX.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.textContent)
  }
})