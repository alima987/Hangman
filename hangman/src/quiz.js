import { quizQuestions } from "./quizQuestions";
import head from '../public/head.svg';
import body from '../public/body.svg';
import handOne from '../public/handOne.svg';
import handTwo from '../public/handTwo.svg';
import legOne from '../public/legOne.svg';
import legTwo from '../public/legTwo.svg';
const hint = document.getElementById('hint');
const reset = document.getElementById('reset');
//const words = document.getElementById('words');
const incorrect = document.getElementById('incorrect');
const wordsLetter = document.getElementById('word_letter');
const keyboard_container = document.getElementById('virtual_keyboard');
const gallow = document.getElementById('gallow');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const message = document.querySelector(".message");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
let currWord
let correctLetters = []
let counter = 0
const keysLayout = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]
const gallowParts = [
  { id: 'head', src: head },
  { id: 'body', src: body },
  { id: 'handOne', src: handOne },
  { id: 'handTwo', src: handTwo },
  { id: 'legOne', src: legOne },
  { id: 'legTwo', src: legTwo }
];
console.log(gallowParts)
const createGallowParts = () => {
  gallowParts.forEach((part) => {
    const img = document.createElement('img');
    img.src = part.src
    img.alt = `Part ${part.id}`
    img.id = 'parts'
    img.style.display = 'none'
    gallow.appendChild(img)
  })
}
createGallowParts()
const keys = document.createElement('ul');
    keys.classList.add('keys');

const incorrectQuesses = document.createElement('p');
incorrectQuesses.classList.add('incorrect_quesses')
incorrect.appendChild(incorrectQuesses)  

const letterCheck = (letter, clickedLetter) => {
  if(currWord.includes(clickedLetter)) {
    console.log(clickedLetter, 'letter is existed')
    correctLetters.push(clickedLetter)
    console.log("correctLetters", correctLetters)
    if(winCheck()) {
      modalOpen()
    }
  } else {
    console.log(clickedLetter, 'letter is not existed')
    counter++
    incorrectQuesses.innerHTML = `Incorrect guesses: ${counter}/6`
    displayGallowParts()
    if(counter >= 6) {
      modalOpen()
    }
  }
  letterDisplay()
  console.log("CurrWord", currWord)
}

const letterDisplay = () => {
  wordsLetter.innerHTML = currWord.split('').map((letter) => correctLetters.includes(letter) 
  ? `<li class='letter'>${letter}</li>`
  : `<li class='letter'></li>`).join('')
}
const displayGallowParts = () => {
  const parts = document.querySelectorAll('#parts');
  parts.forEach((part, index) => {
    part.style.display = index < counter ? "block" : "none"
  })
  console.log("Parts:", parts)
}
const randomizeWord = () => {
  const { question, answer } = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
  hint.innerText = question
  currWord = answer
  correctLetters = []
  counter = 0 
  incorrectQuesses.innerHTML = `Incorrect guesses: ${counter}/6`;
  document.querySelectorAll('.parts').forEach(part => part.style.display = 'none')
  letterDisplay()
}

for (let i = 0; i < keysLayout.length; i++) {
    const letter = document.createElement('li')
    letter.classList.add('key')
    letter.innerHTML = keysLayout[i]
    keyboard_container.appendChild(keys)
    keys.appendChild(letter)
    letter.addEventListener('click', e => letterCheck(e.target, keysLayout[i]))
}
const winCheck = () => {
  if(currWord.split('').every(letter => correctLetters.includes(letter))) {
    return true
  }
  return false
}
const winContent = () => {
  const winText = document.createElement('p');
  winText.classList.add('win_text')
  winText.textContent = `Congratulations! You've won the game! The Secret word: ${currWord}!`
  win.appendChild(winText)
  }
  const loseContent = () => {
    const loseText = document.createElement('p');
    loseText.classList.add('lose_text');
    loseText.textContent = `Sorry! You've lost the game! The correct word was: ${currWord}.`;
    lose.appendChild(loseText);
  };
  
  const resetBtn = document.createElement('button')
  resetBtn.classList.add('resetBtn')
  resetBtn.textContent = 'Play Again'
  reset.appendChild(resetBtn)
  
  const modalOpen = () => {
      modal.classList.remove('hidden')
      overlay.classList.remove('hidden')
      if (winCheck()) {
        winContent();
      } else {
        loseContent();
      }
  }
  const modalClose = () => {
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
  }
  closeModalBtn.addEventListener('click', modalClose)
  document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && (!modal.classList.contains('hidden'))) {
          modalClose()
      }
  })


randomizeWord()