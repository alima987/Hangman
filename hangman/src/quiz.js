import { quizQuestions } from "./quizQuestions";
const hint = document.getElementById('hint');
const reset = document.getElementById('reset');
const words = document.getElementById('words');
const wordsLetter = document.getElementById('word_letter');
const keyboard_container = document.getElementById('virtual_keyboard');
let currWord
let correctLetters = []
const { question, answer } = quizQuestions
const keysLayout = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]
const keys = document.createElement('ul');
    keys.classList.add('keys');
const letterCheck = (letter, clickedLetter) => {
  if(currWord.includes(clickedLetter)) {
    console.log(clickedLetter, 'letter is existed')
    correctLetters.push(clickedLetter)
    console.log(correctLetters)
  } else {
    console.log(clickedLetter, 'letter is not existed')
  }
  letterDisplay()
  console.log(currWord)
}
const letterDisplay = () => {
  wordsLetter.innerHTML = currWord.split('').map((letter) => correctLetters.includes(letter) 
  ? `<li class='letter'>${letter}</li>`
  : `<li class='letter'></li>`).join('')
  console.log(letter)
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