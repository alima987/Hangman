import { quizQuestions } from "./quizQuestions";
import head from '../public/head.svg';
import body from '../public/body.svg';
import handOne from '../public/handOne.svg';
import handTwo from '../public/handTwo.svg';
import legOne from '../public/legOne.svg';
import legTwo from '../public/legTwo.svg';
const hint = document.getElementById('hint');
const reset = document.getElementById('reset');
const words = document.getElementById('words');
const incorrect = document.getElementById('incorrect');
const wordsLetter = document.getElementById('word_letter');
const keyboard_container = document.getElementById('virtual_keyboard');
const gallow = document.getElementById('gallow');
let currWord
let correctLetters = []
let counter = 0
const keysLayout = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]
const gallowParts = [
  head, body, handOne, handTwo, legOne, legTwo
]
console.log(gallowParts)
const createGallowParts = () => {
  gallowParts.forEach((part, index) => {
    const img = document.createElement('img');
    img.src = part
    img.alt = `Part ${part}`
    img.classList.add('parts')
    //img.style.display = 'none'
    gallow.appendChild(img)
  })
}
createGallowParts()
const keys = document.createElement('ul');
    keys.classList.add('keys');

const incorrectQuesses = document.createElement('p');
incorrectQuesses.classList.add('incorrect_quesses')
incorrectQuesses.innerHTML = `Incorrect guesses: ${counter}/6`
incorrect.appendChild(incorrectQuesses)    
const letterCheck = (letter, clickedLetter) => {
  if(currWord.includes(clickedLetter)) {
    console.log(clickedLetter, 'letter is existed')
    correctLetters.push(clickedLetter)
    console.log(correctLetters)
  } else {
    console.log(clickedLetter, 'letter is not existed')
    counter++
    incorrectQuesses.innerHTML = `Incorrect guesses: ${counter}/6`
    displayGallowParts()
  }
  letterDisplay()
  console.log(currWord)
}
const letterDisplay = () => {
  wordsLetter.innerHTML = currWord.split('').map((letter) => correctLetters.includes(letter) 
  ? `<li class='letter'>${letter}</li>`
  : `<li class='letter'></li>`).join('')
}
const displayGallowParts = () => {
  if(counter <= gallowParts.length) {
    gallowParts[counter - 1].style.display = 'block'
  }
}
const randomizeWord = () => {
  const { question, answer } = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
  hint.innerText = question
  currWord = answer
  correctLetters = []
  letterDisplay()
  //wordsLetter.innerHTML = answer.split('').map(() => `<li class='letter'></li>`).join('');
}

for (let i = 0; i < keysLayout.length; i++) {
    const letter = document.createElement('li')
    letter.classList.add('key')
    letter.innerHTML = keysLayout[i]
    keyboard_container.appendChild(keys)
    keys.appendChild(letter)
    letter.addEventListener('click', e => letterCheck(e.target, keysLayout[i]))
}
const resetBtn = document.createElement('button')
resetBtn.classList.add('resetBtn')
resetBtn.textContent = 'Play Again'
reset.appendChild(resetBtn)

randomizeWord()