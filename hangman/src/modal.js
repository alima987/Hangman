const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const message = document.querySelector(".message");
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");

const winContent = () => {
const winText = document.createElement('p');
winText.classList.add('win_text')
winText.textContent = `Congratulations! You've won the game!/n Secret word: !`
win.appendChild(winText)
}

const resetBtn = document.createElement('button')
resetBtn.classList.add('resetBtn')
resetBtn.textContent = 'Play Again'
reset.appendChild(resetBtn)

const modalOpen = () => {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
openModalBtn.addEventListener('click', modalOpen)
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