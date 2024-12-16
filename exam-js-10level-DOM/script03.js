//Вопрос:

//Что нужно написать вместо XXX, чтобы изменить текст в элементе h2, который имеет класс section-title, на текст "Свойства DOM-элементов"?

//❕ Не стоит использовать innerHTML - для данной задачи есть более подходящее свойство.



document.body.innerHTML = `
  <section>
    <h2 class="section-title">
      Исходный текст
    </h2>
  </section>
`
const title = document.querySelector('.section-title')
XXX = 'Свойства DOM-элементов'