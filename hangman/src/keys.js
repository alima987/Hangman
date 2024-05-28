const keyboard_container = document.getElementById('virtual_keyboard');

const keysLayout = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A','S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]
const keys = document.createElement('ul');
    keys.classList.add('keys');

for (let i = 0; i < keysLayout.length; i++) {
    const letter = document.createElement('li')
    letter.classList.add('key')
    letter.innerHTML = keysLayout[i]
    keyboard_container.appendChild(keys)
    keys.appendChild(letter)
}