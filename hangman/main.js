import './style.css'
import gallows from './public/gallows.svg'
const bodyStructure = () => {
  const html = `
  <header class="header">
   <h2>Hangman Game</h2>
  </header>
  <div class="container">
<div class="gallow">
<img src="${gallows}" alt="gallow">
</div>
<div class="quiz">
<div class="words">
<ul>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
</ul>
</div>
<div class="hint">
<p>Hint:</p>
</div>
<div class="incorrect">
<p>Incorrect guesses:</p>
</div>
<div class="virtual_keyboard">
</div>
</div>
  </div>
  `;
  const root = document.createElement('div')
  root.innerHTML = html
  document.body.appendChild(root);
}
bodyStructure();