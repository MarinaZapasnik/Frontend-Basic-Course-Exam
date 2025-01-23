//Вопрос:
//Что нужно написать вместо XXX, чтобы при клике на кнопку создавался новый HTML-элемент <span> (который будет содержать случайного питомца)?

document.body.innerHTML = `
  <button id="addPetButton">Добавь питомца!</button>
  <div id="petContainer"></div>
`;
const pets = ["🐶", "🐱", "🐹", "🐰", "🦜", "🐢", "🐟", "🐸", "🦇", "🕷", "🦔", "🐺"]
const petContainer = document.getElementById("petContainer")
document.getElementById("addPetButton").addEventListener('click', () => {
  const pet = XXX
  pet.textContent = pets[Math.floor(Math.random() * pets.length)]
  pet.style.fontSize = '2rem'
  pet.style.margin = '5px'
  petContainer.append(pet)
})