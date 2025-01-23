//Вопрос:
//Что необходимо написать вместо ХХХ, чтобы предотвратить перезагрузку страницу, возникающую при отправке формы?

document.body.innerHTML = `
  <form>
    <label>
      City:
      <input type="text" name="city" />
    </label>
      <button>Submit</button>
  </form>
`
const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
  XXX
  const city = event.target.city.value
  console.log(city)
})