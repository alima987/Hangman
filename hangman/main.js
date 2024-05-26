import './style.css'
const bodyStructure = () => {
  const html = `
  <header class="header">
   <h2>Hangman Game</h2>
  </hedaer>
  <div>
  </div>
  `;
  const root = document.createElement('div')
  root.innerHTML = html
  document.body.appendChild(root);
}
bodyStructure();