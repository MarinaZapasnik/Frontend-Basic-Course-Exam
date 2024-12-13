//Что будет выведено в консоль? Ответ дайте через пробел, например: Hydrogen Hydrogen



const alphaStation = {
  researchData: {
    minerals: 'Iron',
    atmosphere: 'Nitrogen',
  }
}
const betaStation = {
  researchData: alphaStation.researchData
}
alphaStation.researchData.atmosphere = 'Oxygen'
console.log(alphaStation.researchData.atmosphere)
console.log(betaStation.researchData.atmosphere)