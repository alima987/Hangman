import './style.css';
import gallows from './public/gallows.svg';

const bodyStructure = () => {
  const html = `
  <header class="header">
  </header>
  <div class="container">
<div class="gallow">
<h2>Hangman Game</h2>
<img src="${gallows}" alt="gallow">
</div>
<div class="quiz">
<div id="hint">

</div>
<div class="words">
<ul class="word_letter">
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
<li class='letter'></li>
</ul>
</div>
<div class="incorrect">
<p>Incorrect guesses: 0/6</p>
</div>
<div id="virtual_keyboard">
</div>
<div id="reset"></div>
</div>
</div>
  `;
  const root = document.createElement('div')
  root.innerHTML = html
  document.body.appendChild(root);
}
bodyStructure();