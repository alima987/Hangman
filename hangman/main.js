import './style.css';
import gallows from './public/gallows.svg';

const bodyStructure = () => {
  const html = `
<header class="header">
</header>
<div class="container">
<div id="gallow">
<h2 class="title_game">Hangman Game</h2>
<img class='hangman' src="${gallows}" alt="gallow">
</div>
<div class="quiz">
<div id="hint">
</div>
<div id="words">
<ul id="word_letter">
</ul>
</div>
<div id="incorrect">
</div>
<div id="virtual_keyboard">
</div>
<section class="modal hidden">
<div class='flex'>
</div>
<div class="message">
<div class="win"></div>
<div class="lose"></div>
<div id="reset"></div>
</div>
</div>
</section>
<div class="overlay hidden"></div>
</div>
  `;
  const root = document.createElement('div')
  root.innerHTML = html
  document.body.appendChild(root);
}
bodyStructure();